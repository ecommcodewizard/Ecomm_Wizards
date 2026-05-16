import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";

export const metadata: Metadata = {
  title: "Shopify Speed Optimization Services | Ecomm Wizards",
  description:
    "Shopify speed optimization services that actually fix the problem. We strip bloat, rebuild theme architecture, and ship measurable Core Web Vitals wins for Shopify Plus stores.",
};

const GRADIENT_TEXT = {
  background: "var(--brand-gradient)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

const PHONE_IMAGES = [
  "/images/audit-2_1024x1024-1.webp",
  "/images/audit-1_1024x1024.webp",
  "/images/audit-9_1024x1024-1.webp",
  "/images/audit-7_1024x1024-1.webp",
  "/images/audit-8_1024x1024-1.webp",
];

const TRUST_LOGOS = [
  { src: "/images/Lids-logo_fcb134ea-8ac4-4592-bfa1-6a366076e371.avif", alt: "Lids" },
  { src: "/images/Olaplex-logo-new.avif", alt: "Olaplex" },
  { src: "/images/everlast-icon.svg", alt: "Everlast" },
  { src: "/images/ipsy-logo.svg", alt: "IPSY" },
  { src: "/images/trust_logo_2.svg", alt: "Peanuts" },
  { src: "/images/trust_logo_31.svg", alt: "Peanuts" },
  { src: "/images/trust_logo_32.svg", alt: "Forme" },
  { src: "/images/trust_logo_20.svg", alt: "SarahChloe" },
  { src: "/images/trust_logo_27.svg", alt: "Cellar.com" },
];

const MONTHLY_SERVICES = [
  {
    image: "/images/services-1_1024x1024.webp",
    title: "Analyze Performance Metrics Regularly",
    desc: "We believe in crafting solutions that exceed the expectations of our clients. Our unwavering commitment to customer satisfaction drives us to create truly awe-inspiring eCommerce experiences that bring success to our Shopify merchants.",
  },
  {
    image: "/images/services-1_1024x1024.webp",
    title: "Optimize Images and Videos",
    desc: "Utilize tools like Google Page Speed Insights, GTmetrix Shopify's Online Store Speed report to continuously monitor and identify performance bottlenecks. Pay special attention to changes after updates or modifications to your site.",
  },
  {
    image: "/images/services-2_1024x1024.webp",
    title: "App Review and Optimization",
    desc: "Utilize tools like Google Page Speed Insights, GTmetrix Shopify's Online Store Speed report to continuously monitor and identify performance bottlenecks. Pay special attention to changes after updates or modifications to your site.",
  },
  {
    image: "/images/services-3_1024x1024.webp",
    title: "Theme Customization Review",
    desc: "Conduct monthly audits of installed apps to identify and remove those that are unnecessary or not used, replacing them with more efficient alternatives when possible.",
  },
  {
    image: "/images/services-4_1024x1024.webp",
    title: "Keep Your Theme and Apps Updated",
    desc: "Monthly checks for unnecessary custom JavaScript or CSS within your theme, removing or optimizing it to avoid slowdowns. Consider migrating to a more performance-optimized theme if needed.",
  },
  {
    image: "/images/services-5_1024x1024.webp",
    title: "Maximize CDN Utilization",
    desc: "Ensure the Shopify Plus CDN is correctly configured for your store to enhance global content delivery speeds.",
  },
  {
    image: "/images/services-6_1024x1024.webp",
    title: "Checkout Process Optimization",
    desc: "Streamline the checkout experience by minimizing form fields and unnecessary steps to reduce potential slowdowns.",
  },
  {
    image: "/images/services-7_1024x1024.webp",
    title: "Database Management and Cleanup",
    desc: "Periodically archive or delete old orders, products, and customer data to maintain a lean and efficient database structure.",
  },
  {
    image: "/images/services-8_1024x1024.webp",
    title: "Caching Strategy Implementation",
    desc: "Leverage browser and server caching to minimize load times for repeat visitors. Explore custom caching solutions beyond Shopify Plus's automatic handling for further optimization.",
  },
  {
    image: "/images/services-9_1024x1024.webp",
    title: "Redirect Management",
    desc: "Regularly audit and manage redirects to minimize their impact on site speed, keeping them to only those that are absolutely necessary.",
  },
  {
    image: "/images/services-10_1024x1024.webp",
    title: "Mobile Performance Optimization",
    desc: "Given the predominance of mobile traffic, ensure your site is fully optimized for mobile devices, focusing on responsive design and quick load times.",
  },
  {
    image: "/images/services-11_1024x1024.webp",
    title: "Performance Budgeting",
    desc: "Establish and adhere to performance budgets for page size and load times, regularly reviewing site performance against these benchmarks.",
  },
  {
    image: "/images/services-12_1024x1024.webp",
    title: "Analytics and Tracking Code Optimization",
    desc: "Review and optimize the integration of analytics and tracking codes to ensure they do not adversely affect site speed. Reintegrate or optimize as necessary to maintain efficient data flow.",
  },
  {
    image: "/images/services-13_1024x1024.webp",
    title: "Advanced Performance Analysis",
    desc: "Utilize more advanced tools and techniques for in-depth analysis, such as web vitals and user behavior analysis, to pinpoint and address less obvious performance issues.",
  },
  {
    image: "/images/services-14_1024x1024.png",
    title: "Custom Code Audits",
    desc: "Regular audits of any custom code (Liquid, JavaScript, CSS) for efficiency and necessity, ensuring that only optimized code is running on your site.",
  },
];

// Icon SVGs ported verbatim from the Elementor reference (icon-buying-on-smartphone,
// icon-design, icon-badge). Single-color (currentColor) so we can tint via parent.
const IconCartPhone = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden width={56} height={56}>
    <path d="M16.839 23.517v4.312h-15.359v-24.222h15.359v4.64h1.482v-5.888c0-1.173-0.958-2.129-2.129-2.129h-14.063c-1.173 0-2.129 0.957-2.129 2.129v27.28c0 1.173 0.957 2.129 2.129 2.129h14.062c1.171 0 2.129-0.956 2.129-2.129v-6.122h-1.481zM6.91 1.768h4.499c0.142 0 0.258 0.113 0.258 0.256 0 0.141-0.115 0.258-0.258 0.258h-4.499c-0.142 0-0.257-0.117-0.257-0.258 0-0.142 0.114-0.256 0.257-0.256zM9.159 30.706c-0.587 0-1.065-0.478-1.065-1.067 0-0.587 0.478-1.065 1.065-1.065 0.589 0 1.067 0.478 1.067 1.065-0.001 0.589-0.478 1.067-1.067 1.067zM23.801 22.213h-15.238l-2.804-12.591h17.145l-0.465 1.804h-14.432l2.002 8.985h12.345l3.102-14.044h6.544v1.802h-5.096l-3.102 14.043zM13.613 24.608c0 0.929-0.755 1.683-1.682 1.683-0.929 0-1.683-0.754-1.683-1.683 0-0.927 0.754-1.682 1.683-1.682s1.682 0.754 1.682 1.682zM22.411 24.608c0 0.929-0.754 1.683-1.683 1.683-0.927 0-1.682-0.754-1.682-1.683 0-0.927 0.754-1.682 1.682-1.682 0.929 0 1.683 0.754 1.683 1.682z" />
  </svg>
);

