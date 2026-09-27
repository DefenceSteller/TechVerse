import { useState } from "react";
import axios from "axios";
import { Card } from "@heroui/card";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { FaEnvelope, FaPhone, FaUser, FaEdit } from "react-icons/fa";
import DefaultLayout from "@/layouts/default";
import { Alert } from "@heroui/alert";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";

interface IndexPageProps {
  id?: string;
}

export default function ContactPage({ id }: IndexPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const emailData = {
      service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      user_id: import.meta.env.VITE_EMAILJS_USER_ID,
      template_params: {
        to_name: "Recipient Name",
        from_name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      },
    };

    try {
      await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        emailData
      );
      setAlert({ type: "success", message: "Email sent successfully!" });
      setFormData({ name: "", phone: "", email: "", message: "" });

      // Hide the alert after 3 seconds
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    } catch (error) {
      console.error("Email sending error:", error);
      setAlert({ type: "error", message: "Failed to send email." });

      // Hide the alert after 3 seconds
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <section
        id={id}
        className="flex flex-col items-center justify-center py-8 md:py-10"
        style={{ fontFamily: "kufi" }}
      >
        <div className="max-w-5xl w-full px-4">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold">Contact US</h1>
            <p className="dark:text-gray-500">
              Have a Query? We’re Here to Assist!
            </p>
          </div>
          <Card className="p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-8 dark:bg-[#18181b] bg-[#e5e5e5]">
            {/* Left Side - Contact Info */}
            <div className="md:w-1/2">
              <p className="text-2xl dark:text-white font-semibold">
                Let’s Connect – Your Questions, Our Answers!
              </p>
              <p className="dark:text-gray-400 mt-2">
                Get the finest and affordable web app development solutions
                under the observation of skilled tech gigs and web app
                programming specialists.
              </p>
              {/* Social Media Icons - Vertical Layout */}
              <div className="flex flex-col gap-4 mt-6">
                <a
                  href="https://linkedin.com/company/team-techverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaLinkedin className=" text-2xl hover:text-blue-900" />
                  <p className="dark:text-gray-300">linkedin / Techverse</p>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaWhatsapp className=" text-2xl hover:text-blue-900" />
                  <p className="dark:text-gray-300">Whatsapp / +923331315205</p>
                </a>
                <a
                  href="https://facebook.com/people/TechVerse/61568233663648/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaSquareFacebook className="text-2xl hover:text-blue-800" />
                  <p className="dark:text-gray-300">Facebook / Techverse</p>
                </a>
                <a
                  href="https://instagram.com/teamtechverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaInstagram className=" text-2xl hover:text-pink-800" />
                  <p className="dark:text-gray-300">Instagram / Techverse</p>
                </a>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div className="flex gap-4">
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    startContent={<FaUser className="text-gray-400" />}
                    className="w-full"
                    required
                  />
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    startContent={<FaPhone className="text-gray-400" />}
                    className="w-full"
                    required
                  />
                </div>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  startContent={<FaEnvelope className="text-gray-400" />}
                  className="w-full"
                  required
                />
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  startContent={<FaEdit className="text-gray-400" />}
                  rows={4}
                  required
                />
                {alert && (
                  <Alert
                    variant={alert.type === "success" ? "solid" : "flat"}
                    color={alert.type === "success" ? "success" : "danger"}
                    className="mb-4"
                  >
                    {alert.message}
                  </Alert>
                )}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white px-6 py-2 text-2xl rounded-lg hover:bg-violet-800"
                >
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}
