"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner"; 
import {CardButton} from "./ui/card-button";

export function LaundryOrders({className, ...props}: React.ComponentPropsWithoutRef<"div">) {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLaundryOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.from('laundry_orders').insert([
        { name, contact_number: contactNumber, address }
      ]);
      if (error) throw error;
      toast.success("Laundry order created successfully!");
      router.refresh();
      setName("");
      setContactNumber("");
      setAddress("");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
      toast.error(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <form onSubmit={handleLaundryOrder} className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Customer Information</CardTitle>
            <CardDescription>
              Fill out the form below to create a new laundry order.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
              <div className='flex flex-col space-y-1'>
                <Label htmlFor='name'>Name</Label>
                <Input 
                  id='name' 
                  type='text' 
                  placeholder='Name' 
                  className='max-w-sm' 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className='flex flex-col space-y-1'>
                <Label htmlFor='contactNumber'>Contact Number</Label>
                <Input 
                  id='contactNumber' 
                  type='text'  
                    placeholder='Contact Number'
                    className='max-w-sm'
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                />
                </div>
                <div className='flex flex-col space-y-1'>
                  <Label htmlFor='address'>Address</Label>
                  <Input 
                    id='address' 
                    type='text' 
                    placeholder='Address' 
                    className='max-w-sm' 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
            </div>
          </CardContent>
        </Card>
        <h1 className="text-2xl font-bold mt-4">Service Package</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
          <div className='flex flex-col space-y-1'>
            <CardButton>
              <div className="flex flex-col items-center">
                <span className="text-lg font-medium">Package 1- Full service</span>
                <span className="text-sm text-gray-600">₱210.00</span>
              </div>
            </CardButton>
          </div>
          <div className='flex flex-col space-y-1'>
            <CardButton/>
          </div>
          <div className='flex flex-col space-y-1'>
            <CardButton/>
          </div>
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <Button type="submit" className="w-full max-w-sm" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit Order"}
        </Button>
      </form>
    </div>
    );
}