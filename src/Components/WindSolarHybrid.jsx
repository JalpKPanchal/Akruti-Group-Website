import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import "../Components/WindSolarHybrid1.css"; // Assuming this is the correct path to your CSS file
import { Link } from "react-router-dom";
import "../WindSolarHybrid.css"; // Ensure this path is correct

export default function SolarWind() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120, easing: "ease-in-out" });
  }, []);

  return (
    <main className="solarwind-page">
      {/* HERO */}
      <section className="black_hero" data-aos="fade-up" data-aos-delay="80">
        <div className="normal_leptop_container container">
          <div className="hero-careear">
            <h1 className="career-headings text-align-right" data-aos="fade-up" data-aos-delay="140">Wind Solar Hybrid Solutions</h1>
            <h1 className="career-headings" data-aos="fade-up" data-aos-delay="200">for Maximizing</h1>
            <h1 className="career-headings text-align-right" data-aos="fade-up" data-aos-delay="260">
              <span className="career-span-2">Renewable Energy Efficiency</span>
            </h1>
            <div className="career_content w-richtext" data-aos="fade-up" data-aos-delay="320">
              <p>Building hybrid solutions with Innovation &amp; Collaboration</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container normal_leptop_container" id="solar_hybrid">
        <div className="careers-about d-flex align-items-center flex-wrap">
          <div className="ca-content col-lg-6" data-aos="fade-right" data-aos-delay="120">
            <h2 className="_1-heading">What is <strong>Wind Solar Hybrid System?</strong></h2>
            <div className="ca-text-wrapper">
              <div className="paragraph-16px">
                A Wind Solar Hybrid System combines both wind and solar power generation technologies to create a more efficient and reliable renewable energy solution. By integrating wind turbines and solar panels, this hybrid system optimizes
                energy production, as wind and solar resources often complement each other. At Akruti, we design and build custom hybrid systems that optimize energy production while reducing the impact of weather fluctuations.
              </div>
            </div>
          </div>

          <div className="ca-images col-lg-6 text-center" data-aos="fade-left" data-aos-delay="220">
            <img
              className="career_img"
              src="https://cdn.prod.website-files.com/64dbc131328758d2f8cb2f35/676be2c74376fcc55acfadb9_istockphoto-1319945353-612x612.jpg"
              alt="Wind Solar Hybrid"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* EXPERT EPC SOLUTIONS */}
      <section className="section-7">
        <div className="normal_leptop_container container">
          <div className="careers-3-about row">
            <div className="c3a-text-content col-lg-6" data-aos="fade-up" data-aos-delay="120">
              <div className="c3a-text-wrapper">
                <h2 className="_1-heading">Expert <strong>Hybrid EPC Solutions</strong></h2>
                <div className="paragraph-18px">
                  Akruti provides a full range of Wind Solar Hybrid EPC services, ensuring exceptional quality in every project. From detailed project analysis to seamless construction and ongoing monitoring, our expert approach delivers high
                  performance, reliability, and efficiency.
                </div>
              </div>
            </div>

            <div className="c3a-content col-lg-6" data-aos="fade-up" data-aos-delay="240">
              <div className="c3a-card bp0 d-flex flex-column">
                <div className="c3a-wrapper d-flex align-items-center">
                  <div className="c3a-circle"><img src="https://cdn.prod.website-files.com/64dbc131328758d2f8cb2f35/66ddd7e7d72eb33f27e0dffe_Ok.svg" alt="ok" /></div>
                  <div className="paragraph-18px">Solar Parks</div>
                </div>

                <div className="c3a-wrapper d-flex align-items-center">
                  <div className="c3a-circle"><img src="https://cdn.prod.website-files.com/64dbc131328758d2f8cb2f35/66ddd7e7d72eb33f27e0dffe_Ok.svg" alt="ok" /></div>
                  <div className="paragraph-18px">Commercial &amp; Industrial (C&amp;I) Installations</div>
                </div>

                <div className="c3a-wrapper d-flex align-items-center">
                  <div className="c3a-circle"><img src="https://cdn.prod.website-files.com/64dbc131328758d2f8cb2f35/66ddd7e7d72eb33f27e0dffe_Ok.svg" alt="ok" /></div>
                  <div className="paragraph-18px">Wind &amp; Solar Hybrid Systems</div>
                </div>
              </div>

              <img className="c3a-image mt-3" src="https://cdn.prod.website-files.com/64dbc131328758d2f8cb2f35/66ddd7e7d72eb33f27e0e01f_Icon%20C3.svg" alt="icon" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS / PROGRAM (full program boxes from page) */}
      <section className="section_program">
        <div className="normal_leptop_container container">
          <div className="program_wrap d-flex align-items-start flex-wrap">
            <div className="program_left-box col-lg-4" data-aos="fade-right" data-aos-delay="120">
              <h2 className="_1-heading white title_left">Process for <strong>Hybrid System</strong></h2>
            </div>

            <div className="program_right-box col-lg-8" data-aos="fade-left" data-aos-delay="200">
              <div className="program_content-box">
                <div className="program_text">
                  <div className="program_name">Site Assessment &amp; Design</div>
                  <p className="text-size-regular-2 text-color-gray text-weight-medium">Comprehensive site analysis to determine the optimal configuration of wind and solar components.</p>
                </div>
              </div>

              <div className="program_content-box">
                <div className="program_text">
                  <div className="program_name">Integrated Control Systems</div>
                  <p className="text-size-regular-2 text-color-gray text-weight-medium">Control systems to seamlessly switch between wind and solar inputs, ensuring consistent energy supply.</p>
                </div>
              </div>

              <div className="program_content-box">
                <div className="program_text">
                  <div className="program_name">Customized Installations</div>
                  <p className="text-size-regular-2 text-color-gray text-weight-medium">Tailored solutions for different environments, whether it’s a solar farm augmented with wind turbines or vice versa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WIND SOLAR HYBRID (process cards) */}
      <div className="process_section">
        <div className="normal_leptop_container container">
          <div className="title_wrap text-center mb-4">
            <h2 className="_1-heading title_center" data-aos="fade-up" data-aos-delay="100"><strong>Why Wind Solar Hybrid?</strong></h2>
          </div>

          <div className="process">
            {/* Step 1 */}
            <div className="process_card d-flex align-items-center flex-wrap" data-aos="fade-right" data-aos-delay="140">
              <div className="process_details col-md-5">
                <h2 className="h2">Increased Energy Yield</h2>
                <div className="w-richtext">
                  <p>Combines wind and solar to produce more energy than standalone systems.</p>
                </div>
              </div>

              <div className="centre_block col-md-2 text-center">
                <div className="centre_icon_wrap">
                  <div className="centre_step">01</div>
                </div>
              </div>

              <div className="process_image_wrap col-md-5 text-center">
                <img className="image-40 img-fluid" src="https://cdn.prod.website-files.com/64dbc131328758d2f8cb2f35/677d127a6cac65f16ea74aba_Increased%20Energy%20Yield.webp" alt="Increased Energy Yield" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="process_card_02 d-flex align-items-center flex-wrap" data-aos="fade-left" data-aos-delay="260">
              <div className="process_image_wrap col-md-5 text-center">
                <img className="process_image img-fluid" src="https://cdn.prod.website-files.com/64dbc131328758d2f8cb2f35/677d127ab3436c1a1014a817_Reduced%20Intermittency.webp" alt="Reduced Intermittency" />
              </div>

              <div className="centre_block col-md-2 text-center">
                <div className="centre_icon_wrap">
                  <div className="centre_step">02</div>
                </div>
              </div>

              <div className="process_details col-md-5">
                <h2 className="h2">Reduced Intermittency</h2>
                <div className="w-richtext">
                  <p>Balances energy production, providing a more stable power supply.</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="process_card d-flex align-items-center flex-wrap" data-aos="fade-right" data-aos-delay="380">
              <div className="process_details col-md-5">
                <h2 className="h2">Cost-Effective</h2>
                <div className="w-richtext">
                  <p>Maximizes the use of available land and resources, offering a higher return on investment.</p>
                </div>
              </div>

              <div className="centre_block col-md-2 text-center">
                <div className="centre_icon_wrap">
                  <div className="centre_step">03</div>
                </div>
              </div>

              <div className="process_image_wrap col-md-5 text-center">
                <img className="image-40 img-fluid" src="https://cdn.prod.website-files.com/64dbc131328758d2f8cb2f35/677d127a21fb32c62c6e6556_Cost-Effective.webp" alt="Cost Effective" />
              </div>
            </div>

            <div className="process_line"></div>
          </div>
        </div>
      </div>

      {/* WHY Akruti */}
      <section className="container normal_leptop_container">
        <div className="careers-about reverse_careers d-flex align-items-center flex-wrap">
          <div className="ca-content col-lg-6" data-aos="fade-right" data-aos-delay="120">
            <div className="ca-bedge"><div className="text-7">Why Akruti?</div></div>
            <h2 className="_1-heading">What Makes Akruti the Ideal Partner for <br /><strong>Wind Solar Hybrid Solutions?</strong></h2>
            <div className="ca-text-wrapper">
              <div className="paragraph-16px">
                Akruti Green combines expertise in wind and solar energy to deliver hybrid systems. To develop our hybrid energy business, we have secured grid connectivity approval for wind-solar hybrid park in Gujarat and initiated scouting suitable land.
              </div>
            </div>
          </div>

          <div className="ca-images col-lg-6 text-center" data-aos="fade-left" data-aos-delay="240">
            <img className="career_img" src="https://cdn.prod.website-files.com/64dbc131328758d2f8cb2f35/677e447ad95eaf411325e7fb_What%20Makes%20Akruti%20the%20Ideal%20Partner%20for%20Wind%20Solar%20Hybrid%20Solutions.jpg" alt="Why Akruti" />
          </div>
        </div>
      </section>

      {/* SCROLL / FULL-PAGE BLOCKS */}
      <div className="full-page-wrapper">
        <div className="s-scroll">
          <div className="s-scroll-box-wrapper" data-aos="fade-up" data-aos-delay="120">
            <div className="content-outer-wrapper">
              <div className="ca-bedge"><div className="text-7">Expansion of the Renewable Park Business</div></div>
              <h2 className="_1-heading"><strong>Solar Park</strong> Programme</h2>
              <p className="main-p">
                We are expanding our portfolio of solar energy parks by applying to respective state nodal agencies under the Solar Parks Programme. We intend to develop renewable energy parks in high-potential states across India including Tamil Nadu, Telangana and Andhra Pradesh.
              </p>
            </div>
          </div>

          <div className="s-scroll-box-wrapper img" data-aos="fade-left" data-aos-delay="260">
            <div className="img-wrapper ws1"></div>
            <div className="img-transition-wrapper"></div>
          </div>
        </div>

        <div className="s-scroll">
          <div className="s-scroll-box-wrapper" data-aos="fade-up" data-aos-delay="120">
            <div className="content-outer-wrapper">
              <div className="ca-bedge"><div className="text-7">Cutting-Edge Design for Optimal Performance</div></div>
              <h2 className="_1-heading"><strong>Hybrid System</strong> Design</h2>
              <p className="main-p">Our team develops innovative and cost-effective green energy solutions aimed at optimizing the performance ratio of our projects.</p>
            </div>
          </div>

          <div className="s-scroll-box-wrapper img" data-aos="fade-left" data-aos-delay="260">
            <div className="img-wrapper ws2"></div>
            <div className="img-transition-wrapper"></div>
          </div>
        </div>

        <div className="s-scroll">
          <div className="s-scroll-box-wrapper" data-aos="fade-up" data-aos-delay="120">
            <div className="content-outer-wrapper">
              <div className="ca-bedge"><div className="text-7">Seamless Integration with the Power Grid</div></div>
              <h2 className="_1-heading"><strong>Grid Integration &amp;</strong> Management</h2>
              <p className="main-p">We help facilitate grid connectivity by liaisoning with government agencies to obtain permits for integrating solar power systems with existing electricity supply lines.</p>
            </div>
          </div>

          <div className="s-scroll-box-wrapper img" data-aos="fade-left" data-aos-delay="260">
            <div className="img-wrapper ws3"></div>
            <div className="img-transition-wrapper"></div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className="container normal_leptop_container">
        <div className="section-5">
          <div className="w-layout-grid">
            <h2 className="_1-heading" data-aos="fade-up" data-aos-delay="120">Hear from our <strong>Customers</strong></h2>

            <div className="testimonial-card mt-3" data-aos="fade-up" data-aos-delay="220">
              <div className="d-flex align-items-start">
                <img className="avatar-image" src="https://cdn.prod.website-files.com/64dbc131328758d2f8cb2f35/66d2ab4bcb0b824defe86bee_john-carter-team-member-brix-templates-avatar-picture.jpg" alt="John Carter" />
                <div>
                  <div className="fw-bold">MD at India’s biggest commercial automobile manufacturing plant</div>
                  <p className="mt-2">Akruti Green Energy Limited delivered exceptional solar solutions, perfectly tailored to our energy needs. Their commitment to sustainability is truly commendable.</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card mt-3" data-aos="fade-up" data-aos-delay="320">
              <div className="d-flex align-items-start">
                <img className="avatar-image" src="https://cdn.prod.website-files.com/64dbc131328758d2f8cb2f35/66d2ab4acb0b824defe86b5b_sohphie-moore-team-member-brix-templates-avatar-picture.jpg" alt="Sophie Moore" />
                <div>
                  <div className="fw-bold">CEO at top textile manufacturing company of India</div>
                  <p className="mt-2">Working with Akruti Green Energy Limited has been a game-changer for our clean energy goals. Their expertise and seamless execution exceeded our expectations.</p>
                </div>
              </div>
            </div>


            <div className="testimonial-card mt-3" data-aos="fade-up" data-aos-delay="420">
              <div className="d-flex align-items-start">
                <img className="avatar-image" src="https://cdn.prod.website-files.com/64dbc131328758d2f8cb2f35/66d2ab4bcb0b824defe86bbb_matt-cannon-team-member-brix-templates-avatar-picture.jpg" alt="Matt Cannon" />
                <div>
                  <div className="fw-bold">Director of Engineering at top Indian Government PSU</div>
                  <p className="mt-2">Akruti Green Energy Limited’s solar installations have significantly reduced our carbon footprint. Their professionalism and innovation are unmatched.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* APPLY CTA */}
      <div className="apply_now_cta normal_leptop_container container" data-aos="fade-up" data-aos-delay="140">
        <div className="center-content-vertically d-flex align-items-center justify-content-between flex-wrap p-4">
          <p className="text-size-large-2 text-color-grey mb-2">Interested in maximizing renewable energy output?<br/>Contact Akruti Green for a customized Wind Solar Hybrid solution.</p>
          <Link Link to="/contact" className="button-5 bg-dark-blue d-inline-block">
            <div className="paragraph-14px white _2">Contact Now</div>
          </Link>
        </div>
      </div>
    </main>
  );
}