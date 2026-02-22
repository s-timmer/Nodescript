// @ts-nocheck
import { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { RefreshCw, CreditCard, Mail, BarChart3, Bot, Bell, Play } from "lucide-react";
import svgPaths from "../imports/svg-vs0fjwe6bn";
import browserSvgPaths from "../imports/svg-9iv4u64kbg";
import imgImage from "figma:asset/3965bf9afc4eeabcde5973519cf49419d0ed12ba.png";
import imgImage1 from "figma:asset/3d6ce4d8c0bff6a537c1405794b17063a14a6ad6.png";
import imgImage24 from "figma:asset/82d160f20c6ca72aa70244ca210178fc6262a8c1.png";
import imgImage2 from "figma:asset/49ceccdc91ca1cb9e60fe151e061ada8b64b228e.png";
import imgScreenshot20250123At2148221 from "figma:asset/95cec1c58da02ff242713a80d8f9cfe292eba2aa.png";
import imgScreenshot20250123At2145041 from "figma:asset/c31afdf943884657f512dc09047bf01994de94ec.png";
import imgScreenshot20250123At2142262 from "figma:asset/56c894c8b579314a67d6ccac3e133a1dd3315ad7.png";
import imgScreenshot20250123At2145211 from "figma:asset/9299954e0f157d0289709de815f51b81fd133457.png";
import imgScreenshot20250123At2144561 from "figma:asset/2f33fa12010e91b6eb58980602310c16feda6f81.png";
import imgScreenshot20250111At2205391 from "figma:asset/d25ed1140169fbd397611770a3f244c9810f129a.png";
import imgScreenshot20250111At2200001 from "figma:asset/3a3aa2d5cca7ddd31dd4d7c9f2589cd68a6d492f.png";
import videoThumbnail from "figma:asset/92e7e22e879e120664978319210ca5d07febeaf9.png";
import graphScreenshot from "figma:asset/4c152a87584e86a1e904c8a6704c14bc9e27fa13.png";
import imgSarah from "figma:asset/522245272a5ca97a9b30ae5039268fdd6dd0aec1.png";
import imgMarcus from "figma:asset/4d280cbc77de0c370a9b2120064ce2a3e7154e6e.png";
import imgPriya from "figma:asset/ae18f919b0a99057243f30a2299ebff7ff6bf2f1.png";

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: 'var(--landing-bg-dark)' }}>
      {/* Navigation */}
      <nav 
        className="sticky top-0 z-50"
        style={{ 
          backgroundColor: 'var(--landing-bg-dark)',
          borderBottom: '1px solid var(--landing-border-light)'
        }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-12">
          <div className="flex items-center gap-2">
            <svg className="block h-6 w-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Group">
                <path d={svgPaths.p1} fill="white" id="Vector" />
                <path d={svgPaths.p2} fill="white" id="Vector_2" />
              </g>
            </svg>
            <span style={{ 
              color: 'var(--landing-text-white)', 
              fontSize: 'var(--landing-text-lg)',
              fontWeight: 'var(--font-weight-medium)'
            }}>
              NodeScript
            </span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#features" style={{ color: 'var(--landing-text-white)', fontSize: 'var(--landing-text-base)', fontWeight: 'var(--font-weight-normal)', textDecoration: 'none' }}>Features</a>
            <a href="#integrations" style={{ color: 'var(--landing-text-white)', fontSize: 'var(--landing-text-base)', fontWeight: 'var(--font-weight-normal)', textDecoration: 'none' }}>Integrations</a>
            <a href="#pricing" style={{ color: 'var(--landing-text-white)', fontSize: 'var(--landing-text-base)', fontWeight: 'var(--font-weight-normal)', textDecoration: 'none' }}>Pricing</a>
            <a href="#" style={{ color: 'var(--landing-text-white)', fontSize: 'var(--landing-text-base)', fontWeight: 'var(--font-weight-normal)', textDecoration: 'none' }}>Docs</a>
            <button
              onClick={onGetStarted}
              className="px-4 py-2"
              style={{
                backgroundColor: 'var(--landing-bg-white)',
                color: 'var(--landing-text-dark)',
                fontSize: 'var(--landing-text-base)',
                fontWeight: 'var(--font-weight-medium)',
                borderRadius: 'var(--radius-button)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Start building
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="py-24 relative overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(99, 102, 241, 0.1), transparent 70%)'
        }}
      >
        {/* Decorative gradient orbs */}
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--landing-gradient-start), transparent)',
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--landing-gradient-end), transparent)',
          }}
        />

        <div className="mx-auto max-w-7xl px-12 relative z-10">
          {/* Text Content - Centered */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 
              style={{
                background: 'linear-gradient(90deg, var(--landing-gradient-start) 0%, var(--landing-gradient-end) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: 'var(--landing-text-hero)',
                lineHeight: 'var(--landing-line-tight)',
                letterSpacing: 'var(--landing-spacing-hero)',
                fontWeight: 'var(--font-weight-normal)',
                marginBottom: '32px',
                maxWidth: '1100px',
                marginLeft: 'auto',
                marginRight: 'auto',
                filter: 'drop-shadow(0 0 40px rgba(99, 102, 241, 0.3))'
              }}
            >
              Build production workflows without managing infrastructure
            </h1>
            
            <p style={{
              color: 'var(--landing-text-description)',
              fontSize: 'var(--landing-text-xl)',
              lineHeight: 'var(--landing-line-normal)',
              fontWeight: 'var(--font-weight-normal)',
              marginBottom: '48px',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Visual programming platform that turns complex integrations into simple workflows. Deploy production-ready APIs in minutes, not weeks.
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={onGetStarted}
                className="px-6 py-4"
                style={{
                  backgroundColor: 'var(--landing-gradient-start)',
                  color: 'var(--landing-text-white)',
                  fontSize: 'var(--landing-text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  borderRadius: 'var(--radius-button)',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 0 30px rgba(255, 70, 114, 0.3)'
                }}
              >
                Start building for free
              </button>
              <button
                className="px-6 py-4"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--landing-text-white)',
                  fontSize: 'var(--landing-text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  borderRadius: 'var(--radius-button)',
                  border: '1px solid var(--landing-border-light)',
                  cursor: 'pointer'
                }}
              >
                Learn more
              </button>
            </div>

            <p style={{
              color: 'var(--landing-text-subtle)',
              fontSize: 'var(--landing-text-sm)',
              fontWeight: 'var(--font-weight-normal)'
            }}>
              No credit card required • Free tier includes 10,000 monthly executions
            </p>
          </motion.div>

          {/* Video Card - Below */}
          <motion.div
            className="relative mx-auto"
            style={{
              maxWidth: '900px'
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
              <div
                className="relative"
                style={{
                  borderRadius: 'var(--radius-card)',
                  overflow: 'hidden',
                  boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                }}
              >
                {/* Glow effect behind card */}
                <div 
                  className="absolute inset-0 blur-3xl opacity-20 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, var(--landing-gradient-start), var(--landing-gradient-end))',
                    transform: 'scale(1.1)'
                  }}
                />
                
                {/* Video Thumbnail */}
                <div className="relative">
                  <img 
                    src={videoThumbnail}
                    alt="NodeScript demo video"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />

                  {/* Dark overlay for readability */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.6) 100%)'
                    }}
                  />

                  {/* Text Overlay at Bottom Center */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 p-6 text-center"
                  >
                    <p style={{
                      color: 'var(--landing-text-white)',
                      fontSize: 'var(--landing-text-lg)',
                      fontWeight: 'var(--font-weight-medium)',
                      textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
                    }}>
                      NodeScript explained in 60 seconds
                    </p>
                  </div>

                  {/* Play Button Overlay */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  >
                    <div 
                      className="transition-transform group-hover:scale-110"
                      style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: 'var(--landing-gradient-end)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 32px rgba(0, 123, 211, 0.5)',
                        border: '2px solid rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <Play 
                        style={{
                          width: '48px',
                          height: '48px',
                          color: 'white',
                          marginLeft: '6px'
                        }}
                        fill="white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--landing-bg-dark)', borderTop: '1px solid var(--landing-border-light)', borderBottom: '1px solid var(--landing-border-light)' }}>
        <div className="mx-auto max-w-7xl px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p style={{
              color: 'var(--landing-text-subtle)',
              fontSize: 'var(--landing-text-sm)',
              fontWeight: 'var(--font-weight-normal)',
              textAlign: 'center',
              marginBottom: '32px'
            }}>
              Trusted by development teams at
            </p>
            
            <div className="flex items-center justify-center gap-12 flex-wrap">
              {['TechFlow', 'DataCore', 'Streamline', 'CloudSync', 'DevOps Pro'].map((company, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <p style={{
                    color: 'var(--landing-text-description)',
                    fontSize: 'var(--landing-text-lg)',
                    fontWeight: 'var(--font-weight-medium)'
                  }}>
                    {company}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--landing-bg-light)' }}>
        <div className="mx-auto max-w-7xl px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{
              color: 'var(--landing-text-dark)',
              fontSize: 'var(--landing-text-display)',
              lineHeight: 'var(--landing-line-tight)',
              letterSpacing: 'var(--landing-spacing-display)',
              fontWeight: 'var(--font-weight-normal)',
              marginBottom: '48px',
              textAlign: 'center',
              maxWidth: '900px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Building integrations shouldn't require an engineering team
            </h2>

            <div className="grid gap-8 md:grid-cols-3 mb-16">
              {[
                {
                  title: 'Infrastructure complexity',
                  description: 'Setting up servers, databases, queues, and monitoring just to connect two APIs costs days of work.'
                },
                {
                  title: 'Deployment overhead',
                  description: 'Hours spent on CI/CD pipelines, container orchestration, and production deployments slow down simple integrations.'
                },
                {
                  title: 'Maintenance burden',
                  description: 'Constant dependency updates, security patches, and scaling issues distract from building features that matter.'
                }
              ].map((problem, idx) => (
                <motion.div
                  key={idx}
                  className="p-8"
                  style={{
                    backgroundColor: 'var(--landing-bg-white)',
                    borderRadius: 'var(--radius-card)',
                    border: '1px solid var(--landing-border-card)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <p style={{
                    color: 'var(--landing-text-dark)',
                    fontSize: 'var(--landing-text-lg)',
                    fontWeight: 'var(--font-weight-semi-bold)',
                    marginBottom: '12px'
                  }}>
                    {problem.title}
                  </p>
                  <p style={{
                    color: 'var(--landing-text-muted)',
                    fontSize: 'var(--landing-text-base)',
                    lineHeight: 'var(--landing-line-relaxed)',
                    fontWeight: 'var(--font-weight-normal)'
                  }}>
                    {problem.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <p style={{
              color: 'var(--landing-text-muted)',
              fontSize: 'var(--landing-text-xl)',
              lineHeight: 'var(--landing-line-relaxed)',
              fontWeight: 'var(--font-weight-normal)',
              textAlign: 'center',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              You need to ship integrations fast. NodeScript removes everything between your idea and production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works / Visual Demo Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--landing-bg-white)' }}>
        <div className="mx-auto max-w-7xl px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-16 text-center">
              <h2 style={{
                color: 'var(--landing-text-dark)',
                fontSize: 'var(--landing-text-display)',
                lineHeight: 'var(--landing-line-tight)',
                letterSpacing: 'var(--landing-spacing-display)',
                fontWeight: 'var(--font-weight-normal)',
                marginBottom: '24px'
              }}>
                Build workflows visually, deploy them instantly
              </h2>

              <p style={{
                color: 'var(--landing-text-muted)',
                fontSize: 'var(--landing-text-xl)',
                lineHeight: 'var(--landing-line-relaxed)',
                fontWeight: 'var(--font-weight-normal)',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                Drag nodes, connect services, and ship production-ready APIs in minutes.
              </p>
            </div>

            {/* Browser Mockup */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--landing-border-card)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
              }}
            >
              {/* Browser Chrome */}
              <div style={{
                backgroundColor: 'var(--landing-bg-browser)',
                padding: '12px 16px',
                borderBottom: '1px solid var(--landing-border-card)'
              }}>
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f56' }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ffbd2e' }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#27c93f' }} />
                  </div>
                  <div 
                    className="ml-4 px-4 py-1 flex-1"
                    style={{
                      backgroundColor: 'var(--landing-bg-white)',
                      borderRadius: 'var(--radius)',
                      border: '1px solid var(--landing-border-card)'
                    }}
                  >
                    <p style={{
                      color: 'var(--landing-text-muted)',
                      fontSize: 'var(--landing-text-sm)',
                      fontWeight: 'var(--font-weight-normal)'
                    }}>
                      nodescript.dev/workflows/payment-automation
                    </p>
                  </div>
                </div>
              </div>

              {/* Screenshot */}
              <img 
                src={graphScreenshot}
                alt="NodeScript workflow editor showing Hacker News alerts workflow"
                style={{ width: '100%', display: 'block' }}
              />
            </motion.div>

            {/* How It Works Steps */}
            <div className="grid gap-6 md:grid-cols-3 mt-16">
              {[
                {
                  step: '1',
                  title: 'Design your workflow',
                  description: 'Drag and drop nodes to build your logic. No boilerplate, no setup—just your workflow.'
                },
                {
                  step: '2',
                  title: 'Connect your services',
                  description: 'Authenticate once, use everywhere. Pre-built integrations for popular APIs, databases, and webhooks.'
                },
                {
                  step: '3',
                  title: 'Deploy in one click',
                  description: 'Instant deployment with auto-scaling, monitoring, and rollback. Your workflow is live in seconds.'
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  className="relative pl-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div 
                    className="absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--landing-bg-dark)',
                      color: 'var(--landing-text-white)',
                      fontSize: 'var(--landing-text-base)',
                      fontWeight: 'var(--font-weight-semi-bold)'
                    }}
                  >
                    {step.step}
                  </div>
                  <p style={{
                    color: 'var(--landing-text-dark)',
                    fontSize: 'var(--landing-text-lg)',
                    fontWeight: 'var(--font-weight-semi-bold)',
                    marginBottom: '8px'
                  }}>
                    {step.title}
                  </p>
                  <p style={{
                    color: 'var(--landing-text-muted)',
                    fontSize: 'var(--landing-text-base)',
                    lineHeight: 'var(--landing-line-relaxed)',
                    fontWeight: 'var(--font-weight-normal)'
                  }}>
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-24" style={{ backgroundColor: 'var(--landing-bg-light)' }}>
        <div className="mx-auto max-w-7xl px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-16 text-center">
              <h2 style={{
                color: 'var(--landing-text-dark)',
                fontSize: 'var(--landing-text-display)',
                lineHeight: 'var(--landing-line-tight)',
                letterSpacing: 'var(--landing-spacing-display)',
                fontWeight: 'var(--font-weight-normal)',
                marginBottom: '24px'
              }}>
                Everything you need to build and scale
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  category: "Reliability",
                  image: imgScreenshot20250123At2144561,
                  title: "Increase reliability",
                  description: "Automated health checks scan your workflows to catch potential issues before they reach production.",
                  link: "Learn about health checks."
                },
                {
                  category: "Performance",
                  image: imgScreenshot20250123At2145211,
                  title: "Monitor performance",
                  description: "View detailed metrics and logs for every node in your workflow with real-time execution tracking.",
                  link: "Learn about monitoring."
                },
                {
                  category: "Development",
                  image: imgScreenshot20250123At2145041,
                  title: "Streamline development",
                  description: "Build reusable modules that accelerate development and maintain consistency across your workflows.",
                  link: "Learn about modules."
                },
                {
                  category: "Scalability",
                  image: imgScreenshot20250123At2148221,
                  title: "Scale automatically",
                  description: "Infrastructure scales automatically based on demand. Handle 10 requests or 10 million without configuration.",
                  link: "Learn about auto-scaling."
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="overflow-hidden"
                  style={{
                    backgroundColor: 'var(--landing-bg-white)',
                    borderRadius: 'var(--radius-card)',
                    border: '1px solid var(--landing-border-card)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="p-1">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      style={{ width: '100%', display: 'block', borderRadius: 'var(--radius)' }}
                    />
                  </div>
                  <div className="p-8">
                    <p style={{
                      color: 'var(--landing-gradient-end)',
                      fontSize: 'var(--landing-text-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {feature.category}
                    </p>
                    <p style={{
                      color: 'var(--landing-text-dark)',
                      fontSize: 'var(--landing-text-xl)',
                      fontWeight: 'var(--font-weight-semi-bold)',
                      marginBottom: '12px',
                      lineHeight: 'var(--landing-line-tight)'
                    }}>
                      {feature.title}
                    </p>
                    <p style={{
                      color: 'var(--landing-text-muted)',
                      fontSize: 'var(--landing-text-base)',
                      lineHeight: 'var(--landing-line-relaxed)',
                      fontWeight: 'var(--font-weight-normal)',
                      marginBottom: '12px'
                    }}>
                      {feature.description}
                    </p>
                    {feature.link && (
                      <p style={{
                        color: 'var(--landing-text-muted)',
                        fontSize: 'var(--landing-text-base)',
                        fontWeight: 'var(--font-weight-normal)',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                      }}>
                        {feature.link}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--landing-bg-white)' }}>
        <div className="mx-auto max-w-7xl px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-16">
              <h2 style={{
                color: 'var(--landing-text-dark)',
                fontSize: 'var(--landing-text-display)',
                lineHeight: 'var(--landing-line-tight)',
                letterSpacing: 'var(--landing-spacing-display)',
                fontWeight: 'var(--font-weight-normal)',
                marginBottom: '24px'
              }}>
                Built for every automation need
              </h2>

              <p style={{
                color: 'var(--landing-text-muted)',
                fontSize: 'var(--landing-text-xl)',
                lineHeight: 'var(--landing-line-relaxed)',
                fontWeight: 'var(--font-weight-normal)',
                maxWidth: '700px'
              }}>
                From simple webhooks to complex multi-step processes, NodeScript handles it all.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: RefreshCw,
                  title: 'Data synchronization',
                  description: 'Keep databases, CRMs, and data warehouses in sync automatically.',
                  example: 'Sync Salesforce leads to HubSpot in real-time'
                },
                {
                  icon: CreditCard,
                  title: 'Payment processing',
                  description: 'Handle subscriptions, invoicing, and payment webhooks with ease.',
                  example: 'Process Stripe payments and update inventory'
                },
                {
                  icon: Mail,
                  title: 'Email automation',
                  description: 'Trigger personalized emails based on user behavior and events.',
                  example: 'Send welcome sequences with SendGrid'
                },
                {
                  icon: BarChart3,
                  title: 'Reporting & analytics',
                  description: 'Aggregate data from multiple sources into dashboards and reports.',
                  example: 'Daily sales reports to Slack from Shopify'
                },
                {
                  icon: Bot,
                  title: 'AI workflows',
                  description: 'Process documents, analyze sentiment, or generate content with AI.',
                  example: 'Auto-categorize support tickets with GPT-4'
                },
                {
                  icon: Bell,
                  title: 'Notifications & alerts',
                  description: 'Monitor systems and send alerts via Slack, SMS, or email.',
                  example: 'Alert team when server metrics spike'
                }
              ].map((useCase, idx) => (
                <motion.div
                  key={idx}
                  className="p-6"
                  style={{
                    backgroundColor: 'var(--landing-bg-light)',
                    borderRadius: 'var(--radius-card)',
                    border: '1px solid var(--landing-border-card)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      background: idx % 2 === 0 
                        ? 'linear-gradient(135deg, rgba(255, 70, 114, 0.1), rgba(0, 123, 211, 0.1))' 
                        : 'linear-gradient(135deg, rgba(0, 123, 211, 0.1), rgba(255, 70, 114, 0.1))',
                      color: idx % 2 === 0 ? 'var(--landing-gradient-start)' : 'var(--landing-gradient-end)',
                      border: `1px solid ${idx % 2 === 0 ? 'rgba(255, 70, 114, 0.2)' : 'rgba(0, 123, 211, 0.2)'}`
                    }}
                  >
                    <useCase.icon size={24} strokeWidth={2} />
                  </div>
                  <p style={{
                    color: 'var(--landing-text-dark)',
                    fontSize: 'var(--landing-text-lg)',
                    fontWeight: 'var(--font-weight-semi-bold)',
                    marginBottom: '8px'
                  }}>
                    {useCase.title}
                  </p>
                  <p style={{
                    color: 'var(--landing-text-muted)',
                    fontSize: 'var(--landing-text-base)',
                    lineHeight: 'var(--landing-line-relaxed)',
                    fontWeight: 'var(--font-weight-normal)',
                    marginBottom: '12px'
                  }}>
                    {useCase.description}
                  </p>
                  <p style={{
                    color: 'var(--landing-text-subtle)',
                    fontSize: 'var(--landing-text-sm)',
                    fontWeight: 'var(--font-weight-normal)',
                    fontStyle: 'italic'
                  }}>
                    e.g. {useCase.example}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* By the Numbers Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--landing-bg-dark)' }}>
        <div className="mx-auto max-w-7xl px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{
              color: 'var(--landing-text-white)',
              fontSize: 'var(--landing-text-display)',
              lineHeight: 'var(--landing-line-tight)',
              letterSpacing: 'var(--landing-spacing-display)',
              fontWeight: 'var(--font-weight-normal)',
              marginBottom: '64px',
              textAlign: 'center'
            }}>
              By the numbers
            </h2>

            <div className="grid gap-12 md:grid-cols-3">
              {[
                { number: '10k+', label: 'Developers building', subtext: 'Active users shipping workflows daily' },
                { number: '500M+', label: 'Monthly executions', subtext: 'Workflows processed reliably' },
                { number: '99.9%', label: 'Uptime guarantee', subtext: 'Enterprise-grade reliability' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <p style={{
                    color: 'var(--landing-text-white)',
                    fontSize: '72px',
                    fontWeight: 'var(--font-weight-semi-bold)',
                    lineHeight: '1',
                    marginBottom: '16px'
                  }}>
                    {stat.number}
                  </p>
                  <p style={{
                    color: 'var(--landing-text-white)',
                    fontSize: 'var(--landing-text-lg)',
                    fontWeight: 'var(--font-weight-medium)',
                    marginBottom: '8px'
                  }}>
                    {stat.label}
                  </p>
                  <p style={{
                    color: 'var(--landing-text-subtle)',
                    fontSize: 'var(--landing-text-base)',
                    fontWeight: 'var(--font-weight-normal)'
                  }}>
                    {stat.subtext}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-24" style={{ backgroundColor: 'var(--landing-bg-white)' }}>
        <div className="mx-auto max-w-7xl px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Section Header */}
            <div className="mb-16 flex items-center gap-4">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: 'var(--landing-text-dark)' }} />
              <p style={{ 
                color: 'var(--landing-text-dark)', 
                fontSize: 'var(--landing-text-lg)',
                fontWeight: 'var(--font-weight-normal)',
                lineHeight: 'var(--landing-line-normal)' 
              }}>
                Integrations
              </p>
            </div>

            <h2 style={{
              color: 'var(--landing-text-dark)',
              fontSize: 'var(--landing-text-display)',
              lineHeight: 'var(--landing-line-tight)',
              letterSpacing: 'var(--landing-spacing-display)',
              fontWeight: 'var(--font-weight-normal)',
              marginBottom: '24px',
              maxWidth: '700px'
            }}>
              Connect to the tools you already use
            </h2>

            <p style={{
              color: 'var(--landing-text-muted)',
              fontSize: 'var(--landing-text-lg)',
              lineHeight: 'var(--landing-line-relaxed)',
              fontWeight: 'var(--font-weight-normal)',
              marginBottom: '64px',
              maxWidth: '600px'
            }}>
              Pre-built connectors for popular services, or create custom integrations with any REST API, GraphQL endpoint, or webhook.
            </p>

            {/* Integration Logos Grid */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                'Stripe', 'Slack', 'GitHub', 'Shopify', 'Salesforce', 'Twilio',
                'SendGrid', 'AWS', 'Google Cloud', 'MongoDB', 'PostgreSQL', 'Redis'
              ].map((integration, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center justify-center p-6"
                  style={{
                    backgroundColor: 'var(--landing-bg-card)',
                    borderRadius: 'var(--radius-card)',
                    border: '1px solid var(--landing-border-card)',
                    minHeight: '100px'
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <p style={{
                    color: 'var(--landing-text-muted)',
                    fontSize: 'var(--landing-text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    textAlign: 'center'
                  }}>
                    {integration}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p style={{
                color: 'var(--landing-text-muted)',
                fontSize: 'var(--landing-text-base)',
                fontWeight: 'var(--font-weight-normal)',
                marginBottom: '16px'
              }}>
                Plus 200+ more integrations and growing
              </p>
              <a 
                href="#"
                style={{
                  color: 'var(--landing-text-dark)',
                  fontSize: 'var(--landing-text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  textDecoration: 'underline'
                }}
              >
                View all integrations
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Testimonials Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--landing-bg-light)' }}>
        <div className="mx-auto max-w-7xl px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{
              color: 'var(--landing-text-dark)',
              fontSize: 'var(--landing-text-display)',
              lineHeight: 'var(--landing-line-tight)',
              letterSpacing: 'var(--landing-spacing-display)',
              fontWeight: 'var(--font-weight-normal)',
              marginBottom: '48px',
              textAlign: 'center'
            }}>
              What developers are saying
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote: "NodeScript reduced our deployment time from hours to minutes. The visual builder is intuitive, and auto-scaling works flawlessly.",
                  author: "Sarah Chen",
                  role: "CTO, TechFlow",
                  metric: "80% faster deployments",
                  image: imgSarah
                },
                {
                  quote: "We migrated 50+ microservices to NodeScript workflows. The monitoring and debugging tools are exceptional for production.",
                  author: "Marcus Rodriguez",
                  role: "Lead Engineer, DataCore",
                  metric: "99.9% uptime",
                  image: imgMarcus
                },
                {
                  quote: "The module system changed how we build. We reuse components across 30+ workflows, dramatically improving development velocity.",
                  author: "Priya Sharma",
                  role: "VP Engineering, Streamline",
                  metric: "3x faster iterations",
                  image: imgPriya
                }
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  className="p-8"
                  style={{
                    backgroundColor: 'var(--landing-bg-white)',
                    borderRadius: 'var(--radius-card)',
                    border: '1px solid var(--landing-border-card)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <p style={{
                    color: 'var(--landing-text-dark)',
                    fontSize: 'var(--landing-text-base)',
                    lineHeight: 'var(--landing-line-relaxed)',
                    fontWeight: 'var(--font-weight-normal)',
                    marginBottom: '24px'
                  }}>
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p style={{
                        color: 'var(--landing-text-dark)',
                        fontSize: 'var(--landing-text-base)',
                        fontWeight: 'var(--font-weight-medium)',
                        lineHeight: '1.2'
                      }}>
                        {testimonial.author}
                      </p>
                      <p style={{
                        color: 'var(--landing-text-muted)',
                        fontSize: 'var(--landing-text-sm)',
                        fontWeight: 'var(--font-weight-normal)',
                        lineHeight: '1.2'
                      }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div 
                    className="pt-4"
                    style={{ borderTop: '1px solid var(--landing-border-card)' }}
                  >
                    <p style={{
                      color: 'var(--landing-text-dark)',
                      fontSize: 'var(--landing-text-sm)',
                      fontWeight: 'var(--font-weight-semi-bold)',
                      lineHeight: '1'
                    }}>
                      {testimonial.metric}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24" style={{ backgroundColor: 'var(--landing-bg-white)' }}>
        <div className="mx-auto max-w-7xl px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Section Header */}
            <div className="mb-16 flex items-center gap-4">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: 'var(--landing-text-dark)' }} />
              <p style={{ 
                color: 'var(--landing-text-dark)', 
                fontSize: 'var(--landing-text-lg)',
                fontWeight: 'var(--font-weight-normal)',
                lineHeight: 'var(--landing-line-normal)' 
              }}>
                Pricing
              </p>
            </div>

            <h2 style={{
              color: 'var(--landing-text-dark)',
              fontSize: 'var(--landing-text-display)',
              lineHeight: 'var(--landing-line-tight)',
              letterSpacing: 'var(--landing-spacing-display)',
              fontWeight: 'var(--font-weight-normal)',
              marginBottom: '64px'
            }}>
              Start free, scale as you grow
            </h2>

            {/* Pricing Cards */}
            <div className="grid gap-8 lg:grid-cols-4">
              {[
                {
                  name: 'Free',
                  price: '$0',
                  period: '/month',
                  description: 'Ideal for users working on small personal projects.',
                  features: [
                    '10,000 credits',
                    'Unlimited graphs',
                    'Unlimited collaborators',
                    'Email support'
                  ],
                  cta: 'Start building',
                  popular: false
                },
                {
                  name: 'Starter',
                  price: '$29',
                  period: '/month',
                  description: 'Best plan for regular users and small teams.',
                  features: [
                    '100,000 credits',
                    'Unlimited graphs',
                    'Unlimited collaborators',
                    'Email support'
                  ],
                  cta: 'Start building',
                  popular: true
                },
                {
                  name: 'Pro',
                  price: '$95',
                  period: '/month',
                  description: 'The plan for power users and growing teams.',
                  features: [
                    '1,000,000 credits',
                    'Unlimited graphs',
                    'Unlimited collaborators',
                    'Slack support'
                  ],
                  cta: 'Start building',
                  popular: false
                },
                {
                  name: 'Enterprise',
                  price: 'Contact',
                  description: 'Speak to us about your team\'s needs.',
                  features: [
                    'Tailored usage',
                    'Dedicated support'
                  ],
                  cta: 'Get in touch',
                  popular: false
                }
              ].map((plan, idx) => (
                <motion.div
                  key={idx}
                  className="p-8 relative"
                  style={{
                    backgroundColor: 'var(--landing-bg-light)',
                    borderRadius: 'var(--radius-card)',
                    border: plan.popular ? '2px solid var(--landing-gradient-start)' : '1px solid var(--landing-border-card)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {plan.popular && (
                    <div 
                      className="absolute -top-3 left-8 px-3 py-1"
                      style={{
                        backgroundColor: 'var(--landing-gradient-start)',
                        borderRadius: 'var(--radius)',
                        color: 'var(--landing-text-white)',
                        fontSize: 'var(--landing-text-xs)',
                        fontWeight: 'var(--font-weight-semi-bold)'
                      }}
                    >
                      Most Popular
                    </div>
                  )}
                  
                  <p style={{
                    color: 'var(--landing-text-dark)',
                    fontSize: 'var(--landing-text-lg)',
                    fontWeight: 'var(--font-weight-semi-bold)',
                    marginBottom: '8px'
                  }}>
                    {plan.name}
                  </p>
                  
                  <div className="mb-4">
                    <span style={{
                      color: 'var(--landing-text-dark)',
                      fontSize: '48px',
                      fontWeight: 'var(--font-weight-semi-bold)',
                      lineHeight: '1'
                    }}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span style={{
                        color: 'var(--landing-text-muted)',
                        fontSize: 'var(--landing-text-base)',
                        fontWeight: 'var(--font-weight-normal)'
                      }}>
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <p style={{
                    color: 'var(--landing-text-muted)',
                    fontSize: 'var(--landing-text-base)',
                    lineHeight: 'var(--landing-line-relaxed)',
                    fontWeight: 'var(--font-weight-normal)',
                    marginBottom: '32px'
                  }}>
                    {plan.description}
                  </p>

                  <button
                    onClick={onGetStarted}
                    className="w-full px-4 py-3 mb-8"
                    style={{
                      backgroundColor: plan.popular ? 'var(--landing-gradient-start)' : 'var(--landing-bg-button-dark)',
                      color: 'var(--landing-text-white)',
                      fontSize: 'var(--landing-text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      borderRadius: 'var(--radius-button)',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {plan.cta}
                  </button>

                  <div style={{ borderTop: '1px solid var(--landing-border-card)', paddingTop: '32px' }}>
                    {plan.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-start gap-3 mb-3">
                        <svg 
                          className="w-5 h-5 mt-0.5"
                          style={{ color: 'var(--landing-text-dark)', flexShrink: 0 }}
                          fill="none" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                        </svg>
                        <p style={{
                          color: 'var(--landing-text-dark)',
                          fontSize: 'var(--landing-text-base)',
                          lineHeight: '1.4',
                          fontWeight: 'var(--font-weight-normal)'
                        }}>
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--landing-bg-light)' }}>
        <div className="mx-auto max-w-7xl px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Section Header */}
            <div className="mb-16 flex items-center gap-4">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: 'var(--landing-text-dark)' }} />
              <p style={{ 
                color: 'var(--landing-text-dark)', 
                fontSize: 'var(--landing-text-lg)',
                fontWeight: 'var(--font-weight-normal)',
                lineHeight: 'var(--landing-line-normal)' 
              }}>
                FAQ
              </p>
            </div>

            <h2 style={{
              color: 'var(--landing-text-dark)',
              fontSize: 'var(--landing-text-display)',
              lineHeight: 'var(--landing-line-tight)',
              letterSpacing: 'var(--landing-spacing-display)',
              fontWeight: 'var(--font-weight-normal)',
              marginBottom: '64px'
            }}>
              Frequently asked questions
            </h2>

            <div className="max-w-3xl space-y-4">
              {[
                {
                  question: 'How does NodeScript compare to traditional backend development?',
                  answer: 'NodeScript eliminates infrastructure setup, deployment pipelines, and server management. What takes days in traditional development happens in minutes with our visual builder. You maintain full control and can export to code if needed.'
                },
                {
                  question: 'Can I use my own code in workflows?',
                  answer: 'Absolutely. Every node supports custom JavaScript/TypeScript code. You can also import npm packages, create reusable modules, and integrate with any API or database.'
                },
                {
                  question: 'What happens if I exceed my execution limit?',
                  answer: 'Your workflows continue running—we never shut down production systems. You\'ll receive a notification and can upgrade your plan at any time. Enterprise plans offer custom limits and overage protection.'
                },
                {
                  question: 'How secure is my data?',
                  answer: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We\'re SOC 2 Type II certified and GDPR compliant, with SSO, IP allowlisting, and audit logs available on Enterprise plans. Self-hosting is also available.'
                },
                {
                  question: 'Can I export my workflows?',
                  answer: 'Yes. All workflows can be exported as JSON or compiled to standalone Node.js projects. You own your logic and can migrate away at any time—no vendor lock-in.'
                },
                {
                  question: 'Do you offer support for migration from other platforms?',
                  answer: 'We provide dedicated migration support for Pro and Enterprise customers, including workflow conversion, team training, and white-glove onboarding. Most teams are fully migrated within a week.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div
                    style={{
                      backgroundColor: 'var(--landing-bg-white)',
                      borderRadius: 'var(--radius-card)',
                      border: '1px solid var(--landing-border-faq)',
                      overflow: 'hidden'
                    }}
                  >
                    <button
                      className="w-full px-6 py-5 flex items-center justify-between"
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    >
                      <span style={{
                        color: 'var(--landing-text-dark)',
                        fontSize: '18px',
                        lineHeight: '1.204',
                        fontWeight: 'var(--font-weight-normal)',
                        maxWidth: '651px'
                      }}>
                        {faq.question}
                      </span>
                      <svg 
                        className="w-4 h-4 transition-transform"
                        style={{ 
                          transform: openFaqIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                          color: 'var(--landing-text-dark)',
                          flexShrink: 0,
                          marginLeft: '16px'
                        }}
                        fill="none" 
                        viewBox="0 0 14 14"
                      >
                        <path d="M7 0V14M0 7H14" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    </button>
                    
                    <div 
                      style={{
                        maxHeight: openFaqIndex === index ? '500px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease-in-out'
                      }}
                    >
                      <div 
                        className="px-6 pb-5"
                        style={{
                          borderTop: '1px solid var(--landing-border-faq)'
                        }}
                      >
                        <p style={{
                          color: 'var(--landing-text-muted)',
                          fontSize: 'var(--landing-text-base)',
                          lineHeight: 'var(--landing-line-relaxed)',
                          fontWeight: 'var(--font-weight-normal)',
                          paddingTop: '20px'
                        }}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--landing-bg-dark)' }}>
        <div className="mx-auto max-w-7xl px-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{
              color: 'var(--landing-text-white)',
              fontSize: 'var(--landing-text-display)',
              lineHeight: 'var(--landing-line-tight)',
              letterSpacing: 'var(--landing-spacing-display)',
              fontWeight: 'var(--font-weight-normal)',
              marginBottom: '24px'
            }}>
              Ready to automate your workflows?
            </h2>

            <p style={{
              color: 'var(--landing-text-description)',
              fontSize: 'var(--landing-text-xl)',
              lineHeight: 'var(--landing-line-normal)',
              fontWeight: 'var(--font-weight-normal)',
              marginBottom: '48px',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Start building in minutes. No credit card required.
            </p>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={onGetStarted}
                className="px-6 py-4"
                style={{
                  backgroundColor: 'var(--landing-bg-white)',
                  color: 'var(--landing-text-dark)',
                  fontSize: 'var(--landing-text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  borderRadius: 'var(--radius-button)',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Start building for free
              </button>
              <button
                className="px-6 py-4"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--landing-text-white)',
                  fontSize: 'var(--landing-text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  borderRadius: 'var(--radius-button)',
                  border: '1px solid var(--landing-border-light)',
                  cursor: 'pointer'
                }}
              >
                Schedule a demo
              </button>
            </div>

            <p style={{
              color: 'var(--landing-text-subtle)',
              fontSize: 'var(--landing-text-sm)',
              fontWeight: 'var(--font-weight-normal)',
              marginTop: '32px'
            }}>
              Join 10,000+ developers building on NodeScript
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--landing-footer-bg)', color: 'var(--landing-footer-text)' }}>
        <div className="mx-auto max-w-7xl px-12 py-16">
          <div className="grid gap-12 lg:grid-cols-5 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <svg className="block h-6 w-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="Group">
                    <path d={svgPaths.p1} fill="white" id="Vector" />
                    <path d={svgPaths.p2} fill="white" id="Vector_2" />
                  </g>
                </svg>
                <span style={{ 
                  color: 'var(--landing-footer-heading)', 
                  fontSize: 'var(--landing-text-lg)',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  NodeScript
                </span>
              </div>
              <p style={{
                color: 'var(--landing-footer-text)',
                fontSize: 'var(--landing-text-base)',
                lineHeight: 'var(--landing-line-relaxed)',
                fontWeight: 'var(--font-weight-normal)',
                marginBottom: '24px',
                maxWidth: '320px'
              }}>
                Visual programming platform for building scalable workflows and automations.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    style={{
                      color: 'var(--landing-footer-text)',
                      fontSize: 'var(--landing-text-sm)',
                      fontWeight: 'var(--font-weight-normal)',
                      textDecoration: 'none'
                    }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Product Column */}
            <div>
              <p style={{
                color: 'var(--landing-footer-heading)',
                fontSize: 'var(--landing-text-base)',
                fontWeight: 'var(--font-weight-semi-bold)',
                marginBottom: '16px'
              }}>
                Product
              </p>
              <div className="flex flex-col gap-3">
                {['Features', 'Pricing', 'Integrations', 'Examples', 'Changelog', 'Roadmap'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      color: 'var(--landing-footer-text)',
                      fontSize: 'var(--landing-text-base)',
                      fontWeight: 'var(--font-weight-normal)',
                      textDecoration: 'none'
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Resources Column */}
            <div>
              <p style={{
                color: 'var(--landing-footer-heading)',
                fontSize: 'var(--landing-text-base)',
                fontWeight: 'var(--font-weight-semi-bold)',
                marginBottom: '16px'
              }}>
                Resources
              </p>
              <div className="flex flex-col gap-3">
                {['Documentation', 'API Reference', 'Guides', 'Community', 'Blog', 'Status'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      color: 'var(--landing-footer-text)',
                      fontSize: 'var(--landing-text-base)',
                      fontWeight: 'var(--font-weight-normal)',
                      textDecoration: 'none'
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Company Column */}
            <div>
              <p style={{
                color: 'var(--landing-footer-heading)',
                fontSize: 'var(--landing-text-base)',
                fontWeight: 'var(--font-weight-semi-bold)',
                marginBottom: '16px'
              }}>
                Company
              </p>
              <div className="flex flex-col gap-3">
                {['About', 'Careers', 'Contact', 'Privacy', 'Terms', 'Security'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      color: 'var(--landing-footer-text)',
                      fontSize: 'var(--landing-text-base)',
                      fontWeight: 'var(--font-weight-normal)',
                      textDecoration: 'none'
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div 
            className="pt-8"
            style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p style={{
                color: 'var(--landing-footer-text)',
                fontSize: 'var(--landing-text-sm)',
                fontWeight: 'var(--font-weight-normal)'
              }}>
                © 2026 NodeScript. All rights reserved.
              </p>
              <div className="flex gap-6">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      color: 'var(--landing-footer-text)',
                      fontSize: 'var(--landing-text-sm)',
                      fontWeight: 'var(--font-weight-normal)',
                      textDecoration: 'none'
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
