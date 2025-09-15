import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// removed unused useInView import
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Button, 
  Card, 
  Row, 
  Col, 
  Carousel, 
  Avatar, 
  Rate, 
  Collapse, 
  Tag,
  Space,
  Typography,
  Divider
} from 'antd';
import { 
  ToolOutlined, 
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  StarOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  TrophyOutlined,
  QuestionCircleOutlined,
  PictureOutlined,
  FileTextOutlined,
  CustomerServiceOutlined
} from '@ant-design/icons';
import { 
  Construction, 
  Business, 
  HomeWork, 
  DesignServices,
  People
} from '@mui/icons-material';
import './App.css';

const { Title, Paragraph, Text } = Typography;
// Removed unused Panel from Collapse

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
    setLoading(false);
  }, []);

  // Removed unused useInView variables

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "Sparkle Construction transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism exceeded our expectations.",
      rating: 5,
      project: "Kitchen Renovation"
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      content: "The commercial office space they built for us is absolutely stunning. The project was completed on time and within budget.",
      rating: 5,
      project: "Office Complex"
    },
    {
      name: "Emily Rodriguez",
      role: "Interior Designer",
      content: "Working with Sparkle Construction was a dream. Their craftsmanship and collaborative approach made our design vision come to life perfectly.",
      rating: 5,
      project: "Luxury Home"
    }
  ];

  const teamMembers = [
    {
      name: "Wazeer Ahamed",
      role: "CEO & Founder",
      experience: "7+ years",
      specialties: ["Project Management", "Strategic Planning","Design", "Innovation"],
      image: "👨‍💼"
    },
    {
      name: "Hanifa",
      role: "Construction Manager",
      experience: "15+ years",
      specialties: ["Quality Control", "Safety"],
      image: "👨‍🔧"
    },
  ];

  const faqData = [
    {
      question: "How long does a typical construction project take?",
      answer: "Project timelines vary depending on scope and complexity. Residential projects typically take 3-6 months, while commercial projects can range from 6-18 months. We provide detailed timelines during the planning phase."
    },
    {
      question: "Do you provide warranties on your work?",
      answer: "Yes, we offer comprehensive warranties on all our work. Structural work comes with a 10-year warranty, while finishes and fixtures have 2-5 year warranties depending on the materials used."
    },
    {
      question: "Can you work within my budget?",
      answer: "Absolutely! We work closely with clients to develop projects that meet their budget requirements. We provide detailed cost breakdowns and can suggest alternatives to help stay within budget."
    },
    {
      question: "Do you handle permits and inspections?",
      answer: "Yes, we handle all necessary permits, inspections, and regulatory compliance. Our team is experienced with local building codes and regulations."
    }
  ];

  const blogPosts = [
    {
      title: "Sustainable Building Practices for 2024",
      excerpt: "Discover the latest trends in eco-friendly construction and how they can benefit your project.",
      date: "March 15, 2024",
      category: "Sustainability",
      readTime: "5 min read"
    },
    {
      title: "Kitchen Renovation: Before and After",
      excerpt: "See how we transformed a dated kitchen into a modern, functional space.",
      date: "March 10, 2024",
      category: "Renovation",
      readTime: "3 min read"
    },
    {
      title: "Commercial Construction Trends",
      excerpt: "Explore the latest trends in commercial building design and construction.",
      date: "March 5, 2024",
      category: "Commercial",
      readTime: "7 min read"
    }
  ];

  if (loading) {
    return (
      <div className="loading-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="loading-content"
        >
          <div className="loading-spinner"></div>
          <h2>Sparkle Construction</h2>
          <p>Building Dreams...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Enhanced Navigation */}
      <motion.nav 
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="nav-container">
          <motion.div 
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
          >
            <div className="nav-logo-container">
              <img 
                src="/Sparkle_Logo.png" 
                alt="Sparkle Construction Logo" 
                className="logo-image"
              />
            </div>
          </motion.div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </motion.nav>

      {/* Animated Hero Section */}
      <motion.section 
        id="home" 
        className="hero"
        style={{ y: y1 }}
      >
        <div className="hero-background">
          <div className="particles"></div>
        </div>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Title level={1} className="hero-title">
              Building Dreams, Creating Excellence
            </Title>
            <Paragraph className="hero-subtitle">
              Professional construction and building services for residential, commercial, and renovation projects. 
              We bring your vision to life with unmatched quality and craftsmanship.
            </Paragraph>
            <Space size="large" className="hero-buttons">
              <Button 
                type="primary" 
                size="large" 
                icon={<PhoneOutlined />}
                className="btn-primary"
              >
                Get Free Quote
              </Button>
              <Button 
                size="large" 
                icon={<PictureOutlined />}
                className="btn-secondary"
              >
                View Our Work
              </Button>
            </Space>
          </motion.div>
        </div>
        <motion.div 
          className="hero-image"
          style={{ y: y2 }}
        >
          <motion.div 
            className="hero-placeholder"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Construction sx={{ fontSize: 120, color: 'white' }} />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Enhanced Services Section */}
      <motion.section 
        id="services" 
        className="services"
        data-aos="fade-up"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Title level={2} className="section-title">Our Services</Title>
            <Paragraph className="section-subtitle">
              Comprehensive construction solutions tailored to your needs
            </Paragraph>
          </motion.div>
          
          <Row gutter={[24, 24]} className="services-grid">
            <Col xs={24} sm={12} lg={6}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className="service-card"
                  cover={
                    <div className="service-icon">
                      <HomeWork sx={{ fontSize: 60, color: '#2c5aa0' }} />
                    </div>
                  }
                >
                  <Card.Meta
                    title="Residential Construction"
                    description="Custom homes, additions, and complete residential construction projects tailored to your vision."
                  />
                  <div className="service-features">
                    <Tag color="blue">Custom Homes</Tag>
                    <Tag color="green">Additions</Tag>
                    <Tag color="orange">Renovations</Tag>
                  </div>
                </Card>
              </motion.div>
            </Col>
            
            <Col xs={24} sm={12} lg={6}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className="service-card"
                  cover={
                    <div className="service-icon">
                      <Business sx={{ fontSize: 60, color: '#2c5aa0' }} />
                    </div>
                  }
                >
                  <Card.Meta
                    title="Commercial Projects"
                    description="Office buildings, retail spaces, and commercial facilities built to meet your business needs."
                  />
                  <div className="service-features">
                    <Tag color="blue">Office Buildings</Tag>
                    <Tag color="green">Retail Spaces</Tag>
                    <Tag color="orange">Warehouses</Tag>
                  </div>
                </Card>
              </motion.div>
            </Col>
            
            <Col xs={24} sm={12} lg={6}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className="service-card"
                  cover={
                    <div className="service-icon">
                      <ToolOutlined style={{ fontSize: 60, color: '#2c5aa0' }} />
                    </div>
                  }
                >
                  <Card.Meta
                    title="Renovations"
                    description="Transform existing spaces with our expert renovation services and modern design solutions."
                  />
                  <div className="service-features">
                    <Tag color="blue">Kitchen Remodel</Tag>
                    <Tag color="green">Bathroom Renovation</Tag>
                    <Tag color="orange">Basement Finish</Tag>
                  </div>
                </Card>
              </motion.div>
            </Col>
            
            <Col xs={24} sm={12} lg={6}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className="service-card"
                  cover={
                    <div className="service-icon">
                      <DesignServices sx={{ fontSize: 60, color: '#2c5aa0' }} />
                    </div>
                  }
                >
                  <Card.Meta
                    title="Interior Design"
                    description="Complete interior design services to create beautiful, functional living and working spaces."
                  />
                  <div className="service-features">
                    <Tag color="blue">Space Planning</Tag>
                    <Tag color="green">Color Schemes</Tag>
                    <Tag color="orange">Furniture Selection</Tag>
                  </div>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </motion.section>

      {/* Statistics Section - Modern Design */}
      <motion.section 
        className="stats-section-modern"
        data-aos="fade-up"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <Title level={2} className="section-title">Our Track Record</Title>
            <Paragraph className="section-subtitle">
              Trusted by homeowners and businesses with hundreds of successful projects
            </Paragraph>
          </motion.div>
          
          <div className="stats-grid-modern">
            <motion.div
              className="stat-item-modern"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stat-icon-modern">
                <TrophyOutlined />
              </div>
              <div className="stat-content-modern">
                <div className="stat-number-modern">50+</div>
                <div className="stat-label-modern">Projects Completed</div>
              </div>
            </motion.div>
            
            <motion.div
              className="stat-item-modern"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="stat-icon-modern">
                <ClockCircleOutlined />
              </div>
              <div className="stat-content-modern">
                <div className="stat-number-modern">10+</div>
                <div className="stat-label-modern">Years Experience</div>
              </div>
            </motion.div>
            
            <motion.div
              className="stat-item-modern"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="stat-icon-modern">
                <StarOutlined />
              </div>
              <div className="stat-content-modern">
                <div className="stat-number-modern">100%</div>
                <div className="stat-label-modern">Happy Clients</div>
              </div>
            </motion.div>
            
            <motion.div
              className="stat-item-modern"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="stat-icon-modern">
                <TeamOutlined />
              </div>
              <div className="stat-content-modern">
                <div className="stat-number-modern">50+</div>
                <div className="stat-label-modern">Team Members</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Light Projects Section */}
      <motion.section 
        id="projects" 
        className="projects-light"
        data-aos="fade-up"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <Title level={2} className="section-title">Featured Projects</Title>
            <Paragraph className="section-subtitle">
              Showcasing our finest work and successful project deliveries
            </Paragraph>
          </motion.div>
          
          <div className="projects-grid-light">
            <motion.div
              className="project-item-light"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="project-image-light">
                <div className="project-icon-light">
                  <HomeWork sx={{ fontSize: 60, color: 'white' }} />
                </div>
                <div className="project-overlay-light">
                  <Button type="primary" size="small" icon={<PictureOutlined />}>
                    View Gallery
                  </Button>
                </div>
              </div>
              <div className="project-content-light">
                <Title level={4} className="project-title-light">Modern Family Home</Title>
                <Paragraph className="project-description-light">
                  Complete residential construction with contemporary design and sustainable features.
                </Paragraph>
                <div className="project-meta-light">
                  <div className="project-tag-light">Residential</div>
                  <div className="project-tag-light">Modern Design</div>
                  <div className="project-tag-light">3,500 sq ft</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="project-item-light"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="project-image-light">
                <div className="project-icon-light">
                  <Business sx={{ fontSize: 60, color: 'white' }} />
                </div>
                <div className="project-overlay-light">
                  <Button type="primary" size="small" icon={<PictureOutlined />}>
                    View Gallery
                  </Button>
                </div>
              </div>
              <div className="project-content-light">
                <Title level={4} className="project-title-light">Office Complex</Title>
                <Paragraph className="project-description-light">
                  Commercial building with modern amenities and sustainable features for growing businesses.
                </Paragraph>
                <div className="project-meta-light">
                  <div className="project-tag-light">Commercial</div>
                  <div className="project-tag-light">LEED Certified</div>
                  <div className="project-tag-light">50,000 sq ft</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="project-item-light"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="project-image-light">
                <div className="project-icon-light">
                  <ToolOutlined style={{ fontSize: 60, color: 'white' }} />
                </div>
                <div className="project-overlay-light">
                  <Button type="primary" size="small" icon={<PictureOutlined />}>
                    View Gallery
                  </Button>
                </div>
              </div>
              <div className="project-content-light">
                <Title level={4} className="project-title-light">Kitchen Renovation</Title>
                <Paragraph className="project-description-light">
                  Complete kitchen transformation with custom cabinetry and modern appliances.
                </Paragraph>
                <div className="project-meta-light">
                  <div className="project-tag-light">Renovation</div>
                  <div className="project-tag-light">Custom Design</div>
                  <div className="project-tag-light">6 weeks</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        id="team" 
        className="team-section"
        data-aos="fade-up"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Title level={2} className="section-title">Meet Our Team</Title>
            <Paragraph className="section-subtitle">
              Experienced professionals dedicated to bringing your vision to life
            </Paragraph>
          </motion.div>
          
          <Row gutter={[24, 24]} className="team-grid">
            {teamMembers.map((member, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <Card className="team-card">
                    <div className="team-avatar">
                      <Avatar size={120} icon={member.image} />
                    </div>
                    <Card.Meta
                      title={member.name}
                      description={
                        <div>
                          <div className="member-role">{member.role}</div>
                          <div className="member-experience">{member.experience}</div>
                          <div className="member-specialties">
                            {member.specialties.map((specialty, idx) => (
                              <Tag key={idx} color="blue">{specialty}</Tag>
                            ))}
                          </div>
                        </div>
                      }
                    />
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        id="testimonials" 
        className="testimonials-section"
        data-aos="fade-up"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Title level={2} className="section-title">What Our Clients Say</Title>
            <Paragraph className="section-subtitle">
              Real feedback from satisfied customers
            </Paragraph>
          </motion.div>
          
          <Carousel autoplay dots={{ className: "custom-dots" }}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <Card className="testimonial-card">
                  <div className="testimonial-content">
                    <Rate disabled defaultValue={testimonial.rating} />
                    <Paragraph className="testimonial-text">
                      "{testimonial.content}"
                    </Paragraph>
                    <div className="testimonial-author">
                      <Avatar size={60} icon={<People />} />
                      <div className="author-info">
                        <Title level={4}>{testimonial.name}</Title>
                        <Text type="secondary">{testimonial.role}</Text>
                        <Tag color="blue">{testimonial.project}</Tag>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </motion.section>

      {/* Blog Section */}
      <motion.section 
        id="blog" 
        className="blog-section"
        data-aos="fade-up"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Title level={2} className="section-title">Latest News & Insights</Title>
            <Paragraph className="section-subtitle">
              Stay updated with construction trends and our latest projects
            </Paragraph>
          </motion.div>
          
          <Row gutter={[24, 24]} className="blog-grid">
            {blogPosts.map((post, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <Card 
                    className="blog-card"
                    cover={
                      <div className="blog-image">
                        <FileTextOutlined style={{ fontSize: 60, color: '#2c5aa0' }} />
                      </div>
                    }
                    actions={[
                      <Button type="link" icon={<FileTextOutlined />}>
                        Read More
                      </Button>
                    ]}
                  >
                    <Card.Meta
                      title={post.title}
                      description={post.excerpt}
                    />
                    <div className="blog-meta">
                      <Space>
                        <Tag color="blue">{post.category}</Tag>
                        <Text type="secondary">{post.date}</Text>
                        <Text type="secondary">{post.readTime}</Text>
                      </Space>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="faq-section"
        data-aos="fade-up"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Title level={2} className="section-title">Frequently Asked Questions</Title>
            <Paragraph className="section-subtitle">
              Get answers to common questions about our services
            </Paragraph>
          </motion.div>
          
          <Row justify="center">
            <Col xs={24} lg={16}>
              <Collapse 
                className="faq-collapse"
                items={faqData.map((faq, index) => ({
                  key: index,
                  label: faq.question,
                  children: <Paragraph>{faq.answer}</Paragraph>
                }))}
                expandIcon={({ isActive }) => <QuestionCircleOutlined rotate={isActive ? 90 : 0} />}
              />
            </Col>
          </Row>
        </div>
      </motion.section>

      {/* Enhanced About Section */}
      <motion.section 
        id="about" 
        className="about"
        data-aos="fade-up"
      >
        <div className="container">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Title level={2}>About Sparkle Construction</Title>
                <Paragraph>
                  With over 15 years of experience in the construction industry, Sparkle Construction has built a reputation for excellence, reliability, and innovation. We specialize in delivering high-quality construction projects that exceed our clients' expectations.
                </Paragraph>
                <Paragraph>
                  Our team of skilled professionals, architects, and designers work together to bring your vision to life, whether it's a custom home, commercial space, or renovation project.
                </Paragraph>
                
                <div className="about-features">
                  <Space direction="vertical" size="large">
                    <div className="feature-item">
                      <CheckCircleOutlined style={{ color: '#52c41a', fontSize: 20 }} />
                      <span>Licensed & Insured</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircleOutlined style={{ color: '#52c41a', fontSize: 20 }} />
                      <span>15+ Years Experience</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircleOutlined style={{ color: '#52c41a', fontSize: 20 }} />
                      <span>100% Client Satisfaction</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircleOutlined style={{ color: '#52c41a', fontSize: 20 }} />
                      <span>Free Consultations</span>
                    </div>
                  </Space>
                </div>
              </motion.div>
            </Col>
            
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="about-image"
              >
                <div className="about-placeholder">
                  <People sx={{ fontSize: 120, color: 'white' }} />
                </div>
              </motion.div>
            </Col>
          </Row>
        </div>
      </motion.section>

      {/* Enhanced Contact Section */}
      <motion.section 
        id="contact" 
        className="contact"
        data-aos="fade-up"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Title level={2} className="section-title">Get In Touch</Title>
            <Paragraph className="section-subtitle">
              Ready to start your next project? Contact us today for a free consultation
            </Paragraph>
          </motion.div>
          
          <Row gutter={[48, 48]} className="contact-content">
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="contact-info-card">
                  <Title level={3}>Contact Information</Title>
                  <Space direction="vertical" size="large" style={{ width: '100%' }}>
                    <div className="contact-item">
                      <PhoneOutlined style={{ fontSize: 24, color: '#2c5aa0' }} />
                      <div>
                        <Title level={5}>Phone</Title>
                        <Text>+91 8428947174</Text>
                      </div>
                    </div>
                    <div className="contact-item">
                      <MailOutlined style={{ fontSize: 24, color: '#2c5aa0' }} />
                      <div>
                        <Title level={5}>Email</Title>
                        <Text>Wazeer665@gmail.com</Text>
                      </div>
                    </div>
                    <div className="contact-item">
                      <EnvironmentOutlined style={{ fontSize: 24, color: '#2c5aa0' }} />
                      <div>
                        <Title level={5}>Address</Title>
                        <Text>110, MOTHILAL STREET,NEAR BSNL OFFICE,
KUMBAKONAM-612001</Text>
                      </div>
                    </div>
                  </Space>
                  
                  <Divider />
                  
                  <div className="contact-hours">
                    <Title level={4}>Business Hours</Title>
                    <Space direction="vertical">
                      <Text>Monday - Friday: 8:00 AM - 6:00 PM</Text>
                      <Text>Saturday: 9:00 AM - 4:00 PM</Text>
                      <Text>Sunday: Closed</Text>
                    </Space>
                  </div>
                </Card>
              </motion.div>
            </Col>
            
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="contact-form-card">
                  <Title level={3}>Send us a Message</Title>
                  <form 
                    className="contact-form" 
                    action="https://formspree.io/f/meolnpjq" 
                    method="POST"
                  >
                    <Row gutter={[16, 16]}>
                      <Col xs={24} sm={12}>
                        <input type="text" name="name" placeholder="Your Name" required />
                      </Col>
                      <Col xs={24} sm={12}>
                        <input type="email" name="email" placeholder="Your Email" required />
                      </Col>
                      <Col xs={24}>
                        <input type="tel" name="phone" placeholder="Phone Number" />
                      </Col>
                      <Col xs={24}>
                        <select name="service">
                          <option>Select Service</option>
                          <option>Residential Construction</option>
                          <option>Commercial Projects</option>
                          <option>Renovations</option>
                          <option>Interior Design</option>
                        </select>
                      </Col>
                      <Col xs={24}>
                        <textarea name="message" placeholder="Project Details" rows={5}></textarea>
                      </Col>
                      <Col xs={24}>
                        <Button 
                          type="primary" 
                          size="large" 
                          icon={<CustomerServiceOutlined />}
                          className="btn-primary"
                          block
                          htmlType="submit"
                        >
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </form>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </motion.section>

      {/* Enhanced Footer */}
      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <Row gutter={[32, 32]} className="footer-content">
            <Col xs={24} sm={12} lg={6}>
              <div className="footer-section">
                <div className="footer-logo">
                  <img 
                    src="/FooterImg.png" 
                    alt="Sparkle Construction Logo" 
                    className="footer-logo-image"
                  />
                </div>
                <Paragraph style={{ color: 'white' }}>
                  We are committed to delivering exceptional construction services that exceed our clients' expectations.
                </Paragraph>
                <Space style={{ display: 'flex', justifyContent: 'start' }}>
                  <Button type="primary" shape="circle" icon={<PhoneOutlined />} />
                  <Button type="primary" shape="circle" icon={<MailOutlined />} />
                  <Button type="primary" shape="circle" icon={<EnvironmentOutlined />} />
                </Space>
              </div>
            </Col>
            
            <Col xs={24} sm={12} lg={6}>
              <div className="footer-section">
                <Title level={4}>Services</Title>
                <ul>
                  <li>Residential Construction</li>
                  <li>Commercial Projects</li>
                  <li>Renovations</li>
                  <li>Interior Design</li>
                  <li>Project Management</li>
                  <li>Consultation</li>
                </ul>
              </div>
            </Col>
            
            <Col xs={24} sm={12} lg={6}>
              <div className="footer-section">
                <Title level={4}>Company</Title>
                <ul>
                  <li>About Us</li>
                  <li>Our Team</li>
                  <li>Careers</li>
                  <li>Testimonials</li>
                  <li>Blog</li>
                  <li>FAQ</li>
                </ul>
              </div>
            </Col>
            
            <Col xs={24} sm={12} lg={6}>
              <div className="footer-section">
                <Title level={4}>Contact Info</Title>
                <Space direction="vertical">
                  <div>
                    <PhoneOutlined /> +91 8428947174
                  </div>
                  <div>
                    <MailOutlined /> Wazeer665@gmail.com
                  </div>
                  <div>
                    <EnvironmentOutlined /> 110, MOTHILAL STREET,NEAR BSNL OFFICE,
<br />
                    KUMBAKONAM-612001
                  </div>
                </Space>
              </div>
            </Col>
          </Row>
          
          <Divider />
          
          <div className="footer-bottom">
            <Row justify="space-between" align="middle">
              <Col>
                <Text style={{ color: 'white' }}>&copy; {new Date().getFullYear()} Sparkle Construction. All rights reserved.</Text>
              </Col>
              <Col>
                <Space>
                  <Text style={{ color: 'white' }}>Privacy Policy</Text>
                  <Text style={{ color: 'white' }}>Terms of Service</Text>
                  <Text style={{ color: 'white' }}>Cookie Policy</Text>
                </Space>
              </Col>
            </Row>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
