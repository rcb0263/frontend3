import { FunctionComponent } from "preact";
import { Linkedin } from "../types.ts";

interface InfoProps {
  company_name: string;
  title: string;
  location: string;
  description: string;
}

export const Info: FunctionComponent<InfoProps> = ({
  company_name,
  title,
  location,
  description
}) => {
  return (
    <div class="info-container">
      <h2>{title}</h2>
      <p><strong>Empresa:</strong> {company_name}</p>
      <p><strong>Ubicación:</strong> {location}</p>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};
