import React, { useState } from 'react';
import { Plus, Trash2, ArrowRight, RotateCcw, ChevronDown } from 'lucide-react';

export default function PrioritizationTool() {
  const [screen, setScreen] = useState(1);
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [currentRankingIndex, setCurrentRankingIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [expandRest, setExpandRest] = useState(false);

  const weights = {
    impact: { High: 5, Medium: 3, Low: 1 },
    urgency: { Now: 5, Soon: 3, Later: 1 },
    effort: { Easy: 5, Medium: 3, Hard: 1 },
    confidence: { Sure: 5, Unsure: 1 },
  };

  const initializeTask = (name) => ({
    id: Date.now() + Math.random(),
    name,
    criteria: {
      impact: null,
      urgency: null,
      effort: null,
      confidence: null,
    },
  });

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, initializeTask(taskInput)]);
      setTaskInput('');
    }
  };

  const importTasks = (text) => {
    const names = text
      .split('\n')
      .map((name) => name.trim())
      .filter((name) => name);
    const newTasks = names.map((name) => initializeTask(name));
    setTasks([...tasks, ...newTasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const calculateScore = (criteria) => {
    const impact = weights.impact[criteria.impact] || 0;
    const urgency = weights.urgency[criteria.urgency] || 0;
    const confidence = weights.confidence[criteria.confidence] || 0;
    const effort = weights.effort[criteria.effort] || 0;

    const driverScore = impact * urgency * confidence;
    const effortPenalty = effort * 0.5;
    return driverScore - effortPenalty;
  };

  const updateCriteria = (field, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[currentRankingIndex].criteria[field] = value;
    setTasks(updatedTasks);
  };

  const nextTask = () => {
    if (currentRankingIndex < tasks.length - 1) {
      setCurrentRankingIndex(currentRankingIndex + 1);
    } else {
      finishRanking();
    }
  };

  const finishRanking = () => {
    const tasksWithScores = tasks.map((task) => {
      const score = calculateScore(task.criteria);
      return { ...task, score };
    });

    const sorted = [...tasksWithScores].sort((a, b) => b.score - a.score);
    setResults(sorted);
    setScreen(3);
  };

  const reset = () => {
    setScreen(1);
    setTasks([]);
    setTaskInput('');
    setCurrentRankingIndex(0);
    setResults([]);
    setExpandRest(false);
  };

  // ============ SCREEN 1: INPUT TASKS ============
  if (screen === 1) {
    return (
      <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
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
          input, textarea, select {
            font-family: inherit;
          }
          * {
            transition: all 0.2s ease;
          }
          button:active {
            transform: scale(0.95);
          }
          @media (max-width: 768px) {
            body {
              font-size: 14px;
            }
          }
          @media (max-width: 480px) {
            body {
              font-size: 13px;
            }
          }
        `}</style>

        <div style={{ 
          maxWidth: '700px', 
          margin: '0 auto', 
          padding: 'clamp(20px, 5vw, 60px) clamp(12px, 5vw, 20px)',
        }}>
          <div style={{ marginBottom: 'clamp(30px, 8vw, 50px)' }}>
            <h1
              style={{
                fontSize: 'clamp(32px, 8vw, 48px)',
                fontWeight: '800',
                marginBottom: '8px',
                color: '#1a1a1a',
              }}
            >
              What's Next?
            </h1>
            <p style={{ fontSize: 'clamp(14px, 4vw, 18px)', color: '#666', fontWeight: '400' }}>
              Step 1 of 3: Add your tasks
            </p>
          </div>

          <div
            style={{
              background: '#fff',
              border: '2px solid #e0e0e0',
              borderRadius: '12px',
              padding: 'clamp(16px, 5vw, 32px)',
              marginBottom: '24px',
            }}
          >
            <label
              style={{
                display: 'block',
                fontSize: 'clamp(11px, 2.5vw, 13px)',
                fontWeight: '700',
                color: '#666',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Task Name
            </label>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '12px', 
              marginBottom: '24px',
            }}>
              <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    addTask();
                  }
                }}
                placeholder="Enter a task..."
                style={{
                  flex: 1,
                  padding: 'clamp(10px, 3vw, 14px) clamp(12px, 3vw, 16px)',
                  background: '#f8f9fa',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  color: '#1a1a1a',
                  fontSize: 'clamp(13px, 3vw, 15px)',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ff6b35';
                  e.target.style.background = '#fff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.background = '#f8f9fa';
                }}
              />
              <button
                onClick={addTask}
                style={{
                  padding: 'clamp(10px, 3vw, 14px) clamp(16px, 4vw, 28px)',
                  background: '#ff6b35',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: 'clamp(13px, 3vw, 15px)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#e85a2a';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#ff6b35';
                }}
              >
                <Plus size={18} /> Add
              </button>
            </div>

            <div style={{ marginTop: '20px', borderTop: '1px solid #e0e0e0', paddingTop: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: 'clamp(11px, 2.5vw, 13px)',
                  fontWeight: '700',
                  color: '#666',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Or Paste Multiple Tasks
              </label>
              <textarea
                id="import-textarea"
                placeholder="Paste task names (one per line)..."
                style={{
                  width: '100%',
                  padding: 'clamp(10px, 3vw, 12px)',
                  background: '#f8f9fa',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  color: '#1a1a1a',
                  fontSize: 'clamp(12px, 3vw, 14px)',
                  minHeight: '100px',
                  fontFamily: 'inherit',
                  outline: 'none',
                  resize: 'vertical',
                  marginBottom: '12px',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ff6b35';
                  e.target.style.background = '#fff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.background = '#f8f9fa';
                }}
              />
              <button
                onClick={() => {
                  const textarea = document.getElementById('import-textarea');
                  if (textarea.value.trim()) {
                    importTasks(textarea.value);
                    textarea.value = '';
                  }
                }}
                style={{
                  width: '100%',
                  padding: 'clamp(10px, 3vw, 12px)',
                  background: '#fff',
                  border: '2px solid #ff6b35',
                  borderRadius: '8px',
                  color: '#ff6b35',
                  fontWeight: '700',
                  fontSize: 'clamp(12px, 3vw, 14px)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#ff6b35';
                  e.target.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#fff';
                  e.target.style.color = '#ff6b35';
                }}
              >
                Import Tasks
              </button>
            </div>
          </div>

          {tasks.length > 0 && (
            <div
              style={{
                background: '#fff',
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                padding: 'clamp(16px, 4vw, 24px)',
                marginBottom: '24px',
              }}
            >
              <h3
                style={{
                  fontSize: 'clamp(11px, 2.5vw, 13px)',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Your Tasks ({tasks.length})
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {tasks.map((task, idx) => (
                  <div
                    key={task.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: 'clamp(8px, 2vw, 12px) clamp(10px, 2vw, 16px)',
                      background: '#f8f9fa',
                      borderRadius: '8px',
                      fontSize: 'clamp(12px, 3vw, 14px)',
                      color: '#1a1a1a',
                      gap: '12px',
                    }}
                  >
                    <span style={{ fontWeight: '500', flex: 1, minWidth: 0, wordBreak: 'break-word' }}>
                      {idx + 1}. {task.name}
                    </span>
                    <button
                      onClick={() => deleteTask(task.id)}
                      style={{
                        background: '#ffebeb',
                        border: 'none',
                        borderRadius: '6px',
                        color: '#ff4444',
                        cursor: 'pointer',
                        padding: 'clamp(4px, 1vw, 6px) clamp(6px, 1.5vw, 10px)',
                        fontSize: 'clamp(10px, 2vw, 12px)',
                        fontWeight: '600',
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#ff4444';
                        e.target.style.color = '#fff';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '#ffebeb';
                        e.target.style.color = '#ff4444';
                      }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => {
              if (tasks.length > 0) {
                setCurrentRankingIndex(0);
                setScreen(2);
              }
            }}
            disabled={tasks.length === 0}
            style={{
              width: '100%',
              padding: 'clamp(12px, 3vw, 16px)',
              background: tasks.length > 0 ? '#4CAF50' : '#ccc',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
              fontWeight: '700',
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              cursor: tasks.length > 0 ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
            }}
            onMouseEnter={(e) => {
              if (tasks.length > 0) e.target.style.background = '#45a049';
            }}
            onMouseLeave={(e) => {
              if (tasks.length > 0) e.target.style.background = '#4CAF50';
            }}
          >
            Next <ArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  // ============ SCREEN 2: RANKING ============
  if (screen === 2) {
    const currentTask = tasks[currentRankingIndex];
    const allCriteriaFilled = Object.values(currentTask.criteria).every((v) => v !== null);

    const criteriaConfig = [
      {
        field: 'impact',
        label: 'Impact',
        options: ['Low', 'Medium', 'High'],
        description: 'How much does this matter?',
        color: '#2196F3',
      },
      {
        field: 'urgency',
        label: 'Urgency',
        options: ['Later', 'Soon', 'Now'],
        description: 'How time-sensitive is this?',
        color: '#ff9800',
      },
      {
        field: 'effort',
        label: 'Effort',
        options: ['Hard', 'Medium', 'Easy'],
        description: 'How much work is required?',
        color: '#9c27b0',
      },
      {
        field: 'confidence',
        label: 'Confidence',
        options: ['Unsure', 'Sure'],
        description: 'How confident are you?',
        color: '#4CAF50',
      },
    ];

    return (
      <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
        <div style={{ 
          maxWidth: '700px', 
          margin: '0 auto', 
          padding: 'clamp(20px, 5vw, 60px) clamp(12px, 5vw, 20px)',
        }}>
          <div style={{ marginBottom: 'clamp(30px, 8vw, 40px)' }}>
            <p
              style={{
                fontSize: 'clamp(11px, 2.5vw, 13px)',
                color: '#666',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontWeight: '600',
              }}
            >
              Step 2 of 3: Rate Each Task
            </p>
            <h2
              style={{
                fontSize: 'clamp(28px, 7vw, 40px)',
                fontWeight: '800',
                marginBottom: '8px',
                color: '#1a1a1a',
                wordBreak: 'break-word',
              }}
            >
              {currentTask.name}
            </h2>
            <p
              style={{
                fontSize: 'clamp(12px, 3vw, 14px)',
                color: '#666',
              }}
            >
              Task {currentRankingIndex + 1} of {tasks.length}
            </p>
          </div>

          <div
            style={{
              width: '100%',
              height: '6px',
              background: '#e0e0e0',
              borderRadius: '3px',
              marginBottom: 'clamp(30px, 8vw, 40px)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${((currentRankingIndex + 1) / tasks.length) * 100}%`,
                background: '#4CAF50',
                transition: 'width 0.3s ease',
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 5vw, 28px)', marginBottom: 'clamp(30px, 8vw, 40px)' }}>
            {criteriaConfig.map(({ field, label, options, description, color }) => (
              <div key={field}>
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: 'clamp(13px, 3.5vw, 15px)',
                      fontWeight: '700',
                      color: '#1a1a1a',
                      marginBottom: '4px',
                    }}
                  >
                    {label}
                  </label>
                  <p style={{ fontSize: 'clamp(12px, 3vw, 13px)', color: '#666' }}>{description}</p>
                </div>

                <div style={{ 
                  display: 'flex', 
                  flexDirection: window.innerWidth < 480 ? 'column' : 'row',
                  gap: '10px',
                }}>
                  {options.map((option) => (
                    <button
                      key={option}
                      onClick={() => updateCriteria(field, option)}
                      style={{
                        flex: 1,
                        padding: 'clamp(10px, 2.5vw, 14px)',
                        background:
                          currentTask.criteria[field] === option ? color : '#fff',
                        border: `2px solid ${color}`,
                        borderRadius: '8px',
                        color: currentTask.criteria[field] === option ? '#fff' : color,
                        fontWeight: '700',
                        fontSize: 'clamp(12px, 2.5vw, 14px)',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        if (currentTask.criteria[field] !== option) {
                          e.target.style.background = '#f0f0f0';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (currentTask.criteria[field] !== option) {
                          e.target.style.background = '#fff';
                        }
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextTask}
            disabled={!allCriteriaFilled}
            style={{
              width: '100%',
              padding: 'clamp(12px, 3vw, 16px)',
              background: allCriteriaFilled ? '#4CAF50' : '#ccc',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
              fontWeight: '700',
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              cursor: allCriteriaFilled ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
            }}
            onMouseEnter={(e) => {
              if (allCriteriaFilled) e.target.style.background = '#45a049';
            }}
            onMouseLeave={(e) => {
              if (allCriteriaFilled) e.target.style.background = '#4CAF50';
            }}
          >
            {currentRankingIndex === tasks.length - 1 ? 'See Results' : 'Next Task'}{' '}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  // ============ SCREEN 3: RESULTS ============
  if (screen === 3) {
    const topTask = results[0];
    const nextTasks = results.slice(1, 4);
    const restTasks = results.slice(4);

    return (
      <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
        <div style={{ 
          maxWidth: '700px', 
          margin: '0 auto', 
          padding: 'clamp(20px, 5vw, 60px) clamp(12px, 5vw, 20px)',
        }}>
          <div style={{ marginBottom: 'clamp(30px, 8vw, 40px)' }}>
            <p
              style={{
                fontSize: 'clamp(11px, 2.5vw, 13px)',
                color: '#666',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontWeight: '600',
              }}
            >
              Step 3 of 3: Your Priority
            </p>
            <h1
              style={{
                fontSize: 'clamp(28px, 7vw, 42px)',
                fontWeight: '800',
                color: '#1a1a1a',
              }}
            >
              Do This Next
            </h1>
          </div>

          {topTask && (
            <div
              style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff8a5b 100%)',
                borderRadius: '12px',
                padding: 'clamp(16px, 5vw, 32px)',
                marginBottom: 'clamp(24px, 6vw, 32px)',
                color: '#fff',
                boxShadow: '0 10px 30px rgba(255, 107, 53, 0.2)',
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(11px, 2.5vw, 13px)',
                  fontWeight: '700',
                  marginBottom: '8px',
                  opacity: 0.9,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Priority #1
              </p>
              <h2
                style={{
                  fontSize: 'clamp(20px, 6vw, 32px)',
                  fontWeight: '800',
                  marginBottom: '20px',
                  wordBreak: 'break-word',
                }}
              >
                {topTask.name}
              </h2>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  padding: 'clamp(12px, 3vw, 16px)',
                  marginBottom: '0',
                  fontSize: 'clamp(12px, 2.5vw, 13px)',
                  lineHeight: '1.8',
                }}
              >
                <p style={{ marginBottom: '12px' }}>
                  <strong>Impact:</strong> {topTask.criteria.impact}
                </p>
                <p style={{ marginBottom: '12px' }}>
                  <strong>Urgency:</strong> {topTask.criteria.urgency}
                </p>
                <p style={{ marginBottom: '12px' }}>
                  <strong>Effort:</strong> {topTask.criteria.effort}
                </p>
                <p>
                  <strong>Confidence:</strong> {topTask.criteria.confidence}
                </p>
              </div>
            </div>
          )}

          {nextTasks.length > 0 && (
            <div style={{ marginBottom: 'clamp(24px, 6vw, 32px)' }}>
              <h3
                style={{
                  fontSize: 'clamp(12px, 3vw, 14px)',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                What's After
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {nextTasks.map((task, idx) => (
                  <div
                    key={task.id}
                    style={{
                      background: '#fff',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      padding: 'clamp(12px, 3vw, 16px)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'clamp(12px, 3vw, 16px)',
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background:
                          idx === 0 ? '#E3F2FD' : idx === 1 ? '#F3E5F5' : '#E8F5E9',
                        color: idx === 0 ? '#2196F3' : idx === 1 ? '#9c27b0' : '#4CAF50',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '700',
                        fontSize: '16px',
                        flexShrink: 0,
                      }}
                    >
                      #{idx + 2}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p
                        style={{
                          fontSize: 'clamp(13px, 3vw, 15px)',
                          fontWeight: '700',
                          color: '#1a1a1a',
                          marginBottom: '4px',
                          wordBreak: 'break-word',
                        }}
                      >
                        {task.name}
                      </p>
                      <p style={{ fontSize: 'clamp(11px, 2.5vw, 12px)', color: '#666' }}>
                        {task.criteria.impact} impact • {task.criteria.urgency}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {restTasks.length > 0 && (
            <div style={{ marginBottom: 'clamp(24px, 6vw, 32px)' }}>
              <button
                onClick={() => setExpandRest(!expandRest)}
                style={{
                  width: '100%',
                  padding: 'clamp(12px, 3vw, 14px) clamp(12px, 3vw, 16px)',
                  background: '#fff',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: 'clamp(12px, 3vw, 14px)',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  gap: '12px',
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#ff6b35';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                }}
              >
                <span>View remaining {restTasks.length} tasks</span>
                <ChevronDown
                  size={18}
                  style={{
                    transform: expandRest ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    flexShrink: 0,
                  }}
                />
              </button>

              {expandRest && (
                <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {restTasks.map((task, idx) => (
                    <div
                      key={task.id}
                      style={{
                        background: '#fff',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        padding: 'clamp(10px, 2.5vw, 12px) clamp(12px, 3vw, 16px)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                    >
                      <div
                        style={{
                          fontSize: 'clamp(11px, 2.5vw, 12px)',
                          fontWeight: '700',
                          color: '#999',
                          minWidth: '30px',
                        }}
                      >
                        #{idx + 5}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p
                          style={{
                            fontSize: 'clamp(12px, 3vw, 14px)',
                            fontWeight: '600',
                            color: '#1a1a1a',
                            wordBreak: 'break-word',
                          }}
                        >
                          {task.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <button
            onClick={reset}
            style={{
              width: '100%',
              padding: 'clamp(12px, 3vw, 16px)',
              background: '#fff',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              color: '#1a1a1a',
              fontWeight: '700',
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#ff6b35';
              e.target.style.color = '#ff6b35';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = '#e0e0e0';
              e.target.style.color = '#1a1a1a';
            }}
          >
            <RotateCcw size={18} /> Start Over
          </button>
        </div>
      </div>
    );
  }
}
