import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComment />);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
  });

  test('Deve Comentar React e Jest', () => {
    render(<PostComment />);
    fireEvent.change(screen.getByTestId("text-comentario"), {
      target: {
        value: "React",
      },
    });
    fireEvent.click(screen.getByTestId("btn-cadastrar"));

    fireEvent.change(screen.getByTestId("text-comentario"), {
      target: {
        value: "Jest",
      },
    });
    fireEvent.click(screen.getByTestId("btn-cadastrar"));


    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Jest")).toBeInTheDocument();
  });
});
