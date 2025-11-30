import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function LandingPage({ onStart }) {
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

      {/* Hero */}
      <section style={{
        padding: 'clamp(40px, 10vw, 80px) clamp(12px, 5vw, 40px)',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        <div style={{
          maxWidth: '700px',
          marginBottom: 'clamp(60px, 15vw, 100px)',
        }}>
          <h1 style={{
            fontSize: 'clamp(36px, 9vw, 56px)',
            fontWeight: '800',
            marginBottom: '20px',
            lineHeight: '1.2',
          }}>
            You have too many tasks.
          </h1>
          <h2 style={{
            fontSize: 'clamp(28px, 7vw, 42px)',
            fontWeight: '700',
            color: '#ff6b35',
            marginBottom: '24px',
            lineHeight: '1.3',
          }}>
            Tool X tells you exactly what to do next.
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            color: '#666',
            lineHeight: '1.7',
            marginBottom: '40px',
          }}>
            Stop second-guessing. Stop re-prioritizing. Answer four simple questions about impact, urgency, effort, and confidence. Tool X does the math. You get clarity.
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
            }}
            onMouseEnter={(e) => e.target.style.background = '#e85a2a'}
            onMouseLeave={(e) => e.target.style.background = '#ff6b35'}
          >
            Get Started Free <ArrowRight size={20} />
          </button>

          <p style={{
            fontSize: 'clamp(12px, 2.5vw, 14px)',
            color: '#999',
            marginTop: '20px',
          }}>
            No credit card. 3 minutes. Clear priorities.
          </p>
        </div>

        {/* Screenshot mockup of the app */}
        <div style={{
          background: '#fff',
          border: '2px solid #e0e0e0',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
          marginBottom: 'clamp(60px, 15vw, 100px)',
        }}>
          {/* Ranking screen header */}
          <div style={{
            background: '#f8f9fa',
            padding: 'clamp(20px, 5vw, 32px)',
            borderBottom: '1px solid #e0e0e0',
          }}>
            <p style={{
              fontSize: 'clamp(11px, 2.5vw, 13px)',
              color: '#666',
              marginBottom: '8px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              Step 2 of 3: Rate Each Task
            </p>
            <h3 style={{
              fontSize: 'clamp(24px, 6vw, 32px)',
              fontWeight: '800',
              marginBottom: '8px',
            }}>
              Job applications
            </h3>
            <p style={{
              fontSize: 'clamp(12px, 2.5vw, 14px)',
              color: '#666',
            }}>
              Task 1 of 4
            </p>
          </div>

          {/* Criteria buttons */}
          <div style={{
            padding: 'clamp(20px, 5vw, 32px)',
          }}>
            {/* Progress bar */}
            <div style={{
              width: '100%',
              height: '6px',
              background: '#e0e0e0',
              borderRadius: '3px',
              marginBottom: 'clamp(30px, 8vw, 40px)',
              overflow: 'hidden',
            }}>
              <div style={{
                height: '100%',
                width: '25%',
                background: '#4CAF50',
              }} />
            </div>

            {/* Impact */}
            <div style={{ marginBottom: 'clamp(28px, 6vw, 36px)' }}>
              <label style={{
                display: 'block',
                fontSize: 'clamp(14px, 3vw, 16px)',
                fontWeight: '700',
                marginBottom: '12px',
              }}>
                Impact
              </label>
              <p style={{
                fontSize: 'clamp(12px, 2.5vw, 13px)',
                color: '#666',
                marginBottom: '14px',
              }}>
                How much does this matter?
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                gap: '12px',
              }}>
                {['Low', 'Medium', 'High'].map((option) => (
                  <button
                    key={option}
                    style={{
                      padding: 'clamp(10px, 2.5vw, 14px)',
                      background: '#fff',
                      border: '2px solid #2196F3',
                      borderRadius: '8px',
                      color: '#2196F3',
                      fontWeight: '700',
                      fontSize: 'clamp(12px, 2.5vw, 14px)',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#f0f0f0'}
                    onMouseLeave={(e) => e.target.style.background = '#fff'}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Urgency */}
            <div style={{ marginBottom: 'clamp(28px, 6vw, 36px)' }}>
              <label style={{
                display: 'block',
                fontSize: 'clamp(14px, 3vw, 16px)',
                fontWeight: '700',
                marginBottom: '12px',
              }}>
                Urgency
              </label>
              <p style={{
                fontSize: 'clamp(12px, 2.5vw, 13px)',
                color: '#666',
                marginBottom: '14px',
              }}>
                How time-sensitive is this?
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                gap: '12px',
              }}>
                {['Later', 'Soon', 'Now'].map((option) => (
                  <button
                    key={option}
                    style={{
                      padding: 'clamp(10px, 2.5vw, 14px)',
                      background: '#fff',
                      border: '2px solid #ff9800',
                      borderRadius: '8px',
                      color: '#ff9800',
                      fontWeight: '700',
                      fontSize: 'clamp(12px, 2.5vw, 14px)',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#f0f0f0'}
                    onMouseLeave={(e) => e.target.style.background = '#fff'}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Effort */}
            <div style={{ marginBottom: 'clamp(28px, 6vw, 36px)' }}>
              <label style={{
                display: 'block',
                fontSize: 'clamp(14px, 3vw, 16px)',
                fontWeight: '700',
                marginBottom: '12px',
              }}>
                Effort
              </label>
              <p style={{
                fontSize: 'clamp(12px, 2.5vw, 13px)',
                color: '#666',
                marginBottom: '14px',
              }}>
                How much work is required?
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                gap: '12px',
              }}>
                {['Hard', 'Medium', 'Easy'].map((option) => (
                  <button
                    key={option}
                    style={{
                      padding: 'clamp(10px, 2.5vw, 14px)',
                      background: '#fff',
                      border: '2px solid #9c27b0',
                      borderRadius: '8px',
                      color: '#9c27b0',
                      fontWeight: '700',
                      fontSize: 'clamp(12px, 2.5vw, 14px)',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#f0f0f0'}
                    onMouseLeave={(e) => e.target.style.background = '#fff'}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Confidence */}
            <div>
              <label style={{
                display: 'block',
                fontSize: 'clamp(14px, 3vw, 16px)',
                fontWeight: '700',
                marginBottom: '12px',
              }}>
                Confidence
              </label>
              <p style={{
                fontSize: 'clamp(12px, 2.5vw, 13px)',
                color: '#666',
                marginBottom: '14px',
              }}>
                How confident are you that this task NEEDS to be done?
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                gap: '12px',
              }}>
                {['Unsure', 'Sure'].map((option) => (
                  <button
                    key={option}
                    style={{
                      padding: 'clamp(10px, 2.5vw, 14px)',
                      background: '#fff',
                      border: '2px solid #4CAF50',
                      borderRadius: '8px',
                      color: '#4CAF50',
                      fontWeight: '700',
                      fontSize: 'clamp(12px, 2.5vw, 14px)',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#f0f0f0'}
                    onMouseLeave={(e) => e.target.style.background = '#fff'}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results preview */}
        <div style={{
          maxWidth: '700px',
          marginBottom: 'clamp(60px, 15vw, 100px)',
        }}>
          <h3 style={{
            fontSize: 'clamp(24px, 6vw, 32px)',
            fontWeight: '800',
            marginBottom: '32px',
            textAlign: 'center',
          }}>
            Then you get clarity.
          </h3>

          {/* Results card */}
          <div style={{
            background: 'linear-gradient(135deg, #ff6b35 0%, #ff8a5b 100%)',
            borderRadius: '12px',
            padding: 'clamp(24px, 5vw, 32px)',
            color: '#fff',
            marginBottom: '20px',
            boxShadow: '0 10px 40px rgba(255, 107, 53, 0.15)',
          }}>
            <p style={{
              fontSize: 'clamp(11px, 2.5vw, 13px)',
              fontWeight: '700',
              marginBottom: '8px',
              opacity: 0.9,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              Priority #1
            </p>
            <h4 style={{
              fontSize: 'clamp(20px, 5vw, 28px)',
              fontWeight: '800',
              marginBottom: '20px',
            }}>
              Report for current job
            </h4>
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              padding: 'clamp(14px, 3vw, 18px)',
              fontSize: 'clamp(12px, 2.5vw, 14px)',
              lineHeight: '1.8',
            }}>
              <p style={{ marginBottom: '8px' }}><strong>Impact:</strong> High</p>
              <p style={{ marginBottom: '8px' }}><strong>Urgency:</strong> Now</p>
              <p style={{ marginBottom: '8px' }}><strong>Effort:</strong> Hard</p>
              <p><strong>Confidence:</strong> Sure</p>
            </div>
          </div>

          {/* Next tasks preview */}
          <div style={{
            background: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: 'clamp(16px, 3vw, 20px)',
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              background: '#E3F2FD',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2196F3',
              fontWeight: '700',
              flexShrink: 0,
            }}>
              #2
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                fontSize: 'clamp(14px, 3vw, 15px)',
                fontWeight: '700',
                color: '#1a1a1a',
                marginBottom: '4px',
              }}>
                Tax return
              </p>
              <p style={{
                fontSize: 'clamp(11px, 2.5vw, 12px)',
                color: '#666',
              }}>
                High impact • Soon
              </p>
            </div>
          </div>

          <div style={{
            background: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: 'clamp(16px, 3vw, 20px)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              background: '#F3E5F5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#9c27b0',
              fontWeight: '700',
              flexShrink: 0,
            }}>
              #3
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                fontSize: 'clamp(14px, 3vw, 15px)',
                fontWeight: '700',
                color: '#1a1a1a',
                marginBottom: '4px',
              }}>
                Job applications
              </p>
              <p style={{
                fontSize: 'clamp(11px, 2.5vw, 12px)',
                color: '#666',
              }}>
                High impact • Soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section style={{
        background: '#fff',
        padding: 'clamp(40px, 10vw, 80px) clamp(12px, 5vw, 40px)',
        borderTop: '1px solid #e0e0e0',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: 'clamp(60px, 15vw, 100px)',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          <h3 style={{
            fontSize: 'clamp(24px, 6vw, 32px)',
            fontWeight: '800',
            marginBottom: '40px',
            textAlign: 'center',
          }}>
            Why it works
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
          }}>
            <div>
              <h4 style={{
                fontSize: 'clamp(15px, 3.5vw, 17px)',
                fontWeight: '700',
                marginBottom: '12px',
              }}>
                You decide the criteria
              </h4>
              <p style={{
                fontSize: 'clamp(13px, 2.5vw, 15px)',
                color: '#666',
                lineHeight: '1.6',
              }}>
                Not an algorithm. Not a guess. Your assessment of what matters.
              </p>
            </div>

            <div>
              <h4 style={{
                fontSize: 'clamp(15px, 3.5vw, 17px)',
                fontWeight: '700',
                marginBottom: '12px',
              }}>
                The math is transparent
              </h4>
              <p style={{
                fontSize: 'clamp(13px, 2.5vw, 15px)',
                color: '#666',
                lineHeight: '1.6',
              }}>
                See exactly why something is ranked #1. Explain it to your boss.
              </p>
            </div>

            <div>
              <h4 style={{
                fontSize: 'clamp(15px, 3.5vw, 17px)',
                fontWeight: '700',
                marginBottom: '12px',
              }}>
                No more re-prioritizing
              </h4>
              <p style={{
                fontSize: 'clamp(13px, 2.5vw, 15px)',
                color: '#666',
                lineHeight: '1.6',
              }}>
                Once you've made objective assessments, you stop second-guessing and start working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: 'clamp(40px, 10vw, 80px) clamp(12px, 5vw, 40px)',
        textAlign: 'center',
        marginBottom: 'clamp(40px, 10vw, 60px)',
      }}>
        <h3 style={{
          fontSize: 'clamp(28px, 7vw, 42px)',
          fontWeight: '800',
          marginBottom: '20px',
        }}>
          Stop wondering what to do next
        </h3>
        <p style={{
          fontSize: 'clamp(14px, 3vw, 18px)',
          color: '#666',
          marginBottom: '32px',
          maxWidth: '500px',
          margin: '0 auto 32px',
          lineHeight: '1.6',
        }}>
          Get objective clarity in 3 minutes. Free. No credit card.
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
          }}
          onMouseEnter={(e) => e.target.style.background = '#e85a2a'}
          onMouseLeave={(e) => e.target.style.background = '#ff6b35'}
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
        <p>
          Built for people who want objective clarity. No BS.
        </p>
      </footer>
    </div>
  );
}
