/**
 * Blog Section
 * Article card grid. Shows "Coming Soon" if no data.
 */
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { blogData } from '../../data/portfolioData';

const Blog = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const hasData = blogData && blogData.length > 0;

  return (
    <section id="blog">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Blog</p>
          <h2 className="section-title">MY <span>WRITING</span></h2>
          <p className="section-desc">
            Thoughts on development, architecture, and lessons from real-world projects.
          </p>
        </motion.div>

        <div className="blog-grid">
          {hasData ? (
            blogData.map((post, i) => (
              <motion.article
                key={i}
                className="blog-card"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="blog-pub-row">
                  <span className="blog-pub">{post.publication || 'Article'}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                {post.url && (
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-read-more"
                    aria-label={`Read ${post.title}`}
                  >
                    Read More <FiArrowUpRight />
                  </a>
                )}
              </motion.article>
            ))
          ) : (
            <motion.div
              className="blog-coming-soon"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="cs-title">COMING_SOON</div>
              <p className="cs-sub">
                Articles and tutorials are being drafted.{' '}
                <a
                  href={`https://dev.to`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent)' }}
                >
                  Follow on Dev.to
                </a>{' '}
                to be notified.
              </p>
              {/* Three placeholder skeleton cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 8,
                marginTop: 32,
                opacity: 0.25,
              }}>
                {[160, 130, 145].map((h, i) => (
                  <div key={i} className="skeleton" style={{ height: h, borderRadius: 4 }} />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
