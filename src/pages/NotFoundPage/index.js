import PageContainer from "../../components/PageContainer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the home page after 2 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    // Clean timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <PageContainer title="Not Found">
      <p>Sorry, the page you are looking for does not exist.</p>
      <ul>
        <li>
          <Link to="/">Click here</Link> to go to Home Page.
        </li>
      </ul>
    </PageContainer>
  );
}
