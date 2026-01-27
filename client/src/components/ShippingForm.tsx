import { ShippingFormInputs, shippingFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const ShippingForm = ({
   setShippingForm,
}: {
   setShippingForm: (data: ShippingFormInputs) => void;
}) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<ShippingFormInputs>({
      resolver: zodResolver(shippingFormSchema),
   });

   const router = useRouter();

   const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
      setShippingForm(data);
      router.push("/cart?step=3", { scroll: false });
   };

   return (
      <form
         className="flex flex-col gap-4"
         onSubmit={handleSubmit(handleShippingForm)}
      >
         <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-xs text-gray-500 font-medium">
               Name
            </label>
            <input
               className="border-b border-gray-200 py-2 outline-none text-sm"
               type="text"
               id="name"
               placeholder="John Doe"
               {...register("name")}
            />
            {errors.name?.message && (
               <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
         </div>

         <div className="flex flex-col gap-1">
            <label
               htmlFor="email"
               className="text-xs text-gray-500 font-medium"
            >
               Email
            </label>
            <input
               className="border-b border-gray-200 py-2 outline-none text-sm"
               type="text"
               id="email"
               placeholder="john.doe@example.com"
               {...register("email")}
            />
            {errors.email?.message && (
               <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
         </div>

         <div className="flex flex-col gap-1">
            <label
               htmlFor="phone"
               className="text-xs text-gray-500 font-medium"
            >
               Phone
            </label>
            <input
               className="border-b border-gray-200 py-2 outline-none text-sm"
               type="text"
               id="phone"
               placeholder="0771234567"
               {...register("phone")}
            />
            {errors.phone?.message && (
               <p className="text-xs text-red-500">{errors.phone.message}</p>
            )}
         </div>

         <div className="flex flex-col gap-1">
            <label
               htmlFor="address"
               className="text-xs text-gray-500 font-medium"
            >
               Address
            </label>
            <input
               className="border-b border-gray-200 py-2 outline-none text-sm"
               type="text"
               id="address"
               placeholder="No. 123, Main Street"
               {...register("address")}
            />
            {errors.address?.message && (
               <p className="text-xs text-red-500">{errors.address.message}</p>
            )}
         </div>

         <div className="flex flex-col gap-1">
            <label htmlFor="city" className="text-xs text-gray-500 font-medium">
               City
            </label>
            <input
               className="border-b border-gray-200 py-2 outline-none text-sm"
               type="text"
               id="city"
               placeholder="Colombo"
               {...register("city")}
            />
            {errors.city?.message && (
               <p className="text-xs text-red-500">{errors.city.message}</p>
            )}
         </div>
         <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-500 transition-all duration-200 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
         >
            Continue
            <ArrowRight className="w-3 h-3" />
         </button>
      </form>
   );
};

export default ShippingForm;
