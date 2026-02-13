import { useState } from "react";
import { motion } from "motion/react";
import { Github, Mail } from "lucide-react";
import svgPaths from "../imports/svg-vs0fjwe6bn";

interface SignUpPageProps {
  onSignUpComplete: () => void;
  onBackToLanding: () => void;
}

export function SignUpPage({ onSignUpComplete, onBackToLanding }: SignUpPageProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignUpComplete();
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'white' }}>
      {/* Logo */}
      <div className="absolute top-8 left-8">
        <div className="flex items-center gap-2">
          <svg className="block h-6 w-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Group">
              <path d={svgPaths.p1} fill="var(--foreground)" id="Vector" />
              <path d={svgPaths.p2} fill="var(--foreground)" id="Vector_2" />
            </g>
          </svg>
          <span style={{ 
            color: 'var(--foreground)', 
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-medium)'
          }}>
            NodeScript
          </span>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex min-h-screen items-center justify-center px-8">
        <motion.div 
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{
            fontSize: 'var(--text-h2)',
            fontWeight: 'var(--font-weight-semi-bold)',
            color: 'var(--foreground)',
            marginBottom: '8px',
            lineHeight: '1.2'
          }}>
            Create your account
          </h1>
          
          <p style={{
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-normal)',
            color: 'var(--muted-foreground)',
            marginBottom: '32px'
          }}>
            Sign up to start building workflows
          </p>

          <div className="space-y-3 mb-6">
            {/* GitHub Button */}
            <button
              onClick={onSignUpComplete}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 transition-all"
              style={{
                backgroundColor: 'var(--foreground)',
                color: 'var(--background)',
                border: 'none',
                borderRadius: 'var(--radius-button)',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              <Github size={20} />
              Continue with GitHub
            </button>

            {/* Google Button */}
            <button
              onClick={onSignUpComplete}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 transition-all"
              style={{
                backgroundColor: 'var(--secondary)',
                color: 'var(--secondary-foreground)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-button)',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--muted)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--secondary)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }} />
            <span style={{
              fontSize: 'var(--text-label)',
              color: 'var(--muted-foreground)',
              fontWeight: 'var(--font-weight-normal)'
            }}>
              Or continue with email
            </span>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }} />
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label 
                htmlFor="email"
                style={{
                  display: 'block',
                  fontSize: 'var(--text-label)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                  marginBottom: '8px'
                }}
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="w-full px-3 py-2 transition-all"
                style={{
                  backgroundColor: 'var(--input-background)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-input)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-normal)',
                  color: 'var(--foreground)',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--ring)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(15, 23, 42, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 transition-all"
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
                border: 'none',
                borderRadius: 'var(--radius-button)',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              <Mail size={18} />
              Continue with email
            </button>
          </form>

          <p style={{
            fontSize: 'var(--text-label)',
            color: 'var(--muted-foreground)',
            fontWeight: 'var(--font-weight-normal)',
            textAlign: 'center',
            marginTop: '24px'
          }}>
            Already have an account?{' '}
            <button
              onClick={onSignUpComplete}
              style={{
                color: 'var(--foreground)',
                fontWeight: 'var(--font-weight-medium)',
                textDecoration: 'underline',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0
              }}
            >
              Log in
            </button>
          </p>

          <p style={{
            fontSize: 'var(--text-label)',
            color: 'var(--muted-foreground)',
            fontWeight: 'var(--font-weight-normal)',
            textAlign: 'center',
            marginTop: '32px'
          }}>
            By signing up, you agree to our{' '}
            <a href="#" style={{ textDecoration: 'underline' }}>Terms</a>
            {' '}and{' '}
            <a href="#" style={{ textDecoration: 'underline' }}>Privacy Policy</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}