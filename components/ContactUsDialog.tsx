"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Instagram,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSendInquire from "@/lib/hooks/useSendInquire";
import getErrorMessage from "@/lib/getErrorMessage";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactUsDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [contact, setContact] = React.useState<{
    address?: string | null;
    phone?: string | null;
    email?: string | null;
  } | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const mutation = useSendInquire();

  async function onSubmit(data: ContactFormValues) {
    try {
      await mutation.mutateAsync({
        name: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
      form.reset();
      setSuccess(true);
      // auto-close after a short delay
      setTimeout(() => setOpen(false), 1400);
    } catch (err) {
      const message = getErrorMessage(err, "Failed to send message");
      form.setError("root", { type: "server", message });
    }
  }

  React.useEffect(() => {
    if (!open) {
      setSuccess(false);
      form.reset();
    }
  }, [open, form]);

  // fetch contact details from the API route
  React.useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch("/api/contact");
        if (!res.ok) return;
        const json = await res.json();
        if (!mounted) return;
        setContact(json?.data ?? null);
      } catch (e) {
        // ignore
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-4xl p-1 max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-[420px_1fr]">
          {/* Left panel */}
          <div className="relative bg-slate-800 text-white p-10 rounded-l overflow-hidden">
            <div className="max-w-[300px] flex flex-col justify-between h-full gap-8">
              <div className="">
                <DialogTitle className="text-2xl">
                  Contact Information
                </DialogTitle>
                <DialogDescription className="">
                  Say something to start a live chat!
                </DialogDescription>
              </div>

              <ul className="space-y-6 text-sm">
                <li className="flex items-start gap-3">
                  <div className="mt-1">
                    <Phone className="size-5 text-white/90" />
                  </div>
                  <div className="leading-snug">
                    {contact?.phone ?? "+1 012 3456 789"}
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-1">
                    <Mail className="size-5 text-white/90" />
                  </div>
                  <div className="leading-snug">
                    {contact?.email ?? "demo@gmail.com"}
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-1">
                    <MapPin className="size-5 text-white/90" />
                  </div>
                  <div className="leading-snug text-sm">
                    {contact?.address ?? (
                      <>
                        132 Dartmouth Street Boston,
                        <br /> Massachusetts 02156 United States
                      </>
                    )}
                  </div>
                </li>
              </ul>

              <div className="flex gap-3">
                <button className="size-10 rounded-full bg-black/50 flex items-center justify-center">
                  <Twitter className="size-5 text-white" />
                </button>
                <button className="size-10 rounded-full bg-white flex items-center justify-center">
                  <Instagram className="size-5 text-secondary" />
                </button>
                <button className="size-10 rounded-full bg-black/50 flex items-center justify-center">
                  <MessageSquare className="size-5 text-white" />
                </button>
              </div>
            </div>

            {/* decorative circles in bottom-right of left panel */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none opacity-30" />
            <div className="absolute bottom-10 right-14 size-24 rounded-full bg-white/8 pointer-events-none opacity-20" />
          </div>

          {/* Right panel (form) */}
          <div className="p-10 bg-white">
            {success ? (
              <div className="flex flex-col items-center justify-center gap-4 p-6">
                <CheckCircle className="text-green-500 w-14 h-14" />
                <h3 className="text-xl font-semibold">Message sent</h3>
                <p className="text-sm text-slate-600 text-center">
                  Thanks for reaching out — we&apos;ll get back to you shortly.
                </p>
                <div className="mt-4">
                  <Button
                    className="rounded bg-black w-40"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    Close
                  </Button>
                </div>
              </div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid grid-cols-2 gap-6"
                >
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-slate-600">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-transparent border-0 border-b border-slate-300 rounded-none px-0 py-2 text-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-slate-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-slate-600">
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-transparent border-0 border-b border-slate-300 rounded-none px-0 py-2 text-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-slate-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-slate-600">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-transparent border-0 border-b border-slate-300 rounded-none px-0 py-2 text-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-slate-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-slate-600">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-transparent border-0 border-b border-slate-300 rounded-none px-0 py-2 text-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-slate-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel className="text-sm text-slate-600">
                          Message
                        </FormLabel>
                        <FormControl>
                          <textarea
                            {...field}
                            placeholder="Write your message"
                            className="w-full bg-transparent border-0 border-b border-slate-300 rounded-none px-0 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-slate-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {form.formState.errors.root && (
                    <div className="col-span-2 text-red-600 text-sm">
                      {form.formState.errors.root.message}
                    </div>
                  )}

                  <div className="col-span-2 mt-8 flex justify-end">
                    <Button
                      type="submit"
                      className="rounded bg-black w-40"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting
                        ? "Sending..."
                        : "Send Message"}
                    </Button>
                  </div>
                </form>
              </Form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
