import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, CheckCircle, ArrowRight, Scissors, Sparkles, Heart, Leaf } from "lucide-react";

const SERVICES = [
    { id: "hair-treatment", name: "Hair Care Treatment", icon: Scissors, duration: "60-90 min", price: "₹1,500+" },
    { id: "skin-treatment", name: "Skin Care Treatment", icon: Sparkles, duration: "45-60 min", price: "₹1,200+" },
    { id: "body-care", name: "Body Care Treatment", icon: Heart, duration: "90-120 min", price: "₹2,000+" },
    { id: "ayurvedic-spa", name: "Ayurvedic Spa", icon: Leaf, duration: "120 min", price: "₹3,500+" }
];

const TIME_SLOTS = [
    "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
];

const BookSalon = () => {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

    const handleNext = () => {
        if (step < 4) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = () => {
        // In production, this would send to an API
        alert("Booking submitted! We'll confirm your appointment shortly.");
    };

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>Book Salon Appointment | BeautyBeet</title>
                <meta name="description" content="Book your beauty appointment at BeautyBeet partner salons. Choose from hair care, skin care, body care, and Ayurvedic spa treatments." />
                <link rel="canonical" href="https://beautybeet.com/book-salon" />
            </Helmet>

            <Header />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs */}
                    <Breadcrumbs items={[
                        { label: "Book Salon", href: "/book-salon" }
                    ]} />

                    {/* Header */}
                    <ScrollReveal animation="fade-in">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                                Book Your Appointment
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Experience premium Ayurvedic beauty treatments at our partner salons
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Progress Steps */}
                    <div className="flex items-center justify-center gap-2 mb-12">
                        {[1, 2, 3, 4].map((s) => (
                            <div key={s} className="flex items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                                    }`}>
                                    {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                                </div>
                                {s < 4 && (
                                    <div className={`w-8 md:w-16 h-1 mx-1 rounded ${step > s ? "bg-primary" : "bg-muted"}`} />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Step Content */}
                    <div className="max-w-3xl mx-auto">
                        {/* Step 1: Select Service */}
                        {step === 1 && (
                            <ScrollReveal animation="fade-up">
                                <h2 className="text-2xl font-display text-center mb-8">Select a Service</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {SERVICES.map((service) => {
                                        const Icon = service.icon;
                                        return (
                                            <button
                                                key={service.id}
                                                onClick={() => setSelectedService(service.id)}
                                                className={`p-6 rounded-2xl border-2 text-left transition-all ${selectedService === service.id
                                                        ? "border-primary bg-primary/5"
                                                        : "border-border hover:border-primary/50"
                                                    }`}
                                            >
                                                <Icon className={`w-8 h-8 mb-3 ${selectedService === service.id ? "text-primary" : "text-muted-foreground"}`} />
                                                <h3 className="font-semibold text-foreground mb-1">{service.name}</h3>
                                                <p className="text-sm text-muted-foreground">{service.duration} • {service.price}</p>
                                            </button>
                                        );
                                    })}
                                </div>
                            </ScrollReveal>
                        )}

                        {/* Step 2: Select Date & Time */}
                        {step === 2 && (
                            <ScrollReveal animation="fade-up">
                                <h2 className="text-2xl font-display text-center mb-8">Choose Date & Time</h2>

                                <div className="mb-8">
                                    <label className="block text-sm font-medium mb-2">Select Date</label>
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        min={new Date().toISOString().split('T')[0]}
                                        className="w-full p-4 rounded-xl border border-input bg-card focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Select Time Slot</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                        {TIME_SLOTS.map((time) => (
                                            <button
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${selectedTime === time
                                                        ? "border-primary bg-primary text-primary-foreground"
                                                        : "border-border hover:border-primary"
                                                    }`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        )}

                        {/* Step 3: Contact Details */}
                        {step === 3 && (
                            <ScrollReveal animation="fade-up">
                                <h2 className="text-2xl font-display text-center mb-8">Your Details</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Enter your full name"
                                            className="w-full p-4 rounded-xl border border-input bg-card focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="+91 98765 43210"
                                            className="w-full p-4 rounded-xl border border-input bg-card focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email (Optional)</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="you@example.com"
                                            className="w-full p-4 rounded-xl border border-input bg-card focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                    </div>
                                </div>
                            </ScrollReveal>
                        )}

                        {/* Step 4: Confirmation */}
                        {step === 4 && (
                            <ScrollReveal animation="fade-up">
                                <div className="text-center bg-card rounded-3xl p-8 border border-border">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-8 h-8 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-display mb-4">Confirm Your Booking</h2>

                                    <div className="text-left max-w-sm mx-auto space-y-3 mb-8">
                                        <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                                            <Sparkles className="w-5 h-5 text-primary" />
                                            <span className="text-sm">{SERVICES.find(s => s.id === selectedService)?.name}</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                                            <Calendar className="w-5 h-5 text-primary" />
                                            <span className="text-sm">{selectedDate || "Not selected"}</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                                            <Clock className="w-5 h-5 text-primary" />
                                            <span className="text-sm">{selectedTime || "Not selected"}</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                                            <MapPin className="w-5 h-5 text-primary" />
                                            <span className="text-sm">Nearest BeautyBeet Salon</span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-muted-foreground mb-6">
                                        Name: {formData.name} • Phone: {formData.phone}
                                    </p>
                                </div>
                            </ScrollReveal>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8">
                            <Button
                                variant="outline"
                                onClick={handleBack}
                                disabled={step === 1}
                                className={step === 1 ? "invisible" : ""}
                            >
                                Back
                            </Button>

                            {step < 4 ? (
                                <Button
                                    onClick={handleNext}
                                    disabled={
                                        (step === 1 && !selectedService) ||
                                        (step === 2 && (!selectedDate || !selectedTime)) ||
                                        (step === 3 && (!formData.name || !formData.phone))
                                    }
                                >
                                    Continue <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            ) : (
                                <Button onClick={handleSubmit} className="bg-primary hover:bg-primary/90">
                                    Confirm Booking
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BookSalon;
