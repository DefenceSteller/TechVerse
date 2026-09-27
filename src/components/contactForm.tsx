import { useState } from "react";
import axios from "axios";
import { Card, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";
import { FaUser, FaPhone, FaEnvelope, FaPen } from "react-icons/fa";
import { Alert } from "@heroui/alert";  // Importing Alert

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", emailData);
      setAlert({ type: 'success', message: 'Email sent successfully!' });
      setFormData({ name: "", phone: "", email: "", message: "" });

      // Hide the alert after 3 seconds
      setTimeout(() => {
        setAlert(null);  // Reset alert to show the submit button again
      }, 3000);
    } catch (error) {
      console.error("Email sending error:", error);
      setAlert({ type: 'error', message: 'Failed to send email.' });

      // Hide the alert after 3 seconds
      setTimeout(() => {
        setAlert(null);  // Reset alert to show the submit button again
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center" style={{ fontFamily: "kufi" }}>
      <Card className="w-[400px] p-6 shadow-lg rounded-xl bg-[#e5e5e5] dark:bg-[#18181b]" shadow="lg">
        <CardBody>
          <h2 className="text-3xl font-bold text-center mb-4">
            Have a project? Let's Talk
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2">
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                startContent={<FaUser className="text-gray-500" />}
                className="w-1/2"
                required
              />
              <Input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                startContent={<FaPhone className="text-gray-500" />}
                className="w-1/2"
                required
              />
            </div>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="abc@xyz.com"
              startContent={<FaEnvelope className="text-gray-500" />}
              className="w-full"
              required
            />
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              startContent={<FaPen className="text-gray-500" />}
              className="w-full"
              required
            />
            {!alert && (
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-2 text-2xl rounded-lg hover:bg-violet-800"
              >
                {loading ? "Sending..." : "Submit"}
              </Button>
            )}
            {alert && (
              <Alert
                variant={alert.type === 'success' ? 'solid' : 'flat'}
                color={alert.type === 'success' ? 'success' : 'danger'}
                className="mb-4"
              >
                {alert.message}
              </Alert>
            )}
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
