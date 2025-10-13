export default function ContactMap() {
    return (
        <div className="contact_location-section">
            <div className="contact_location-main">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15712.318146973554!2d76.36711988996501!3d10.09256896607319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08093a2bab06bf%3A0xf0e81eb81890c1a!2sChungamvely%2C%20Aluva%2C%20Kerala!5e0!3m2!1sen!2sin!4v1760347326460!5m2!1sen!2sin" 
                    height={780}
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
}
