import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  clinicName: z.string().min(2, "Please enter your clinic name"),
  city: z.string().min(2, "Please enter your city or local market"),
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof schema>;

interface MarketAvailabilityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function MarketAvailabilityModal({ open, onOpenChange }: MarketAvailabilityModalProps) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (!open) reset();
  }, [open, reset]);

  const onSubmit = () => {
    onOpenChange(false);
    navigate("/book");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90dvh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>See If Your Market Is Available</DialogTitle>
          <DialogDescription>
            Booked.Dental partners with only one implant or cosmetic clinic per local market. Enter your details below and we'll confirm if your market is still open.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="clinic-name">Clinic Name</Label>
            <Input
              id="clinic-name"
              autoFocus
              {...register("clinicName")}
            />
            {errors.clinicName && (
              <p className="text-xs text-destructive">{errors.clinicName.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="city">City / Local Market</Label>
            <Input
              id="city"
              {...register("city")}
            />
            {errors.city && (
              <p className="text-xs text-destructive">{errors.city.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>
          <Button type="submit" variant="hero" size="lg" className="mt-2 w-full" disabled={isSubmitting}>
            {isSubmitting ? "Checking..." : "Check Availability"}
            {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default MarketAvailabilityModal;
