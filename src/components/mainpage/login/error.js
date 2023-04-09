import React from "react";
import { Alert } from "react-bootstrap";

export default function ErrorMessage ({ variant = "info", children })  {
  return (
    <Alert variant={variant} style={{ fontSize: 20 }}>
      <strong>{children}</strong>
    </Alert>
  );
};