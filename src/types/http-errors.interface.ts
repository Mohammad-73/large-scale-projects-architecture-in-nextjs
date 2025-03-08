interface Problem {
  title: string;
  statusCode: number;
  details?: string;
  errors?: Record<string, string[]>;
}

interface BadRequestError extends Problem {}
interface UnauthorizedError extends Problem {}
interface ValidationError extends Problem {}
interface NotFoundError extends Problem {}
interface UnhandledError extends Problem {}
interface NetworkError extends Problem {}

export type {
  Problem,
  BadRequestError,
  UnauthorizedError,
  ValidationError,
  NotFoundError,
  UnhandledError,
  NetworkError,
};
