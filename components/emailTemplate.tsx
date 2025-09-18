import * as React from "react";
import { fromHalfFloat } from "three/src/extras/DataUtils.js";

interface EmailTemplateProps {
  firstName: string;
  subject: string;
  message:string;
  from?: string;

}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, subject, message, from
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <h2>here is the subject: {subject}</h2>
    <p>the message is: {message}</p>
    {from && <p>From: {from}</p>}
  </div>
);