import { ArrowRight, Users } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  return (
    <section id="cta" className="relative border-t border-border py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(42_100%_55%/0.08),transparent_60%)]" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Users className="mx-auto mb-6 h-12 w-12 text-primary" />
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t("cta.title_prefix")}<span className="text-gradient-gold">{t("cta.title_highlight")}</span>
          </h2>
          <p className="mb-8 text-muted-foreground">{t("cta.subtitle")}</p>
          <Button
            variant="hero"
            size="lg"
            asChild
            className="h-auto w-full max-w-full whitespace-normal px-4 py-3 text-center sm:w-auto sm:whitespace-nowrap"
          >
            <Link to={`/${lang}/book`}>
              {t("cta.button")}
              <ArrowRight className="ms-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">{t("cta.footer")}</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
