import React, { useState } from 'react';
import { ArrowRight, Brain, Shield, Zap, CheckCircle2, Lock, BarChart3 } from 'lucide-react';

export default function LandingPage({ onStart }) {
  const [email, setEmail] = useState('');

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', color: '#1a1a1a' }}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #1a1a1a;
        }
        a {
          color: #ff6b35;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          body {
            font-size: 14px;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 'clamp(16px, 4vw, 24px) clamp(12px, 5vw, 40px)',
        borderBottom: '1px solid #e0e0e0',
      }}>
        <h3 style={{
          fontSize: 'clamp(18px, 4vw, 22px)',
          fontWeight: '800',
          color: '#1a1a1a',
        }}>
          Tool X
        </h3>
        <button
          onClick={onStart}
          style={{
            padding: 'clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px)',
            background: '#ff6b35',
            border: 'none',
            borderRadius: '6px',
            color: '#fff',
            fontWeight: '700',
            fontSize: 'clamp(12px, 2.5vw, 14px)',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => e.target.style.background = '#e85a2a'}
          onMouseLeave={(e) => e.target.style.background = '#ff6b35'}
        >
          Try Now
        </button>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: 'clamp(40px, 10vw, 80px) clamp(12px, 5vw, 40px)',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: 'clamp(36px, 9vw, 56px)',
          fontWeight: '800',
          marginBottom: '20px',
          lineHeight: '1.2',
        }}>
          Stop second-guessing what matters
        </h1>
        <p style={{
          fontSize: 'clamp(16px, 4vw, 20px)',
          color: '#666',
          marginBottom: '32px',
          lineHeight: '1.6',
          maxWidth: '700px',
          margin: '0 auto 32px',
        }}>
          Too many tasks. Too many priorities. Too much guilt about what you're not doing.
        </p>
        <p style={{
          fontSize: 'clamp(15px, 3.5vw, 18px)',
          color: '#ff6b35',
          marginBottom: '40px',
          lineHeight: '1.6',
          maxWidth: '700px',
          margin: '0 auto 40px',
          fontWeight: '600',
        }}>
          Tool X shows you exactly what to do next—based on your own objective criteria, not a black box.
        </p>

        <button
          onClick={onStart}
          style={{
            padding: 'clamp(14px, 3vw, 18px) clamp(28px, 6vw, 40px)',
            background: '#ff6b35',
            border: 'none',
            borderRadius: '8px',
            color: '#fff',
            fontWeight: '700',
            fontSize: 'clamp(15px, 3vw, 18px)',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '60px',
          }}
          onMouseEnter={(e) => e.target.style.background = '#e85a2a'}
          onMouseLeave={(e) => e.target.style.background = '#ff6b35'}
        >
          Get Started Free <ArrowRight size={20} />
        </button>

        {/* Social proof */}
        <p style={{
          fontSize: 'clamp(12px, 2.5vw, 14px)',
          color: '#999',
          marginTop: '40px',
        }}>
          No credit card. No signup. Just clarity.
        </p>
      </section>

      {/* Positioning: vs Motion */}
      <section style={{
        background: '#fff',
        padding: 'clamp(40px, 10vw, 80px) clamp(12px, 5vw, 40px)',
        marginBottom: 'clamp(60px, 15vw, 100px)',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          <h2 style={{
            fontSize: 'clamp(28px, 7vw, 42px)',
            fontWeight: '800',
            marginBottom: '20px',
            textAlign: 'center',
          }}>
            Not Motion. Better than Motion.
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3vw, 16px)',
            color: '#666',
            textAlign: 'center',
            marginBottom: '40px',
            lineHeight: '1.7',
          }}>
            Motion uses AI to schedule your tasks. Tool X helps you make objective decisions about what matters most—then shows you exactly what to do next.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
          }}>
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                background: '#ff6b35',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                marginBottom: '16px',
              }}>
                <Lock size={24} />
              </div>
              <h3 style={{
                fontSize: 'clamp(16px, 3vw, 18px)',
                fontWeight: '700',
                marginBottom: '12px',
              }}>
                Transparent, not a black box
              </h3>
              <p style={{
                fontSize: 'clamp(13px, 2.5vw, 15px)',
                color: '#666',
                lineHeight: '1.6',
              }}>
                You see exactly why something is ranked #1. No mystery. No algorithm deciding for you.
              </p>
            </div>

            <div>
              <div style={{
                width: '48px',
                height: '48px',
                background: '#ff6b35',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                marginBottom: '16px',
              }}>
                <Shield size={24} />
              </div>
              <h3 style={{
                fontSize: 'clamp(16px, 3vw, 18px)',
                fontWeight: '700',
                marginBottom: '12px',
              }}>
                You control the criteria
              </h3>
              <p style={{
                fontSize: 'clamp(13px, 2.5vw, 15px)',
                color: '#666',
                lineHeight: '1.6',
              }}>
                Impact, urgency, effort, confidence. Your assessment. Your priorities. You decide what matters.
              </p>
            </div>

            <div>
              <div style={{
                width: '48px',
                height: '48px',
                background: '#ff6b35',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                marginBottom: '16px',
              }}>
                <CheckCircle2 size={24} />
              </div>
              <h3 style={{
                fontSize: 'clamp(16px, 3vw, 18px)',
                fontWeight: '700',
                marginBottom: '12px',
              }}>
                Trustworthy decisions
              </h3>
              <p style={{
                fontSize: 'clamp(13px, 2.5vw, 15px)',
                color: '#666',
                lineHeight: '1.6',
              }}>
                Explain your priorities to your team. Defend your choices. Everyone understands the logic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{
        padding: 'clamp(40px, 10vw, 80px) clamp(12px, 5vw, 40px)',
        marginBottom: 'clamp(60px, 15vw, 100px)',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          <h2 style={{
            fontSize: 'clamp(28px, 7vw, 42px)',
            fontWeight: '800',
            marginBottom: '40px',
            textAlign: 'center',
          }}>
            Three steps. Clear priorities.
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
          }}>
            <div style={{
              textAlign: 'center',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: '#ff6b35',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: '800',
                fontSize: '20px',
                margin: '0 auto 20px',
              }}>
                1
              </div>
              <h3 style={{
                fontSize: 'clamp(16px, 3vw, 18px)',
                fontWeight: '700',
                marginBottom: '12px',
              }}>
                Add your tasks
              </h3>
              <p style={{
                fontSize: 'clamp(13px, 2.5vw, 15px)',
                color: '#666',
                lineHeight: '1.6',
              }}>
                Paste everything you're juggling. No organization needed.
              </p>
            </div>

            <div style={{
              textAlign: 'center',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: '#ff6b35',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: '800',
                fontSize: '20px',
                margin: '0 auto 20px',
              }}>
                2
              </div>
              <h3 style={{
                fontSize: 'clamp(16px, 3vw, 18px)',
                fontWeight: '700',
                marginBottom: '12px',
              }}>
                Rate each task
              </h3>
              <p style={{
                fontSize: 'clamp(13px, 2.5vw, 15px)',
                color: '#666',
                lineHeight: '1.6',
              }}>
                Answer four questions about impact, urgency, effort, confidence.
              </p>
            </div>

            <div style={{
              textAlign: 'center',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: '#ff6b35',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: '800',
                fontSize: '20px',
                margin: '0 auto 20px',
              }}>
                3
              </div>
              <h3 style={{
                fontSize: 'clamp(16px, 3vw, 18px)',
                fontWeight: '700',
                marginBottom: '12px',
              }}>
                Do this next
              </h3>
              <p style={{
                fontSize: 'clamp(13px, 2.5vw, 15px)',
                color: '#666',
                lineHeight: '1.6',
              }}>
                Tool X tells you exactly what to focus on first. No more guessing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{
        background: '#fff',
        padding: 'clamp(40px, 10vw, 80px) clamp(12px, 5vw, 40px)',
        marginBottom: 'clamp(60px, 15vw, 100px)',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          <h2 style={{
            fontSize: 'clamp(28px, 7vw, 42px)',
            fontWeight: '800',
            marginBottom: '40px',
            textAlign: 'center',
          }}>
            For the overwhelmed
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '32px',
          }}>
            <div style={{
              background: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              padding: '24px',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: '#ff6b35',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                marginBottom: '16px',
              }}>
                <Brain size={20} />
              </div>
              <h3 style={{
                fontSize: 'clamp(15px, 3.5vw, 17px)',
                fontWeight: '700',
                marginBottom: '8px',
              }}>
                Too many tasks
              </h3>
              <p style={{
                fontSize: 'clamp(13px, 2.5vw, 15px)',
                color: '#666',
                lineHeight: '1.6',
              }}>
                You have 50 things to do and no way to know which matters. Tool X forces clarity.
              </p>
            </div>

            <div style={{
              background: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              padding: '24px',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: '#ff6b35',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                marginBottom: '16px',
              }}>
                <Zap size={20} />
              </div>
              <h3 style={{
                fontSize: 'clamp(15px, 3.5vw, 17px)',
                fontWeight: '700',
                marginBottom: '8px',
              }}>
                Endless re-prioritizing
              </h3>
              <p style={{
                fontSize: 'clamp(13px, 2.5vw, 15px)',
                color: '#666',
                lineHeight: '1.6',
              }}>
                You change your mind every hour. This feels productive but wastes time. Stop.
              </p>
            </div>

            <div style={{
              background: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              padding: '24px',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: '#ff6b35',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                marginBottom: '16px',
              }}>
                <BarChart3 size={20} />
              </div>
              <h3 style={{
                fontSize: 'clamp(15px, 3.5vw, 17px)',
                fontWeight: '700',
                marginBottom: '8px',
              }}>
                Can't explain priorities
              </h3>
              <p style={{
                fontSize: 'clamp(13px, 2.5vw, 15px)',
                color: '#666',
                lineHeight: '1.6',
              }}>
                Your boss asks why this is top priority. You have no answer. Tool X gives you one.
              </p>
            </div>

            <div style={{
              background: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              padding: '24px',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: '#ff6b35',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                marginBottom: '16px',
              }}>
                <Brain size={20} />
              </div>
              <h3 style={{
                fontSize: 'clamp(15px, 3.5vw, 17px)',
                fontWeight: '700',
                marginBottom: '8px',
              }}>
                Don't trust your gut
              </h3>
              <p style={{
                fontSize: 'clamp(13px, 2.5vw, 15px)',
                color: '#666',
                lineHeight: '1.6',
              }}>
                You second-guess every decision. Use objective criteria and remove the guesswork.
              </p>
            </div>

            <div style={{
              background: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              padding: '24px',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: '#ff6b35',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                marginBottom: '16px',
              }}>
                <CheckCircle2 size={20} />
              </div>
              <h3 style={{
                fontSize: 'clamp(15px, 3.5vw, 17px)',
                fontWeight: '700',
                marginBottom: '8px',
              }}>
                Works with your tools
              </h3>
              <p style={{
                fontSize: 'clamp(13px, 2.5vw, 15px)',
                color: '#666',
                lineHeight: '1.6',
              }}>
                Not replacing Todoist or Asana. The prioritization brain that works alongside them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: '#ff6b35',
        color: '#fff',
        padding: 'clamp(40px, 10vw, 80px) clamp(12px, 5vw, 40px)',
        textAlign: 'center',
        marginBottom: 'clamp(40px, 10vw, 60px)',
      }}>
        <h2 style={{
          fontSize: 'clamp(28px, 7vw, 42px)',
          fontWeight: '800',
          marginBottom: '20px',
        }}>
          Stop wondering what to do next
        </h2>
        <p style={{
          fontSize: 'clamp(14px, 3vw, 18px)',
          marginBottom: '32px',
          opacity: 0.95,
          maxWidth: '600px',
          margin: '0 auto 32px',
        }}>
          Get objective clarity in 3 minutes. Free. No credit card.
        </p>
        <button
          onClick={onStart}
          style={{
            padding: 'clamp(14px, 3vw, 18px) clamp(28px, 6vw, 40px)',
            background: '#fff',
            border: 'none',
            borderRadius: '8px',
            color: '#ff6b35',
            fontWeight: '700',
            fontSize: 'clamp(15px, 3vw, 18px)',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#f0f0f0';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#fff';
          }}
        >
          Try Tool X Free <ArrowRight size={20} />
        </button>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#fff',
        padding: 'clamp(32px, 5vw, 48px) clamp(12px, 5vw, 40px)',
        textAlign: 'center',
        borderTop: '1px solid #e0e0e0',
        color: '#666',
        fontSize: 'clamp(12px, 2.5vw, 14px)',
      }}>
        <p style={{ marginBottom: '12px' }}>
          Built for people who want objective clarity. No BS.
        </p>
        <p>
          <a href="#privacy">Privacy</a> • <a href="#terms">Terms</a> • <a href="#contact">Contact</a>
        </p>
      </footer>
    </div>
  );
}