const IconMonitor = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden width={56} height={56}>
    <path d="M21.061 2.578h-8.173c-0.251 0-0.503 0.189-0.503 0.503s0.189 0.503 0.503 0.503h8.173c0.251 0 0.503-0.189 0.503-0.503-0.063-0.314-0.251-0.503-0.503-0.503z" />
    <path d="M16.534 4.589h-3.646c-0.251 0-0.503 0.189-0.503 0.503 0 0.251 0.189 0.503 0.503 0.503h3.646c0.251-0.063 0.44-0.251 0.44-0.566 0-0.251-0.189-0.44-0.44-0.44z" />
    <path d="M29.674 4.652c-0.251 0-0.503 0.189-0.503 0.503 0 0.251 0.189 0.503 0.503 0.503 0.44 0 0.88 0.377 0.88 0.88v13.517h-3.458v-14.46h0.817c0.251 0 0.503-0.189 0.503-0.503 0-0.251-0.189-0.503-0.503-0.503h-0.817v-3.143c0-0.817-0.692-1.446-1.446-1.446h-19.929c-0.754 0-1.446 0.629-1.446 1.446v3.269h-2.515c-0.943-0.063-1.76 0.754-1.76 1.76v18.42c0 1.006 0.817 1.823 1.823 1.823h2.955c0.251 0 0.503-0.189 0.503-0.503s-0.189-0.503-0.503-0.503h-2.955c-0.44 0-0.88-0.377-0.88-0.88v-3.898h29.611v3.898c0 0.44-0.377 0.88-0.88 0.88h-22.695c-0.251 0-0.503 0.189-0.503 0.503 0 0.251 0.189 0.503 0.503 0.503h4.904v2.515c-1.257 0-2.326 1.069-2.326 2.326 0 0.251 0.189 0.503 0.503 0.503h11.505c0.251 0 0.503-0.189 0.503-0.503 0-1.257-1.069-2.326-2.326-2.326v-2.515h10.059c1.006 0 1.823-0.817 1.823-1.823v-18.42c-0.126-1.006-0.943-1.823-1.949-1.823zM4.275 19.992h-3.332v-13.517c0-0.44 0.377-0.88 0.88-0.88h2.515v14.397zM26.153 6.978h-16.22c-0.251 0-0.503 0.189-0.503 0.503s0.189 0.503 0.503 0.503h16.22v12.071h-20.872v-12.134h2.2c0.251 0 0.503-0.189 0.503-0.503s-0.189-0.503-0.503-0.503h-2.2v-5.47c0-0.251 0.189-0.503 0.503-0.503h19.929c0.251 0 0.503 0.189 0.503 0.503l-0.063 5.532zM12.825 26.656h5.91v2.515h-5.91v-2.515zM20.935 31.057h-10.373c0.189-0.566 0.692-0.943 1.32-0.943h7.733c0.629 0 1.132 0.377 1.32 0.943z" />
    <path d="M16.031 21.878c-0.817 0-1.446 0.629-1.446 1.446s0.629 1.446 1.446 1.446c0.817 0 1.446-0.629 1.446-1.446-0.063-0.817-0.692-1.446-1.446-1.446zM16.031 23.827c-0.251 0-0.503-0.189-0.503-0.503 0-0.251 0.189-0.503 0.503-0.503 0.251 0 0.503 0.189 0.503 0.503-0.063 0.251-0.251 0.503-0.503 0.503z" />
    <path d="M10.436 4.904l-1.572-2.703c-0.063-0.126-0.251-0.251-0.44-0.251s-0.251 0.126-0.377 0.251l-1.572 2.703c-0.063 0.126-0.063 0.314 0 0.503 0.126 0.126 0.251 0.251 0.44 0.251h3.143c0.189 0 0.314-0.063 0.44-0.251 0.063-0.126 0.063-0.314-0.063-0.503zM7.733 4.652l0.754-1.257 0.754 1.257h-1.509z" />
    <path d="M24.707 9.682h-6.916c-0.251 0-0.503 0.189-0.503 0.503 0 0.251 0.189 0.503 0.503 0.503h6.916c0.251 0 0.503-0.189 0.503-0.503s-0.251-0.503-0.503-0.503z" />
    <path d="M24.707 11.756h-6.916c-0.251 0-0.503 0.189-0.503 0.503s0.189 0.503 0.503 0.503h6.916c0.251 0 0.503-0.189 0.503-0.503s-0.251-0.503-0.503-0.503z" />
    <path d="M24.707 13.831h-6.916c-0.251 0-0.503 0.189-0.503 0.503 0 0.251 0.189 0.503 0.503 0.503h6.916c0.251 0 0.503-0.189 0.503-0.503 0-0.251-0.251-0.503-0.503-0.503z" />
    <path d="M24.707 15.906h-6.916c-0.251 0-0.503 0.189-0.503 0.503 0 0.251 0.189 0.503 0.503 0.503h6.916c0.251 0 0.503-0.189 0.503-0.503 0-0.251-0.251-0.503-0.503-0.503z" />
    <path d="M21.061 18.043h-3.206c-0.251 0-0.503 0.189-0.503 0.503s0.189 0.503 0.503 0.503h3.206c0.251 0 0.503-0.189 0.503-0.503-0.063-0.314-0.251-0.503-0.503-0.503z" />
    <path d="M15.654 9.242h-8.739c-0.251 0-0.503 0.189-0.503 0.503v8.739c0 0.251 0.189 0.503 0.503 0.503h8.802c0.251 0 0.503-0.189 0.503-0.503v-8.802c-0.063-0.189-0.251-0.44-0.566-0.44zM7.418 10.185h7.796v4.967c-0.063 0-0.126 0-0.189 0-0.817-0.063-1.32 0.251-1.697 0.503-0.314 0.189-0.566 0.377-0.943 0.377-0.692 0.063-1.132-0.314-1.635-0.754-0.629-0.503-1.32-1.069-2.389-1.006-0.314 0-0.629 0.063-0.943 0.251v-4.338zM15.214 18.043v0h-7.796v-2.452c0.314-0.189 0.692-0.314 1.006-0.314 0.754-0.063 1.194 0.314 1.76 0.817 0.629 0.503 1.257 1.069 2.326 0.943 0.692-0.063 1.069-0.314 1.446-0.566 0.314-0.251 0.566-0.377 1.069-0.314 0.063 0 0.189 0 0.251 0.063l-0.063 1.823z" />
    <path d="M12.574 11.253c-0.817 0-1.446 0.629-1.446 1.446s0.629 1.446 1.446 1.446c0.817 0 1.446-0.629 1.446-1.446 0-0.754-0.692-1.446-1.446-1.446zM12.574 13.265c-0.251 0-0.503-0.251-0.503-0.503s0.251-0.503 0.503-0.503c0.251 0 0.503 0.251 0.503 0.503s-0.251 0.503-0.503 0.503z" />
  </svg>
);

