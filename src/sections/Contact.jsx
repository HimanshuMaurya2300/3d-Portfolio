import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'

const Contact = () => {

    const formRef = useRef()

    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await emailjs.send(
                'service_ph9vi7m',
                'template_5j9883s',
                {
                    from_name: form.name,
                    to_name: 'Himanshu',
                    from_email: form.email,
                    to_email: 'mauryah380@gmailcom',
                    message: form.message,
                },
                '5Z6wblbR5E4cqIdjZ'
            )

            setLoading(false)
            alert('Thank you. I will get back to you as soon as possible.')
            setForm({ name: '', email: '', message: '' })
        } catch (error) {
            console.log(error)
            alert('Something went wrong.')
            setLoading(false)
        }
    }

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img
                    src="/assets/terminal.png"
                    alt="terminal"
                    className="absolute inset-0 min-h-screen"
                />

                <div className="contact-container pt-5">
                    <h3 className="head-text">
                        Let&apos;s talk
                    </h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you&apos;re looking to build a new website, improve existing one, or just want to say hi, I&apos;d love to hear from you.
                    </p>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col space-y-7"
                    >
                        <label className="space-y-3">
                            <span className="field-label">
                                Full Name
                            </span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="field-input"
                                required
                                placeholder="John Doe"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">
                                Email address
                            </span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="field-input"
                                required
                                placeholder="johndoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">
                                Your Message
                            </span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                className="field-input"
                                required
                                placeholder="Hi, I'm interested in..."
                                rows={5}
                            />
                        </label>

                        <button
                            type="submit"
                            className="field-btn"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}

                            <img
                                src="/assets/arrow-up.png"
                                alt="arrow-up"
                                className="field-btn_arrow"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact