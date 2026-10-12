import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Link as LinkIcon } from "lucide-react";

// Impor data proyek dari halaman utama
// Pastikan path impor ini benar
import { projects, Footer } from "./index";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetail,
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) {
      throw notFound();
    }
    return project;
  },
});

function ProjectDetail() {
  const project = Route.useLoaderData();

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header className="py-6 px-6 border-b">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      <main className="py-12 md:py-20 px-6 flex-grow">
        <div className="max-w-4xl mx-auto">
          {/* Judul dan Kategori */}
          <div className="text-center">
            <p className="text-primary font-semibold">{project.category}</p>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 gradient-text">
              {project.name}
            </h1>
          </div>

          {/* Gambar Utama Proyek */}
          <div className="mt-12 md:mt-16 rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Deskripsi dan Tautan */}
          <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">About The Project</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                <p>{project.desc}</p>
                {project.slug === "accutax" ? (
                  <>
                    <p>
                      <strong>AccuTax</strong> dirancang untuk menyederhanakan proses kalkulasi pajak penghasilan yang kompleks menjadi otomatis, instan, dan minim kesalahan manual. Mengadopsi regulasi perpajakan Indonesia terbaru (<strong>PP 58/2023</strong> dan <strong>PMK 168/2023</strong>), sistem ini menerapkan skema Tarif Efektif Rata-Rata (TER) untuk perhitungan PPh Pasal 21 secara akurat dan transparan.
                    </p>
                    <div className="pt-2">
                      <h3 className="text-lg font-bold text-foreground mb-3">Key Features:</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature: string) => (
                          <span
                            key={feature}
                            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary text-primary"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="pt-2">
                    <h3 className="text-lg font-bold text-foreground mb-3">Key Features:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature: string) => (
                        <span
                          key={feature}
                          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary text-primary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Project Link</h3>
              <a href="#" /* <-- GANTI DENGAN LINK PROYEK ANDA */ className="btn-gradient px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 w-full justify-center">
                View Live Project <LinkIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}