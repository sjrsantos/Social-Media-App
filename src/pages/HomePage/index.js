import PageContainer from "../../components/PageContainer";
import Posts from "../../components/Posts";

export default function HomePage() {
  return (
    <PageContainer title="Welcome to My App">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        <strong>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </strong>
      </p>
      <h2>Promoted Posts:</h2>
      <Posts showOnlyPromoted={true} />
    </PageContainer>
  );
}
