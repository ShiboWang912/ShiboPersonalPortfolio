import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { createPortal } from "react-dom";

/* ===================== Lightbox (unchanged) ===================== */
function Lightbox({
  images,
  activeIdx,
  setActiveIdx,
  onClose,
  fitToScreen,
  setFitToScreen,
  name,
}) {
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setActiveIdx((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft")
        setActiveIdx((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, onClose, setActiveIdx]);

  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/90"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={`${name} screenshots`}
    >
      <div
        className="w-screen h-screen p-4 flex items-center justify-center overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[activeIdx]}
          alt={`large-${activeIdx + 1}`}
          className={
            fitToScreen
              ? "object-contain max-w-[95vw] max-h-[95vh]"
              : "w-auto h-auto max-w-none max-h-none"
          }
          onDoubleClick={() => setFitToScreen((v) => !v)}
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 px-3 py-1 rounded bg-black/70 text-white text-sm hover:bg-black/80"
          title="Close (Esc)"
        >
          ✕
        </button>

        <button
          onClick={() => setFitToScreen((v) => !v)}
          className="absolute top-4 right-20 px-3 py-1 rounded bg-black/70 text-white text-sm hover:bg-black/80"
          title={fitToScreen ? "View at actual size" : "Fit to screen"}
        >
          {fitToScreen ? "Actual" : "Fit"}
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={() =>
                setActiveIdx((i) => (i - 1 + images.length) % images.length)
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 px-3 py-2 rounded bg-black/70 text-white text-lg hover:bg-black/80"
              title="Previous (←)"
            >
              ‹
            </button>
            <button
              onClick={() => setActiveIdx((i) => (i + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-2 rounded bg-black/70 text-white text-lg hover:bg-black/80"
              title="Next (→)"
            >
              ›
            </button>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-xs bg-black/60 rounded px-2 py-1">
              {activeIdx + 1} / {images.length}
            </span>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}

/* ===================== ProjectCard (kept structure) ===================== */
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  images = [],
  video,
  live,
  repo,
}) => {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [showVideo, setShowVideo] = React.useState(false);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [fitToScreen, setFitToScreen] = React.useState(false);

  const mainImage = images?.[activeIdx] || images?.[0];

  return (
    // Disable "hidden first" animation so cards render immediately on tiny screens
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      initial={false}
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-[#403445] p-4 rounded-2xl w-full min-w-0 overflow-hidden shadow-md"
      >
        {/* 16:9 media box prevents overflow */}
        <div
          className="relative w-full rounded-2xl bg-black/20 aspect-[16/9] flex items-center justify-center overflow-hidden cursor-zoom-in"
          title="Click to view full size"
          onClick={() => {
            if (images?.length) {
              setFitToScreen(true);
              setLightboxOpen(true);
            }
          }}
        >
          {mainImage ? (
            <img
              src={mainImage}
              alt={`${name} screenshot ${activeIdx + 1}`}
              className="max-h-full max-w-full object-contain w-full h-full"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full rounded-2xl flex items-center justify-center text-white/70">
              No screenshots yet
            </div>
          )}
          {images?.length > 0 && (
            <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/60 text-white text-xs">
              Click to enlarge
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {images?.length > 1 && (
          <div className="mt-3 flex gap-2 overflow-x-auto">
            {images.map((src, i) => (
              <button
                key={`${name}-thumb-${i}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIdx(i);
                }}
                className={`h-16 w-24 rounded-lg overflow-hidden border ${
                  i === activeIdx ? "border-white" : "border-white/30"
                } flex-shrink-0 bg-black/20 flex items-center justify-center`}
                title={`Screenshot ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`thumb-${i + 1}`}
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}

        {/* Text */}
        <div className="mt-5 min-w-0">
          <h3 className="text-white font-bold text-[18px] sm:text-[20px] truncate">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed break-words">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[13px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-3 flex-wrap">
          {!!live && (
            <button
              onClick={() => window.open(live, "_blank")}
              className="px-3 py-2 rounded-lg bg-white text-black text-sm"
            >
              Live
            </button>
          )}
          {!!video && (
            <button
              onClick={() => setShowVideo(true)}
              className="px-3 py-2 rounded-lg bg-white text-black text-sm"
            >
              Demo
            </button>
          )}
          {!!repo && (
            <button
              onClick={() => window.open(repo, "_blank")}
              className="px-3 py-2 rounded-lg bg-white text-black text-sm"
            >
              Code
            </button>
          )}
        </div>

        {/* Video modal */}
        {showVideo && (
          <div
            className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <div
              className="bg-black rounded-xl max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <video src={video} controls className="w-full h-auto rounded-xl" />
            </div>
          </div>
        )}

        {/* Lightbox */}
        {lightboxOpen && images?.length > 0 && (
          <Lightbox
            images={images}
            activeIdx={activeIdx}
            setActiveIdx={setActiveIdx}
            onClose={() => setLightboxOpen(false)}
            fitToScreen={fitToScreen}
            setFitToScreen={setFitToScreen}
            name={name}
          />
        )}
      </Tilt>
    </motion.div>
  );
};

/* ===================== Works ===================== */
const Works = () => {
  return (
    <section id="work" className="scroll-mt-28 md:scroll-mt-32">
      <motion.div variants={textVariant()} initial={false}>
        <p className={styles.sectionSubText}>My work</p>
        <h3 style={{ color: "black", fontWeight: 500, fontSize: "36px" }}>
          Projects.
        </h3>
      </motion.div>

      <div className="w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial={false}
          className="mt-3 text-[#000] text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my skills and experience through
          real-world examples of my work.
        </motion.p>
      </div>

      {/* Responsive grid:
         - 1 column by default
         - 2 columns from 360px wide (phones like iPhone SE/mini)
         - 3 columns from md (≥768px), tweak as you like
      */}
      <div className="mt-10 grid grid-cols-1 min-[360px]:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "work");
