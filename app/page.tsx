import TestimonialSlider from "@/components/testimonials-slider";
import TestimonialSliderCard from "@/components/testimonials-slider-card";

const testimonials = [
  {
    quote:
      "Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip.",
    name: "Rose Roberson",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=1",
  },
  {
    quote:
      "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation. Culpa consectetur dolor pariatur commodo aliqua amet tempor nisi enim deserunt elit cillum.",
    name: "Chace Rodgers",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=10",
  },
  {
    quote:
      "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
    name: "Cornelius Sheppard",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=9",
  },
  {
    quote:
      "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
    name: "Chace Rodgers",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=7",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
    name: "Cornelius Sheppard",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=8",
  },
  {
    quote:
      "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
    name: "Chace Rodgers",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=2",
  },
  {
    quote:
      "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
    name: "Cornelius Sheppard",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=3",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-5">
      <div className="container">
        <h1>Autoplay plugin</h1>
        <TestimonialSlider testimonials={testimonials} />
      </div>
      <div className="container">
        <h1>shadcn cards</h1>
        <TestimonialSliderCard testimonials={testimonials} />
      </div>
    </main>
  );
}
