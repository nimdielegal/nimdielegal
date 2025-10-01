import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, Arial, sans-serif', lineHeight: 1.5, padding: '24px', maxWidth: 920, margin: '0 auto' }}>
      <div style={{ background: '#fff3cd', border: '1px solid #ffeeba', padding: '12px 16px', borderRadius: 8, marginBottom: 16 }}>
        <strong>Disclaimer:</strong> This site provides general legal information for Ghana. It is <strong>not</strong> legal advice.
        If you need advice for your situation, consult a licensed lawyer.
      </div>

      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ margin: 0 }}>Nimdie Legal</h1>
        <nav style={{ display: 'flex', gap: 16 }}>
          <a href="#/">Home</a>
          <a href="#/learn">Learn</a>
          <a href="#/chat">Chat</a>
          <a href="#/help">Get Help</a>
        </nav>
      </header>

      <main>
        <section style={{ marginBottom: 24 }}>
          <h2>Know your rights in Ghana — simple, accurate, up-to-date.</h2>
          <p>
            Start by exploring common topics or try the chatbot for quick answers. Always verify important steps with an attorney.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#/learn/tenancy" style={cardStyle}>Tenancy &amp; Eviction</a>
            <a href="#/learn/employment" style={cardStyle}>Employment Basics</a>
            <a href="#/learn/small-claims" style={cardStyle}>Small Claims</a>
            <a href="#/learn/police" style={cardStyle}>Police Reports &amp; Complaints</a>
            <a href="#/learn/civil" style={cardStyle}>Birth/Marriage/Death Certificates</a>
          </div>
        </section>

        <section>
          <h3>Transparency</h3>
          <ul>
            <li>Articles are reviewed by Ghana-qualified lawyers.</li>
            <li>Each page shows a last-reviewed date.</li>
            <li>No personal data required to browse.</li>
          </ul>
        </section>
      </main>

      <footer style={{ marginTop: 48, fontSize: 14, color: '#555' }}>
        © {new Date().getFullYear()} Nimdie Legal — Educational information only.
      </footer>
    </div>
  )
}

const cardStyle: React.CSSProperties = {
  border: '1px solid #e5e7eb',
  padding: '16px 18px',
  borderRadius: 12,
  textDecoration: 'none',
  color: '#111',
  background: '#f9fafb'
}
