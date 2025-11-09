'use client';
import emailjs from '@emailjs/browser';


import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import Script from 'next/script';

import Navbar from "@/components/navbar"

// Razorpay TypeScript declarations
declare global {
  interface Window {
    Razorpay: any;
  }
}

interface Product {
  productId: string;
  image: string;
  title: string;
  price: string;
  quantity: number;
}

interface ShippingAddress {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
}

// Initialize EmailJS with your public key
emailjs.init("2l6Cs3kRLAynezLeG");

function CheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  const [user, setUser] = useState<User | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);



  // ------------------------------------------------------Coupon Section-----------------------------------------------------------------------
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string, discount: number, type: 'percentage' | 'fixed' } | null>(null);
  const [couponError, setCouponError] = useState('');
  const [isFirstPurchase, setIsFirstPurchase] = useState(false);

  const availableCoupons = [
    {
      code: 'SAVEBIG500',
      discount: 500,
      type: 'fixed' as const,
      minOrder: 2999,
      description: 'Get ₹500 OFF on orders above ₹2999'
    },
    {
      code: 'SAVEBIG15',
      discount: 15,
      type: 'percentage' as const,
      minOrder: 0,
      firstPurchaseOnly: true,
      description: 'Get 15% OFF on your first purchase'
    }
  ];


  // -----------------------------------------------------------------------------------------------------------------------------


  // -----------------------------------------------------------------------------------------------------------------------------
  const sendOrderConfirmationEmail = async (orderDetails: {
    orderId: string;
    orderItems: Product[];
    totalAmount: number;
    shippingAddress: ShippingAddress;
    paymentMethod: string;
  }) => {
    try {
      // Format order items for email
      const orderItemsText = orderDetails.orderItems
        .map((item, index) =>
          `${index + 1}. ${item.title}\n   Price: ₹${item.price}\n   Quantity: ${item.quantity}\n   Subtotal: ₹${(parseFloat(item.price) * item.quantity).toFixed(2)}`
        )
        .join('\n\n');

      const templateParams = {
        to_email: user?.email || '',
        customer_name: orderDetails.shippingAddress.fullName,
        order_id: orderDetails.orderId,
        order_items: orderItemsText,
        total_amount: orderDetails.totalAmount.toFixed(2),
        payment_method: orderDetails.paymentMethod.toUpperCase(),
        shipping_address: `${orderDetails.shippingAddress.addressLine1}, ${orderDetails.shippingAddress.addressLine2 ? orderDetails.shippingAddress.addressLine2 + ', ' : ''}${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.state} - ${orderDetails.shippingAddress.pincode}`,
        customer_phone: orderDetails.shippingAddress.phone,
        order_date: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      };

      await emailjs.send(
        'service_cflzjol',   // Your Service ID
        'template_o3u99a5',  // Your Template ID (you'll need to create a new one for orders)
        templateParams,
        '2l6Cs3kRLAynezLeG'  // Your Public Key
      );

      console.log('Order confirmation email sent successfully');
    } catch (error) {
      console.error('Failed to send order confirmation email:', error);
      // Don't block order placement if email fails
    }
  };

  // -----------------------------------------------------------------------------------------------------------------------------





  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card' | 'upi' | 'netbanking'>('cod');
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    fullName: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India'
  });

  const [errors, setErrors] = useState<Partial<ShippingAddress>>({});

  useEffect(() => {
    loadCheckoutData();
  }, []);

  const loadCheckoutData = async () => {
    try {
      const userData = localStorage.getItem('user');
      if (!userData) {
        router.push('/');
        return;
      }

      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);

      const isBuyNow = searchParams.get('buyNow') === 'true';

      if (isBuyNow) {
        const productData: Product = {
          productId: searchParams.get('id') || '',
          image: searchParams.get('image') || '',
          title: searchParams.get('title') || '',
          price: searchParams.get('price') || '0',
          quantity: parseInt(searchParams.get('quantity') || '1')
        };
        setProducts([productData]);
      } else {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/getcart/${parsedUser._id}`);
        setProducts(response.data.cart || []);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error loading checkout data:', error);
      setLoading(false);
    }
  };

useEffect(() => {
  const checkFirstPurchase = async () => {
    try {
      // Get the user object from localStorage
      const userString = localStorage.getItem('user');
      
      if (!userString) {
        console.error('User not found in localStorage');
        setIsFirstPurchase(false);
        return;
      }
      
      // Parse the JSON string to get the user object
      const user = JSON.parse(userString);
      const userId = user._id; // Extract _id: "6910c3206c38da39127e91dc"
      
      console.log('User ID:', userId);
      
      // Make API call
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/is-first-purchase`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsFirstPurchase(data.isFirstPurchase);
        console.log('Is First Purchase:', data.isFirstPurchase);
        console.log('Total Orders:', data.totalOrders);
      } else {
        console.error('Error:', data.message);
        setIsFirstPurchase(false);
      }
    } catch (error) {
      console.error('Error fetching first purchase status:', error);
      setIsFirstPurchase(false);
    }
  };
  
  checkFirstPurchase();
}, []);



  const validateForm = (): boolean => {
    const newErrors: Partial<ShippingAddress> = {};

    if (!shippingAddress.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!shippingAddress.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(shippingAddress.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }

    if (!shippingAddress.addressLine1.trim()) {
      newErrors.addressLine1 = 'Address is required';
    }

    if (!shippingAddress.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!shippingAddress.state.trim()) {
      newErrors.state = 'State is required';
    }

    if (!shippingAddress.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(shippingAddress.pincode)) {
      newErrors.pincode = 'Please enter a valid 6-digit pincode';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof ShippingAddress, value: string) => {
    setShippingAddress(prev => ({
      ...prev,
      [field]: value
    }));

    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  // const calculateTotal = (): number => {
  //   return products.reduce((total, product) => {
  //     return total + (parseFloat(product.price) * product.quantity);
  //   }, 0);
  // };

  const calculateTotal = (): number => {
    return products.reduce((total, product) => {
      return total + (parseFloat(product.price) * product.quantity);
    }, 0);
  };

  const calculateDiscount = (): number => {
    if (!appliedCoupon) return 0;

    const subtotal = calculateTotal();

    if (appliedCoupon.type === 'percentage') {
      return (subtotal * appliedCoupon.discount) / 100;
    }
    return appliedCoupon.discount;
  };

  const calculateFinalTotal = (): number => {
    return calculateTotal() - calculateDiscount();
  };



  const handleApplyCoupon = () => {
    setCouponError('');

    if (!couponCode.trim()) {
      setCouponError('Please enter a coupon code');
      return;
    }

    const coupon = availableCoupons.find(
      c => c.code.toUpperCase() === couponCode.toUpperCase()
    );

    if (!coupon) {
      setCouponError('Invalid coupon code');
      return;
    }

    const subtotal = calculateTotal();

    // Check minimum order requirement
    if (coupon.minOrder && subtotal < coupon.minOrder) {
      setCouponError(`This coupon is valid for orders above ₹${coupon.minOrder}`);
      return;
    }

    // Check first purchase requirement
    if (coupon.firstPurchaseOnly && !isFirstPurchase) {
      setCouponError('This coupon is only valid for first purchase');
      return;
    }

    setAppliedCoupon({
      code: coupon.code,
      discount: coupon.discount,
      type: coupon.type
    });

    setCouponError('');
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
  };



  // Razorpay Payment Handler
  const initiateRazorpayPayment = async (totalAmount: number) => {
    try {
      // Create Razorpay order
      const orderResponse = await axios.post('/api/razorpay/createOrder', {
        amount: totalAmount,
        currency: 'INR'
      });

      const { orderId } = orderResponse.data;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: totalAmount * 100, // Convert to paise
        currency: 'INR',
        name: 'Your Store Name',
        description: 'Payment for Order',
        order_id: orderId,
        handler: async function (response: any) {
          try {
            // Verify payment signature
            const verifyResponse = await axios.post('/api/razorpay/verifyPayment', {
              razorpay_order_id: orderId,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (verifyResponse.data.success) {
              // Payment verified - place order
              await placeOrderAfterPayment(response.razorpay_payment_id, 'paid');
            } else {
              alert('Payment verification failed!');
              setSubmitting(false);
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            alert('Payment verification failed. Please contact support.');
            setSubmitting(false);
          }
        },
        prefill: {
          name: shippingAddress.fullName,
          email: user?.email || '',
          contact: shippingAddress.phone,
        },
        notes: {
          address: `${shippingAddress.addressLine1}, ${shippingAddress.city}`,
        },
        theme: {
          color: '#3399cc',
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on('payment.failed', function (response: any) {
        alert('Payment failed! Please try again.');
        console.error('Payment failed:', response.error);
        setSubmitting(false);
      });

      razorpay.open();
    } catch (error) {
      console.error('Payment initiation error:', error);
      alert('Failed to initiate payment. Please try again.');
      setSubmitting(false);
    }
  };

  // Place order after successful payment
  // const placeOrderAfterPayment = async (paymentId: string, paymentStatus: string) => {
  //   try {
  //     const orderId = `ORD${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  //     const totalAmount = calculateTotal();

  //     const orderData = {
  //       userId: user!._id,
  //       orderId,
  //       orderItems: products,
  //       totalAmount,
  //       orderStatus: 'confirmed',
  //       paymentMethod,
  //       paymentStatus,
  //       paymentId,
  //       shippingAddress
  //     };

  //     const response = await axios.post('http://localhost:5000/placeorder', orderData);

  //     if (response.data.success) {
  //       const isBuyNow = searchParams.get('buyNow') === 'true';
  //       if (!isBuyNow) {
  //         await axios.post(`http://localhost:5000/clearcart/${user!._id}`);
  //       }

  //       router.push(`/Component/Orders/OrderDetails?orderId=${orderId}`);
  //     }
  //   } catch (error) {
  //     console.error('Error placing order:', error);
  //     alert('Order placement failed after payment. Please contact support with your payment ID: ' + paymentId);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };
  const placeOrderAfterPayment = async (paymentId: string, paymentStatus: string) => {
    try {
      const orderId = `ORD${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      const totalAmount = calculateFinalTotal();

      const orderData = {
        userId: user!._id,
        orderId,
        orderItems: products,
        totalAmount,
        orderStatus: 'confirmed',
        paymentMethod,
        paymentStatus,
        paymentId,
        shippingAddress,
        couponApplied: appliedCoupon?.code || null,
        discountAmount: calculateDiscount()
      };

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/placeorder`, orderData);

      if (response.data.success) {
        // Send order confirmation email after successful order placement
        try {
          await sendOrderConfirmationEmail({
            orderId,
            orderItems: products,
            totalAmount,
            shippingAddress,
            paymentMethod
          });
          console.log('Order confirmation email sent successfully');
        } catch (emailError) {
          console.error('Failed to send confirmation email:', emailError);
          // Don't block the order flow if email fails
        }

        // Clear cart if not buy now
        const isBuyNow = searchParams.get('buyNow') === 'true';
        if (!isBuyNow) {
          try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/clearcart/${user!._id}`);
          } catch (cartError) {
            console.error('Failed to clear cart:', cartError);
            // Continue to order details even if cart clear fails
          }
        }

        // Navigate to order details page
        router.push(`/Component/Orders/OrderDetails?orderId=${orderId}`);
      } else {
        throw new Error(response.data.message || 'Failed to place order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Order placement failed after payment. Please contact support with your payment ID: ' + paymentId);
    } finally {
      setSubmitting(false);
    }
  };


  // const handlePlaceOrder = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!validateForm()) {
  //     return;
  //   }

  //   if (!user) return;

  //   setSubmitting(true);

  //   // Check if online payment is selected
  //   if (paymentMethod === 'card' || paymentMethod === 'upi' || paymentMethod === 'netbanking') {
  //     if (!razorpayLoaded) {
  //       alert('Payment system is loading. Please wait...');
  //       setSubmitting(false);
  //       return;
  //     }
  //     // Initiate Razorpay payment
  //     await initiateRazorpayPayment(calculateFinalTotal());
  //   } else {
  //     // COD - existing flow
  //     try {
  //       const orderId = `ORD${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  //       const totalAmount = calculateFinalTotal();

  //       const orderData = {
  //         userId: user._id,
  //         orderId,
  //         orderItems: products,
  //         totalAmount,
  //         orderStatus: 'pending',
  //         paymentMethod,
  //         paymentStatus: 'pending',
  //         shippingAddress,
  //         couponApplied: appliedCoupon?.code || null,
  //         discountAmount: calculateDiscount()
  //       };

  //       const response = await axios.post('http://localhost:5000/placeorder', orderData);

  //       if (response.data.success) {
  //         const isBuyNow = searchParams.get('buyNow') === 'true';
  //         if (!isBuyNow) {
  //           await axios.post(`http://localhost:5000/clearcart/${user._id}`);
  //         }

  //         router.push(`/Component/Orders/OrderDetails?orderId=${orderId}`);
  //       }
  //     } catch (error) {
  //       console.error('Error placing order:', error);
  //       alert('Failed to place order. Please try again.');
  //     } finally {
  //       setSubmitting(false);
  //     }
  //   }
  // };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!user) return;

    setSubmitting(true);

    // Check if online payment is selected
    if (paymentMethod === 'card' || paymentMethod === 'upi' || paymentMethod === 'netbanking') {
      if (!razorpayLoaded) {
        alert('Payment system is loading. Please wait...');
        setSubmitting(false);
        return;
      }
      // Initiate Razorpay payment
      await initiateRazorpayPayment(calculateFinalTotal());
    } else {
      // COD - existing flow
      try {
        const orderId = `ORD${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
        const totalAmount = calculateFinalTotal();

        const orderData = {
          userId: user._id,
          orderId,
          orderItems: products,
          totalAmount,
          orderStatus: 'pending',
          paymentMethod,
          paymentStatus: 'pending',
          shippingAddress,
          couponApplied: appliedCoupon?.code || null,
          discountAmount: calculateDiscount()
        };

        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/placeorder`, orderData);

        if (response.data.success) {
          // Send order confirmation email after successful order placement
          try {
            await sendOrderConfirmationEmail({
              orderId,
              orderItems: products,
              totalAmount,
              shippingAddress,
              paymentMethod
            });
            console.log('Order confirmation email sent successfully');
          } catch (emailError) {
            console.error('Failed to send confirmation email:', emailError);
            // Don't block the order flow if email fails
          }

          // Clear cart if not buy now
          const isBuyNow = searchParams.get('buyNow') === 'true';
          if (!isBuyNow) {
            try {
              await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/clearcart/${user._id}`);
            } catch (cartError) {
              console.error('Failed to clear cart:', cartError);
              // Continue to order details even if cart clear fails
            }
          }

          // Navigate to order details page
          router.push(`/Component/Orders/OrderDetails?orderId=${orderId}`);
        } else {
          throw new Error(response.data.message || 'Failed to place order');
        }
      } catch (error) {
        console.error('Error placing order:', error);
        const errorMessage = axios.isAxiosError(error)
          ? error.response?.data?.message || 'Failed to place order. Please try again.'
          : 'Failed to place order. Please try again.';
        alert(errorMessage);
      } finally {
        setSubmitting(false);
      }
    }
  };


  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <p className="text-xl mb-4">No items to checkout</p>
        <button
          onClick={() => router.push('/')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Load Razorpay Script */}
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => {
          console.log('Razorpay loaded successfully');
          setRazorpayLoaded(true);
        }}
        onError={() => {
          console.error('Failed to load Razorpay');
          alert('Failed to load payment system. Please refresh the page.');
        }}
      />

      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handlePlaceOrder} className="space-y-6">
                {/* Shipping Address Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={shippingAddress.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.fullName ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        value={shippingAddress.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="10-digit mobile number"
                        maxLength={10}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Address Line 1 *</label>
                      <input
                        type="text"
                        value={shippingAddress.addressLine1}
                        onChange={(e) => handleInputChange('addressLine1', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.addressLine1 ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="House no., Building name"
                      />
                      {errors.addressLine1 && <p className="text-red-500 text-sm mt-1">{errors.addressLine1}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Address Line 2 / Landmark</label>
                      <input
                        type="text"
                        value={shippingAddress.addressLine2}
                        onChange={(e) => handleInputChange('addressLine2', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Road name, Area, Colony (Optional)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">City *</label>
                      <input
                        type="text"
                        value={shippingAddress.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.city ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="City"
                      />
                      {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">State *</label>
                      <input
                        type="text"
                        value={shippingAddress.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.state ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="State"
                      />
                      {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Pincode *</label>
                      <input
                        type="text"
                        value={shippingAddress.pincode}
                        onChange={(e) => handleInputChange('pincode', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.pincode ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="6-digit pincode"
                        maxLength={6}
                      />
                      {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Country</label>
                      <input
                        type="text"
                        value={shippingAddress.country}
                        disabled
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

                  <div className="space-y-3">
                    {/* <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === 'cod'}
                        onChange={(e) => setPaymentMethod(e.target.value as any)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="font-medium">Cash on Delivery (COD)</span>
                    </label> */}

                    {/* <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="font-medium">Credit/Debit Card</span>
                  </label> */}

                    <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="payment"
                        value="upi"
                        checked={paymentMethod === 'upi'}
                        onChange={(e) => setPaymentMethod(e.target.value as any)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="font-medium">Online</span>
                    </label>

                    {/* <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="netbanking"
                      checked={paymentMethod === 'netbanking'}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="font-medium">Net Banking</span>
                  </label> */}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
                >
                  {submitting ? 'Processing...' : paymentMethod === 'cod' ? 'Place Order' : 'Proceed to Payment'}
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <div className="space-y-4 mb-4">
                  {products.map((product, index) => (
                    <div key={index} className="flex gap-3 pb-3 border-b">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{product.title}</p>
                        <p className="text-sm text-gray-600">Qty: {product.quantity}</p>
                        <p className="text-sm font-semibold">₹{product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₹{calculateTotal().toFixed(2)}</span>
                  </div>

                  {appliedCoupon && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Discount ({appliedCoupon.code})</span>
                      <span>- ₹{calculateDiscount().toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="text-green-600">FREE</span>
                  </div>

                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Total</span>
                    <span>₹{calculateFinalTotal().toFixed(2)}</span>
                  </div>
                </div>




                {/* Coupon Section - Add this before the order items display */}
                <div className="mb-4 pb-4 border-b">
                  <h3 className="text-sm font-semibold mb-3">Apply Coupon</h3>

                  {!appliedCoupon ? (
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                          placeholder="Enter coupon code"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          type="button"
                          onClick={handleApplyCoupon}
                          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
                        >
                          Apply
                        </button>
                      </div>

                      {couponError && (
                        <p className="text-red-500 text-xs">{couponError}</p>
                      )}

                      <div className="text-xs text-gray-600 space-y-1 mt-3">
                        <p>• SAVEBIG500 - Get ₹500 OFF on orders above ₹2999</p>
                        <p>• SAVEBIG15 - Get 15% OFF on your first purchase</p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-green-800">{appliedCoupon.code}</p>
                          <p className="text-xs text-green-600">
                            {appliedCoupon.type === 'percentage'
                              ? `${appliedCoupon.discount}% discount applied`
                              : `₹${appliedCoupon.discount} discount applied`}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={handleRemoveCoupon}
                          className="text-red-600 text-sm font-medium hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  )}
                </div>




              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}



export default function Item() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading checkout...</div>}>
      <CheckoutPage />
    </Suspense>
  );
}