const IconBadge = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden width={56} height={56}>
    <path d="M31.91 26.373l-3.898-5.848 0.683-0.213c0.281-0.088 0.438-0.387 0.35-0.668-0.004-0.012-0.008-0.023-0.012-0.034l-1.198-3.082 2.441-2.269c0.216-0.201 0.228-0.538 0.027-0.754-0.009-0.009-0.018-0.018-0.027-0.027l-2.441-2.269 1.199-3.082c0.107-0.275-0.029-0.584-0.304-0.69-0.011-0.004-0.023-0.008-0.034-0.012l-3.209-1.001-0.281-3.291c-0.012-0.146-0.084-0.281-0.199-0.373s-0.261-0.132-0.406-0.111l-3.339 0.462-1.71-2.85c-0.151-0.253-0.479-0.335-0.732-0.183-0.007 0.004-0.013 0.008-0.019 0.012l-2.803 1.845-2.802-1.845c-0.246-0.162-0.577-0.094-0.739 0.152-0.004 0.006-0.008 0.013-0.012 0.019l-1.71 2.851-3.339-0.462c-0.292-0.041-0.561 0.163-0.602 0.455-0.001 0.009-0.002 0.019-0.003 0.028l-0.281 3.291-3.206 1.001c-0.281 0.088-0.438 0.387-0.35 0.668 0.004 0.012 0.008 0.023 0.012 0.034l1.198 3.082-2.443 2.269c-0.216 0.201-0.228 0.538-0.027 0.754 0.009 0.009 0.018 0.018 0.027 0.027l2.441 2.269-1.199 3.082c-0.107 0.275 0.029 0.584 0.304 0.69 0.011 0.004 0.023 0.008 0.034 0.012l0.708 0.22-3.932 6.39c-0.154 0.251-0.076 0.579 0.175 0.734 0.112 0.069 0.246 0.094 0.375 0.071l5.351-0.973 0.964 4.821c0.042 0.211 0.208 0.377 0.419 0.419 0.034 0.006 0.069 0.009 0.103 0.008 0.178 0 0.345-0.089 0.444-0.237l3.742-5.613 0.794 1.324c0.075 0.125 0.197 0.214 0.339 0.246 0.040 0.009 0.080 0.014 0.121 0.013 0.104 0 0.206-0.031 0.293-0.088l2.8-1.845 2.802 1.845c0.246 0.162 0.577 0.094 0.739-0.152 0.004-0.006 0.008-0.013 0.012-0.019l0.795-1.325 3.742 5.613c0.099 0.148 0.265 0.237 0.444 0.237 0.035 0 0.069-0.003 0.103-0.010 0.212-0.042 0.377-0.207 0.419-0.419l0.971-4.863 5.392 0.492c0.293 0.027 0.553-0.19 0.579-0.483 0.011-0.121-0.020-0.243-0.088-0.344zM7.739 30.099l-0.816-4.072c-0.057-0.285-0.332-0.472-0.618-0.42l-4.691 0.853 3.448-5.601 1.45 0.452 0.281 3.291c0.012 0.146 0.084 0.281 0.199 0.373s0.261 0.132 0.406 0.111l3.339-0.462 0.309 0.515-3.307 4.96zM20.53 23.774l-1.605 2.676-2.631-1.734c-0.178-0.117-0.409-0.117-0.587 0l-2.631 1.732-1.605-2.677c-0.096-0.161-0.27-0.259-0.457-0.259-0.025-0-0.049 0.002-0.074 0.005l-3.131 0.433-0.263-3.087c-0.018-0.216-0.166-0.4-0.373-0.464l-3.004-0.938 1.12-2.886c0.079-0.204 0.026-0.435-0.134-0.584l-2.283-2.125 2.285-2.125c0.16-0.149 0.213-0.38 0.134-0.584l-1.12-2.887 3.005-0.937c0.207-0.064 0.355-0.248 0.373-0.464l0.263-3.087 3.131 0.434c0.213 0.030 0.423-0.070 0.533-0.254l1.605-2.676 2.625 1.732c0.178 0.117 0.409 0.117 0.587 0l2.631-1.732 1.605 2.677c0.111 0.183 0.319 0.282 0.531 0.254l3.131-0.433 0.263 3.087c0.018 0.216 0.166 0.4 0.373 0.464l3.005 0.938-1.123 2.886c-0.079 0.204-0.026 0.435 0.134 0.584l2.285 2.125-2.285 2.125c-0.16 0.149-0.213 0.38-0.134 0.584l1.12 2.887-3.003 0.937c-0.207 0.064-0.355 0.248-0.373 0.464l-0.263 3.087-3.131-0.431c-0.212-0.028-0.42 0.072-0.531 0.254zM25.648 25.6c-0.27-0.021-0.514 0.162-0.571 0.427l-0.814 4.071-3.307-4.96 0.308-0.514 3.339 0.462c0.292 0.041 0.561-0.163 0.602-0.455 0.001-0.009 0.002-0.019 0.003-0.028l0.281-3.291 1.464-0.457 3.451 5.179-4.756-0.435z" />
    <path d="M24 11.2c0-0.884-0.716-1.6-1.6-1.6h-3.733v-2.133c0.001-1.471-1.19-2.665-2.661-2.667-0.002 0-0.004 0-0.005 0-0.295 0-0.533 0.239-0.533 0.533v2.541l-0.96 1.916-1.716 1.373c-0.017-0.277-0.246-0.494-0.524-0.497h-3.733c-0.295 0-0.533 0.239-0.533 0.533v8c0 0.295 0.239 0.533 0.533 0.533h3.733c0.295 0 0.533-0.239 0.533-0.533h8c0.882-0.004 1.596-0.718 1.6-1.6-0.002-0.275-0.075-0.545-0.213-0.783 0.098-0.061 0.189-0.134 0.271-0.217 0.517-0.503 0.625-1.293 0.262-1.917 0.098-0.061 0.189-0.134 0.271-0.217 0.517-0.503 0.625-1.293 0.262-1.917 0.098-0.061 0.189-0.134 0.271-0.217 0.306-0.298 0.478-0.707 0.476-1.134zM11.734 18.667h-2.667v-6.933h2.667v6.933zM22.77 11.58c-0.097 0.1-0.231 0.155-0.37 0.154h-2.133v1.067h1.6c0.295 0 0.533 0.239 0.533 0.533 0 0.144-0.059 0.281-0.163 0.38-0.097 0.1-0.231 0.155-0.37 0.154h-2.133v1.067h1.6c0.295 0 0.533 0.239 0.533 0.533 0 0.144-0.059 0.281-0.163 0.38-0.097 0.1-0.231 0.155-0.37 0.154h-2.133v1.067h1.6c0.295 0 0.533 0.239 0.533 0.533 0 0.144-0.059 0.281-0.163 0.38-0.097 0.1-0.231 0.155-0.37 0.154h-8v-5.611l2.467-1.973c0.060-0.048 0.109-0.109 0.144-0.178l1.067-2.133c0.037-0.074 0.056-0.156 0.056-0.238v-2.042c0.64 0.225 1.068 0.83 1.067 1.509v2.667c0 0.295 0.239 0.533 0.533 0.533h4.267c0.295 0 0.533 0.239 0.533 0.533 0.001 0.144-0.059 0.281-0.163 0.38z" />
  </svg>
);

