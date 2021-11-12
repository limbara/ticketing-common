abstract class AbstractCustomError extends Error {
  abstract statusCode: number;

  abstract toJson(): { message: string; field?: string }[];
}

export {
  AbstractCustomError
}