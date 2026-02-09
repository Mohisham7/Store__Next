'use client'
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import CartContextProvider from "@/components/Context/CartContext";
import Footer from "@/components/Footer/Footer";

import { SessionProvider } from "next-auth/react";

export default function Provider({children}: {children: React.ReactNode}) {
  return (
     <SessionProvider>
           <CartContextProvider>
          


            <Navbar />

            <main className="container mx-auto py-2">
              <Toaster position="top-center" reverseOrder={false} />
              {children}
            </main>
            <Footer />
          
        </CartContextProvider>

        </SessionProvider>
  )
}
