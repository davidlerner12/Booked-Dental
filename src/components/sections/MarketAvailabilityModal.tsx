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

interface MarketAvailabilityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function MarketAvailabilityModal({ open, onOpenChange }: MarketAvailabilityModalProps) {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onOpenChange(false);
    navigate("/book");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>See If Your Market Is Available</DialogTitle>
          <DialogDescription>
            Booked.Dental partners with only one implant or cosmetic clinic per local market. Enter your details below and we'll confirm if your market is still open.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="clinic-name">Clinic Name</Label>
            <Input id="clinic-name" name="clinicName" placeholder="e.g. Smile Studio Dental" required />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="city">City / Local Market</Label>
            <Input id="city" name="city" placeholder="e.g. Austin, TX" required />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@yourclinic.com" required />
          </div>
          <Button type="submit" variant="hero" size="lg" className="mt-2 w-full">
            Check Availability
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default MarketAvailabilityModal;
