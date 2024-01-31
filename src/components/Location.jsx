const Location = () => {
  return (
    <section className="location">
      <h2 className="location-title">
        <span>Discover Our Location</span>
      </h2>
      <h4>Saint Street 99B, 12345</h4>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12572.052710794374!2d23.98969265856292!3d38.023472262313085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sel!2sgr!4v1706659297488!5m2!1sel!2sgr"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embed"
        className="map"
      ></iframe>
    </section>
  );
};

export default Location;