const WHY_TRUST_CARDS = [
  {
    title: "Guaranteed Speed Improvement",
    desc: "When we take on a Shopify site speed optimization project, we commit to measurable results. Not vague promises. We document your before and after scores, QA everything we touch, and make sure nothing breaks in the process. If it is not faster when we are done, we are not done.",
    icon: <IconCartPhone />,
  },
  {
    title: "Priority Support",
    desc: "Speed problems do not wait for business hours. Our team digs into every layer of your store, from your theme architecture to your checkout flow, identifying and fixing friction points that slow down both your pages and your customers. You get direct access to the engineers doing the work, not a ticketing system.",
    icon: <IconMonitor />,
  },
  {
    title: "100% Money-Back Guarantee",
    desc: "We stand behind every Shopify store speed optimization engagement with a full money back guarantee. If we do not deliver the improvement we promised, you do not pay. That includes third party integrations, custom logic, and checkout optimizations. The faster and more seamless your store runs, the higher your conversion rates climb.",
    icon: <IconBadge />,
  },
];

const IGNORING_CARDS = [
  {
    title: "Higher Conversion Rates",
    body: (
      <>
        <strong className="font-bold" style={{ color: "#000" }}>7% increase in conversions</strong> for every single
        second you shave off your load time. That is not a projection. That is what happens when you{" "}
        <strong className="font-bold" style={{ color: "#000" }}>optimize Shopify store speed</strong> properly. One
        second faster equals thousands of dollars in recovered revenue every single month.
      </>
    ),
    icon: <IconCartPhone />,
  },
  {
    title: "Why us a Shopify Partner?",
    body: (
      <>
        <strong className="font-bold" style={{ color: "#000" }}>40%</strong> of people abandon a website that takes
        more than <strong className="font-bold" style={{ color: "#000" }}>3 seconds to load.</strong> Think about what
        that means for your ad spend. You are paying to drive traffic to a store that nearly half your visitors will
        never actually see. <strong className="font-bold" style={{ color: "#000" }}>Shopify speed optimization services</strong>{" "}
        exist to make sure every click you pay for actually has a chance to convert.
      </>
    ),
    icon: <IconMonitor />,
  },
  {
    title: "More Returning Customers",
    body: (
      <>
        <strong className="font-bold" style={{ color: "#000" }}>79%</strong> of customers are less likely to
        repurchase from a store that felt slow. First impressions are permanent. If your{" "}
        <strong className="font-bold" style={{ color: "#000" }}>Shopify website speed optimization</strong> is not
        dialed in, you are not just losing one sale. You are losing the lifetime value of that customer and every
        referral they would have sent your way.
      </>
    ),
    icon: <IconBadge />,
  },
];

const RESULTS_CARDS = [
  {
    text: "We came in with a store that was painfully slow on mobile and desktop. Ecomm Wizards rebuilt our entire front end performance from the ground up. The difference was night and day.",
    logo: "/images/Frame_1000007615.webp",
    logoAlt: "EBY",
    person: "Sofia Vergara, Marketing Manager",
  },
  {
    text: "They did not just run a speed audit and send us a report. They got into our codebase, cleaned out years of accumulated bloat, and delivered a store that loads the way it should have from day one.",
    logo: "/images/Frame_1000007615-1.avif",
    logoAlt: "The Cashmere Sale",
    person: "Daniyal S.",
  },
  {
    text: "What impressed us most was how deeply they understood Shopify Plus at a technical level. Their Shopify speed optimization service was methodical, transparent, and the results spoke for themselves.",
    logo: "/images/Frame_1000007615-2.avif",
    logoAlt: "BARK",
    person: "Nari Sitaraman, CTO",
  },
];

const CASE_STUDY_SLIDES: CaseStudySlide[] = [
  {
    key: "eby",
    image: "/images/Frame_1000004320.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/klaviyo.svg", "/images/yotpo.svg"],
    headline: (<>An elegant <strong>Shopify Store</strong> designed and built for <strong>EBY</strong> by <strong>Sofia Vergara</strong></>),
    quote: (<>&ldquo;Working with EW was a truly <strong>top-notch experience</strong>. From start to finish, they made sure everything ran smoothly and professionally — we couldn&apos;t be happier!&rdquo;</>),
    avatar: "/images/eby_dce31a54-eb36-409c-a8d7-e22fd8297de3_medium.webp",
    name: "EBY by Sofia Vergara",
    role: "Marketing Manager",
  },
  {
    key: "harvard",
    image: "/images/harvard-2_b0d9924a-412f-449b-94c3-0806b1d672ba.webp",
    apps: ["/images/shopify-icon.svg", "/images/klaviyo.svg", "/images/yotpo.svg", "/images/gorgias.svg"],
    headline: (<>A sophisticated <strong>Shopify Store</strong> designed and built for a <strong>Harvard University</strong></>),
    quote: (<>&ldquo;Our experience with EW was excellent, characterized by an <strong>efficient workflow</strong> and <strong>professional execution</strong>; we couldn&apos;t be more delighted&rdquo;</>),
    avatar: "/images/harvardperson_medium.webp",
    name: "Daniyal S.",
    role: "Harvard University",
  },
  {
    key: "bark",
    image: "/images/ai-bark-casestudy.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/Subtract.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>A dynamically personalized <strong>Shopify Store</strong> developed &amp; maintained for <strong>Bark</strong></>),
    quote: (<>&ldquo;Their immense knowledge of Shopify Plus and exceptional communication skills, accompanied by a <strong>can-do attitude</strong> made Ecomm Wizards a fantastic partner.&rdquo;</>),
    avatar: "/images/nari_medium_215a6a4f-f640-4b4f-98aa-28f001df20dd_medium.webp",
    name: "Nari Sitaraman",
    role: "Chief Technology Officer",
  },
];

const INNOVATIVE_BRAND_ROWS = [
  {
    direction: "left" as const,
    duration: 40,
    logos: [
      { src: "/images/trust_logo_hover_10.svg", alt: "Sofia Vergara" },
      { src: "/images/trust_logo_7.svg", alt: "Bark Box" },
      { src: "/images/ai-harward.svg", alt: "Harvard" },
      { src: "/images/ai-smurfs.svg", alt: "Smurfs" },
      { src: "/images/trust_logo_31.svg", alt: "Peanuts" },
    ],
  },
  {
    direction: "right" as const,
    duration: 42,
    logos: [
      { src: "/images/trust_logo_20.svg", alt: "SarahChloe" },
      { src: "/images/Olaplex-logo-new.avif", alt: "Olaplex" },
      { src: "/images/trust_logo_32.svg", alt: "Forme" },
      { src: "/images/ai-everlast.svg", alt: "Everlast" },
      { src: "/images/trust_logo_2.svg", alt: "Oshen" },
    ],
  },
  {
    direction: "left" as const,
    duration: 44,
    logos: [
      { src: "/images/trust_logo_27.svg", alt: "Lucky You" },
      { src: "/images/trust_logo_hover_14.svg", alt: "Ulta Beauty" },
      { src: "/images/trust_logo_6.svg", alt: "Blippi" },
      { src: "/images/trust_logo_hover_13.svg", alt: "Sesame Street" },
      { src: "/images/Lids-logo_fcb134ea-8ac4-4592-bfa1-6a366076e371.avif", alt: "Lids" },
    ],
  },
  {
    direction: "right" as const,
    duration: 46,
    logos: [
      { src: "/images/chalet.svg", alt: "Chalet" },
      { src: "/images/kaval-new.webp", alt: "Kaval" },
      { src: "/images/biopure.svg", alt: "BioPure" },
      { src: "/images/trust_logo_hover_11.svg", alt: "Create Room" },
      { src: "/images/trust_logo_hover_12.svg", alt: "Ebbets Field Flannels" },
    ],
  },
];

