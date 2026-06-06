/**
 * Contact — section watermark, stagger form fields, updated animations
 */
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import api from '../../api/axios';
import { aboutData } from '../../data/portfolioData';

const Contact = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm]     = useState({ name:'', email:'', subject:'', message:'' });
  const [status, setStatus] = useState(null);
  const [msg, setMsg]       = useState('');
  const waLink = `https://wa.me/${aboutData.whatsapp}?text=Hello%2C%20I%20found%20you%20through%20your%20portfolio!`;

  const onChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error'); setMsg('Please fill in name, email, and message.'); return;
    }
    setStatus('sending');
    try {
      const res = await api.post('/contact', form);
      setStatus('success');
      setMsg(res.data.message || 'Message sent!');
      setForm({ name:'', email:'', subject:'', message:'' });
    } catch (err) {
      setStatus('error');
      setMsg(err.response?.data?.message || 'Failed to send. Try WhatsApp instead.');
    }
  };

  const contactItems = [
    { Icon: FiMail,     label: 'Email',    value: aboutData.email,    href: `mailto:${aboutData.email}` },
    { Icon: FiPhone,    label: 'Phone',    value: aboutData.phone,    href: `tel:${aboutData.phone}` },
    { Icon: FaWhatsapp, label: 'WhatsApp', value: 'Chat on WhatsApp', href: waLink },
    { Icon: FiMapPin,   label: 'Location', value: aboutData.location, href: null },
  ];

  /* form fields for stagger */
  const formFields = [
    { id:'c-name',    type:'text',  name:'name',    label:'Name *',   ph:'Your name',         val:form.name,    required:true },
    { id:'c-email',   type:'email', name:'email',   label:'Email *',  ph:'your@email.com',    val:form.email,   required:true },
    { id:'c-subject', type:'text',  name:'subject', label:'Subject',  ph:"What's this about?",val:form.subject, required:false },
  ];

  return (
    <section id="contact">
      <span className="section-num" aria-hidden="true">08</span>
      <div className="container" ref={ref}>

        {/* Heading */}
        <motion.div
          initial={{ opacity:0, y:-30, clipPath:'inset(0 100% 0 0)' }}
          animate={inView ? { opacity:1, y:0, clipPath:'inset(0 0% 0 0)' } : {}}
          transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">GET IN TOUCH</h2>
        </motion.div>
        <motion.p className="section-desc"
          initial={{ opacity:0, y:20 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.7, delay:0.2 }}
        >
          Have a project or opportunity? Let's talk about it.
        </motion.p>

        <div className="contact-grid">
          {/* Info column */}
          <motion.div
            className="contact-info"
            initial={{ opacity:0, x:-40 }}
            animate={inView ? { opacity:1, x:0 } : {}}
            transition={{ duration:0.7, delay:0.15, ease:[0.22,1,0.36,1] }}
          >
            {contactItems.map(({ Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                className="contact-item"
                initial={{ opacity:0, x:-30 }}
                animate={inView ? { opacity:1, x:0 } : {}}
                transition={{ delay:0.2 + i * 0.1 }}
                whileHover={{ scale:1.02, x:4 }}
              >
                <div className="contact-item-icon"><Icon /></div>
                <div>
                  <div className="contact-item-label">{label}</div>
                  {href ? (
                    <a href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="contact-item-value"
                      style={{ color:'var(--text)', WebkitTextFillColor:'var(--text)' }}
                    >{value}</a>
                  ) : (
                    <div className="contact-item-value">{value}</div>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ justifyContent:'center' }}
              initial={{ opacity:0, y:20 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ delay:0.6 }}
              whileHover={{ scale:1.05 }}
              whileTap={{ scale:0.96 }}
            >
              <FaWhatsapp /> Message on WhatsApp
            </motion.a>
          </motion.div>

          {/* Form column */}
          <motion.form
            className="contact-form"
            onSubmit={onSubmit}
            initial={{ opacity:0, y:50 }}
            animate={inView ? { opacity:1, y:0 } : {}}
            transition={{ duration:0.8, delay:0.2 }}
            noValidate
          >
            {/* Top two fields side-by-side on desktop, single col on mobile */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:16 }}>
              {formFields.slice(0,2).map(({ id, type, name, label, ph, val, required }, i) => (
                <motion.div
                  key={id}
                  className="form-group"
                  initial={{ opacity:0, x:-30 }}
                  animate={inView ? { opacity:1, x:0 } : {}}
                  transition={{ delay:0.3 + i * 0.12 }}
                >
                  <label className="form-label" htmlFor={id}>{label}</label>
                  <input id={id} type={type} name={name} className="form-input"
                    placeholder={ph} value={val} onChange={onChange} required={required} />
                </motion.div>
              ))}
            </div>

            {/* Subject */}
            <motion.div
              className="form-group"
              initial={{ opacity:0, x:-30 }}
              animate={inView ? { opacity:1, x:0 } : {}}
              transition={{ delay:0.54 }}
            >
              <label className="form-label" htmlFor="c-subject">Subject</label>
              <input id="c-subject" type="text" name="subject" className="form-input"
                placeholder="What's this about?" value={form.subject} onChange={onChange} />
            </motion.div>

            {/* Message */}
            <motion.div
              className="form-group"
              initial={{ opacity:0, x:-30 }}
              animate={inView ? { opacity:1, x:0 } : {}}
              transition={{ delay:0.66 }}
            >
              <label className="form-label" htmlFor="c-message">Message *</label>
              <textarea id="c-message" name="message" className="form-textarea"
                placeholder="Tell me about your project or opportunity..."
                value={form.message} onChange={onChange} required />
            </motion.div>

            {status && (
              <div className={`form-message ${status === 'success' ? 'success' : status === 'error' ? 'error' : ''}`}>
                {status === 'sending' ? '⏳ Sending...' : msg}
              </div>
            )}

            <motion.button
              type="submit"
              className="form-submit"
              disabled={status === 'sending'}
              whileHover={{ scale:1.04 }}
              whileTap={{ scale:0.97 }}
            >
              <FiSend style={{ marginRight:8, verticalAlign:'middle' }} />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
