import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { format } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import {
  Wifi,
  Snowflake,
  Coffee,
  BedDouble,
  Check,
  Phone,
  CalendarIcon,
  Send,
  Users,
  Home,
  Mail,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import roomDouble from "@/assets/room-double.jpg";
import roomSingle from "@/assets/room-single.jpg";
import heroRoom from "@/assets/hero-room.jpg";

export const Route = createFileRoute("/_site/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Rates | Buxton Leisure Lodge Mombasa" },
      {
        name: "description",
        content:
          "Clean, affordable rooms in Mombasa from KSh 1,500/night. Single, double and executive options with WiFi, AC and breakfast.",
      },
    ],
  }),
  component: RoomsPage,
});

const rooms = [
  {
    img: roomSingle,
    name: "Single Room",
    price: "KSh 1,500",
    desc: "Cozy single room with a comfortable bed, fresh linen and mosquito net. Ideal for solo travellers.",
    amenities: [
      "Free Wi-Fi",
      "Breakfast included",
      "En-suite bathroom",
      "Daily housekeeping",
    ],
  },
  {
    img: roomDouble,
    name: "Double Room",
    price: "KSh 2,000",
    desc: "Spacious double with a queen bed, work desk and warm coastal styling. Great for couples or business stays.",
    amenities: [
      "Free Wi-Fi",
      "Bed & Breakfast",
      "AC available",
      "Hot water shower",
    ],
  },
  {
    img: heroRoom,
    name: "Executive Room",
    price: "On request",
    desc: "Our most spacious option with extra comforts — perfect for longer business trips or special occasions.",
    amenities: [
      "Free Wi-Fi",
      "AC & Fan",
      "Bed & Breakfast",
      "TV & lounge area",
    ],
  },
];

const bookingSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name is required")
      .max(100, "Name is too long"),
    email: z
      .string()
      .email("Please enter a valid email")
      .max(255),
    phone: z
      .string()
      .min(5, "Phone number is required")
      .max(20),
    roomType: z.string().min(1, "Please select a room type"),
    checkIn: z.date({ required_error: "Check-in date is required" }),
    checkOut: z.date({ required_error: "Check-out date is required" }),
    guests: z.string().min(1, "Please select number of guests"),
    requests: z.string().max(500).optional(),
  })
  .refine((data) => data.checkOut > data.checkIn, {
    message: "Check-out must be after check-in",
    path: ["checkOut"],
  });

type BookingForm = z.infer<typeof bookingSchema>;

