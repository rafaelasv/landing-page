import { SITE } from "@/data/home/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function SocialIcons() {
  return (
    <>
      <a className="ico" href={SITE.githubUrl} target="_blank" rel="noopener" aria-label="GitHub" title="GitHub"><GithubIcon /></a>
      <a className="ico" href={SITE.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn"><LinkedinIcon /></a>
      <a className="ico" href={`mailto:${SITE.email}`} aria-label="E-mail" title="E-mail"><MailIcon /></a>
    </>
  );
}
