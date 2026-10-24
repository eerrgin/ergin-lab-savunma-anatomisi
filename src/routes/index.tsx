import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "ERGİN LAB · Savunma Anatomisi" },
      {
        name: "description",
        content:
          "Kişisel kullanıcıdan sistem yöneticisine savunma el kitabı. Dizin, denetim ve ilk saat planı. İstismar kodu içermez.",
      },
    ],
  }),
});