function BookingFormSection() {
  const [checkInOpen, setCheckInOpen] = useState(false);
  const [checkOutOpen, setCheckOutOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      roomType: "",
      guests: "1",
      requests: "",
    },
  });

  const checkIn = watch("checkIn");
  const checkOut = watch("checkOut");

  const onSubmit = (data: BookingForm) => {
    const nights = Math.ceil(
      (data.checkOut.getTime() - data.checkIn.getTime()) /
        (1000 * 60 * 60 * 24)
    );

    const message =
      `Hello Buxton Leisure Lodge,%0A%0A` +
      `I would like to request a room booking:%0A%0A` +
      `Name: ${data.name}%0A` +
      `Email: ${data.email}%0A` +
      `Phone: ${data.phone}%0A` +
      `Room: ${data.roomType}%0A` +
      `Check-in: ${format(data.checkIn, "dd MMM yyyy")}%0A` +
      `Check-out: ${format(data.checkOut, "dd MMM yyyy")}%0A` +
      `Nights: ${nights}%0A` +
      `Guests: ${data.guests}%0A` +
      (data.requests
        ? `Special requests: ${data.requests}%0A`
        : "") +
      `%0APlease confirm availability and total cost. Thank you!`;

    toast.success("Booking request prepared! Opening WhatsApp…");

    window.open(
      `https://wa.me/254722252440?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Request a booking
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 text-balance">
            Check availability & book your stay
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Fill in your details and we will get back to you right away via
            WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-soft space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-muted-foreground" /> Full
                name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-xs text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-muted-foreground" /> Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-muted-foreground" /> Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="07XX XXX XXX"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-xs text-destructive">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-muted-foreground" /> Room
                type
              </Label>
              <Select
                onValueChange={(v) => setValue("roomType", v)}
              >
                <SelectTrigger
                  className={cn(
                    errors.roomType && "border-destructive"
                  )}
                >
                  <SelectValue placeholder="Select a room" />
                </SelectTrigger>
                <SelectContent>
                  {rooms.map((r) => (
                    <SelectItem key={r.name} value={r.name}>
                      {r.name} — {r.price}/night
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.roomType && (
                <p className="text-xs text-destructive">
                  {errors.roomType.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label className="flex items-center gap-1.5">
                <CalendarIcon className="w-3.5 h-3.5 text-muted-foreground" />{" "}
                Check-in date
              </Label>
              <Popover open={checkInOpen} onOpenChange={setCheckInOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !checkIn && "text-muted-foreground",
                      errors.checkIn && "border-destructive"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn
                      ? format(checkIn, "dd MMM yyyy")
                      : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={(date) => {
                      setValue("checkIn", date as Date, {
                        shouldValidate: true,
                      });
                      setCheckInOpen(false);
                    }}
                    disabled={(date) =>
                      date < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
              {errors.checkIn && (
                <p className="text-xs text-destructive">
                  {errors.checkIn.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-1.5">
                <CalendarIcon className="w-3.5 h-3.5 text-muted-foreground" />{" "}
                Check-out date
              </Label>
              <Popover open={checkOutOpen} onOpenChange={setCheckOutOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !checkOut && "text-muted-foreground",
                      errors.checkOut && "border-destructive"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut
                      ? format(checkOut, "dd MMM yyyy")
                      : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={(date) => {
                      setValue("checkOut", date as Date, {
                        shouldValidate: true,
                      });
                      setCheckOutOpen(false);
                    }}
                    disabled={(date) =>
                      date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                      (checkIn ? date <= checkIn : false)
                    }
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
              {errors.checkOut && (
                <p className="text-xs text-destructive">
                  {errors.checkOut.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-muted-foreground" /> Number
              of guests
            </Label>
            <Select
              onValueChange={(v) => setValue("guests", v)}
              defaultValue="1"
            >
              <SelectTrigger>
                <SelectValue placeholder="Number of guests" />
              </SelectTrigger>
              <SelectContent>
                {["1", "2", "3", "4", "5+"].map((g) => (
                  <SelectItem key={g} value={g}>
                    {g} {g === "1" ? "guest" : "guests"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="requests">Special requests (optional)</Label>
            <Textarea
              id="requests"
              placeholder="Dietary needs, airport pickup, late check-in, etc."
              rows={3}
              {...register("requests")}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full h-11 text-base shadow-soft"
          >
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? "Sending…" : "Send booking inquiry"}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            You will be redirected to WhatsApp to complete your request. Our
            team usually replies within minutes.
          </p>
        </form>
      </div>
    </section>
  );
}

function RoomsPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Our rooms
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mt-3 text-balance">
            Comfortable rooms at honest prices
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Every room comes with free Wi-Fi, fresh linens and our warm
            Mombasa hospitality.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 space-y-10">
        {rooms.map((r, i) => (
          <article
            key={r.name}
            className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
          >
            <div>
              <img
                src={r.img}
                alt={r.name}
                loading="lazy"
                className="rounded-3xl shadow-soft w-full object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold">
                {r.name}
              </h2>
              <div className="mt-2 text-2xl font-display text-accent">
                {r.price}{" "}
                <span className="text-sm text-muted-foreground font-sans">
                  / night
                </span>
              </div>
              <p className="mt-4 text-muted-foreground text-lg">{r.desc}</p>
              <ul className="mt-5 grid grid-cols-2 gap-2">
                {r.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary" /> {a}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground font-medium shadow-soft hover:opacity-90 transition"
              >
                <Phone className="w-4 h-4" /> Reserve this room
              </a>
            </div>
          </article>
        ))}
      </section>

      <div id="booking">
        <BookingFormSection />
      </div>

      <section className="bg-secondary py-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-center">
            All stays include
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Wifi, label: "Free Wi-Fi" },
              { icon: Coffee, label: "Breakfast" },
              { icon: Snowflake, label: "AC available" },
              { icon: BedDouble, label: "Clean linens" },
            ].map((i) => (
              <div
                key={i.label}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <i.icon className="w-6 h-6 mx-auto text-primary" />
                <div className="mt-2 font-medium">{i.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
