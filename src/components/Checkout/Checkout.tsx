import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getUserToken } from "@/Helpers/accessToken"
import { Loader2 } from "lucide-react"

import { useRef, useState } from "react"

export function Checkout({ cartId }: { cartId: string }) {

    const [loadingVisa, setLoadingVisa] = useState(false);
    const [loadingCash, setLoadingCash] = useState(false);


    const cityInput = useRef<HTMLInputElement | null>(null);
    const detailsInput = useRef<HTMLInputElement | null>(null);
    const phoneInput = useRef<HTMLInputElement | null>(null);



    async function checkoutSession() {
        const token = await getUserToken();
        setLoadingVisa(true);


        const shippingAddress = {
            details: detailsInput.current?.value,
            phone: phoneInput.current?.value,
            city: cityInput.current?.value,
        }
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://buy-via.vercel.app`, {
            method: 'POST',
            body: JSON.stringify({ shippingAddress }),
            headers: {
                token: token + '',
                "Content-Type": 'application/json'
            }
        })

        const data = await response.json();
        if (data.status == 'success') {
            location.href = data.session.url;
            setLoadingVisa(false);
        }


    }


    async function checkoutCash() {
        const token = await getUserToken();
        setLoadingCash(true);

        const shippingAddress = {
            details: detailsInput.current?.value,
            phone: phoneInput.current?.value,
            city: cityInput.current?.value,
        }
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, {
            method: 'POST',
            body: JSON.stringify({ shippingAddress }),
            headers: {
                token: token + '',
                "Content-Type": 'application/json'
            }
        })

        const data = await response.json();

        if (data.status == 'success') {
            location.href = '/allorders';
            setLoadingCash(false);
        }


    }

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <button className="w-full rounded-full bg-black text-white py-1 font-medium hover:opacity-90 transition cursor-pointer">Proceed to Checkout
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Shipping Address</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="city">City</Label>
                            <Input ref={cityInput} id="city" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="details">Details</Label>
                            <Input ref={detailsInput} id="details" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="phone">Phone</Label>
                            <Input ref={phoneInput} id="phone" />
                        </div>

                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button onClick={checkoutSession} className="cursor-pointer" type="submit">{loadingVisa ? <Loader2 className="animate-spin" /> : 'Visa'}</Button>
                        <Button onClick={checkoutCash} className="cursor-pointer" type="submit">{loadingCash ? <Loader2 className="animate-spin" /> : 'Cash'}</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}