type StatsTipsProps = {
  heading?: string;
  testimonialLabel: string;
  testimonialText: string;
  testimonialName: string;
  testimonialRole: string;
  testimonialAvatar: string;
  imagePosition?: "left" | "right";
};

function StatsImageTipsBlock({
  heading,
  testimonialLabel,
  testimonialText,
  testimonialName,
  testimonialRole,
  testimonialAvatar,
  imagePosition = "left",
}: StatsTipsProps) {
  const image = (
    <div className="relative">
      <Image
        src="/images/speed-image4-scaled.webp"
        alt="Shopify speed optimization results — home page desktop scores"
        width={1024}
        height={615}
        className="h-auto w-full rounded-2xl"
      />
    </div>
  );

  const text = (
    <div className="speed-tips-text flex flex-col justify-center">
      <div className="speed-tips-stats grid grid-cols-2 gap-6">
        <div>
          <p className="speed-tips-stat-num text-[40px] font-bold leading-none" style={{ color: "#000" }}>48%</p>
          <p className="mt-2 text-[14.5px] leading-snug" style={{ color: "#334155" }}>
            Average Speed &amp; Performance Improvement
          </p>
        </div>
        <div>
          <p className="speed-tips-stat-num text-[40px] font-bold leading-none" style={{ color: "#000" }}>76%</p>
          <p className="mt-2 text-[14.5px] leading-snug" style={{ color: "#334155" }}>
            Of Visitors Don&rsquo;t Request Transfer to a human Agent
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="speed-tips-label mb-3 text-[22px] font-bold" style={{ color: "#000" }}>{testimonialLabel}</h3>
        <p className="speed-tips-body text-[15px] leading-[26px]" style={{ color: "#334155" }}>
          &ldquo;{testimonialText}&rdquo;
        </p>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <Image
          src={testimonialAvatar}
          alt={testimonialName}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="text-[15px] font-bold leading-tight" style={{ color: "#000" }}>{testimonialName}</p>
          <p className="text-[13px] leading-tight" style={{ color: "#7a7a7a" }}>{testimonialRole}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="speed-tips-section" style={{ background: "#F0F5FA", padding: "60px 20px" }}>
      <div className="mx-auto" style={{ maxWidth: "1320px" }}>
        {heading && (
          <h2
            className="speed-tips-heading mx-auto mb-10 text-center font-bold"
            style={{ color: "#000", fontSize: "42px", lineHeight: "52px", maxWidth: "900px" }}
          >
            {heading}
          </h2>
        )}
        <div
          className="speed-tips-grid grid gap-8 rounded-3xl bg-white p-8 lg:grid-cols-2 lg:gap-12"
          style={{ border: "1px solid rgba(0,0,0,0.05)" }}
        >
          {imagePosition === "left" ? (<>{image}{text}</>) : (<>{text}{image}</>)}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      {/* ── Mobile (<= 768px) overrides — single source of truth for the whole page ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          /* 1 — Hero */
          .speed-hero { padding: 40px 15px !important; }
          .speed-hero-grid { gap: 28px !important; }
          .speed-hero-h1 { font-size: 30px !important; line-height: 38px !important; }
          .speed-hero-p { font-size: 14.5px !important; line-height: 24px !important; margin-top: 18px !important; }
          .speed-hero-phones { gap: 10px !important; }
          .speed-hero-phone-col { height: 320px !important; border-radius: 10px !important; }

          /* 2 — Trusted by Leading marquee */
          .speed-trust { padding: 0 15px !important; }
          .speed-trust-inner { padding: 36px 0 !important; }
          .speed-trust-heading { font-size: 18px !important; }
          .speed-trust-track { gap: 28px !important; animation-duration: 22s !important; }
          .speed-trust-slide { width: 140px !important; height: 68px !important; }
          .speed-trust-logo { width: 140px !important; height: 68px !important; }

          /* 3 — Monthly Services */
          .speed-services-section { padding: 40px 15px !important; }
          .speed-services-heading { font-size: 26px !important; line-height: 34px !important; margin-bottom: 24px !important; }
          .speed-services-wrap { padding: 16px !important; border-radius: 18px !important; }
          .speed-services-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
          .speed-flip-card { min-height: 260px !important; }
          .speed-flip-image { min-height: 160px !important; }
          .speed-flip-image img { max-height: 160px !important; }
          .speed-flip-title { font-size: 14.5px !important; }

          /* 4 — Mid CTA bar */
          .speed-cta-bar-section { padding: 0 15px 40px !important; }
          .speed-cta-bar { padding: 22px !important; gap: 18px !important; border-radius: 16px !important; }
          .speed-cta-bar p { max-width: 100% !important; }

          /* 5 & 9 — Stats + image + testimonial blocks */
          .speed-tips-section { padding: 40px 15px !important; }
          .speed-tips-heading { font-size: 26px !important; line-height: 34px !important; margin-bottom: 24px !important; }
          .speed-tips-grid { padding: 20px !important; gap: 22px !important; border-radius: 18px !important; }
          .speed-tips-stats { gap: 14px !important; }
          .speed-tips-stat-num { font-size: 30px !important; }
          .speed-tips-label { font-size: 19px !important; margin-bottom: 10px !important; }
          .speed-tips-body { font-size: 13.5px !important; line-height: 22px !important; }

          /* 6 — Why Work ticker */
          .why-work-section { padding: 24px 15px !important; min-height: auto !important; }
          .why-work-inner { flex-direction: column !important; gap: 14px !important; }
          .why-work-heading { width: 100% !important; padding-right: 0 !important; border-right: none !important; text-align: center !important; font-size: 16px !important; line-height: 24px !important; }
          .why-work-br { display: none !important; }
          .why-work-marquee { width: 100% !important; }
          .why-work-track { animation-duration: 26s !important; }
          .why-work-item { gap: 14px !important; padding-right: 14px !important; font-size: 14px !important; }
          .why-work-text { font-size: 14px !important; }
          .why-work-dot { font-size: 20px !important; }

          /* 7 — Real Brands Results (mobile rules already in globals.css, no override needed) */

          /* 8 — Trusted by the Worlds Most Innovative Brands marquee rows */
          .speed-trusted-section { padding: 0 15px !important; }
          .speed-trusted-section > div { padding: 40px 0 !important; }
          .speed-trusted-section h2 { font-size: 26px !important; line-height: 34px !important; margin-bottom: 24px !important; }
          .speed-trusted-section h2 br { display: none !important; }
          .speed-brands-row { margin-bottom: 18px !important; }
          .speed-brands-track { gap: 30px !important; }
          .speed-brands-slide { width: 140px !important; height: 64px !important; }
          .speed-brands-slide img { width: 140px !important; height: 64px !important; }

          /* 10 & 11 — Card sections */
          .speed-cards-section { padding: 40px 15px !important; }
          .speed-cards-heading { font-size: 26px !important; line-height: 34px !important; }
          .speed-cards-desc { font-size: 14.5px !important; line-height: 24px !important; margin-top: 16px !important; }
          .speed-cards-grid { grid-template-columns: 1fr !important; gap: 16px !important; margin-top: 32px !important; }
          .speed-cards-card { padding: 32px 22px !important; min-height: auto !important; border-radius: 16px !important; }
          .speed-cards-card h3 { font-size: 21px !important; line-height: 28px !important; margin-top: 18px !important; }
          .speed-cards-card p { font-size: 14.5px !important; line-height: 24px !important; margin-top: 14px !important; }
          .speed-card-icon svg { width: 46px !important; height: 46px !important; }
        }
      ` }} />

      {/* 1 — A Slow Shopify Store Is an Expensive Problem (dark hero w/ scrolling phones) */}
      <section className="speed-hero" style={{ background: "#000000", padding: "60px 20px" }} aria-label="A Slow Shopify Store">
        <div
          className="speed-hero-grid mx-auto grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center"
          style={{ maxWidth: "1320px" }}
        >
          <div>
            <h1 className="speed-hero-h1 font-bold" style={{ color: "#FFFFFF", fontSize: "52px", lineHeight: "62px" }}>
              A Slow <span style={GRADIENT_TEXT}>Shopify Store</span> Is an Expensive Problem
            </h1>
            <p className="speed-hero-p mt-8 max-w-[560px] text-[16px] leading-[26px]" style={{ color: "rgba(255,255,255,0.75)" }}>
              Three seconds. That is all the patience your customers have. After that, they are gone. They did not add
              to cart. They did not browse your collection. They bounced, and they are not coming back. Worse? Google
              saw the whole thing and pushed your rankings down because of it.
            </p>
            <p className="mt-5 max-w-[560px] text-[16px] leading-[26px]" style={{ color: "rgba(255,255,255,0.75)" }}>
              Ecomm Wizards delivers <strong className="font-semibold text-white">Shopify speed optimization services</strong>{" "}
              that actually fix the problem instead of just diagnosing it. We dig into your theme architecture, strip out
              the bloated scripts, compress what needs compressing, and rebuild what needs rebuilding. No fluff reports.
              No surface level suggestions. Just engineers who{" "}
              <strong className="font-semibold text-white">optimize Shopify store speed</strong> for a living doing what
              they do best.
            </p>
            <Link
              href="/book-shopify-consultation"
              className="cta-pill-invert mt-10 inline-flex items-center gap-3 rounded-full border px-7 py-3.5 text-[15px] font-semibold transition"
              style={{ borderWidth: 1 }}
            >
              Make My Store Faster
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
                <path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="speed-hero-phones grid grid-cols-2 gap-5">
            {[0, 1].map((col) => (
              <div
                key={col}
                className="speed-hero-phone-col relative overflow-hidden rounded-xl"
                style={{ height: 450, border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div
                  className="flex flex-col gap-4"
                  style={{ animation: `marquee-up ${col === 0 ? 14 : 18}s linear infinite` }}
                >
                  {[...PHONE_IMAGES, ...PHONE_IMAGES].map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt=""
                      width={400}
                      height={520}
                      className="block h-auto w-full"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 — Trusted by Leading Shopify Brands (marquee slider, reused from B2B) */}
      <section className="speed-trust" style={{ background: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}>
        <div className="speed-trust-inner mx-auto" style={{ maxWidth: "1320px", padding: "60px 0" }}>
          <h2
            className="speed-trust-heading text-center"
            style={{ color: "#000000", fontSize: "22px", fontWeight: 700, lineHeight: 1.45, margin: 0 }}
          >
            Trusted by Leading Shopify Brands
          </h2>

          <div className="speed-trust-carousel" style={{ marginTop: "30px", width: "100%", overflow: "hidden" }}>
            <div className="speed-trust-track">
              {[...TRUST_LOGOS, ...TRUST_LOGOS].map((l, i) => (
                <div key={i} className="speed-trust-slide">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={l.src}
                    alt={i < TRUST_LOGOS.length ? l.alt : ""}
                    className="speed-trust-logo"
                    width={178}
                    height={86}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .speed-trust-track {
            display: flex; align-items: center; justify-content: flex-start;
            gap: 50px; width: max-content;
            animation: speedTrustScroll 28s linear infinite;
          }
          .speed-trust-carousel:hover .speed-trust-track { animation-play-state: paused; }
          .speed-trust-slide {
            flex: 0 0 auto; display: flex; align-items: center; justify-content: center;
            width: 200px; height: 96px;
          }
          .speed-trust-logo {
            width: 200px; height: 96px; object-fit: contain; display: block;
          }
          @keyframes speedTrustScroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) { .speed-trust-track { animation: none; } }
        ` }} />
      </section>

      {/* 3 — Monthly Site Speed Services (hover-flip cards) */}
      <section className="speed-services-section" style={{ background: "#F0F5FA", padding: "60px 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2
            className="speed-services-heading mx-auto mb-12 text-center font-bold"
            style={{ color: "#000", fontSize: "42px", lineHeight: "52px", maxWidth: "820px" }}
          >
            Here are the Monthly Site Speed Services we will run:
          </h2>
          <div className="speed-services-wrap rounded-3xl bg-white p-6 sm:p-8" style={{ border: "1px solid rgba(0,0,0,0.05)" }}>
            <div className="speed-services-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {MONTHLY_SERVICES.map((s) => (
                <div key={s.title} className="speed-flip-card">
                  <div className="speed-flip-inner">
                    <div className="speed-flip-front">
                      <div className="speed-flip-image">
                        <Image
                          src={s.image}
                          alt={s.title}
                          width={300}
                          height={223}
                          className="h-auto w-full"
                        />
                      </div>
                      <h3 className="speed-flip-title">{s.title}</h3>
                    </div>
                    <div className="speed-flip-back">
                      <h3 className="speed-flip-back-title">{s.title}</h3>
                      <p className="speed-flip-desc">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Subscription card (dark green) — last cell */}
              <div
                className="flex flex-col items-center justify-center rounded-xl p-7 text-center text-white"
                style={{
                  background: "linear-gradient(180deg, #0E2318 0%, #143124 100%)",
                  border: "1px solid rgba(168,240,180,0.18)",
                  minHeight: 320,
                }}
              >
                <h3 className="text-[22px] font-bold leading-tight">
                  Site Speed &amp; Optimization Service
                </h3>
                <p className="mt-4 text-[13px] uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Monthly Subscription
                </p>
                <p className="mt-1 text-[30px] font-bold">$1,999.95/mo</p>
                <p className="mt-1 text-[13px]" style={{ color: "rgba(255,255,255,0.75)" }}>
                  for Shopify Plus Stores
                </p>
                <Link
                  href="/book-shopify-consultation"
                  className="cta-pill-invert mt-5 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[13px] font-semibold"
                  style={{ borderWidth: 1 }}
                >
                  Subscribe Now
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                    <path d="M1 5h11M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .speed-flip-card {
            position: relative;
            min-height: 320px;
            perspective: 1000px;
          }
          .speed-flip-inner {
            position: relative; width: 100%; height: 100%;
            min-height: 320px;
            border-radius: 12px;
            overflow: hidden;
          }
          .speed-flip-front, .speed-flip-back {
            position: absolute; inset: 0;
            display: flex; flex-direction: column;
            transition: opacity 0.35s ease;
          }
          .speed-flip-front {
            background: #EEF2FF;
            padding: 16px 16px 18px;
            opacity: 1;
            justify-content: space-between;
          }
          .speed-flip-back {
            background: linear-gradient(180deg, #0E2318 0%, #143124 100%);
            color: #FFFFFF;
            padding: 24px 22px;
            opacity: 0;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
          .speed-flip-card:hover .speed-flip-front,
          .speed-flip-card:focus-within .speed-flip-front { opacity: 0; }
          .speed-flip-card:hover .speed-flip-back,
          .speed-flip-card:focus-within .speed-flip-back { opacity: 1; }
          .speed-flip-image {
            background: #FFFFFF;
            border-radius: 8px;
            padding: 6px;
            display: flex; align-items: center; justify-content: center;
            min-height: 200px;
          }
          .speed-flip-image img { object-fit: contain; max-height: 200px; }
          .speed-flip-title {
            color: #1e293b; font-family: 'Poppins', sans-serif;
            font-size: 15px; font-weight: 600; line-height: 22px;
            margin: 14px 0 0;
          }
          .speed-flip-back-title {
            color: #A8F0B4; font-family: 'Poppins', sans-serif;
            font-size: 16px; font-weight: 700; line-height: 22px;
            margin: 0 0 12px;
          }
          .speed-flip-desc {
            color: rgba(255,255,255,0.85); font-family: 'Poppins', sans-serif;
            font-size: 13.5px; line-height: 21px; margin: 0;
          }
        ` }} />
      </section>

      {/* 4 — Mid CTA bar */}
      <section className="speed-cta-bar-section" style={{ background: "#F0F5FA", padding: "0 20px 60px" }}>
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <div className="speed-cta-bar flex flex-col items-stretch gap-5 rounded-2xl bg-white p-8 lg:flex-row lg:items-center lg:justify-between" style={{ border: "1px solid rgba(0,0,0,0.05)" }}>
            <div className="flex flex-1 flex-wrap items-center justify-between gap-4">
              <p className="text-[15px] leading-snug" style={{ color: "#334155", maxWidth: "260px" }}>
                Subscription Service for Shopify Plus Stores for <strong className="font-bold" style={{ color: "#000" }}>$1,999.95/mo</strong>
              </p>
              <Link
                href="/book-shopify-consultation"
                className="cta-pill-solid inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-[14px] font-semibold"
                style={{ borderWidth: 2 }}
              >
                I feel the need!
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden>
                  <path d="M1 6h13M9 1l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="hidden h-12 w-px bg-slate-200 lg:block" />
            <div className="flex flex-1 flex-wrap items-center justify-between gap-4">
              <p className="text-[18px] font-bold leading-snug" style={{ color: "#000" }}>
                Want to talk to a human?<br />Book a call Today!
              </p>
              <Link
                href="/book-shopify-consultation"
                className="cta-pill-solid inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-[14px] font-semibold"
                style={{ borderWidth: 2 }}
              >
                Book a Call
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden>
                  <path d="M1 6h13M9 1l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Stats + Speed score image + "Optimize images" quote (Nari) — IMAGE LEFT */}
      <StatsImageTipsBlock
        testimonialLabel="Optimize images"
        testimonialText="Most store owners have no idea that uncompressed images are the single biggest reason their pages crawl. Images make up the bulk of your page weight, and they load slower than any other element on the page. The good news? Shopify page speed optimization starts with fixing exactly this. Proper compression, lazy loading, and next gen formats can shave seconds off your load time without touching a single line of code."
        testimonialName="Nari Sitaraman"
        testimonialRole="Chief Technology Officer"
        testimonialAvatar="/images/nari_medium_215a6a4f-f640-4b4f-98aa-28f001df20dd_medium.webp"
        imagePosition="left"
      />

      {/* 6 — Why Work with Ecomm Wizards (dark ticker) */}
      <section className="why-work-section" style={{ background: "#000000" }} aria-label="Why Work with Ecomm Wizards">
        <div className="why-work-inner">
          <h2 className="why-work-heading" role="heading" aria-level={2}>
            Why Work with <br className="why-work-br" />Ecomm Wizards
          </h2>
          <div className="why-work-marquee">
            <ul className="why-work-track">
              {(() => {
                const items = [
                  "Transparent Communication",
                  "Zero Cutting Corners",
                  "World-Class Support",
                  "Revenue-Driven Approach",
                  "Proven Track Record",
                  "Growth Obsessed Team",
                  "100% Client Satisfaction",
                ];
                return [...items, ...items].map((item, i) => (
                  <li key={`${item}-${i}`} className="why-work-item" aria-hidden={i >= items.length ? true : undefined}>
                    <span className="why-work-dot" aria-hidden="true">&bull;</span>
                    <span className="why-work-text">{item}</span>
                  </li>
                ));
              })()}
            </ul>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .why-work-section { padding: 0 20px; min-height: 106px; overflow: hidden; display: flex; align-items: center; font-family: 'Poppins', sans-serif; }
          .why-work-inner { display: flex; align-items: center; gap: 32px; max-width: 1320px; margin: 0 auto; padding: 0; width: 100%; }
          .why-work-heading { flex-shrink: 0; width: 201.21px; font-size: 18px; font-weight: 700; color: #FFFFFF; line-height: 28px; margin: 0; padding-right: 24px; border-right: 1px solid rgba(255,255,255,0.15); }
          .why-work-br { display: inline; }
          .why-work-marquee { flex: 1 1 auto; min-width: 0; overflow: hidden; }
          .why-work-track { display: flex; align-items: center; width: max-content; margin: 0; padding: 0; list-style: none; animation: why-work-scroll 40s linear infinite; }
          .why-work-marquee:hover .why-work-track { animation-play-state: paused; }
          .why-work-item { display: inline-flex; align-items: center; gap: 28px; padding-right: 28px; font-size: 16px; font-weight: 600; color: #FFFFFF; white-space: nowrap; }
          .why-work-dot { background: var(--brand-gradient); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; font-size: 28px; line-height: 1; }
          .why-work-text { color: #FFFFFF; font-size: 16px; }
          @keyframes why-work-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          @media (prefers-reduced-motion: reduce) { .why-work-track { animation: none; } }
        ` }} />
      </section>

      {/* 7 — Real Brands. Real Shopify Store Speed Optimization Results. */}
      <section
        className="ssd-results-section"
        style={{ background: "#FFFFFF", color: "#334155", fontFamily: "'Poppins', sans-serif", fontSize: "16px" }}
      >
        <div className="ssd-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="ssd-results-heading">Real Brands. Real Shopify Store Speed Optimization Results.</h2>
          <div className="ssd-results-cards">
            {RESULTS_CARDS.map((c) => (
              <div key={c.person} className="ssd-results-card">
                <p className="ssd-results-card-quote">{c.text}</p>
                <div className="ssd-results-card-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.logo} alt={c.logoAlt} />
                </div>
                <p className="ssd-results-card-person">{c.person}</p>
              </div>
            ))}
          </div>
          <CaseStudySlider slides={CASE_STUDY_SLIDES} intervalMs={6000} />
        </div>
      </section>

      {/* 8 — Trusted by the Worlds Most Innovative Brands */}
      <section className="speed-trusted-section" style={{ background: "#FFFFFF", padding: "0 20px" }}>
        <div
          className="mx-auto"
          style={{
            maxWidth: "1320px",
            padding: "60px 0",
            color: "#334155",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <h2
            className="text-center font-bold"
            style={{ fontSize: "42px", fontWeight: 700, color: "#000", lineHeight: "52px", margin: "0 auto 40px", maxWidth: "780px" }}
          >
            Trusted by the Worlds Most<br />Innovative Brands
          </h2>

          {INNOVATIVE_BRAND_ROWS.map((row, rowIdx) => (
            <div className="speed-brands-row" key={rowIdx}>
              <ul
                className={`speed-brands-track ${row.direction === "right" ? "speed-brands-track--reverse" : ""}`}
                style={{ animationDuration: `${row.duration}s` }}
              >
                {[...row.logos, ...row.logos].map((logo, i) => (
                  <li key={`${logo.src}-${i}`} className="speed-brands-slide">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={200}
                      height={90}
                      className="object-contain"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .speed-brands-row { overflow: hidden; margin-bottom: 32px; max-width: 1320px; margin-left: auto; margin-right: auto; }
          .speed-brands-row:last-child { margin-bottom: 0; }
          .speed-brands-track { display: flex; align-items: center; gap: 60px; width: max-content; margin: 0 auto; padding: 0; list-style: none; animation: speed-brands-scroll 40s linear infinite; }
          .speed-brands-track--reverse { animation-name: speed-brands-scroll-reverse; }
          .speed-brands-row:hover .speed-brands-track { animation-play-state: paused; }
          .speed-brands-slide { flex-shrink: 0; width: 200px; height: 90px; display: flex; align-items: center; justify-content: center; }
          .speed-brands-slide img { width: 200px !important; height: 90px !important; object-fit: contain; display: block; }
          @keyframes speed-brands-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          @keyframes speed-brands-scroll-reverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
          @media (prefers-reduced-motion: reduce) { .speed-brands-track { animation: none; } }
        ` }} />
      </section>

      {/* 9 — Useful Tips For Speed Optimization (Brooke) — IMAGE RIGHT */}
      <StatsImageTipsBlock
        heading="Useful Tips For Speed Optimization"
        testimonialLabel="Optimize images"
        testimonialText="Here is what most agencies will not tell you. Your Shopify store is not slow because of one big problem. It is slow because of dozens of small ones stacking on top of each other. Oversized product images, render blocking scripts, unused CSS, apps loading on pages they have no business being on. Shopify website speed optimization is about identifying every single one of these and eliminating them systematically. That is exactly what our engineers do when they optimize Shopify speed inside your store."
        testimonialName="Brooke Sanderson"
        testimonialRole="Merchant Success Director"
        testimonialAvatar="/images/eby_dce31a54-eb36-409c-a8d7-e22fd8297de3_medium.webp"
        imagePosition="right"
      />

      {/* 10 — Why Brands Trust Ecomm Wizards for Shopify Speed Optimization */}
      <section className="speed-cards-section" style={{ background: "#FBF7ED", padding: "60px 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2
            className="speed-cards-heading mx-auto text-center font-bold"
            style={{ color: "#000", fontSize: "42px", lineHeight: "52px", maxWidth: "900px" }}
          >
            Why Brands Trust Ecomm Wizards for Shopify Speed Optimization
          </h2>
          <p
            className="speed-cards-desc mx-auto mt-6 text-center text-[16px] leading-[28px]"
            style={{ color: "#334155", maxWidth: "1100px" }}
          >
            You do not need another agency that runs PageSpeed Insights and calls it a day. You need a team that has
            done Shopify page speed optimization across 500+ stores and knows exactly where the problems live. That is
            what makes us the go-to Shopify speed optimization service for Shopify Plus brands that are serious about
            performance.
          </p>
          <div className="speed-cards-grid mt-14 grid gap-6 lg:grid-cols-3">
            {WHY_TRUST_CARDS.map((c) => (
              <div
                key={c.title}
                className="speed-cards-card flex flex-col items-center rounded-[20px] bg-white px-8 py-12 text-center"
                style={{ border: "1px solid rgba(0,0,0,0.06)", minHeight: 420 }}
              >
                <span className="speed-card-icon" style={{ color: "#B18945" }}>{c.icon}</span>
                <h3 className="mt-7 text-[24px] font-bold leading-[32px]" style={{ color: "#000" }}>
                  {c.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[26px]" style={{ color: "#334155" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — Ignoring Shopify Speed Optimization Is Costing You More Than You Think */}
      <section className="speed-cards-section" style={{ background: "#F0F5FA", padding: "60px 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2
            className="speed-cards-heading mx-auto text-center font-bold"
            style={{ color: "#000", fontSize: "42px", lineHeight: "52px", maxWidth: "900px" }}
          >
            Ignoring Shopify Speed Optimization Is Costing You More Than You Think
          </h2>
          <p
            className="speed-cards-desc mx-auto mt-6 text-center text-[16px] leading-[28px]"
            style={{ color: "#334155", maxWidth: "1000px" }}
          >
            Your customers are not patient. They are not loyal. They will leave your store the moment it stutters, and
            they will buy from whoever loads first. The data backs this up, and it is not even close.
          </p>
          <div className="speed-cards-grid mt-14 grid gap-6 lg:grid-cols-3">
            {IGNORING_CARDS.map((c) => (
              <div
                key={c.title}
                className="speed-cards-card flex flex-col items-center rounded-[20px] px-8 py-12 text-center"
                style={{
                  background: "#E8ECF7",
                  border: "1px solid rgba(0,0,0,0.06)",
                  minHeight: 420,
                }}
              >
                <span className="speed-card-icon" style={{ color: "#B18945" }}>{c.icon}</span>
                <h3 className="mt-7 text-[24px] font-bold leading-[32px]" style={{ color: "#000" }}>
                  {c.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[26px]" style={{ color: "#334155" }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
