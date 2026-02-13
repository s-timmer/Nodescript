import { Check, X, AlertCircle, Info, ChevronDown, Search, User, Settings, Bell, Lock, Users, Plus, Minus, ArrowRight, Eye, EyeOff } from "lucide-react";

export function StyleTile() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen p-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 style={{ 
            fontSize: 'var(--text-h1)', 
            fontWeight: 'var(--font-weight-extra-bold)',
            color: 'var(--foreground)',
            marginBottom: '8px'
          }}>
            NodeScript Design System
          </h1>
          <p style={{ 
            fontSize: 'var(--text-base)', 
            color: 'var(--muted-foreground)'
          }}>
            Comprehensive style guide and component library
          </p>
        </div>

        <div className="border-t border-[#d5dadd] mb-8" />

        {/* Section 1: Typography */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-full w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
              <span style={{ color: 'var(--primary-foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-semi-bold)' }}>1</span>
            </div>
            <h2 style={{ 
              fontSize: 'var(--text-h3)', 
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--muted-foreground)'
            }}>
              Typography
            </h2>
          </div>

          <div className="border-t border-[#d5dadd] mb-8" />

          <div className="grid grid-cols-2 gap-8">
            {/* Headings */}
            <div className="space-y-6">
              <div>
                <h1 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-weight-extra-bold)', color: 'var(--foreground)' }}>
                  Build & Deploy
                </h1>
                <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginTop: '4px' }}>H1: 48px, weight 800</p>
              </div>

              <div>
                <h2 style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--foreground)' }}>
                  Create scalable backends
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginTop: '4px' }}>H2: 24px, weight 600</p>
              </div>

              <div>
                <h3 style={{ fontSize: 'var(--text-h2)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--foreground)' }}>
                  Visual workflow editor
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginTop: '4px' }}>H3: 20px, weight 600</p>
              </div>

              <div>
                <h4 style={{ fontSize: 'var(--text-h4)', fontWeight: 'var(--font-weight-semi-bold)', color: 'var(--foreground)' }}>
                  Component library
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginTop: '4px' }}>H4: 16px, weight 600</p>
              </div>
            </div>

            {/* Body text & special formats */}
            <div className="space-y-6">
              <div>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--foreground)', lineHeight: '1.5' }}>
                  NodeScript offers unparalleled power and simplicity. Our platform is designed to help you build robust applications faster.
                </p>
                <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginTop: '4px' }}>Body: 16px, weight 400</p>
              </div>

              <div>
                <p style={{ fontSize: 'var(--text-label)', color: 'var(--muted-foreground)', lineHeight: '1.4' }}>
                  Labels and helper text use a smaller font size for subtle guidance without overwhelming the main content.
                </p>
                <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginTop: '4px' }}>Label: 14px, weight 400</p>
              </div>

              <div>
                <code style={{ 
                  fontSize: '14px', 
                  color: 'var(--foreground)', 
                  backgroundColor: 'var(--muted)',
                  padding: '2px 6px',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'Monaco, monospace'
                }}>
                  const api = new NodeScript()
                </code>
                <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginTop: '4px' }}>Code: 14px, monospace</p>
              </div>

              <div>
                <a href="#" style={{ 
                  fontSize: 'var(--text-base)', 
                  color: '#ff4672',
                  textDecoration: 'none',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  This is an example text link →
                </a>
                <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginTop: '4px' }}>Link: 16px, weight 500, #ff4672</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Colors */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-full w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
              <span style={{ color: 'var(--primary-foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-semi-bold)' }}>2</span>
            </div>
            <h2 style={{ 
              fontSize: 'var(--text-h3)', 
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--muted-foreground)'
            }}>
              Color Palette
            </h2>
          </div>

          <div className="border-t border-[#d5dadd] mb-8" />

          <div className="grid grid-cols-5 gap-6">
            {/* Primary Blue */}
            <div>
              <div className="w-full h-24 rounded-lg border-2 border-[#d5dadd]" style={{ backgroundColor: '#007BD3' }} />
              <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginTop: '8px', fontWeight: 'var(--font-weight-medium)' }}>Primary</p>
              <p style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>#007BD3</p>
            </div>

            {/* Pink */}
            <div>
              <div className="w-full h-24 rounded-lg" style={{ backgroundColor: '#FF4672' }} />
              <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginTop: '8px', fontWeight: 'var(--font-weight-medium)' }}>Accent</p>
              <p style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>#FF4672</p>
            </div>

            {/* Gradient 1 */}
            <div>
              <div className="w-full h-24 rounded-lg" style={{ background: 'linear-gradient(to bottom, #A4D9FF, #FFBFCE)' }} />
              <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginTop: '8px', fontWeight: 'var(--font-weight-medium)' }}>Gradient 1</p>
              <p style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>Light variant</p>
            </div>

            {/* Gradient 2 */}
            <div>
              <div className="w-full h-24 rounded-lg" style={{ background: 'linear-gradient(to bottom, #FF4672, #57B9FF)' }} />
              <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginTop: '8px', fontWeight: 'var(--font-weight-medium)' }}>Gradient 2</p>
              <p style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>Bold variant</p>
            </div>

            {/* Background */}
            <div>
              <div className="w-full h-24 rounded-lg border-2 border-[#d5dadd]" style={{ backgroundColor: '#F9F9F9' }} />
              <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginTop: '8px', fontWeight: 'var(--font-weight-medium)' }}>Background</p>
              <p style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>#F9F9F9</p>
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="mt-8">
            <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginBottom: '12px', fontWeight: 'var(--font-weight-semi-bold)' }}>Semantic Colors</p>
            <div className="grid grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#00a651' }}>
                  <Check size={20} color="white" />
                </div>
                <div>
                  <p style={{ fontSize: '14px', color: 'var(--foreground)', fontWeight: 'var(--font-weight-medium)' }}>Success</p>
                  <p style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>#00a651</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#dc2626' }}>
                  <X size={20} color="white" />
                </div>
                <div>
                  <p style={{ fontSize: '14px', color: 'var(--foreground)', fontWeight: 'var(--font-weight-medium)' }}>Error</p>
                  <p style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>#dc2626</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#f59e0b' }}>
                  <AlertCircle size={20} color="white" />
                </div>
                <div>
                  <p style={{ fontSize: '14px', color: 'var(--foreground)', fontWeight: 'var(--font-weight-medium)' }}>Warning</p>
                  <p style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>#f59e0b</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#007BD3' }}>
                  <Info size={20} color="white" />
                </div>
                <div>
                  <p style={{ fontSize: '14px', color: 'var(--foreground)', fontWeight: 'var(--font-weight-medium)' }}>Info</p>
                  <p style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>#007BD3</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Buttons */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-full w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
              <span style={{ color: 'var(--primary-foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-semi-bold)' }}>3</span>
            </div>
            <h2 style={{ 
              fontSize: 'var(--text-h3)', 
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--muted-foreground)'
            }}>
              Buttons
            </h2>
          </div>

          <div className="border-t border-[#d5dadd] mb-8" />

          <div className="space-y-8">
            {/* Primary Buttons */}
            <div>
              <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginBottom: '12px', fontWeight: 'var(--font-weight-semi-bold)' }}>Primary Buttons</p>
              <div className="flex items-center gap-4">
                <button style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-button)',
                  border: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: 'pointer'
                }}>
                  Primary Button
                </button>

                <button style={{
                  background: 'linear-gradient(to bottom, #FF4672 64.444%, #57B9FF 160%)',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-button)',
                  border: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: 'pointer'
                }}>
                  Gradient Hover
                </button>

                <button style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-button)',
                  border: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: 'not-allowed',
                  opacity: 0.5
                }}>
                  Disabled
                </button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div>
              <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginBottom: '12px', fontWeight: 'var(--font-weight-semi-bold)' }}>Secondary Buttons</p>
              <div className="flex items-center gap-4">
                <button style={{
                  backgroundColor: 'var(--secondary)',
                  color: 'var(--secondary-foreground)',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-button)',
                  border: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: 'pointer'
                }}>
                  Secondary
                </button>

                <button style={{
                  backgroundColor: 'transparent',
                  color: 'var(--foreground)',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-button)',
                  border: '1px solid var(--border)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: 'pointer'
                }}>
                  Outline
                </button>

                <button style={{
                  backgroundColor: 'transparent',
                  color: 'var(--foreground)',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-button)',
                  border: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: 'pointer'
                }}>
                  Ghost
                </button>
              </div>
            </div>

            {/* Button Sizes */}
            <div>
              <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginBottom: '12px', fontWeight: 'var(--font-weight-semi-bold)' }}>Button Sizes</p>
              <div className="flex items-center gap-4">
                <button style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-button)',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: 'pointer'
                }}>
                  Small
                </button>

                <button style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-button)',
                  border: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: 'pointer'
                }}>
                  Medium
                </button>

                <button style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  padding: '16px 32px',
                  borderRadius: 'var(--radius-button)',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: 'pointer'
                }}>
                  Large
                </button>
              </div>
            </div>

            {/* Icon Buttons */}
            <div>
              <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginBottom: '12px', fontWeight: 'var(--font-weight-semi-bold)' }}>Icon Buttons</p>
              <div className="flex items-center gap-4">
                <button style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-button)',
                  border: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Plus size={16} />
                  Create Graph
                </button>

                <button style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  padding: '10px',
                  borderRadius: 'var(--radius-button)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Settings size={20} />
                </button>

                <button style={{
                  backgroundColor: 'transparent',
                  color: 'var(--foreground)',
                  padding: '10px',
                  borderRadius: 'var(--radius-button)',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Form Elements */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-full w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
              <span style={{ color: 'var(--primary-foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-semi-bold)' }}>4</span>
            </div>
            <h2 style={{ 
              fontSize: 'var(--text-h3)', 
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--muted-foreground)'
            }}>
              Form Elements
            </h2>
          </div>

          <div className="border-t border-[#d5dadd] mb-8" />

          <div className="grid grid-cols-2 gap-8">
            {/* Input Fields */}
            <div className="space-y-6">
              <div>
                <label style={{ 
                  fontSize: 'var(--text-label)', 
                  color: 'var(--foreground)',
                  fontWeight: 'var(--font-weight-medium)',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  Text Input
                </label>
                <input 
                  type="text" 
                  placeholder="Enter text here..."
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    fontSize: 'var(--text-base)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-input)',
                    backgroundColor: 'var(--input-background)',
                    color: 'var(--foreground)'
                  }}
                />
                <p style={{ fontSize: '12px', color: 'var(--muted-foreground)', marginTop: '4px' }}>Helper text goes here</p>
              </div>

              <div>
                <label style={{ 
                  fontSize: 'var(--text-label)', 
                  color: 'var(--foreground)',
                  fontWeight: 'var(--font-weight-medium)',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  Select Dropdown
                </label>
                <div style={{ position: 'relative' }}>
                  <select style={{
                    width: '100%',
                    padding: '10px 36px 10px 12px',
                    fontSize: 'var(--text-base)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-input)',
                    backgroundColor: 'var(--input-background)',
                    color: 'var(--foreground)',
                    appearance: 'none'
                  }}>
                    <option>Select an option</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <ChevronDown size={16} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted-foreground)', pointerEvents: 'none' }} />
                </div>
              </div>

              <div>
                <label style={{ 
                  fontSize: 'var(--text-label)', 
                  color: 'var(--foreground)',
                  fontWeight: 'var(--font-weight-medium)',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  Textarea
                </label>
                <textarea 
                  placeholder="Enter multiline text..."
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    fontSize: 'var(--text-base)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-input)',
                    backgroundColor: 'var(--input-background)',
                    color: 'var(--foreground)',
                    resize: 'vertical'
                  }}
                />
              </div>
            </div>

            {/* Checkboxes & Radio */}
            <div className="space-y-6">
              <div>
                <p style={{ 
                  fontSize: 'var(--text-label)', 
                  color: 'var(--foreground)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: '12px'
                }}>
                  Checkboxes
                </p>
                <div className="space-y-3">
                  {['Option 1', 'Option 2', 'Option 3'].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: 'var(--radius-checkbox)',
                          border: '1px solid var(--border)',
                          cursor: 'pointer'
                        }}
                      />
                      <span style={{ fontSize: 'var(--text-base)', color: 'var(--foreground)' }}>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p style={{ 
                  fontSize: 'var(--text-label)', 
                  color: 'var(--foreground)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: '12px'
                }}>
                  Radio Buttons
                </p>
                <div className="space-y-3">
                  {['Choice A', 'Choice B', 'Choice C'].map((choice) => (
                    <label key={choice} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="radio-group"
                        style={{
                          width: '16px',
                          height: '16px',
                          cursor: 'pointer'
                        }}
                      />
                      <span style={{ fontSize: 'var(--text-base)', color: 'var(--foreground)' }}>{choice}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p style={{ 
                  fontSize: 'var(--text-label)', 
                  color: 'var(--foreground)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: '12px'
                }}>
                  Toggle Switch
                </p>
                <label className="flex items-center gap-3 cursor-pointer">
                  <div style={{
                    width: '44px',
                    height: '24px',
                    backgroundColor: 'var(--switch-background)',
                    borderRadius: '12px',
                    position: 'relative',
                    transition: 'background-color 0.2s'
                  }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      position: 'absolute',
                      top: '2px',
                      left: '2px',
                      transition: 'transform 0.2s',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }} />
                  </div>
                  <span style={{ fontSize: 'var(--text-base)', color: 'var(--foreground)' }}>Enable feature</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Components */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-full w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
              <span style={{ color: 'var(--primary-foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-semi-bold)' }}>5</span>
            </div>
            <h2 style={{ 
              fontSize: 'var(--text-h3)', 
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--muted-foreground)'
            }}>
              Components
            </h2>
          </div>

          <div className="border-t border-[#d5dadd] mb-8" />

          <div className="space-y-8">
            {/* Badges */}
            <div>
              <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginBottom: '12px', fontWeight: 'var(--font-weight-semi-bold)' }}>Badges</p>
              <div className="flex items-center gap-3">
                <span style={{
                  padding: '4px 12px',
                  borderRadius: 'var(--radius)',
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  fontSize: '12px',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  Primary
                </span>

                <span style={{
                  padding: '4px 12px',
                  borderRadius: 'var(--radius)',
                  backgroundColor: '#00a651',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  Success
                </span>

                <span style={{
                  padding: '4px 12px',
                  borderRadius: 'var(--radius)',
                  backgroundColor: '#f59e0b',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  Warning
                </span>

                <span style={{
                  padding: '4px 12px',
                  borderRadius: 'var(--radius)',
                  backgroundColor: '#dc2626',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  Error
                </span>

                <span style={{
                  padding: '4px 12px',
                  borderRadius: 'var(--radius)',
                  backgroundColor: 'var(--muted)',
                  color: 'var(--muted-foreground)',
                  fontSize: '12px',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  Neutral
                </span>

                <span style={{
                  padding: '4px 12px',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)',
                  backgroundColor: 'transparent',
                  color: 'var(--foreground)',
                  fontSize: '12px',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  Outline
                </span>
              </div>
            </div>

            {/* Cards */}
            <div>
              <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginBottom: '12px', fontWeight: 'var(--font-weight-semi-bold)' }}>Cards</p>
              <div className="grid grid-cols-3 gap-6">
                {/* Basic Card */}
                <div style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-card)',
                  padding: '20px'
                }}>
                  <h3 style={{ 
                    fontSize: 'var(--text-h4)', 
                    fontWeight: 'var(--font-weight-semi-bold)',
                    color: 'var(--card-foreground)',
                    marginBottom: '8px'
                  }}>
                    Card Title
                  </h3>
                  <p style={{ 
                    fontSize: 'var(--text-label)', 
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.5'
                  }}>
                    This is a basic card component with title and description.
                  </p>
                </div>

                {/* Card with Shadow */}
                <div style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-card)',
                  padding: '20px',
                  boxShadow: 'var(--elevation-sm)'
                }}>
                  <h3 style={{ 
                    fontSize: 'var(--text-h4)', 
                    fontWeight: 'var(--font-weight-semi-bold)',
                    color: 'var(--card-foreground)',
                    marginBottom: '8px'
                  }}>
                    Elevated Card
                  </h3>
                  <p style={{ 
                    fontSize: 'var(--text-label)', 
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.5'
                  }}>
                    Card with elevation shadow for depth.
                  </p>
                </div>

                {/* Interactive Card */}
                <div style={{
                  backgroundColor: 'var(--card)',
                  border: '2px solid var(--border)',
                  borderRadius: 'var(--radius-card)',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s'
                }}>
                  <h3 style={{ 
                    fontSize: 'var(--text-h4)', 
                    fontWeight: 'var(--font-weight-semi-bold)',
                    color: 'var(--card-foreground)',
                    marginBottom: '8px'
                  }}>
                    Interactive Card
                  </h3>
                  <p style={{ 
                    fontSize: 'var(--text-label)', 
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.5'
                  }}>
                    Card with hover and focus states.
                  </p>
                </div>
              </div>
            </div>

            {/* Avatars */}
            <div>
              <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginBottom: '12px', fontWeight: 'var(--font-weight-semi-bold)' }}>Avatars</p>
              <div className="flex items-center gap-4">
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#007BD3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  JD
                </div>

                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#FF4672',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  AS
                </div>

                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#00a651',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  MK
                </div>

                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '2px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <User size={20} color="var(--muted-foreground)" />
                </div>
              </div>
            </div>

            {/* Status Indicators */}
            <div>
              <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginBottom: '12px', fontWeight: 'var(--font-weight-semi-bold)' }}>Status Indicators</p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00a651' }} />
                  <span style={{ fontSize: 'var(--text-label)', color: 'var(--foreground)' }}>Active</span>
                </div>

                <div className="flex items-center gap-2">
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                  <span style={{ fontSize: 'var(--text-label)', color: 'var(--foreground)' }}>Pending</span>
                </div>

                <div className="flex items-center gap-2">
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#dc2626' }} />
                  <span style={{ fontSize: 'var(--text-label)', color: 'var(--foreground)' }}>Error</span>
                </div>

                <div className="flex items-center gap-2">
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--muted-foreground)' }} />
                  <span style={{ fontSize: 'var(--text-label)', color: 'var(--foreground)' }}>Inactive</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Icons */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-full w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
              <span style={{ color: 'var(--primary-foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-semi-bold)' }}>6</span>
            </div>
            <h2 style={{ 
              fontSize: 'var(--text-h3)', 
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--muted-foreground)'
            }}>
              Icons
            </h2>
          </div>

          <div className="border-t border-[#d5dadd] mb-8" />

          <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginBottom: '16px' }}>
            Using Lucide React icon library
          </p>

          <div className="grid grid-cols-8 gap-6">
            {[
              { Icon: User, label: 'User' },
              { Icon: Users, label: 'Users' },
              { Icon: Settings, label: 'Settings' },
              { Icon: Search, label: 'Search' },
              { Icon: Bell, label: 'Bell' },
              { Icon: Lock, label: 'Lock' },
              { Icon: Check, label: 'Check' },
              { Icon: X, label: 'X' },
              { Icon: Plus, label: 'Plus' },
              { Icon: Minus, label: 'Minus' },
              { Icon: ArrowRight, label: 'Arrow' },
              { Icon: ChevronDown, label: 'Chevron' },
              { Icon: AlertCircle, label: 'Alert' },
              { Icon: Info, label: 'Info' },
              { Icon: Eye, label: 'Eye' },
              { Icon: EyeOff, label: 'EyeOff' }
            ].map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div style={{
                  width: '48px',
                  height: '48px',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={24} color="var(--foreground)" />
                </div>
                <span style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Spacing & Sizing */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-full w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
              <span style={{ color: 'var(--primary-foreground)', fontSize: '14px', fontWeight: 'var(--font-weight-semi-bold)' }}>7</span>
            </div>
            <h2 style={{ 
              fontSize: 'var(--text-h3)', 
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--muted-foreground)'
            }}>
              Spacing & Sizing
            </h2>
          </div>

          <div className="border-t border-[#d5dadd] mb-8" />

          <div className="grid grid-cols-2 gap-8">
            {/* Border Radius */}
            <div>
              <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginBottom: '12px', fontWeight: 'var(--font-weight-semi-bold)' }}>Border Radius</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'var(--primary)',
                    borderRadius: 'var(--radius-checkbox)'
                  }} />
                  <div>
                    <p style={{ fontSize: 'var(--text-label)', color: 'var(--foreground)', fontWeight: 'var(--font-weight-medium)' }}>Checkbox</p>
                    <p style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>2px</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'var(--primary)',
                    borderRadius: 'var(--radius)'
                  }} />
                  <div>
                    <p style={{ fontSize: 'var(--text-label)', color: 'var(--foreground)', fontWeight: 'var(--font-weight-medium)' }}>Default</p>
                    <p style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>6px</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'var(--primary)',
                    borderRadius: '12px'
                  }} />
                  <div>
                    <p style={{ fontSize: 'var(--text-label)', color: 'var(--foreground)', fontWeight: 'var(--font-weight-medium)' }}>Large</p>
                    <p style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>12px</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'var(--primary)',
                    borderRadius: '50%'
                  }} />
                  <div>
                    <p style={{ fontSize: 'var(--text-label)', color: 'var(--foreground)', fontWeight: 'var(--font-weight-medium)' }}>Circle</p>
                    <p style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>50%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shadows */}
            <div>
              <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', marginBottom: '12px', fontWeight: 'var(--font-weight-semi-bold)' }}>Shadows</p>
              <div className="space-y-4">
                <div style={{
                  width: '100%',
                  height: '60px',
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-card)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '16px'
                }}>
                  <p style={{ fontSize: 'var(--text-label)', color: 'var(--foreground)' }}>None</p>
                </div>

                <div style={{
                  width: '100%',
                  height: '60px',
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-card)',
                  boxShadow: 'var(--elevation-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '16px'
                }}>
                  <p style={{ fontSize: 'var(--text-label)', color: 'var(--foreground)' }}>Small (elevation-sm)</p>
                </div>

                <div style={{
                  width: '100%',
                  height: '60px',
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-card)',
                  boxShadow: '0px 8px 12px 0px rgba(0,0,0,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '16px'
                }}>
                  <p style={{ fontSize: 'var(--text-label)', color: 'var(--foreground)' }}>Medium</p>
                </div>

                <div style={{
                  width: '100%',
                  height: '60px',
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-card)',
                  boxShadow: '0px 16px 24px 0px rgba(0,0,0,0.20)',
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '16px'
                }}>
                  <p style={{ fontSize: 'var(--text-label)', color: 'var(--foreground)' }}>Large</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-black pt-4 mt-16">
          <p style={{ fontSize: '12px', color: 'var(--foreground)' }}>
            NodeScript Design System v2.0 - Comprehensive Style Guide
          </p>
        </div>
      </div>
    </div>
  );
}
