import Navbar from '../../components/Navbar'

function Contact() {
  return (
    <div style={{ backgroundColor: '#0D0F1A', minHeight: '100vh' }}>
      <Navbar />
      <section style={{ padding: '100px 20px', color: 'white', textAlign: 'center' }}>
        <h1>Contact Page</h1>
        <p>If you see this, routing is working!</p>
      </section>
    </div>
  )
}

export default Contact;