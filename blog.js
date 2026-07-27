/* Dark Glassmorphism Cards */
.glass-card {
  background: rgba(22, 27, 34, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Contact Details Icons */
.contact-icon-box {
  width: 38px;
  height: 38px;
  background: rgba(0, 230, 118, 0.1);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

.hover-emerald:hover {
  color: #00e676 !important;
  transition: color 0.2s ease;
}

/* Social Circles */
.social-circle {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #a0aec0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.25s ease;
}

.social-circle:hover {
  background: #00e676;
  color: #0d1117;
  border-color: #00e676;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 230, 118, 0.3);
}

/* Form Controls */
.bg-dark-input {
  background-color: rgba(13, 17, 23, 0.9) !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
}

.form-control-custom {
  background-color: rgba(13, 17, 23, 0.9) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: #f0f6fc !important;
  transition: all 0.2s ease;
}

.form-control-custom:focus {
  border-color: #00e676 !important;
  box-shadow: 0 0 0 0.25rem rgba(0, 230, 118, 0.15) !important;
}

.form-control-custom::placeholder {
  color: #6e7681;
}

/* Submit Button Gradient */
.btn-success-gradient {
  background: linear-gradient(135deg, #00e676 0%, #00b0ff 100%);
  border: none;
  color: #0d1117;
  transition: all 0.3s ease;
}

.btn-success-gradient:hover {
  opacity: 0.95;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 230, 118, 0.3);
  color: #000;
}

/* Quick Nav Pills */
.quick-link-pill {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #8b949e;
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.2s ease;
}

.quick-link-pill:hover {
  background: rgba(0, 230, 118, 0.1);
  border-color: #00e676;
  color: #00e676;
  transform: translateY(-1px);
}