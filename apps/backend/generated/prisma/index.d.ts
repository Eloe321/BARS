
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model StickyNotes
 * 
 */
export type StickyNotes = $Result.DefaultSelection<Prisma.$StickyNotesPayload>
/**
 * Model Link
 * 
 */
export type Link = $Result.DefaultSelection<Prisma.$LinkPayload>
/**
 * Model LinkPermission
 * 
 */
export type LinkPermission = $Result.DefaultSelection<Prisma.$LinkPermissionPayload>
/**
 * Model PremadeMusic
 * 
 */
export type PremadeMusic = $Result.DefaultSelection<Prisma.$PremadeMusicPayload>
/**
 * Model UploadedMusic
 * 
 */
export type UploadedMusic = $Result.DefaultSelection<Prisma.$UploadedMusicPayload>
/**
 * Model DictionaryEntry
 * 
 */
export type DictionaryEntry = $Result.DefaultSelection<Prisma.$DictionaryEntryPayload>
/**
 * Model DictionaryHeadword
 * 
 */
export type DictionaryHeadword = $Result.DefaultSelection<Prisma.$DictionaryHeadwordPayload>
/**
 * Model DictionarySense
 * 
 */
export type DictionarySense = $Result.DefaultSelection<Prisma.$DictionarySensePayload>
/**
 * Model DictionaryTranslation
 * 
 */
export type DictionaryTranslation = $Result.DefaultSelection<Prisma.$DictionaryTranslationPayload>
/**
 * Model DictionaryExample
 * 
 */
export type DictionaryExample = $Result.DefaultSelection<Prisma.$DictionaryExamplePayload>
/**
 * Model DictionaryCrossRef
 * 
 */
export type DictionaryCrossRef = $Result.DefaultSelection<Prisma.$DictionaryCrossRefPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MusicSource: {
  PREMADE: 'PREMADE',
  UPLOADED: 'UPLOADED'
};

export type MusicSource = (typeof MusicSource)[keyof typeof MusicSource]

}

export type MusicSource = $Enums.MusicSource

export const MusicSource: typeof $Enums.MusicSource

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stickyNotes`: Exposes CRUD operations for the **StickyNotes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StickyNotes
    * const stickyNotes = await prisma.stickyNotes.findMany()
    * ```
    */
  get stickyNotes(): Prisma.StickyNotesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.link`: Exposes CRUD operations for the **Link** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Links
    * const links = await prisma.link.findMany()
    * ```
    */
  get link(): Prisma.LinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.linkPermission`: Exposes CRUD operations for the **LinkPermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkPermissions
    * const linkPermissions = await prisma.linkPermission.findMany()
    * ```
    */
  get linkPermission(): Prisma.LinkPermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.premadeMusic`: Exposes CRUD operations for the **PremadeMusic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PremadeMusics
    * const premadeMusics = await prisma.premadeMusic.findMany()
    * ```
    */
  get premadeMusic(): Prisma.PremadeMusicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uploadedMusic`: Exposes CRUD operations for the **UploadedMusic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UploadedMusics
    * const uploadedMusics = await prisma.uploadedMusic.findMany()
    * ```
    */
  get uploadedMusic(): Prisma.UploadedMusicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dictionaryEntry`: Exposes CRUD operations for the **DictionaryEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DictionaryEntries
    * const dictionaryEntries = await prisma.dictionaryEntry.findMany()
    * ```
    */
  get dictionaryEntry(): Prisma.DictionaryEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dictionaryHeadword`: Exposes CRUD operations for the **DictionaryHeadword** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DictionaryHeadwords
    * const dictionaryHeadwords = await prisma.dictionaryHeadword.findMany()
    * ```
    */
  get dictionaryHeadword(): Prisma.DictionaryHeadwordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dictionarySense`: Exposes CRUD operations for the **DictionarySense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DictionarySenses
    * const dictionarySenses = await prisma.dictionarySense.findMany()
    * ```
    */
  get dictionarySense(): Prisma.DictionarySenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dictionaryTranslation`: Exposes CRUD operations for the **DictionaryTranslation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DictionaryTranslations
    * const dictionaryTranslations = await prisma.dictionaryTranslation.findMany()
    * ```
    */
  get dictionaryTranslation(): Prisma.DictionaryTranslationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dictionaryExample`: Exposes CRUD operations for the **DictionaryExample** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DictionaryExamples
    * const dictionaryExamples = await prisma.dictionaryExample.findMany()
    * ```
    */
  get dictionaryExample(): Prisma.DictionaryExampleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dictionaryCrossRef`: Exposes CRUD operations for the **DictionaryCrossRef** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DictionaryCrossRefs
    * const dictionaryCrossRefs = await prisma.dictionaryCrossRef.findMany()
    * ```
    */
  get dictionaryCrossRef(): Prisma.DictionaryCrossRefDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    StickyNotes: 'StickyNotes',
    Link: 'Link',
    LinkPermission: 'LinkPermission',
    PremadeMusic: 'PremadeMusic',
    UploadedMusic: 'UploadedMusic',
    DictionaryEntry: 'DictionaryEntry',
    DictionaryHeadword: 'DictionaryHeadword',
    DictionarySense: 'DictionarySense',
    DictionaryTranslation: 'DictionaryTranslation',
    DictionaryExample: 'DictionaryExample',
    DictionaryCrossRef: 'DictionaryCrossRef'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "stickyNotes" | "link" | "linkPermission" | "premadeMusic" | "uploadedMusic" | "dictionaryEntry" | "dictionaryHeadword" | "dictionarySense" | "dictionaryTranslation" | "dictionaryExample" | "dictionaryCrossRef"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      StickyNotes: {
        payload: Prisma.$StickyNotesPayload<ExtArgs>
        fields: Prisma.StickyNotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StickyNotesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StickyNotesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload>
          }
          findFirst: {
            args: Prisma.StickyNotesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StickyNotesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload>
          }
          findMany: {
            args: Prisma.StickyNotesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload>[]
          }
          create: {
            args: Prisma.StickyNotesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload>
          }
          createMany: {
            args: Prisma.StickyNotesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StickyNotesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload>[]
          }
          delete: {
            args: Prisma.StickyNotesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload>
          }
          update: {
            args: Prisma.StickyNotesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload>
          }
          deleteMany: {
            args: Prisma.StickyNotesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StickyNotesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StickyNotesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload>[]
          }
          upsert: {
            args: Prisma.StickyNotesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload>
          }
          aggregate: {
            args: Prisma.StickyNotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStickyNotes>
          }
          groupBy: {
            args: Prisma.StickyNotesGroupByArgs<ExtArgs>
            result: $Utils.Optional<StickyNotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.StickyNotesCountArgs<ExtArgs>
            result: $Utils.Optional<StickyNotesCountAggregateOutputType> | number
          }
        }
      }
      Link: {
        payload: Prisma.$LinkPayload<ExtArgs>
        fields: Prisma.LinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findFirst: {
            args: Prisma.LinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findMany: {
            args: Prisma.LinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          create: {
            args: Prisma.LinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          createMany: {
            args: Prisma.LinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          delete: {
            args: Prisma.LinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          update: {
            args: Prisma.LinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          deleteMany: {
            args: Prisma.LinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          upsert: {
            args: Prisma.LinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          aggregate: {
            args: Prisma.LinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLink>
          }
          groupBy: {
            args: Prisma.LinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkCountArgs<ExtArgs>
            result: $Utils.Optional<LinkCountAggregateOutputType> | number
          }
        }
      }
      LinkPermission: {
        payload: Prisma.$LinkPermissionPayload<ExtArgs>
        fields: Prisma.LinkPermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkPermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkPermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPermissionPayload>
          }
          findFirst: {
            args: Prisma.LinkPermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkPermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPermissionPayload>
          }
          findMany: {
            args: Prisma.LinkPermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPermissionPayload>[]
          }
          create: {
            args: Prisma.LinkPermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPermissionPayload>
          }
          createMany: {
            args: Prisma.LinkPermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkPermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPermissionPayload>[]
          }
          delete: {
            args: Prisma.LinkPermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPermissionPayload>
          }
          update: {
            args: Prisma.LinkPermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPermissionPayload>
          }
          deleteMany: {
            args: Prisma.LinkPermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkPermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkPermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPermissionPayload>[]
          }
          upsert: {
            args: Prisma.LinkPermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPermissionPayload>
          }
          aggregate: {
            args: Prisma.LinkPermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinkPermission>
          }
          groupBy: {
            args: Prisma.LinkPermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkPermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkPermissionCountArgs<ExtArgs>
            result: $Utils.Optional<LinkPermissionCountAggregateOutputType> | number
          }
        }
      }
      PremadeMusic: {
        payload: Prisma.$PremadeMusicPayload<ExtArgs>
        fields: Prisma.PremadeMusicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PremadeMusicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadeMusicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PremadeMusicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadeMusicPayload>
          }
          findFirst: {
            args: Prisma.PremadeMusicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadeMusicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PremadeMusicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadeMusicPayload>
          }
          findMany: {
            args: Prisma.PremadeMusicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadeMusicPayload>[]
          }
          create: {
            args: Prisma.PremadeMusicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadeMusicPayload>
          }
          createMany: {
            args: Prisma.PremadeMusicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PremadeMusicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadeMusicPayload>[]
          }
          delete: {
            args: Prisma.PremadeMusicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadeMusicPayload>
          }
          update: {
            args: Prisma.PremadeMusicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadeMusicPayload>
          }
          deleteMany: {
            args: Prisma.PremadeMusicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PremadeMusicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PremadeMusicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadeMusicPayload>[]
          }
          upsert: {
            args: Prisma.PremadeMusicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadeMusicPayload>
          }
          aggregate: {
            args: Prisma.PremadeMusicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePremadeMusic>
          }
          groupBy: {
            args: Prisma.PremadeMusicGroupByArgs<ExtArgs>
            result: $Utils.Optional<PremadeMusicGroupByOutputType>[]
          }
          count: {
            args: Prisma.PremadeMusicCountArgs<ExtArgs>
            result: $Utils.Optional<PremadeMusicCountAggregateOutputType> | number
          }
        }
      }
      UploadedMusic: {
        payload: Prisma.$UploadedMusicPayload<ExtArgs>
        fields: Prisma.UploadedMusicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UploadedMusicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedMusicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UploadedMusicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedMusicPayload>
          }
          findFirst: {
            args: Prisma.UploadedMusicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedMusicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UploadedMusicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedMusicPayload>
          }
          findMany: {
            args: Prisma.UploadedMusicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedMusicPayload>[]
          }
          create: {
            args: Prisma.UploadedMusicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedMusicPayload>
          }
          createMany: {
            args: Prisma.UploadedMusicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UploadedMusicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedMusicPayload>[]
          }
          delete: {
            args: Prisma.UploadedMusicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedMusicPayload>
          }
          update: {
            args: Prisma.UploadedMusicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedMusicPayload>
          }
          deleteMany: {
            args: Prisma.UploadedMusicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UploadedMusicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UploadedMusicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedMusicPayload>[]
          }
          upsert: {
            args: Prisma.UploadedMusicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedMusicPayload>
          }
          aggregate: {
            args: Prisma.UploadedMusicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUploadedMusic>
          }
          groupBy: {
            args: Prisma.UploadedMusicGroupByArgs<ExtArgs>
            result: $Utils.Optional<UploadedMusicGroupByOutputType>[]
          }
          count: {
            args: Prisma.UploadedMusicCountArgs<ExtArgs>
            result: $Utils.Optional<UploadedMusicCountAggregateOutputType> | number
          }
        }
      }
      DictionaryEntry: {
        payload: Prisma.$DictionaryEntryPayload<ExtArgs>
        fields: Prisma.DictionaryEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DictionaryEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DictionaryEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload>
          }
          findFirst: {
            args: Prisma.DictionaryEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DictionaryEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload>
          }
          findMany: {
            args: Prisma.DictionaryEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload>[]
          }
          create: {
            args: Prisma.DictionaryEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload>
          }
          createMany: {
            args: Prisma.DictionaryEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DictionaryEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload>[]
          }
          delete: {
            args: Prisma.DictionaryEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload>
          }
          update: {
            args: Prisma.DictionaryEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload>
          }
          deleteMany: {
            args: Prisma.DictionaryEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DictionaryEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DictionaryEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload>[]
          }
          upsert: {
            args: Prisma.DictionaryEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload>
          }
          aggregate: {
            args: Prisma.DictionaryEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDictionaryEntry>
          }
          groupBy: {
            args: Prisma.DictionaryEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DictionaryEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DictionaryEntryCountArgs<ExtArgs>
            result: $Utils.Optional<DictionaryEntryCountAggregateOutputType> | number
          }
        }
      }
      DictionaryHeadword: {
        payload: Prisma.$DictionaryHeadwordPayload<ExtArgs>
        fields: Prisma.DictionaryHeadwordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DictionaryHeadwordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryHeadwordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DictionaryHeadwordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryHeadwordPayload>
          }
          findFirst: {
            args: Prisma.DictionaryHeadwordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryHeadwordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DictionaryHeadwordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryHeadwordPayload>
          }
          findMany: {
            args: Prisma.DictionaryHeadwordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryHeadwordPayload>[]
          }
          create: {
            args: Prisma.DictionaryHeadwordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryHeadwordPayload>
          }
          createMany: {
            args: Prisma.DictionaryHeadwordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DictionaryHeadwordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryHeadwordPayload>[]
          }
          delete: {
            args: Prisma.DictionaryHeadwordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryHeadwordPayload>
          }
          update: {
            args: Prisma.DictionaryHeadwordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryHeadwordPayload>
          }
          deleteMany: {
            args: Prisma.DictionaryHeadwordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DictionaryHeadwordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DictionaryHeadwordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryHeadwordPayload>[]
          }
          upsert: {
            args: Prisma.DictionaryHeadwordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryHeadwordPayload>
          }
          aggregate: {
            args: Prisma.DictionaryHeadwordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDictionaryHeadword>
          }
          groupBy: {
            args: Prisma.DictionaryHeadwordGroupByArgs<ExtArgs>
            result: $Utils.Optional<DictionaryHeadwordGroupByOutputType>[]
          }
          count: {
            args: Prisma.DictionaryHeadwordCountArgs<ExtArgs>
            result: $Utils.Optional<DictionaryHeadwordCountAggregateOutputType> | number
          }
        }
      }
      DictionarySense: {
        payload: Prisma.$DictionarySensePayload<ExtArgs>
        fields: Prisma.DictionarySenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DictionarySenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionarySensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DictionarySenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionarySensePayload>
          }
          findFirst: {
            args: Prisma.DictionarySenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionarySensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DictionarySenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionarySensePayload>
          }
          findMany: {
            args: Prisma.DictionarySenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionarySensePayload>[]
          }
          create: {
            args: Prisma.DictionarySenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionarySensePayload>
          }
          createMany: {
            args: Prisma.DictionarySenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DictionarySenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionarySensePayload>[]
          }
          delete: {
            args: Prisma.DictionarySenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionarySensePayload>
          }
          update: {
            args: Prisma.DictionarySenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionarySensePayload>
          }
          deleteMany: {
            args: Prisma.DictionarySenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DictionarySenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DictionarySenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionarySensePayload>[]
          }
          upsert: {
            args: Prisma.DictionarySenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionarySensePayload>
          }
          aggregate: {
            args: Prisma.DictionarySenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDictionarySense>
          }
          groupBy: {
            args: Prisma.DictionarySenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<DictionarySenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.DictionarySenseCountArgs<ExtArgs>
            result: $Utils.Optional<DictionarySenseCountAggregateOutputType> | number
          }
        }
      }
      DictionaryTranslation: {
        payload: Prisma.$DictionaryTranslationPayload<ExtArgs>
        fields: Prisma.DictionaryTranslationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DictionaryTranslationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryTranslationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DictionaryTranslationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryTranslationPayload>
          }
          findFirst: {
            args: Prisma.DictionaryTranslationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryTranslationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DictionaryTranslationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryTranslationPayload>
          }
          findMany: {
            args: Prisma.DictionaryTranslationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryTranslationPayload>[]
          }
          create: {
            args: Prisma.DictionaryTranslationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryTranslationPayload>
          }
          createMany: {
            args: Prisma.DictionaryTranslationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DictionaryTranslationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryTranslationPayload>[]
          }
          delete: {
            args: Prisma.DictionaryTranslationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryTranslationPayload>
          }
          update: {
            args: Prisma.DictionaryTranslationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryTranslationPayload>
          }
          deleteMany: {
            args: Prisma.DictionaryTranslationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DictionaryTranslationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DictionaryTranslationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryTranslationPayload>[]
          }
          upsert: {
            args: Prisma.DictionaryTranslationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryTranslationPayload>
          }
          aggregate: {
            args: Prisma.DictionaryTranslationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDictionaryTranslation>
          }
          groupBy: {
            args: Prisma.DictionaryTranslationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DictionaryTranslationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DictionaryTranslationCountArgs<ExtArgs>
            result: $Utils.Optional<DictionaryTranslationCountAggregateOutputType> | number
          }
        }
      }
      DictionaryExample: {
        payload: Prisma.$DictionaryExamplePayload<ExtArgs>
        fields: Prisma.DictionaryExampleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DictionaryExampleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryExamplePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DictionaryExampleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryExamplePayload>
          }
          findFirst: {
            args: Prisma.DictionaryExampleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryExamplePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DictionaryExampleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryExamplePayload>
          }
          findMany: {
            args: Prisma.DictionaryExampleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryExamplePayload>[]
          }
          create: {
            args: Prisma.DictionaryExampleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryExamplePayload>
          }
          createMany: {
            args: Prisma.DictionaryExampleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DictionaryExampleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryExamplePayload>[]
          }
          delete: {
            args: Prisma.DictionaryExampleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryExamplePayload>
          }
          update: {
            args: Prisma.DictionaryExampleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryExamplePayload>
          }
          deleteMany: {
            args: Prisma.DictionaryExampleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DictionaryExampleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DictionaryExampleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryExamplePayload>[]
          }
          upsert: {
            args: Prisma.DictionaryExampleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryExamplePayload>
          }
          aggregate: {
            args: Prisma.DictionaryExampleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDictionaryExample>
          }
          groupBy: {
            args: Prisma.DictionaryExampleGroupByArgs<ExtArgs>
            result: $Utils.Optional<DictionaryExampleGroupByOutputType>[]
          }
          count: {
            args: Prisma.DictionaryExampleCountArgs<ExtArgs>
            result: $Utils.Optional<DictionaryExampleCountAggregateOutputType> | number
          }
        }
      }
      DictionaryCrossRef: {
        payload: Prisma.$DictionaryCrossRefPayload<ExtArgs>
        fields: Prisma.DictionaryCrossRefFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DictionaryCrossRefFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryCrossRefPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DictionaryCrossRefFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryCrossRefPayload>
          }
          findFirst: {
            args: Prisma.DictionaryCrossRefFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryCrossRefPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DictionaryCrossRefFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryCrossRefPayload>
          }
          findMany: {
            args: Prisma.DictionaryCrossRefFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryCrossRefPayload>[]
          }
          create: {
            args: Prisma.DictionaryCrossRefCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryCrossRefPayload>
          }
          createMany: {
            args: Prisma.DictionaryCrossRefCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DictionaryCrossRefCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryCrossRefPayload>[]
          }
          delete: {
            args: Prisma.DictionaryCrossRefDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryCrossRefPayload>
          }
          update: {
            args: Prisma.DictionaryCrossRefUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryCrossRefPayload>
          }
          deleteMany: {
            args: Prisma.DictionaryCrossRefDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DictionaryCrossRefUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DictionaryCrossRefUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryCrossRefPayload>[]
          }
          upsert: {
            args: Prisma.DictionaryCrossRefUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryCrossRefPayload>
          }
          aggregate: {
            args: Prisma.DictionaryCrossRefAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDictionaryCrossRef>
          }
          groupBy: {
            args: Prisma.DictionaryCrossRefGroupByArgs<ExtArgs>
            result: $Utils.Optional<DictionaryCrossRefGroupByOutputType>[]
          }
          count: {
            args: Prisma.DictionaryCrossRefCountArgs<ExtArgs>
            result: $Utils.Optional<DictionaryCrossRefCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    stickyNotes?: StickyNotesOmit
    link?: LinkOmit
    linkPermission?: LinkPermissionOmit
    premadeMusic?: PremadeMusicOmit
    uploadedMusic?: UploadedMusicOmit
    dictionaryEntry?: DictionaryEntryOmit
    dictionaryHeadword?: DictionaryHeadwordOmit
    dictionarySense?: DictionarySenseOmit
    dictionaryTranslation?: DictionaryTranslationOmit
    dictionaryExample?: DictionaryExampleOmit
    dictionaryCrossRef?: DictionaryCrossRefOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    links: number
    linkPermissions: number
    sessions: number
    stickyNotes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    links?: boolean | UserCountOutputTypeCountLinksArgs
    linkPermissions?: boolean | UserCountOutputTypeCountLinkPermissionsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    stickyNotes?: boolean | UserCountOutputTypeCountStickyNotesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLinkPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkPermissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStickyNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StickyNotesWhereInput
  }


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    links: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    links?: boolean | SessionCountOutputTypeCountLinksArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
  }


  /**
   * Count Type LinkCountOutputType
   */

  export type LinkCountOutputType = {
    linkPermissions: number
  }

  export type LinkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linkPermissions?: boolean | LinkCountOutputTypeCountLinkPermissionsArgs
  }

  // Custom InputTypes
  /**
   * LinkCountOutputType without action
   */
  export type LinkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkCountOutputType
     */
    select?: LinkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LinkCountOutputType without action
   */
  export type LinkCountOutputTypeCountLinkPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkPermissionWhereInput
  }


  /**
   * Count Type PremadeMusicCountOutputType
   */

  export type PremadeMusicCountOutputType = {
    session: number
  }

  export type PremadeMusicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | PremadeMusicCountOutputTypeCountSessionArgs
  }

  // Custom InputTypes
  /**
   * PremadeMusicCountOutputType without action
   */
  export type PremadeMusicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadeMusicCountOutputType
     */
    select?: PremadeMusicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PremadeMusicCountOutputType without action
   */
  export type PremadeMusicCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type UploadedMusicCountOutputType
   */

  export type UploadedMusicCountOutputType = {
    session: number
    stickyNotes: number
  }

  export type UploadedMusicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | UploadedMusicCountOutputTypeCountSessionArgs
    stickyNotes?: boolean | UploadedMusicCountOutputTypeCountStickyNotesArgs
  }

  // Custom InputTypes
  /**
   * UploadedMusicCountOutputType without action
   */
  export type UploadedMusicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedMusicCountOutputType
     */
    select?: UploadedMusicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UploadedMusicCountOutputType without action
   */
  export type UploadedMusicCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UploadedMusicCountOutputType without action
   */
  export type UploadedMusicCountOutputTypeCountStickyNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StickyNotesWhereInput
  }


  /**
   * Count Type DictionaryEntryCountOutputType
   */

  export type DictionaryEntryCountOutputType = {
    headwords: number
    senses: number
  }

  export type DictionaryEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    headwords?: boolean | DictionaryEntryCountOutputTypeCountHeadwordsArgs
    senses?: boolean | DictionaryEntryCountOutputTypeCountSensesArgs
  }

  // Custom InputTypes
  /**
   * DictionaryEntryCountOutputType without action
   */
  export type DictionaryEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntryCountOutputType
     */
    select?: DictionaryEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DictionaryEntryCountOutputType without action
   */
  export type DictionaryEntryCountOutputTypeCountHeadwordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictionaryHeadwordWhereInput
  }

  /**
   * DictionaryEntryCountOutputType without action
   */
  export type DictionaryEntryCountOutputTypeCountSensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictionarySenseWhereInput
  }


  /**
   * Count Type DictionarySenseCountOutputType
   */

  export type DictionarySenseCountOutputType = {
    examples: number
    translations: number
    crossRefs: number
  }

  export type DictionarySenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examples?: boolean | DictionarySenseCountOutputTypeCountExamplesArgs
    translations?: boolean | DictionarySenseCountOutputTypeCountTranslationsArgs
    crossRefs?: boolean | DictionarySenseCountOutputTypeCountCrossRefsArgs
  }

  // Custom InputTypes
  /**
   * DictionarySenseCountOutputType without action
   */
  export type DictionarySenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionarySenseCountOutputType
     */
    select?: DictionarySenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DictionarySenseCountOutputType without action
   */
  export type DictionarySenseCountOutputTypeCountExamplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictionaryExampleWhereInput
  }

  /**
   * DictionarySenseCountOutputType without action
   */
  export type DictionarySenseCountOutputTypeCountTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictionaryTranslationWhereInput
  }

  /**
   * DictionarySenseCountOutputType without action
   */
  export type DictionarySenseCountOutputTypeCountCrossRefsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictionaryCrossRefWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
    username: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
    username: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createAt: number
    updateAt: number
    username: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createAt?: true
    updateAt?: true
    username?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createAt?: true
    updateAt?: true
    username?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createAt?: true
    updateAt?: true
    username?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    createAt: Date
    updateAt: Date
    username: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
    username?: boolean
    links?: boolean | User$linksArgs<ExtArgs>
    linkPermissions?: boolean | User$linkPermissionsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    stickyNotes?: boolean | User$stickyNotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
    username?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
    username?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
    username?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createAt" | "updateAt" | "username", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    links?: boolean | User$linksArgs<ExtArgs>
    linkPermissions?: boolean | User$linkPermissionsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    stickyNotes?: boolean | User$stickyNotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      links: Prisma.$LinkPayload<ExtArgs>[]
      linkPermissions: Prisma.$LinkPermissionPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      stickyNotes: Prisma.$StickyNotesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createAt: Date
      updateAt: Date
      username: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    links<T extends User$linksArgs<ExtArgs> = {}>(args?: Subset<T, User$linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    linkPermissions<T extends User$linkPermissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$linkPermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stickyNotes<T extends User$stickyNotesArgs<ExtArgs> = {}>(args?: Subset<T, User$stickyNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
    readonly username: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.links
   */
  export type User$linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    cursor?: LinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * User.linkPermissions
   */
  export type User$linkPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPermission
     */
    select?: LinkPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPermission
     */
    omit?: LinkPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPermissionInclude<ExtArgs> | null
    where?: LinkPermissionWhereInput
    orderBy?: LinkPermissionOrderByWithRelationInput | LinkPermissionOrderByWithRelationInput[]
    cursor?: LinkPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkPermissionScalarFieldEnum | LinkPermissionScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.stickyNotes
   */
  export type User$stickyNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StickyNotesInclude<ExtArgs> | null
    where?: StickyNotesWhereInput
    orderBy?: StickyNotesOrderByWithRelationInput | StickyNotesOrderByWithRelationInput[]
    cursor?: StickyNotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StickyNotesScalarFieldEnum | StickyNotesScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    title: string | null
    user_id: string | null
    musicSource: $Enums.MusicSource | null
    premade_music_id: string | null
    uploaded_music_id: string | null
    creation_date: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    user_id: string | null
    musicSource: $Enums.MusicSource | null
    premade_music_id: string | null
    uploaded_music_id: string | null
    creation_date: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    title: number
    user_id: number
    musicSource: number
    premade_music_id: number
    uploaded_music_id: number
    audio_timeline: number
    creation_date: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    title?: true
    user_id?: true
    musicSource?: true
    premade_music_id?: true
    uploaded_music_id?: true
    creation_date?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    title?: true
    user_id?: true
    musicSource?: true
    premade_music_id?: true
    uploaded_music_id?: true
    creation_date?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    title?: true
    user_id?: true
    musicSource?: true
    premade_music_id?: true
    uploaded_music_id?: true
    audio_timeline?: true
    creation_date?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    title: string
    user_id: string
    musicSource: $Enums.MusicSource
    premade_music_id: string | null
    uploaded_music_id: string | null
    audio_timeline: JsonValue
    creation_date: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    user_id?: boolean
    musicSource?: boolean
    premade_music_id?: boolean
    uploaded_music_id?: boolean
    audio_timeline?: boolean
    creation_date?: boolean
    links?: boolean | Session$linksArgs<ExtArgs>
    premadeMusic?: boolean | Session$premadeMusicArgs<ExtArgs>
    uploadedMusic?: boolean | Session$uploadedMusicArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    user_id?: boolean
    musicSource?: boolean
    premade_music_id?: boolean
    uploaded_music_id?: boolean
    audio_timeline?: boolean
    creation_date?: boolean
    premadeMusic?: boolean | Session$premadeMusicArgs<ExtArgs>
    uploadedMusic?: boolean | Session$uploadedMusicArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    user_id?: boolean
    musicSource?: boolean
    premade_music_id?: boolean
    uploaded_music_id?: boolean
    audio_timeline?: boolean
    creation_date?: boolean
    premadeMusic?: boolean | Session$premadeMusicArgs<ExtArgs>
    uploadedMusic?: boolean | Session$uploadedMusicArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    title?: boolean
    user_id?: boolean
    musicSource?: boolean
    premade_music_id?: boolean
    uploaded_music_id?: boolean
    audio_timeline?: boolean
    creation_date?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "user_id" | "musicSource" | "premade_music_id" | "uploaded_music_id" | "audio_timeline" | "creation_date", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    links?: boolean | Session$linksArgs<ExtArgs>
    premadeMusic?: boolean | Session$premadeMusicArgs<ExtArgs>
    uploadedMusic?: boolean | Session$uploadedMusicArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    premadeMusic?: boolean | Session$premadeMusicArgs<ExtArgs>
    uploadedMusic?: boolean | Session$uploadedMusicArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    premadeMusic?: boolean | Session$premadeMusicArgs<ExtArgs>
    uploadedMusic?: boolean | Session$uploadedMusicArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      links: Prisma.$LinkPayload<ExtArgs>[]
      premadeMusic: Prisma.$PremadeMusicPayload<ExtArgs> | null
      uploadedMusic: Prisma.$UploadedMusicPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      user_id: string
      musicSource: $Enums.MusicSource
      premade_music_id: string | null
      uploaded_music_id: string | null
      audio_timeline: Prisma.JsonValue
      creation_date: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    links<T extends Session$linksArgs<ExtArgs> = {}>(args?: Subset<T, Session$linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    premadeMusic<T extends Session$premadeMusicArgs<ExtArgs> = {}>(args?: Subset<T, Session$premadeMusicArgs<ExtArgs>>): Prisma__PremadeMusicClient<$Result.GetResult<Prisma.$PremadeMusicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    uploadedMusic<T extends Session$uploadedMusicArgs<ExtArgs> = {}>(args?: Subset<T, Session$uploadedMusicArgs<ExtArgs>>): Prisma__UploadedMusicClient<$Result.GetResult<Prisma.$UploadedMusicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly title: FieldRef<"Session", 'String'>
    readonly user_id: FieldRef<"Session", 'String'>
    readonly musicSource: FieldRef<"Session", 'MusicSource'>
    readonly premade_music_id: FieldRef<"Session", 'String'>
    readonly uploaded_music_id: FieldRef<"Session", 'String'>
    readonly audio_timeline: FieldRef<"Session", 'Json'>
    readonly creation_date: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.links
   */
  export type Session$linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    cursor?: LinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Session.premadeMusic
   */
  export type Session$premadeMusicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadeMusic
     */
    select?: PremadeMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadeMusic
     */
    omit?: PremadeMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadeMusicInclude<ExtArgs> | null
    where?: PremadeMusicWhereInput
  }

  /**
   * Session.uploadedMusic
   */
  export type Session$uploadedMusicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedMusic
     */
    select?: UploadedMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedMusic
     */
    omit?: UploadedMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedMusicInclude<ExtArgs> | null
    where?: UploadedMusicWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model StickyNotes
   */

  export type AggregateStickyNotes = {
    _count: StickyNotesCountAggregateOutputType | null
    _min: StickyNotesMinAggregateOutputType | null
    _max: StickyNotesMaxAggregateOutputType | null
  }

  export type StickyNotesMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    user_id: string | null
    music_id: string | null
  }

  export type StickyNotesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    user_id: string | null
    music_id: string | null
  }

  export type StickyNotesCountAggregateOutputType = {
    id: number
    title: number
    content: number
    user_id: number
    music_id: number
    _all: number
  }


  export type StickyNotesMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    user_id?: true
    music_id?: true
  }

  export type StickyNotesMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    user_id?: true
    music_id?: true
  }

  export type StickyNotesCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    user_id?: true
    music_id?: true
    _all?: true
  }

  export type StickyNotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StickyNotes to aggregate.
     */
    where?: StickyNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StickyNotes to fetch.
     */
    orderBy?: StickyNotesOrderByWithRelationInput | StickyNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StickyNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StickyNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StickyNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StickyNotes
    **/
    _count?: true | StickyNotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StickyNotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StickyNotesMaxAggregateInputType
  }

  export type GetStickyNotesAggregateType<T extends StickyNotesAggregateArgs> = {
        [P in keyof T & keyof AggregateStickyNotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStickyNotes[P]>
      : GetScalarType<T[P], AggregateStickyNotes[P]>
  }




  export type StickyNotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StickyNotesWhereInput
    orderBy?: StickyNotesOrderByWithAggregationInput | StickyNotesOrderByWithAggregationInput[]
    by: StickyNotesScalarFieldEnum[] | StickyNotesScalarFieldEnum
    having?: StickyNotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StickyNotesCountAggregateInputType | true
    _min?: StickyNotesMinAggregateInputType
    _max?: StickyNotesMaxAggregateInputType
  }

  export type StickyNotesGroupByOutputType = {
    id: string
    title: string
    content: string
    user_id: string
    music_id: string | null
    _count: StickyNotesCountAggregateOutputType | null
    _min: StickyNotesMinAggregateOutputType | null
    _max: StickyNotesMaxAggregateOutputType | null
  }

  type GetStickyNotesGroupByPayload<T extends StickyNotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StickyNotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StickyNotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StickyNotesGroupByOutputType[P]>
            : GetScalarType<T[P], StickyNotesGroupByOutputType[P]>
        }
      >
    >


  export type StickyNotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    user_id?: boolean
    music_id?: boolean
    music?: boolean | StickyNotes$musicArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stickyNotes"]>

  export type StickyNotesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    user_id?: boolean
    music_id?: boolean
    music?: boolean | StickyNotes$musicArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stickyNotes"]>

  export type StickyNotesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    user_id?: boolean
    music_id?: boolean
    music?: boolean | StickyNotes$musicArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stickyNotes"]>

  export type StickyNotesSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    user_id?: boolean
    music_id?: boolean
  }

  export type StickyNotesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "user_id" | "music_id", ExtArgs["result"]["stickyNotes"]>
  export type StickyNotesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    music?: boolean | StickyNotes$musicArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StickyNotesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    music?: boolean | StickyNotes$musicArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StickyNotesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    music?: boolean | StickyNotes$musicArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StickyNotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StickyNotes"
    objects: {
      music: Prisma.$UploadedMusicPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      user_id: string
      music_id: string | null
    }, ExtArgs["result"]["stickyNotes"]>
    composites: {}
  }

  type StickyNotesGetPayload<S extends boolean | null | undefined | StickyNotesDefaultArgs> = $Result.GetResult<Prisma.$StickyNotesPayload, S>

  type StickyNotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StickyNotesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StickyNotesCountAggregateInputType | true
    }

  export interface StickyNotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StickyNotes'], meta: { name: 'StickyNotes' } }
    /**
     * Find zero or one StickyNotes that matches the filter.
     * @param {StickyNotesFindUniqueArgs} args - Arguments to find a StickyNotes
     * @example
     * // Get one StickyNotes
     * const stickyNotes = await prisma.stickyNotes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StickyNotesFindUniqueArgs>(args: SelectSubset<T, StickyNotesFindUniqueArgs<ExtArgs>>): Prisma__StickyNotesClient<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StickyNotes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StickyNotesFindUniqueOrThrowArgs} args - Arguments to find a StickyNotes
     * @example
     * // Get one StickyNotes
     * const stickyNotes = await prisma.stickyNotes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StickyNotesFindUniqueOrThrowArgs>(args: SelectSubset<T, StickyNotesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StickyNotesClient<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StickyNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StickyNotesFindFirstArgs} args - Arguments to find a StickyNotes
     * @example
     * // Get one StickyNotes
     * const stickyNotes = await prisma.stickyNotes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StickyNotesFindFirstArgs>(args?: SelectSubset<T, StickyNotesFindFirstArgs<ExtArgs>>): Prisma__StickyNotesClient<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StickyNotes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StickyNotesFindFirstOrThrowArgs} args - Arguments to find a StickyNotes
     * @example
     * // Get one StickyNotes
     * const stickyNotes = await prisma.stickyNotes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StickyNotesFindFirstOrThrowArgs>(args?: SelectSubset<T, StickyNotesFindFirstOrThrowArgs<ExtArgs>>): Prisma__StickyNotesClient<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StickyNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StickyNotesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StickyNotes
     * const stickyNotes = await prisma.stickyNotes.findMany()
     * 
     * // Get first 10 StickyNotes
     * const stickyNotes = await prisma.stickyNotes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stickyNotesWithIdOnly = await prisma.stickyNotes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StickyNotesFindManyArgs>(args?: SelectSubset<T, StickyNotesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StickyNotes.
     * @param {StickyNotesCreateArgs} args - Arguments to create a StickyNotes.
     * @example
     * // Create one StickyNotes
     * const StickyNotes = await prisma.stickyNotes.create({
     *   data: {
     *     // ... data to create a StickyNotes
     *   }
     * })
     * 
     */
    create<T extends StickyNotesCreateArgs>(args: SelectSubset<T, StickyNotesCreateArgs<ExtArgs>>): Prisma__StickyNotesClient<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StickyNotes.
     * @param {StickyNotesCreateManyArgs} args - Arguments to create many StickyNotes.
     * @example
     * // Create many StickyNotes
     * const stickyNotes = await prisma.stickyNotes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StickyNotesCreateManyArgs>(args?: SelectSubset<T, StickyNotesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StickyNotes and returns the data saved in the database.
     * @param {StickyNotesCreateManyAndReturnArgs} args - Arguments to create many StickyNotes.
     * @example
     * // Create many StickyNotes
     * const stickyNotes = await prisma.stickyNotes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StickyNotes and only return the `id`
     * const stickyNotesWithIdOnly = await prisma.stickyNotes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StickyNotesCreateManyAndReturnArgs>(args?: SelectSubset<T, StickyNotesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StickyNotes.
     * @param {StickyNotesDeleteArgs} args - Arguments to delete one StickyNotes.
     * @example
     * // Delete one StickyNotes
     * const StickyNotes = await prisma.stickyNotes.delete({
     *   where: {
     *     // ... filter to delete one StickyNotes
     *   }
     * })
     * 
     */
    delete<T extends StickyNotesDeleteArgs>(args: SelectSubset<T, StickyNotesDeleteArgs<ExtArgs>>): Prisma__StickyNotesClient<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StickyNotes.
     * @param {StickyNotesUpdateArgs} args - Arguments to update one StickyNotes.
     * @example
     * // Update one StickyNotes
     * const stickyNotes = await prisma.stickyNotes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StickyNotesUpdateArgs>(args: SelectSubset<T, StickyNotesUpdateArgs<ExtArgs>>): Prisma__StickyNotesClient<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StickyNotes.
     * @param {StickyNotesDeleteManyArgs} args - Arguments to filter StickyNotes to delete.
     * @example
     * // Delete a few StickyNotes
     * const { count } = await prisma.stickyNotes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StickyNotesDeleteManyArgs>(args?: SelectSubset<T, StickyNotesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StickyNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StickyNotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StickyNotes
     * const stickyNotes = await prisma.stickyNotes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StickyNotesUpdateManyArgs>(args: SelectSubset<T, StickyNotesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StickyNotes and returns the data updated in the database.
     * @param {StickyNotesUpdateManyAndReturnArgs} args - Arguments to update many StickyNotes.
     * @example
     * // Update many StickyNotes
     * const stickyNotes = await prisma.stickyNotes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StickyNotes and only return the `id`
     * const stickyNotesWithIdOnly = await prisma.stickyNotes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StickyNotesUpdateManyAndReturnArgs>(args: SelectSubset<T, StickyNotesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StickyNotes.
     * @param {StickyNotesUpsertArgs} args - Arguments to update or create a StickyNotes.
     * @example
     * // Update or create a StickyNotes
     * const stickyNotes = await prisma.stickyNotes.upsert({
     *   create: {
     *     // ... data to create a StickyNotes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StickyNotes we want to update
     *   }
     * })
     */
    upsert<T extends StickyNotesUpsertArgs>(args: SelectSubset<T, StickyNotesUpsertArgs<ExtArgs>>): Prisma__StickyNotesClient<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StickyNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StickyNotesCountArgs} args - Arguments to filter StickyNotes to count.
     * @example
     * // Count the number of StickyNotes
     * const count = await prisma.stickyNotes.count({
     *   where: {
     *     // ... the filter for the StickyNotes we want to count
     *   }
     * })
    **/
    count<T extends StickyNotesCountArgs>(
      args?: Subset<T, StickyNotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StickyNotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StickyNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StickyNotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StickyNotesAggregateArgs>(args: Subset<T, StickyNotesAggregateArgs>): Prisma.PrismaPromise<GetStickyNotesAggregateType<T>>

    /**
     * Group by StickyNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StickyNotesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StickyNotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StickyNotesGroupByArgs['orderBy'] }
        : { orderBy?: StickyNotesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StickyNotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStickyNotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StickyNotes model
   */
  readonly fields: StickyNotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StickyNotes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StickyNotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    music<T extends StickyNotes$musicArgs<ExtArgs> = {}>(args?: Subset<T, StickyNotes$musicArgs<ExtArgs>>): Prisma__UploadedMusicClient<$Result.GetResult<Prisma.$UploadedMusicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StickyNotes model
   */
  interface StickyNotesFieldRefs {
    readonly id: FieldRef<"StickyNotes", 'String'>
    readonly title: FieldRef<"StickyNotes", 'String'>
    readonly content: FieldRef<"StickyNotes", 'String'>
    readonly user_id: FieldRef<"StickyNotes", 'String'>
    readonly music_id: FieldRef<"StickyNotes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StickyNotes findUnique
   */
  export type StickyNotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StickyNotesInclude<ExtArgs> | null
    /**
     * Filter, which StickyNotes to fetch.
     */
    where: StickyNotesWhereUniqueInput
  }

  /**
   * StickyNotes findUniqueOrThrow
   */
  export type StickyNotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StickyNotesInclude<ExtArgs> | null
    /**
     * Filter, which StickyNotes to fetch.
     */
    where: StickyNotesWhereUniqueInput
  }

  /**
   * StickyNotes findFirst
   */
  export type StickyNotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StickyNotesInclude<ExtArgs> | null
    /**
     * Filter, which StickyNotes to fetch.
     */
    where?: StickyNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StickyNotes to fetch.
     */
    orderBy?: StickyNotesOrderByWithRelationInput | StickyNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StickyNotes.
     */
    cursor?: StickyNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StickyNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StickyNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StickyNotes.
     */
    distinct?: StickyNotesScalarFieldEnum | StickyNotesScalarFieldEnum[]
  }

  /**
   * StickyNotes findFirstOrThrow
   */
  export type StickyNotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StickyNotesInclude<ExtArgs> | null
    /**
     * Filter, which StickyNotes to fetch.
     */
    where?: StickyNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StickyNotes to fetch.
     */
    orderBy?: StickyNotesOrderByWithRelationInput | StickyNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StickyNotes.
     */
    cursor?: StickyNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StickyNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StickyNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StickyNotes.
     */
    distinct?: StickyNotesScalarFieldEnum | StickyNotesScalarFieldEnum[]
  }

  /**
   * StickyNotes findMany
   */
  export type StickyNotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StickyNotesInclude<ExtArgs> | null
    /**
     * Filter, which StickyNotes to fetch.
     */
    where?: StickyNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StickyNotes to fetch.
     */
    orderBy?: StickyNotesOrderByWithRelationInput | StickyNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StickyNotes.
     */
    cursor?: StickyNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StickyNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StickyNotes.
     */
    skip?: number
    distinct?: StickyNotesScalarFieldEnum | StickyNotesScalarFieldEnum[]
  }

  /**
   * StickyNotes create
   */
  export type StickyNotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StickyNotesInclude<ExtArgs> | null
    /**
     * The data needed to create a StickyNotes.
     */
    data: XOR<StickyNotesCreateInput, StickyNotesUncheckedCreateInput>
  }

  /**
   * StickyNotes createMany
   */
  export type StickyNotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StickyNotes.
     */
    data: StickyNotesCreateManyInput | StickyNotesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StickyNotes createManyAndReturn
   */
  export type StickyNotesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * The data used to create many StickyNotes.
     */
    data: StickyNotesCreateManyInput | StickyNotesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StickyNotesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StickyNotes update
   */
  export type StickyNotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StickyNotesInclude<ExtArgs> | null
    /**
     * The data needed to update a StickyNotes.
     */
    data: XOR<StickyNotesUpdateInput, StickyNotesUncheckedUpdateInput>
    /**
     * Choose, which StickyNotes to update.
     */
    where: StickyNotesWhereUniqueInput
  }

  /**
   * StickyNotes updateMany
   */
  export type StickyNotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StickyNotes.
     */
    data: XOR<StickyNotesUpdateManyMutationInput, StickyNotesUncheckedUpdateManyInput>
    /**
     * Filter which StickyNotes to update
     */
    where?: StickyNotesWhereInput
    /**
     * Limit how many StickyNotes to update.
     */
    limit?: number
  }

  /**
   * StickyNotes updateManyAndReturn
   */
  export type StickyNotesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * The data used to update StickyNotes.
     */
    data: XOR<StickyNotesUpdateManyMutationInput, StickyNotesUncheckedUpdateManyInput>
    /**
     * Filter which StickyNotes to update
     */
    where?: StickyNotesWhereInput
    /**
     * Limit how many StickyNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StickyNotesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StickyNotes upsert
   */
  export type StickyNotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StickyNotesInclude<ExtArgs> | null
    /**
     * The filter to search for the StickyNotes to update in case it exists.
     */
    where: StickyNotesWhereUniqueInput
    /**
     * In case the StickyNotes found by the `where` argument doesn't exist, create a new StickyNotes with this data.
     */
    create: XOR<StickyNotesCreateInput, StickyNotesUncheckedCreateInput>
    /**
     * In case the StickyNotes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StickyNotesUpdateInput, StickyNotesUncheckedUpdateInput>
  }

  /**
   * StickyNotes delete
   */
  export type StickyNotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StickyNotesInclude<ExtArgs> | null
    /**
     * Filter which StickyNotes to delete.
     */
    where: StickyNotesWhereUniqueInput
  }

  /**
   * StickyNotes deleteMany
   */
  export type StickyNotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StickyNotes to delete
     */
    where?: StickyNotesWhereInput
    /**
     * Limit how many StickyNotes to delete.
     */
    limit?: number
  }

  /**
   * StickyNotes.music
   */
  export type StickyNotes$musicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedMusic
     */
    select?: UploadedMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedMusic
     */
    omit?: UploadedMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedMusicInclude<ExtArgs> | null
    where?: UploadedMusicWhereInput
  }

  /**
   * StickyNotes without action
   */
  export type StickyNotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StickyNotesInclude<ExtArgs> | null
  }


  /**
   * Model Link
   */

  export type AggregateLink = {
    _count: LinkCountAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  export type LinkMinAggregateOutputType = {
    link_id: string | null
    song_id: string | null
    created_by: string | null
    is_public: boolean | null
    created_at: Date | null
    expires_at: Date | null
  }

  export type LinkMaxAggregateOutputType = {
    link_id: string | null
    song_id: string | null
    created_by: string | null
    is_public: boolean | null
    created_at: Date | null
    expires_at: Date | null
  }

  export type LinkCountAggregateOutputType = {
    link_id: number
    song_id: number
    created_by: number
    is_public: number
    created_at: number
    expires_at: number
    _all: number
  }


  export type LinkMinAggregateInputType = {
    link_id?: true
    song_id?: true
    created_by?: true
    is_public?: true
    created_at?: true
    expires_at?: true
  }

  export type LinkMaxAggregateInputType = {
    link_id?: true
    song_id?: true
    created_by?: true
    is_public?: true
    created_at?: true
    expires_at?: true
  }

  export type LinkCountAggregateInputType = {
    link_id?: true
    song_id?: true
    created_by?: true
    is_public?: true
    created_at?: true
    expires_at?: true
    _all?: true
  }

  export type LinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Link to aggregate.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Links
    **/
    _count?: true | LinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkMaxAggregateInputType
  }

  export type GetLinkAggregateType<T extends LinkAggregateArgs> = {
        [P in keyof T & keyof AggregateLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLink[P]>
      : GetScalarType<T[P], AggregateLink[P]>
  }




  export type LinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithAggregationInput | LinkOrderByWithAggregationInput[]
    by: LinkScalarFieldEnum[] | LinkScalarFieldEnum
    having?: LinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkCountAggregateInputType | true
    _min?: LinkMinAggregateInputType
    _max?: LinkMaxAggregateInputType
  }

  export type LinkGroupByOutputType = {
    link_id: string
    song_id: string
    created_by: string
    is_public: boolean
    created_at: Date
    expires_at: Date
    _count: LinkCountAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  type GetLinkGroupByPayload<T extends LinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkGroupByOutputType[P]>
            : GetScalarType<T[P], LinkGroupByOutputType[P]>
        }
      >
    >


  export type LinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    link_id?: boolean
    song_id?: boolean
    created_by?: boolean
    is_public?: boolean
    created_at?: boolean
    expires_at?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
    linkPermissions?: boolean | Link$linkPermissionsArgs<ExtArgs>
    _count?: boolean | LinkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    link_id?: boolean
    song_id?: boolean
    created_by?: boolean
    is_public?: boolean
    created_at?: boolean
    expires_at?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    link_id?: boolean
    song_id?: boolean
    created_by?: boolean
    is_public?: boolean
    created_at?: boolean
    expires_at?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectScalar = {
    link_id?: boolean
    song_id?: boolean
    created_by?: boolean
    is_public?: boolean
    created_at?: boolean
    expires_at?: boolean
  }

  export type LinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"link_id" | "song_id" | "created_by" | "is_public" | "created_at" | "expires_at", ExtArgs["result"]["link"]>
  export type LinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
    linkPermissions?: boolean | Link$linkPermissionsArgs<ExtArgs>
    _count?: boolean | LinkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type LinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }

  export type $LinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Link"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      session: Prisma.$SessionPayload<ExtArgs>
      linkPermissions: Prisma.$LinkPermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      link_id: string
      song_id: string
      created_by: string
      is_public: boolean
      created_at: Date
      expires_at: Date
    }, ExtArgs["result"]["link"]>
    composites: {}
  }

  type LinkGetPayload<S extends boolean | null | undefined | LinkDefaultArgs> = $Result.GetResult<Prisma.$LinkPayload, S>

  type LinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkCountAggregateInputType | true
    }

  export interface LinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Link'], meta: { name: 'Link' } }
    /**
     * Find zero or one Link that matches the filter.
     * @param {LinkFindUniqueArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkFindUniqueArgs>(args: SelectSubset<T, LinkFindUniqueArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Link that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkFindUniqueOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkFindFirstArgs>(args?: SelectSubset<T, LinkFindFirstArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Links
     * const links = await prisma.link.findMany()
     * 
     * // Get first 10 Links
     * const links = await prisma.link.findMany({ take: 10 })
     * 
     * // Only select the `link_id`
     * const linkWithLink_idOnly = await prisma.link.findMany({ select: { link_id: true } })
     * 
     */
    findMany<T extends LinkFindManyArgs>(args?: SelectSubset<T, LinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Link.
     * @param {LinkCreateArgs} args - Arguments to create a Link.
     * @example
     * // Create one Link
     * const Link = await prisma.link.create({
     *   data: {
     *     // ... data to create a Link
     *   }
     * })
     * 
     */
    create<T extends LinkCreateArgs>(args: SelectSubset<T, LinkCreateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Links.
     * @param {LinkCreateManyArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkCreateManyArgs>(args?: SelectSubset<T, LinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Links and returns the data saved in the database.
     * @param {LinkCreateManyAndReturnArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Links and only return the `link_id`
     * const linkWithLink_idOnly = await prisma.link.createManyAndReturn({
     *   select: { link_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Link.
     * @param {LinkDeleteArgs} args - Arguments to delete one Link.
     * @example
     * // Delete one Link
     * const Link = await prisma.link.delete({
     *   where: {
     *     // ... filter to delete one Link
     *   }
     * })
     * 
     */
    delete<T extends LinkDeleteArgs>(args: SelectSubset<T, LinkDeleteArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Link.
     * @param {LinkUpdateArgs} args - Arguments to update one Link.
     * @example
     * // Update one Link
     * const link = await prisma.link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkUpdateArgs>(args: SelectSubset<T, LinkUpdateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Links.
     * @param {LinkDeleteManyArgs} args - Arguments to filter Links to delete.
     * @example
     * // Delete a few Links
     * const { count } = await prisma.link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkDeleteManyArgs>(args?: SelectSubset<T, LinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkUpdateManyArgs>(args: SelectSubset<T, LinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links and returns the data updated in the database.
     * @param {LinkUpdateManyAndReturnArgs} args - Arguments to update many Links.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Links and only return the `link_id`
     * const linkWithLink_idOnly = await prisma.link.updateManyAndReturn({
     *   select: { link_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LinkUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Link.
     * @param {LinkUpsertArgs} args - Arguments to update or create a Link.
     * @example
     * // Update or create a Link
     * const link = await prisma.link.upsert({
     *   create: {
     *     // ... data to create a Link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Link we want to update
     *   }
     * })
     */
    upsert<T extends LinkUpsertArgs>(args: SelectSubset<T, LinkUpsertArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCountArgs} args - Arguments to filter Links to count.
     * @example
     * // Count the number of Links
     * const count = await prisma.link.count({
     *   where: {
     *     // ... the filter for the Links we want to count
     *   }
     * })
    **/
    count<T extends LinkCountArgs>(
      args?: Subset<T, LinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinkAggregateArgs>(args: Subset<T, LinkAggregateArgs>): Prisma.PrismaPromise<GetLinkAggregateType<T>>

    /**
     * Group by Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkGroupByArgs['orderBy'] }
        : { orderBy?: LinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Link model
   */
  readonly fields: LinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Link.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    linkPermissions<T extends Link$linkPermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Link$linkPermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Link model
   */
  interface LinkFieldRefs {
    readonly link_id: FieldRef<"Link", 'String'>
    readonly song_id: FieldRef<"Link", 'String'>
    readonly created_by: FieldRef<"Link", 'String'>
    readonly is_public: FieldRef<"Link", 'Boolean'>
    readonly created_at: FieldRef<"Link", 'DateTime'>
    readonly expires_at: FieldRef<"Link", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Link findUnique
   */
  export type LinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findUniqueOrThrow
   */
  export type LinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findFirst
   */
  export type LinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findFirstOrThrow
   */
  export type LinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findMany
   */
  export type LinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Links to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link create
   */
  export type LinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to create a Link.
     */
    data: XOR<LinkCreateInput, LinkUncheckedCreateInput>
  }

  /**
   * Link createMany
   */
  export type LinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Link createManyAndReturn
   */
  export type LinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Link update
   */
  export type LinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to update a Link.
     */
    data: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
    /**
     * Choose, which Link to update.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link updateMany
   */
  export type LinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
  }

  /**
   * Link updateManyAndReturn
   */
  export type LinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Link upsert
   */
  export type LinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The filter to search for the Link to update in case it exists.
     */
    where: LinkWhereUniqueInput
    /**
     * In case the Link found by the `where` argument doesn't exist, create a new Link with this data.
     */
    create: XOR<LinkCreateInput, LinkUncheckedCreateInput>
    /**
     * In case the Link was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
  }

  /**
   * Link delete
   */
  export type LinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter which Link to delete.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link deleteMany
   */
  export type LinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Links to delete
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to delete.
     */
    limit?: number
  }

  /**
   * Link.linkPermissions
   */
  export type Link$linkPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPermission
     */
    select?: LinkPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPermission
     */
    omit?: LinkPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPermissionInclude<ExtArgs> | null
    where?: LinkPermissionWhereInput
    orderBy?: LinkPermissionOrderByWithRelationInput | LinkPermissionOrderByWithRelationInput[]
    cursor?: LinkPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkPermissionScalarFieldEnum | LinkPermissionScalarFieldEnum[]
  }

  /**
   * Link without action
   */
  export type LinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
  }


  /**
   * Model LinkPermission
   */

  export type AggregateLinkPermission = {
    _count: LinkPermissionCountAggregateOutputType | null
    _min: LinkPermissionMinAggregateOutputType | null
    _max: LinkPermissionMaxAggregateOutputType | null
  }

  export type LinkPermissionMinAggregateOutputType = {
    link_permission_id: string | null
    link_id: string | null
    user_id: string | null
    can_view: boolean | null
  }

  export type LinkPermissionMaxAggregateOutputType = {
    link_permission_id: string | null
    link_id: string | null
    user_id: string | null
    can_view: boolean | null
  }

  export type LinkPermissionCountAggregateOutputType = {
    link_permission_id: number
    link_id: number
    user_id: number
    can_view: number
    _all: number
  }


  export type LinkPermissionMinAggregateInputType = {
    link_permission_id?: true
    link_id?: true
    user_id?: true
    can_view?: true
  }

  export type LinkPermissionMaxAggregateInputType = {
    link_permission_id?: true
    link_id?: true
    user_id?: true
    can_view?: true
  }

  export type LinkPermissionCountAggregateInputType = {
    link_permission_id?: true
    link_id?: true
    user_id?: true
    can_view?: true
    _all?: true
  }

  export type LinkPermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkPermission to aggregate.
     */
    where?: LinkPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkPermissions to fetch.
     */
    orderBy?: LinkPermissionOrderByWithRelationInput | LinkPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkPermissions
    **/
    _count?: true | LinkPermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkPermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkPermissionMaxAggregateInputType
  }

  export type GetLinkPermissionAggregateType<T extends LinkPermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkPermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkPermission[P]>
      : GetScalarType<T[P], AggregateLinkPermission[P]>
  }




  export type LinkPermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkPermissionWhereInput
    orderBy?: LinkPermissionOrderByWithAggregationInput | LinkPermissionOrderByWithAggregationInput[]
    by: LinkPermissionScalarFieldEnum[] | LinkPermissionScalarFieldEnum
    having?: LinkPermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkPermissionCountAggregateInputType | true
    _min?: LinkPermissionMinAggregateInputType
    _max?: LinkPermissionMaxAggregateInputType
  }

  export type LinkPermissionGroupByOutputType = {
    link_permission_id: string
    link_id: string
    user_id: string
    can_view: boolean
    _count: LinkPermissionCountAggregateOutputType | null
    _min: LinkPermissionMinAggregateOutputType | null
    _max: LinkPermissionMaxAggregateOutputType | null
  }

  type GetLinkPermissionGroupByPayload<T extends LinkPermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkPermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkPermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkPermissionGroupByOutputType[P]>
            : GetScalarType<T[P], LinkPermissionGroupByOutputType[P]>
        }
      >
    >


  export type LinkPermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    link_permission_id?: boolean
    link_id?: boolean
    user_id?: boolean
    can_view?: boolean
    userLink?: boolean | LinkDefaultArgs<ExtArgs>
    link?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkPermission"]>

  export type LinkPermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    link_permission_id?: boolean
    link_id?: boolean
    user_id?: boolean
    can_view?: boolean
    userLink?: boolean | LinkDefaultArgs<ExtArgs>
    link?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkPermission"]>

  export type LinkPermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    link_permission_id?: boolean
    link_id?: boolean
    user_id?: boolean
    can_view?: boolean
    userLink?: boolean | LinkDefaultArgs<ExtArgs>
    link?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkPermission"]>

  export type LinkPermissionSelectScalar = {
    link_permission_id?: boolean
    link_id?: boolean
    user_id?: boolean
    can_view?: boolean
  }

  export type LinkPermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"link_permission_id" | "link_id" | "user_id" | "can_view", ExtArgs["result"]["linkPermission"]>
  export type LinkPermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLink?: boolean | LinkDefaultArgs<ExtArgs>
    link?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LinkPermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLink?: boolean | LinkDefaultArgs<ExtArgs>
    link?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LinkPermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLink?: boolean | LinkDefaultArgs<ExtArgs>
    link?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LinkPermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkPermission"
    objects: {
      userLink: Prisma.$LinkPayload<ExtArgs>
      link: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      link_permission_id: string
      link_id: string
      user_id: string
      can_view: boolean
    }, ExtArgs["result"]["linkPermission"]>
    composites: {}
  }

  type LinkPermissionGetPayload<S extends boolean | null | undefined | LinkPermissionDefaultArgs> = $Result.GetResult<Prisma.$LinkPermissionPayload, S>

  type LinkPermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkPermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkPermissionCountAggregateInputType | true
    }

  export interface LinkPermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkPermission'], meta: { name: 'LinkPermission' } }
    /**
     * Find zero or one LinkPermission that matches the filter.
     * @param {LinkPermissionFindUniqueArgs} args - Arguments to find a LinkPermission
     * @example
     * // Get one LinkPermission
     * const linkPermission = await prisma.linkPermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkPermissionFindUniqueArgs>(args: SelectSubset<T, LinkPermissionFindUniqueArgs<ExtArgs>>): Prisma__LinkPermissionClient<$Result.GetResult<Prisma.$LinkPermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LinkPermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkPermissionFindUniqueOrThrowArgs} args - Arguments to find a LinkPermission
     * @example
     * // Get one LinkPermission
     * const linkPermission = await prisma.linkPermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkPermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkPermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkPermissionClient<$Result.GetResult<Prisma.$LinkPermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkPermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPermissionFindFirstArgs} args - Arguments to find a LinkPermission
     * @example
     * // Get one LinkPermission
     * const linkPermission = await prisma.linkPermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkPermissionFindFirstArgs>(args?: SelectSubset<T, LinkPermissionFindFirstArgs<ExtArgs>>): Prisma__LinkPermissionClient<$Result.GetResult<Prisma.$LinkPermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkPermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPermissionFindFirstOrThrowArgs} args - Arguments to find a LinkPermission
     * @example
     * // Get one LinkPermission
     * const linkPermission = await prisma.linkPermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkPermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkPermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkPermissionClient<$Result.GetResult<Prisma.$LinkPermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LinkPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkPermissions
     * const linkPermissions = await prisma.linkPermission.findMany()
     * 
     * // Get first 10 LinkPermissions
     * const linkPermissions = await prisma.linkPermission.findMany({ take: 10 })
     * 
     * // Only select the `link_permission_id`
     * const linkPermissionWithLink_permission_idOnly = await prisma.linkPermission.findMany({ select: { link_permission_id: true } })
     * 
     */
    findMany<T extends LinkPermissionFindManyArgs>(args?: SelectSubset<T, LinkPermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LinkPermission.
     * @param {LinkPermissionCreateArgs} args - Arguments to create a LinkPermission.
     * @example
     * // Create one LinkPermission
     * const LinkPermission = await prisma.linkPermission.create({
     *   data: {
     *     // ... data to create a LinkPermission
     *   }
     * })
     * 
     */
    create<T extends LinkPermissionCreateArgs>(args: SelectSubset<T, LinkPermissionCreateArgs<ExtArgs>>): Prisma__LinkPermissionClient<$Result.GetResult<Prisma.$LinkPermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LinkPermissions.
     * @param {LinkPermissionCreateManyArgs} args - Arguments to create many LinkPermissions.
     * @example
     * // Create many LinkPermissions
     * const linkPermission = await prisma.linkPermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkPermissionCreateManyArgs>(args?: SelectSubset<T, LinkPermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LinkPermissions and returns the data saved in the database.
     * @param {LinkPermissionCreateManyAndReturnArgs} args - Arguments to create many LinkPermissions.
     * @example
     * // Create many LinkPermissions
     * const linkPermission = await prisma.linkPermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LinkPermissions and only return the `link_permission_id`
     * const linkPermissionWithLink_permission_idOnly = await prisma.linkPermission.createManyAndReturn({
     *   select: { link_permission_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkPermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkPermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LinkPermission.
     * @param {LinkPermissionDeleteArgs} args - Arguments to delete one LinkPermission.
     * @example
     * // Delete one LinkPermission
     * const LinkPermission = await prisma.linkPermission.delete({
     *   where: {
     *     // ... filter to delete one LinkPermission
     *   }
     * })
     * 
     */
    delete<T extends LinkPermissionDeleteArgs>(args: SelectSubset<T, LinkPermissionDeleteArgs<ExtArgs>>): Prisma__LinkPermissionClient<$Result.GetResult<Prisma.$LinkPermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LinkPermission.
     * @param {LinkPermissionUpdateArgs} args - Arguments to update one LinkPermission.
     * @example
     * // Update one LinkPermission
     * const linkPermission = await prisma.linkPermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkPermissionUpdateArgs>(args: SelectSubset<T, LinkPermissionUpdateArgs<ExtArgs>>): Prisma__LinkPermissionClient<$Result.GetResult<Prisma.$LinkPermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LinkPermissions.
     * @param {LinkPermissionDeleteManyArgs} args - Arguments to filter LinkPermissions to delete.
     * @example
     * // Delete a few LinkPermissions
     * const { count } = await prisma.linkPermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkPermissionDeleteManyArgs>(args?: SelectSubset<T, LinkPermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkPermissions
     * const linkPermission = await prisma.linkPermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkPermissionUpdateManyArgs>(args: SelectSubset<T, LinkPermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkPermissions and returns the data updated in the database.
     * @param {LinkPermissionUpdateManyAndReturnArgs} args - Arguments to update many LinkPermissions.
     * @example
     * // Update many LinkPermissions
     * const linkPermission = await prisma.linkPermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LinkPermissions and only return the `link_permission_id`
     * const linkPermissionWithLink_permission_idOnly = await prisma.linkPermission.updateManyAndReturn({
     *   select: { link_permission_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LinkPermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkPermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LinkPermission.
     * @param {LinkPermissionUpsertArgs} args - Arguments to update or create a LinkPermission.
     * @example
     * // Update or create a LinkPermission
     * const linkPermission = await prisma.linkPermission.upsert({
     *   create: {
     *     // ... data to create a LinkPermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkPermission we want to update
     *   }
     * })
     */
    upsert<T extends LinkPermissionUpsertArgs>(args: SelectSubset<T, LinkPermissionUpsertArgs<ExtArgs>>): Prisma__LinkPermissionClient<$Result.GetResult<Prisma.$LinkPermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LinkPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPermissionCountArgs} args - Arguments to filter LinkPermissions to count.
     * @example
     * // Count the number of LinkPermissions
     * const count = await prisma.linkPermission.count({
     *   where: {
     *     // ... the filter for the LinkPermissions we want to count
     *   }
     * })
    **/
    count<T extends LinkPermissionCountArgs>(
      args?: Subset<T, LinkPermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkPermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinkPermissionAggregateArgs>(args: Subset<T, LinkPermissionAggregateArgs>): Prisma.PrismaPromise<GetLinkPermissionAggregateType<T>>

    /**
     * Group by LinkPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinkPermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkPermissionGroupByArgs['orderBy'] }
        : { orderBy?: LinkPermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkPermission model
   */
  readonly fields: LinkPermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkPermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkPermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userLink<T extends LinkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LinkDefaultArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    link<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LinkPermission model
   */
  interface LinkPermissionFieldRefs {
    readonly link_permission_id: FieldRef<"LinkPermission", 'String'>
    readonly link_id: FieldRef<"LinkPermission", 'String'>
    readonly user_id: FieldRef<"LinkPermission", 'String'>
    readonly can_view: FieldRef<"LinkPermission", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * LinkPermission findUnique
   */
  export type LinkPermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPermission
     */
    select?: LinkPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPermission
     */
    omit?: LinkPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPermissionInclude<ExtArgs> | null
    /**
     * Filter, which LinkPermission to fetch.
     */
    where: LinkPermissionWhereUniqueInput
  }

  /**
   * LinkPermission findUniqueOrThrow
   */
  export type LinkPermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPermission
     */
    select?: LinkPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPermission
     */
    omit?: LinkPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPermissionInclude<ExtArgs> | null
    /**
     * Filter, which LinkPermission to fetch.
     */
    where: LinkPermissionWhereUniqueInput
  }

  /**
   * LinkPermission findFirst
   */
  export type LinkPermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPermission
     */
    select?: LinkPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPermission
     */
    omit?: LinkPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPermissionInclude<ExtArgs> | null
    /**
     * Filter, which LinkPermission to fetch.
     */
    where?: LinkPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkPermissions to fetch.
     */
    orderBy?: LinkPermissionOrderByWithRelationInput | LinkPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkPermissions.
     */
    cursor?: LinkPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkPermissions.
     */
    distinct?: LinkPermissionScalarFieldEnum | LinkPermissionScalarFieldEnum[]
  }

  /**
   * LinkPermission findFirstOrThrow
   */
  export type LinkPermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPermission
     */
    select?: LinkPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPermission
     */
    omit?: LinkPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPermissionInclude<ExtArgs> | null
    /**
     * Filter, which LinkPermission to fetch.
     */
    where?: LinkPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkPermissions to fetch.
     */
    orderBy?: LinkPermissionOrderByWithRelationInput | LinkPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkPermissions.
     */
    cursor?: LinkPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkPermissions.
     */
    distinct?: LinkPermissionScalarFieldEnum | LinkPermissionScalarFieldEnum[]
  }

  /**
   * LinkPermission findMany
   */
  export type LinkPermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPermission
     */
    select?: LinkPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPermission
     */
    omit?: LinkPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPermissionInclude<ExtArgs> | null
    /**
     * Filter, which LinkPermissions to fetch.
     */
    where?: LinkPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkPermissions to fetch.
     */
    orderBy?: LinkPermissionOrderByWithRelationInput | LinkPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkPermissions.
     */
    cursor?: LinkPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkPermissions.
     */
    skip?: number
    distinct?: LinkPermissionScalarFieldEnum | LinkPermissionScalarFieldEnum[]
  }

  /**
   * LinkPermission create
   */
  export type LinkPermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPermission
     */
    select?: LinkPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPermission
     */
    omit?: LinkPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a LinkPermission.
     */
    data: XOR<LinkPermissionCreateInput, LinkPermissionUncheckedCreateInput>
  }

  /**
   * LinkPermission createMany
   */
  export type LinkPermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkPermissions.
     */
    data: LinkPermissionCreateManyInput | LinkPermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LinkPermission createManyAndReturn
   */
  export type LinkPermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPermission
     */
    select?: LinkPermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPermission
     */
    omit?: LinkPermissionOmit<ExtArgs> | null
    /**
     * The data used to create many LinkPermissions.
     */
    data: LinkPermissionCreateManyInput | LinkPermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkPermission update
   */
  export type LinkPermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPermission
     */
    select?: LinkPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPermission
     */
    omit?: LinkPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a LinkPermission.
     */
    data: XOR<LinkPermissionUpdateInput, LinkPermissionUncheckedUpdateInput>
    /**
     * Choose, which LinkPermission to update.
     */
    where: LinkPermissionWhereUniqueInput
  }

  /**
   * LinkPermission updateMany
   */
  export type LinkPermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkPermissions.
     */
    data: XOR<LinkPermissionUpdateManyMutationInput, LinkPermissionUncheckedUpdateManyInput>
    /**
     * Filter which LinkPermissions to update
     */
    where?: LinkPermissionWhereInput
    /**
     * Limit how many LinkPermissions to update.
     */
    limit?: number
  }

  /**
   * LinkPermission updateManyAndReturn
   */
  export type LinkPermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPermission
     */
    select?: LinkPermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPermission
     */
    omit?: LinkPermissionOmit<ExtArgs> | null
    /**
     * The data used to update LinkPermissions.
     */
    data: XOR<LinkPermissionUpdateManyMutationInput, LinkPermissionUncheckedUpdateManyInput>
    /**
     * Filter which LinkPermissions to update
     */
    where?: LinkPermissionWhereInput
    /**
     * Limit how many LinkPermissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkPermission upsert
   */
  export type LinkPermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPermission
     */
    select?: LinkPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPermission
     */
    omit?: LinkPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the LinkPermission to update in case it exists.
     */
    where: LinkPermissionWhereUniqueInput
    /**
     * In case the LinkPermission found by the `where` argument doesn't exist, create a new LinkPermission with this data.
     */
    create: XOR<LinkPermissionCreateInput, LinkPermissionUncheckedCreateInput>
    /**
     * In case the LinkPermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkPermissionUpdateInput, LinkPermissionUncheckedUpdateInput>
  }

  /**
   * LinkPermission delete
   */
  export type LinkPermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPermission
     */
    select?: LinkPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPermission
     */
    omit?: LinkPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPermissionInclude<ExtArgs> | null
    /**
     * Filter which LinkPermission to delete.
     */
    where: LinkPermissionWhereUniqueInput
  }

  /**
   * LinkPermission deleteMany
   */
  export type LinkPermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkPermissions to delete
     */
    where?: LinkPermissionWhereInput
    /**
     * Limit how many LinkPermissions to delete.
     */
    limit?: number
  }

  /**
   * LinkPermission without action
   */
  export type LinkPermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPermission
     */
    select?: LinkPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkPermission
     */
    omit?: LinkPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPermissionInclude<ExtArgs> | null
  }


  /**
   * Model PremadeMusic
   */

  export type AggregatePremadeMusic = {
    _count: PremadeMusicCountAggregateOutputType | null
    _min: PremadeMusicMinAggregateOutputType | null
    _max: PremadeMusicMaxAggregateOutputType | null
  }

  export type PremadeMusicMinAggregateOutputType = {
    music_id: string | null
    uploaded_date: Date | null
    music_name: string | null
    path: string | null
  }

  export type PremadeMusicMaxAggregateOutputType = {
    music_id: string | null
    uploaded_date: Date | null
    music_name: string | null
    path: string | null
  }

  export type PremadeMusicCountAggregateOutputType = {
    music_id: number
    uploaded_date: number
    music_name: number
    path: number
    _all: number
  }


  export type PremadeMusicMinAggregateInputType = {
    music_id?: true
    uploaded_date?: true
    music_name?: true
    path?: true
  }

  export type PremadeMusicMaxAggregateInputType = {
    music_id?: true
    uploaded_date?: true
    music_name?: true
    path?: true
  }

  export type PremadeMusicCountAggregateInputType = {
    music_id?: true
    uploaded_date?: true
    music_name?: true
    path?: true
    _all?: true
  }

  export type PremadeMusicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PremadeMusic to aggregate.
     */
    where?: PremadeMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremadeMusics to fetch.
     */
    orderBy?: PremadeMusicOrderByWithRelationInput | PremadeMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PremadeMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremadeMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremadeMusics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PremadeMusics
    **/
    _count?: true | PremadeMusicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PremadeMusicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PremadeMusicMaxAggregateInputType
  }

  export type GetPremadeMusicAggregateType<T extends PremadeMusicAggregateArgs> = {
        [P in keyof T & keyof AggregatePremadeMusic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePremadeMusic[P]>
      : GetScalarType<T[P], AggregatePremadeMusic[P]>
  }




  export type PremadeMusicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PremadeMusicWhereInput
    orderBy?: PremadeMusicOrderByWithAggregationInput | PremadeMusicOrderByWithAggregationInput[]
    by: PremadeMusicScalarFieldEnum[] | PremadeMusicScalarFieldEnum
    having?: PremadeMusicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PremadeMusicCountAggregateInputType | true
    _min?: PremadeMusicMinAggregateInputType
    _max?: PremadeMusicMaxAggregateInputType
  }

  export type PremadeMusicGroupByOutputType = {
    music_id: string
    uploaded_date: Date
    music_name: string
    path: string
    _count: PremadeMusicCountAggregateOutputType | null
    _min: PremadeMusicMinAggregateOutputType | null
    _max: PremadeMusicMaxAggregateOutputType | null
  }

  type GetPremadeMusicGroupByPayload<T extends PremadeMusicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PremadeMusicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PremadeMusicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PremadeMusicGroupByOutputType[P]>
            : GetScalarType<T[P], PremadeMusicGroupByOutputType[P]>
        }
      >
    >


  export type PremadeMusicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    music_id?: boolean
    uploaded_date?: boolean
    music_name?: boolean
    path?: boolean
    session?: boolean | PremadeMusic$sessionArgs<ExtArgs>
    _count?: boolean | PremadeMusicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premadeMusic"]>

  export type PremadeMusicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    music_id?: boolean
    uploaded_date?: boolean
    music_name?: boolean
    path?: boolean
  }, ExtArgs["result"]["premadeMusic"]>

  export type PremadeMusicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    music_id?: boolean
    uploaded_date?: boolean
    music_name?: boolean
    path?: boolean
  }, ExtArgs["result"]["premadeMusic"]>

  export type PremadeMusicSelectScalar = {
    music_id?: boolean
    uploaded_date?: boolean
    music_name?: boolean
    path?: boolean
  }

  export type PremadeMusicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"music_id" | "uploaded_date" | "music_name" | "path", ExtArgs["result"]["premadeMusic"]>
  export type PremadeMusicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | PremadeMusic$sessionArgs<ExtArgs>
    _count?: boolean | PremadeMusicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PremadeMusicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PremadeMusicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PremadeMusicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PremadeMusic"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      music_id: string
      uploaded_date: Date
      music_name: string
      path: string
    }, ExtArgs["result"]["premadeMusic"]>
    composites: {}
  }

  type PremadeMusicGetPayload<S extends boolean | null | undefined | PremadeMusicDefaultArgs> = $Result.GetResult<Prisma.$PremadeMusicPayload, S>

  type PremadeMusicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PremadeMusicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PremadeMusicCountAggregateInputType | true
    }

  export interface PremadeMusicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PremadeMusic'], meta: { name: 'PremadeMusic' } }
    /**
     * Find zero or one PremadeMusic that matches the filter.
     * @param {PremadeMusicFindUniqueArgs} args - Arguments to find a PremadeMusic
     * @example
     * // Get one PremadeMusic
     * const premadeMusic = await prisma.premadeMusic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PremadeMusicFindUniqueArgs>(args: SelectSubset<T, PremadeMusicFindUniqueArgs<ExtArgs>>): Prisma__PremadeMusicClient<$Result.GetResult<Prisma.$PremadeMusicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PremadeMusic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PremadeMusicFindUniqueOrThrowArgs} args - Arguments to find a PremadeMusic
     * @example
     * // Get one PremadeMusic
     * const premadeMusic = await prisma.premadeMusic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PremadeMusicFindUniqueOrThrowArgs>(args: SelectSubset<T, PremadeMusicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PremadeMusicClient<$Result.GetResult<Prisma.$PremadeMusicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PremadeMusic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadeMusicFindFirstArgs} args - Arguments to find a PremadeMusic
     * @example
     * // Get one PremadeMusic
     * const premadeMusic = await prisma.premadeMusic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PremadeMusicFindFirstArgs>(args?: SelectSubset<T, PremadeMusicFindFirstArgs<ExtArgs>>): Prisma__PremadeMusicClient<$Result.GetResult<Prisma.$PremadeMusicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PremadeMusic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadeMusicFindFirstOrThrowArgs} args - Arguments to find a PremadeMusic
     * @example
     * // Get one PremadeMusic
     * const premadeMusic = await prisma.premadeMusic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PremadeMusicFindFirstOrThrowArgs>(args?: SelectSubset<T, PremadeMusicFindFirstOrThrowArgs<ExtArgs>>): Prisma__PremadeMusicClient<$Result.GetResult<Prisma.$PremadeMusicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PremadeMusics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadeMusicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PremadeMusics
     * const premadeMusics = await prisma.premadeMusic.findMany()
     * 
     * // Get first 10 PremadeMusics
     * const premadeMusics = await prisma.premadeMusic.findMany({ take: 10 })
     * 
     * // Only select the `music_id`
     * const premadeMusicWithMusic_idOnly = await prisma.premadeMusic.findMany({ select: { music_id: true } })
     * 
     */
    findMany<T extends PremadeMusicFindManyArgs>(args?: SelectSubset<T, PremadeMusicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremadeMusicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PremadeMusic.
     * @param {PremadeMusicCreateArgs} args - Arguments to create a PremadeMusic.
     * @example
     * // Create one PremadeMusic
     * const PremadeMusic = await prisma.premadeMusic.create({
     *   data: {
     *     // ... data to create a PremadeMusic
     *   }
     * })
     * 
     */
    create<T extends PremadeMusicCreateArgs>(args: SelectSubset<T, PremadeMusicCreateArgs<ExtArgs>>): Prisma__PremadeMusicClient<$Result.GetResult<Prisma.$PremadeMusicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PremadeMusics.
     * @param {PremadeMusicCreateManyArgs} args - Arguments to create many PremadeMusics.
     * @example
     * // Create many PremadeMusics
     * const premadeMusic = await prisma.premadeMusic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PremadeMusicCreateManyArgs>(args?: SelectSubset<T, PremadeMusicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PremadeMusics and returns the data saved in the database.
     * @param {PremadeMusicCreateManyAndReturnArgs} args - Arguments to create many PremadeMusics.
     * @example
     * // Create many PremadeMusics
     * const premadeMusic = await prisma.premadeMusic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PremadeMusics and only return the `music_id`
     * const premadeMusicWithMusic_idOnly = await prisma.premadeMusic.createManyAndReturn({
     *   select: { music_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PremadeMusicCreateManyAndReturnArgs>(args?: SelectSubset<T, PremadeMusicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremadeMusicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PremadeMusic.
     * @param {PremadeMusicDeleteArgs} args - Arguments to delete one PremadeMusic.
     * @example
     * // Delete one PremadeMusic
     * const PremadeMusic = await prisma.premadeMusic.delete({
     *   where: {
     *     // ... filter to delete one PremadeMusic
     *   }
     * })
     * 
     */
    delete<T extends PremadeMusicDeleteArgs>(args: SelectSubset<T, PremadeMusicDeleteArgs<ExtArgs>>): Prisma__PremadeMusicClient<$Result.GetResult<Prisma.$PremadeMusicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PremadeMusic.
     * @param {PremadeMusicUpdateArgs} args - Arguments to update one PremadeMusic.
     * @example
     * // Update one PremadeMusic
     * const premadeMusic = await prisma.premadeMusic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PremadeMusicUpdateArgs>(args: SelectSubset<T, PremadeMusicUpdateArgs<ExtArgs>>): Prisma__PremadeMusicClient<$Result.GetResult<Prisma.$PremadeMusicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PremadeMusics.
     * @param {PremadeMusicDeleteManyArgs} args - Arguments to filter PremadeMusics to delete.
     * @example
     * // Delete a few PremadeMusics
     * const { count } = await prisma.premadeMusic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PremadeMusicDeleteManyArgs>(args?: SelectSubset<T, PremadeMusicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PremadeMusics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadeMusicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PremadeMusics
     * const premadeMusic = await prisma.premadeMusic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PremadeMusicUpdateManyArgs>(args: SelectSubset<T, PremadeMusicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PremadeMusics and returns the data updated in the database.
     * @param {PremadeMusicUpdateManyAndReturnArgs} args - Arguments to update many PremadeMusics.
     * @example
     * // Update many PremadeMusics
     * const premadeMusic = await prisma.premadeMusic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PremadeMusics and only return the `music_id`
     * const premadeMusicWithMusic_idOnly = await prisma.premadeMusic.updateManyAndReturn({
     *   select: { music_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PremadeMusicUpdateManyAndReturnArgs>(args: SelectSubset<T, PremadeMusicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremadeMusicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PremadeMusic.
     * @param {PremadeMusicUpsertArgs} args - Arguments to update or create a PremadeMusic.
     * @example
     * // Update or create a PremadeMusic
     * const premadeMusic = await prisma.premadeMusic.upsert({
     *   create: {
     *     // ... data to create a PremadeMusic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PremadeMusic we want to update
     *   }
     * })
     */
    upsert<T extends PremadeMusicUpsertArgs>(args: SelectSubset<T, PremadeMusicUpsertArgs<ExtArgs>>): Prisma__PremadeMusicClient<$Result.GetResult<Prisma.$PremadeMusicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PremadeMusics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadeMusicCountArgs} args - Arguments to filter PremadeMusics to count.
     * @example
     * // Count the number of PremadeMusics
     * const count = await prisma.premadeMusic.count({
     *   where: {
     *     // ... the filter for the PremadeMusics we want to count
     *   }
     * })
    **/
    count<T extends PremadeMusicCountArgs>(
      args?: Subset<T, PremadeMusicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PremadeMusicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PremadeMusic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadeMusicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PremadeMusicAggregateArgs>(args: Subset<T, PremadeMusicAggregateArgs>): Prisma.PrismaPromise<GetPremadeMusicAggregateType<T>>

    /**
     * Group by PremadeMusic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadeMusicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PremadeMusicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PremadeMusicGroupByArgs['orderBy'] }
        : { orderBy?: PremadeMusicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PremadeMusicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPremadeMusicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PremadeMusic model
   */
  readonly fields: PremadeMusicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PremadeMusic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PremadeMusicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends PremadeMusic$sessionArgs<ExtArgs> = {}>(args?: Subset<T, PremadeMusic$sessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PremadeMusic model
   */
  interface PremadeMusicFieldRefs {
    readonly music_id: FieldRef<"PremadeMusic", 'String'>
    readonly uploaded_date: FieldRef<"PremadeMusic", 'DateTime'>
    readonly music_name: FieldRef<"PremadeMusic", 'String'>
    readonly path: FieldRef<"PremadeMusic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PremadeMusic findUnique
   */
  export type PremadeMusicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadeMusic
     */
    select?: PremadeMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadeMusic
     */
    omit?: PremadeMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadeMusicInclude<ExtArgs> | null
    /**
     * Filter, which PremadeMusic to fetch.
     */
    where: PremadeMusicWhereUniqueInput
  }

  /**
   * PremadeMusic findUniqueOrThrow
   */
  export type PremadeMusicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadeMusic
     */
    select?: PremadeMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadeMusic
     */
    omit?: PremadeMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadeMusicInclude<ExtArgs> | null
    /**
     * Filter, which PremadeMusic to fetch.
     */
    where: PremadeMusicWhereUniqueInput
  }

  /**
   * PremadeMusic findFirst
   */
  export type PremadeMusicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadeMusic
     */
    select?: PremadeMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadeMusic
     */
    omit?: PremadeMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadeMusicInclude<ExtArgs> | null
    /**
     * Filter, which PremadeMusic to fetch.
     */
    where?: PremadeMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremadeMusics to fetch.
     */
    orderBy?: PremadeMusicOrderByWithRelationInput | PremadeMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PremadeMusics.
     */
    cursor?: PremadeMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremadeMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremadeMusics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PremadeMusics.
     */
    distinct?: PremadeMusicScalarFieldEnum | PremadeMusicScalarFieldEnum[]
  }

  /**
   * PremadeMusic findFirstOrThrow
   */
  export type PremadeMusicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadeMusic
     */
    select?: PremadeMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadeMusic
     */
    omit?: PremadeMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadeMusicInclude<ExtArgs> | null
    /**
     * Filter, which PremadeMusic to fetch.
     */
    where?: PremadeMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremadeMusics to fetch.
     */
    orderBy?: PremadeMusicOrderByWithRelationInput | PremadeMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PremadeMusics.
     */
    cursor?: PremadeMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremadeMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremadeMusics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PremadeMusics.
     */
    distinct?: PremadeMusicScalarFieldEnum | PremadeMusicScalarFieldEnum[]
  }

  /**
   * PremadeMusic findMany
   */
  export type PremadeMusicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadeMusic
     */
    select?: PremadeMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadeMusic
     */
    omit?: PremadeMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadeMusicInclude<ExtArgs> | null
    /**
     * Filter, which PremadeMusics to fetch.
     */
    where?: PremadeMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremadeMusics to fetch.
     */
    orderBy?: PremadeMusicOrderByWithRelationInput | PremadeMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PremadeMusics.
     */
    cursor?: PremadeMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremadeMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremadeMusics.
     */
    skip?: number
    distinct?: PremadeMusicScalarFieldEnum | PremadeMusicScalarFieldEnum[]
  }

  /**
   * PremadeMusic create
   */
  export type PremadeMusicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadeMusic
     */
    select?: PremadeMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadeMusic
     */
    omit?: PremadeMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadeMusicInclude<ExtArgs> | null
    /**
     * The data needed to create a PremadeMusic.
     */
    data: XOR<PremadeMusicCreateInput, PremadeMusicUncheckedCreateInput>
  }

  /**
   * PremadeMusic createMany
   */
  export type PremadeMusicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PremadeMusics.
     */
    data: PremadeMusicCreateManyInput | PremadeMusicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PremadeMusic createManyAndReturn
   */
  export type PremadeMusicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadeMusic
     */
    select?: PremadeMusicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PremadeMusic
     */
    omit?: PremadeMusicOmit<ExtArgs> | null
    /**
     * The data used to create many PremadeMusics.
     */
    data: PremadeMusicCreateManyInput | PremadeMusicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PremadeMusic update
   */
  export type PremadeMusicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadeMusic
     */
    select?: PremadeMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadeMusic
     */
    omit?: PremadeMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadeMusicInclude<ExtArgs> | null
    /**
     * The data needed to update a PremadeMusic.
     */
    data: XOR<PremadeMusicUpdateInput, PremadeMusicUncheckedUpdateInput>
    /**
     * Choose, which PremadeMusic to update.
     */
    where: PremadeMusicWhereUniqueInput
  }

  /**
   * PremadeMusic updateMany
   */
  export type PremadeMusicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PremadeMusics.
     */
    data: XOR<PremadeMusicUpdateManyMutationInput, PremadeMusicUncheckedUpdateManyInput>
    /**
     * Filter which PremadeMusics to update
     */
    where?: PremadeMusicWhereInput
    /**
     * Limit how many PremadeMusics to update.
     */
    limit?: number
  }

  /**
   * PremadeMusic updateManyAndReturn
   */
  export type PremadeMusicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadeMusic
     */
    select?: PremadeMusicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PremadeMusic
     */
    omit?: PremadeMusicOmit<ExtArgs> | null
    /**
     * The data used to update PremadeMusics.
     */
    data: XOR<PremadeMusicUpdateManyMutationInput, PremadeMusicUncheckedUpdateManyInput>
    /**
     * Filter which PremadeMusics to update
     */
    where?: PremadeMusicWhereInput
    /**
     * Limit how many PremadeMusics to update.
     */
    limit?: number
  }

  /**
   * PremadeMusic upsert
   */
  export type PremadeMusicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadeMusic
     */
    select?: PremadeMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadeMusic
     */
    omit?: PremadeMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadeMusicInclude<ExtArgs> | null
    /**
     * The filter to search for the PremadeMusic to update in case it exists.
     */
    where: PremadeMusicWhereUniqueInput
    /**
     * In case the PremadeMusic found by the `where` argument doesn't exist, create a new PremadeMusic with this data.
     */
    create: XOR<PremadeMusicCreateInput, PremadeMusicUncheckedCreateInput>
    /**
     * In case the PremadeMusic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PremadeMusicUpdateInput, PremadeMusicUncheckedUpdateInput>
  }

  /**
   * PremadeMusic delete
   */
  export type PremadeMusicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadeMusic
     */
    select?: PremadeMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadeMusic
     */
    omit?: PremadeMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadeMusicInclude<ExtArgs> | null
    /**
     * Filter which PremadeMusic to delete.
     */
    where: PremadeMusicWhereUniqueInput
  }

  /**
   * PremadeMusic deleteMany
   */
  export type PremadeMusicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PremadeMusics to delete
     */
    where?: PremadeMusicWhereInput
    /**
     * Limit how many PremadeMusics to delete.
     */
    limit?: number
  }

  /**
   * PremadeMusic.session
   */
  export type PremadeMusic$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * PremadeMusic without action
   */
  export type PremadeMusicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadeMusic
     */
    select?: PremadeMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadeMusic
     */
    omit?: PremadeMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadeMusicInclude<ExtArgs> | null
  }


  /**
   * Model UploadedMusic
   */

  export type AggregateUploadedMusic = {
    _count: UploadedMusicCountAggregateOutputType | null
    _min: UploadedMusicMinAggregateOutputType | null
    _max: UploadedMusicMaxAggregateOutputType | null
  }

  export type UploadedMusicMinAggregateOutputType = {
    music_id: string | null
    uploaded_by: string | null
    music_name: string | null
    path: string | null
  }

  export type UploadedMusicMaxAggregateOutputType = {
    music_id: string | null
    uploaded_by: string | null
    music_name: string | null
    path: string | null
  }

  export type UploadedMusicCountAggregateOutputType = {
    music_id: number
    uploaded_by: number
    music_name: number
    path: number
    _all: number
  }


  export type UploadedMusicMinAggregateInputType = {
    music_id?: true
    uploaded_by?: true
    music_name?: true
    path?: true
  }

  export type UploadedMusicMaxAggregateInputType = {
    music_id?: true
    uploaded_by?: true
    music_name?: true
    path?: true
  }

  export type UploadedMusicCountAggregateInputType = {
    music_id?: true
    uploaded_by?: true
    music_name?: true
    path?: true
    _all?: true
  }

  export type UploadedMusicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadedMusic to aggregate.
     */
    where?: UploadedMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedMusics to fetch.
     */
    orderBy?: UploadedMusicOrderByWithRelationInput | UploadedMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UploadedMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedMusics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UploadedMusics
    **/
    _count?: true | UploadedMusicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadedMusicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadedMusicMaxAggregateInputType
  }

  export type GetUploadedMusicAggregateType<T extends UploadedMusicAggregateArgs> = {
        [P in keyof T & keyof AggregateUploadedMusic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUploadedMusic[P]>
      : GetScalarType<T[P], AggregateUploadedMusic[P]>
  }




  export type UploadedMusicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadedMusicWhereInput
    orderBy?: UploadedMusicOrderByWithAggregationInput | UploadedMusicOrderByWithAggregationInput[]
    by: UploadedMusicScalarFieldEnum[] | UploadedMusicScalarFieldEnum
    having?: UploadedMusicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadedMusicCountAggregateInputType | true
    _min?: UploadedMusicMinAggregateInputType
    _max?: UploadedMusicMaxAggregateInputType
  }

  export type UploadedMusicGroupByOutputType = {
    music_id: string
    uploaded_by: string
    music_name: string
    path: string
    _count: UploadedMusicCountAggregateOutputType | null
    _min: UploadedMusicMinAggregateOutputType | null
    _max: UploadedMusicMaxAggregateOutputType | null
  }

  type GetUploadedMusicGroupByPayload<T extends UploadedMusicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadedMusicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UploadedMusicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadedMusicGroupByOutputType[P]>
            : GetScalarType<T[P], UploadedMusicGroupByOutputType[P]>
        }
      >
    >


  export type UploadedMusicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    music_id?: boolean
    uploaded_by?: boolean
    music_name?: boolean
    path?: boolean
    session?: boolean | UploadedMusic$sessionArgs<ExtArgs>
    stickyNotes?: boolean | UploadedMusic$stickyNotesArgs<ExtArgs>
    _count?: boolean | UploadedMusicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadedMusic"]>

  export type UploadedMusicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    music_id?: boolean
    uploaded_by?: boolean
    music_name?: boolean
    path?: boolean
  }, ExtArgs["result"]["uploadedMusic"]>

  export type UploadedMusicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    music_id?: boolean
    uploaded_by?: boolean
    music_name?: boolean
    path?: boolean
  }, ExtArgs["result"]["uploadedMusic"]>

  export type UploadedMusicSelectScalar = {
    music_id?: boolean
    uploaded_by?: boolean
    music_name?: boolean
    path?: boolean
  }

  export type UploadedMusicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"music_id" | "uploaded_by" | "music_name" | "path", ExtArgs["result"]["uploadedMusic"]>
  export type UploadedMusicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | UploadedMusic$sessionArgs<ExtArgs>
    stickyNotes?: boolean | UploadedMusic$stickyNotesArgs<ExtArgs>
    _count?: boolean | UploadedMusicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UploadedMusicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UploadedMusicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UploadedMusicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UploadedMusic"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>[]
      stickyNotes: Prisma.$StickyNotesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      music_id: string
      uploaded_by: string
      music_name: string
      path: string
    }, ExtArgs["result"]["uploadedMusic"]>
    composites: {}
  }

  type UploadedMusicGetPayload<S extends boolean | null | undefined | UploadedMusicDefaultArgs> = $Result.GetResult<Prisma.$UploadedMusicPayload, S>

  type UploadedMusicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UploadedMusicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UploadedMusicCountAggregateInputType | true
    }

  export interface UploadedMusicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UploadedMusic'], meta: { name: 'UploadedMusic' } }
    /**
     * Find zero or one UploadedMusic that matches the filter.
     * @param {UploadedMusicFindUniqueArgs} args - Arguments to find a UploadedMusic
     * @example
     * // Get one UploadedMusic
     * const uploadedMusic = await prisma.uploadedMusic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UploadedMusicFindUniqueArgs>(args: SelectSubset<T, UploadedMusicFindUniqueArgs<ExtArgs>>): Prisma__UploadedMusicClient<$Result.GetResult<Prisma.$UploadedMusicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UploadedMusic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UploadedMusicFindUniqueOrThrowArgs} args - Arguments to find a UploadedMusic
     * @example
     * // Get one UploadedMusic
     * const uploadedMusic = await prisma.uploadedMusic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UploadedMusicFindUniqueOrThrowArgs>(args: SelectSubset<T, UploadedMusicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UploadedMusicClient<$Result.GetResult<Prisma.$UploadedMusicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadedMusic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedMusicFindFirstArgs} args - Arguments to find a UploadedMusic
     * @example
     * // Get one UploadedMusic
     * const uploadedMusic = await prisma.uploadedMusic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UploadedMusicFindFirstArgs>(args?: SelectSubset<T, UploadedMusicFindFirstArgs<ExtArgs>>): Prisma__UploadedMusicClient<$Result.GetResult<Prisma.$UploadedMusicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadedMusic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedMusicFindFirstOrThrowArgs} args - Arguments to find a UploadedMusic
     * @example
     * // Get one UploadedMusic
     * const uploadedMusic = await prisma.uploadedMusic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UploadedMusicFindFirstOrThrowArgs>(args?: SelectSubset<T, UploadedMusicFindFirstOrThrowArgs<ExtArgs>>): Prisma__UploadedMusicClient<$Result.GetResult<Prisma.$UploadedMusicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UploadedMusics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedMusicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UploadedMusics
     * const uploadedMusics = await prisma.uploadedMusic.findMany()
     * 
     * // Get first 10 UploadedMusics
     * const uploadedMusics = await prisma.uploadedMusic.findMany({ take: 10 })
     * 
     * // Only select the `music_id`
     * const uploadedMusicWithMusic_idOnly = await prisma.uploadedMusic.findMany({ select: { music_id: true } })
     * 
     */
    findMany<T extends UploadedMusicFindManyArgs>(args?: SelectSubset<T, UploadedMusicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadedMusicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UploadedMusic.
     * @param {UploadedMusicCreateArgs} args - Arguments to create a UploadedMusic.
     * @example
     * // Create one UploadedMusic
     * const UploadedMusic = await prisma.uploadedMusic.create({
     *   data: {
     *     // ... data to create a UploadedMusic
     *   }
     * })
     * 
     */
    create<T extends UploadedMusicCreateArgs>(args: SelectSubset<T, UploadedMusicCreateArgs<ExtArgs>>): Prisma__UploadedMusicClient<$Result.GetResult<Prisma.$UploadedMusicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UploadedMusics.
     * @param {UploadedMusicCreateManyArgs} args - Arguments to create many UploadedMusics.
     * @example
     * // Create many UploadedMusics
     * const uploadedMusic = await prisma.uploadedMusic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UploadedMusicCreateManyArgs>(args?: SelectSubset<T, UploadedMusicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UploadedMusics and returns the data saved in the database.
     * @param {UploadedMusicCreateManyAndReturnArgs} args - Arguments to create many UploadedMusics.
     * @example
     * // Create many UploadedMusics
     * const uploadedMusic = await prisma.uploadedMusic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UploadedMusics and only return the `music_id`
     * const uploadedMusicWithMusic_idOnly = await prisma.uploadedMusic.createManyAndReturn({
     *   select: { music_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UploadedMusicCreateManyAndReturnArgs>(args?: SelectSubset<T, UploadedMusicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadedMusicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UploadedMusic.
     * @param {UploadedMusicDeleteArgs} args - Arguments to delete one UploadedMusic.
     * @example
     * // Delete one UploadedMusic
     * const UploadedMusic = await prisma.uploadedMusic.delete({
     *   where: {
     *     // ... filter to delete one UploadedMusic
     *   }
     * })
     * 
     */
    delete<T extends UploadedMusicDeleteArgs>(args: SelectSubset<T, UploadedMusicDeleteArgs<ExtArgs>>): Prisma__UploadedMusicClient<$Result.GetResult<Prisma.$UploadedMusicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UploadedMusic.
     * @param {UploadedMusicUpdateArgs} args - Arguments to update one UploadedMusic.
     * @example
     * // Update one UploadedMusic
     * const uploadedMusic = await prisma.uploadedMusic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UploadedMusicUpdateArgs>(args: SelectSubset<T, UploadedMusicUpdateArgs<ExtArgs>>): Prisma__UploadedMusicClient<$Result.GetResult<Prisma.$UploadedMusicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UploadedMusics.
     * @param {UploadedMusicDeleteManyArgs} args - Arguments to filter UploadedMusics to delete.
     * @example
     * // Delete a few UploadedMusics
     * const { count } = await prisma.uploadedMusic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UploadedMusicDeleteManyArgs>(args?: SelectSubset<T, UploadedMusicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadedMusics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedMusicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UploadedMusics
     * const uploadedMusic = await prisma.uploadedMusic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UploadedMusicUpdateManyArgs>(args: SelectSubset<T, UploadedMusicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadedMusics and returns the data updated in the database.
     * @param {UploadedMusicUpdateManyAndReturnArgs} args - Arguments to update many UploadedMusics.
     * @example
     * // Update many UploadedMusics
     * const uploadedMusic = await prisma.uploadedMusic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UploadedMusics and only return the `music_id`
     * const uploadedMusicWithMusic_idOnly = await prisma.uploadedMusic.updateManyAndReturn({
     *   select: { music_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UploadedMusicUpdateManyAndReturnArgs>(args: SelectSubset<T, UploadedMusicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadedMusicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UploadedMusic.
     * @param {UploadedMusicUpsertArgs} args - Arguments to update or create a UploadedMusic.
     * @example
     * // Update or create a UploadedMusic
     * const uploadedMusic = await prisma.uploadedMusic.upsert({
     *   create: {
     *     // ... data to create a UploadedMusic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UploadedMusic we want to update
     *   }
     * })
     */
    upsert<T extends UploadedMusicUpsertArgs>(args: SelectSubset<T, UploadedMusicUpsertArgs<ExtArgs>>): Prisma__UploadedMusicClient<$Result.GetResult<Prisma.$UploadedMusicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UploadedMusics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedMusicCountArgs} args - Arguments to filter UploadedMusics to count.
     * @example
     * // Count the number of UploadedMusics
     * const count = await prisma.uploadedMusic.count({
     *   where: {
     *     // ... the filter for the UploadedMusics we want to count
     *   }
     * })
    **/
    count<T extends UploadedMusicCountArgs>(
      args?: Subset<T, UploadedMusicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UploadedMusicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UploadedMusic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedMusicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UploadedMusicAggregateArgs>(args: Subset<T, UploadedMusicAggregateArgs>): Prisma.PrismaPromise<GetUploadedMusicAggregateType<T>>

    /**
     * Group by UploadedMusic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedMusicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UploadedMusicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UploadedMusicGroupByArgs['orderBy'] }
        : { orderBy?: UploadedMusicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UploadedMusicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadedMusicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UploadedMusic model
   */
  readonly fields: UploadedMusicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UploadedMusic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UploadedMusicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends UploadedMusic$sessionArgs<ExtArgs> = {}>(args?: Subset<T, UploadedMusic$sessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stickyNotes<T extends UploadedMusic$stickyNotesArgs<ExtArgs> = {}>(args?: Subset<T, UploadedMusic$stickyNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UploadedMusic model
   */
  interface UploadedMusicFieldRefs {
    readonly music_id: FieldRef<"UploadedMusic", 'String'>
    readonly uploaded_by: FieldRef<"UploadedMusic", 'String'>
    readonly music_name: FieldRef<"UploadedMusic", 'String'>
    readonly path: FieldRef<"UploadedMusic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UploadedMusic findUnique
   */
  export type UploadedMusicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedMusic
     */
    select?: UploadedMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedMusic
     */
    omit?: UploadedMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedMusicInclude<ExtArgs> | null
    /**
     * Filter, which UploadedMusic to fetch.
     */
    where: UploadedMusicWhereUniqueInput
  }

  /**
   * UploadedMusic findUniqueOrThrow
   */
  export type UploadedMusicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedMusic
     */
    select?: UploadedMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedMusic
     */
    omit?: UploadedMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedMusicInclude<ExtArgs> | null
    /**
     * Filter, which UploadedMusic to fetch.
     */
    where: UploadedMusicWhereUniqueInput
  }

  /**
   * UploadedMusic findFirst
   */
  export type UploadedMusicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedMusic
     */
    select?: UploadedMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedMusic
     */
    omit?: UploadedMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedMusicInclude<ExtArgs> | null
    /**
     * Filter, which UploadedMusic to fetch.
     */
    where?: UploadedMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedMusics to fetch.
     */
    orderBy?: UploadedMusicOrderByWithRelationInput | UploadedMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadedMusics.
     */
    cursor?: UploadedMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedMusics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadedMusics.
     */
    distinct?: UploadedMusicScalarFieldEnum | UploadedMusicScalarFieldEnum[]
  }

  /**
   * UploadedMusic findFirstOrThrow
   */
  export type UploadedMusicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedMusic
     */
    select?: UploadedMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedMusic
     */
    omit?: UploadedMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedMusicInclude<ExtArgs> | null
    /**
     * Filter, which UploadedMusic to fetch.
     */
    where?: UploadedMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedMusics to fetch.
     */
    orderBy?: UploadedMusicOrderByWithRelationInput | UploadedMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadedMusics.
     */
    cursor?: UploadedMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedMusics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadedMusics.
     */
    distinct?: UploadedMusicScalarFieldEnum | UploadedMusicScalarFieldEnum[]
  }

  /**
   * UploadedMusic findMany
   */
  export type UploadedMusicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedMusic
     */
    select?: UploadedMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedMusic
     */
    omit?: UploadedMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedMusicInclude<ExtArgs> | null
    /**
     * Filter, which UploadedMusics to fetch.
     */
    where?: UploadedMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedMusics to fetch.
     */
    orderBy?: UploadedMusicOrderByWithRelationInput | UploadedMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UploadedMusics.
     */
    cursor?: UploadedMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedMusics.
     */
    skip?: number
    distinct?: UploadedMusicScalarFieldEnum | UploadedMusicScalarFieldEnum[]
  }

  /**
   * UploadedMusic create
   */
  export type UploadedMusicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedMusic
     */
    select?: UploadedMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedMusic
     */
    omit?: UploadedMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedMusicInclude<ExtArgs> | null
    /**
     * The data needed to create a UploadedMusic.
     */
    data: XOR<UploadedMusicCreateInput, UploadedMusicUncheckedCreateInput>
  }

  /**
   * UploadedMusic createMany
   */
  export type UploadedMusicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UploadedMusics.
     */
    data: UploadedMusicCreateManyInput | UploadedMusicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UploadedMusic createManyAndReturn
   */
  export type UploadedMusicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedMusic
     */
    select?: UploadedMusicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedMusic
     */
    omit?: UploadedMusicOmit<ExtArgs> | null
    /**
     * The data used to create many UploadedMusics.
     */
    data: UploadedMusicCreateManyInput | UploadedMusicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UploadedMusic update
   */
  export type UploadedMusicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedMusic
     */
    select?: UploadedMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedMusic
     */
    omit?: UploadedMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedMusicInclude<ExtArgs> | null
    /**
     * The data needed to update a UploadedMusic.
     */
    data: XOR<UploadedMusicUpdateInput, UploadedMusicUncheckedUpdateInput>
    /**
     * Choose, which UploadedMusic to update.
     */
    where: UploadedMusicWhereUniqueInput
  }

  /**
   * UploadedMusic updateMany
   */
  export type UploadedMusicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UploadedMusics.
     */
    data: XOR<UploadedMusicUpdateManyMutationInput, UploadedMusicUncheckedUpdateManyInput>
    /**
     * Filter which UploadedMusics to update
     */
    where?: UploadedMusicWhereInput
    /**
     * Limit how many UploadedMusics to update.
     */
    limit?: number
  }

  /**
   * UploadedMusic updateManyAndReturn
   */
  export type UploadedMusicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedMusic
     */
    select?: UploadedMusicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedMusic
     */
    omit?: UploadedMusicOmit<ExtArgs> | null
    /**
     * The data used to update UploadedMusics.
     */
    data: XOR<UploadedMusicUpdateManyMutationInput, UploadedMusicUncheckedUpdateManyInput>
    /**
     * Filter which UploadedMusics to update
     */
    where?: UploadedMusicWhereInput
    /**
     * Limit how many UploadedMusics to update.
     */
    limit?: number
  }

  /**
   * UploadedMusic upsert
   */
  export type UploadedMusicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedMusic
     */
    select?: UploadedMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedMusic
     */
    omit?: UploadedMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedMusicInclude<ExtArgs> | null
    /**
     * The filter to search for the UploadedMusic to update in case it exists.
     */
    where: UploadedMusicWhereUniqueInput
    /**
     * In case the UploadedMusic found by the `where` argument doesn't exist, create a new UploadedMusic with this data.
     */
    create: XOR<UploadedMusicCreateInput, UploadedMusicUncheckedCreateInput>
    /**
     * In case the UploadedMusic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UploadedMusicUpdateInput, UploadedMusicUncheckedUpdateInput>
  }

  /**
   * UploadedMusic delete
   */
  export type UploadedMusicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedMusic
     */
    select?: UploadedMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedMusic
     */
    omit?: UploadedMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedMusicInclude<ExtArgs> | null
    /**
     * Filter which UploadedMusic to delete.
     */
    where: UploadedMusicWhereUniqueInput
  }

  /**
   * UploadedMusic deleteMany
   */
  export type UploadedMusicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadedMusics to delete
     */
    where?: UploadedMusicWhereInput
    /**
     * Limit how many UploadedMusics to delete.
     */
    limit?: number
  }

  /**
   * UploadedMusic.session
   */
  export type UploadedMusic$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * UploadedMusic.stickyNotes
   */
  export type UploadedMusic$stickyNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StickyNotesInclude<ExtArgs> | null
    where?: StickyNotesWhereInput
    orderBy?: StickyNotesOrderByWithRelationInput | StickyNotesOrderByWithRelationInput[]
    cursor?: StickyNotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StickyNotesScalarFieldEnum | StickyNotesScalarFieldEnum[]
  }

  /**
   * UploadedMusic without action
   */
  export type UploadedMusicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedMusic
     */
    select?: UploadedMusicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedMusic
     */
    omit?: UploadedMusicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedMusicInclude<ExtArgs> | null
  }


  /**
   * Model DictionaryEntry
   */

  export type AggregateDictionaryEntry = {
    _count: DictionaryEntryCountAggregateOutputType | null
    _avg: DictionaryEntryAvgAggregateOutputType | null
    _sum: DictionaryEntrySumAggregateOutputType | null
    _min: DictionaryEntryMinAggregateOutputType | null
    _max: DictionaryEntryMaxAggregateOutputType | null
  }

  export type DictionaryEntryAvgAggregateOutputType = {
    entryId: number | null
    homNumber: number | null
  }

  export type DictionaryEntrySumAggregateOutputType = {
    entryId: number | null
    homNumber: number | null
  }

  export type DictionaryEntryMinAggregateOutputType = {
    entryId: number | null
    word: string | null
    page: string | null
    homNumber: number | null
  }

  export type DictionaryEntryMaxAggregateOutputType = {
    entryId: number | null
    word: string | null
    page: string | null
    homNumber: number | null
  }

  export type DictionaryEntryCountAggregateOutputType = {
    entryId: number
    word: number
    page: number
    homNumber: number
    _all: number
  }


  export type DictionaryEntryAvgAggregateInputType = {
    entryId?: true
    homNumber?: true
  }

  export type DictionaryEntrySumAggregateInputType = {
    entryId?: true
    homNumber?: true
  }

  export type DictionaryEntryMinAggregateInputType = {
    entryId?: true
    word?: true
    page?: true
    homNumber?: true
  }

  export type DictionaryEntryMaxAggregateInputType = {
    entryId?: true
    word?: true
    page?: true
    homNumber?: true
  }

  export type DictionaryEntryCountAggregateInputType = {
    entryId?: true
    word?: true
    page?: true
    homNumber?: true
    _all?: true
  }

  export type DictionaryEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DictionaryEntry to aggregate.
     */
    where?: DictionaryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryEntries to fetch.
     */
    orderBy?: DictionaryEntryOrderByWithRelationInput | DictionaryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DictionaryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DictionaryEntries
    **/
    _count?: true | DictionaryEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DictionaryEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DictionaryEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DictionaryEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DictionaryEntryMaxAggregateInputType
  }

  export type GetDictionaryEntryAggregateType<T extends DictionaryEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateDictionaryEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDictionaryEntry[P]>
      : GetScalarType<T[P], AggregateDictionaryEntry[P]>
  }




  export type DictionaryEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictionaryEntryWhereInput
    orderBy?: DictionaryEntryOrderByWithAggregationInput | DictionaryEntryOrderByWithAggregationInput[]
    by: DictionaryEntryScalarFieldEnum[] | DictionaryEntryScalarFieldEnum
    having?: DictionaryEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DictionaryEntryCountAggregateInputType | true
    _avg?: DictionaryEntryAvgAggregateInputType
    _sum?: DictionaryEntrySumAggregateInputType
    _min?: DictionaryEntryMinAggregateInputType
    _max?: DictionaryEntryMaxAggregateInputType
  }

  export type DictionaryEntryGroupByOutputType = {
    entryId: number
    word: string
    page: string | null
    homNumber: number | null
    _count: DictionaryEntryCountAggregateOutputType | null
    _avg: DictionaryEntryAvgAggregateOutputType | null
    _sum: DictionaryEntrySumAggregateOutputType | null
    _min: DictionaryEntryMinAggregateOutputType | null
    _max: DictionaryEntryMaxAggregateOutputType | null
  }

  type GetDictionaryEntryGroupByPayload<T extends DictionaryEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DictionaryEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DictionaryEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DictionaryEntryGroupByOutputType[P]>
            : GetScalarType<T[P], DictionaryEntryGroupByOutputType[P]>
        }
      >
    >


  export type DictionaryEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entryId?: boolean
    word?: boolean
    page?: boolean
    homNumber?: boolean
    headwords?: boolean | DictionaryEntry$headwordsArgs<ExtArgs>
    senses?: boolean | DictionaryEntry$sensesArgs<ExtArgs>
    _count?: boolean | DictionaryEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictionaryEntry"]>

  export type DictionaryEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entryId?: boolean
    word?: boolean
    page?: boolean
    homNumber?: boolean
  }, ExtArgs["result"]["dictionaryEntry"]>

  export type DictionaryEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entryId?: boolean
    word?: boolean
    page?: boolean
    homNumber?: boolean
  }, ExtArgs["result"]["dictionaryEntry"]>

  export type DictionaryEntrySelectScalar = {
    entryId?: boolean
    word?: boolean
    page?: boolean
    homNumber?: boolean
  }

  export type DictionaryEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"entryId" | "word" | "page" | "homNumber", ExtArgs["result"]["dictionaryEntry"]>
  export type DictionaryEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    headwords?: boolean | DictionaryEntry$headwordsArgs<ExtArgs>
    senses?: boolean | DictionaryEntry$sensesArgs<ExtArgs>
    _count?: boolean | DictionaryEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DictionaryEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DictionaryEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DictionaryEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DictionaryEntry"
    objects: {
      headwords: Prisma.$DictionaryHeadwordPayload<ExtArgs>[]
      senses: Prisma.$DictionarySensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      entryId: number
      word: string
      page: string | null
      homNumber: number | null
    }, ExtArgs["result"]["dictionaryEntry"]>
    composites: {}
  }

  type DictionaryEntryGetPayload<S extends boolean | null | undefined | DictionaryEntryDefaultArgs> = $Result.GetResult<Prisma.$DictionaryEntryPayload, S>

  type DictionaryEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DictionaryEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DictionaryEntryCountAggregateInputType | true
    }

  export interface DictionaryEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DictionaryEntry'], meta: { name: 'DictionaryEntry' } }
    /**
     * Find zero or one DictionaryEntry that matches the filter.
     * @param {DictionaryEntryFindUniqueArgs} args - Arguments to find a DictionaryEntry
     * @example
     * // Get one DictionaryEntry
     * const dictionaryEntry = await prisma.dictionaryEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DictionaryEntryFindUniqueArgs>(args: SelectSubset<T, DictionaryEntryFindUniqueArgs<ExtArgs>>): Prisma__DictionaryEntryClient<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DictionaryEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DictionaryEntryFindUniqueOrThrowArgs} args - Arguments to find a DictionaryEntry
     * @example
     * // Get one DictionaryEntry
     * const dictionaryEntry = await prisma.dictionaryEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DictionaryEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, DictionaryEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DictionaryEntryClient<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DictionaryEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryEntryFindFirstArgs} args - Arguments to find a DictionaryEntry
     * @example
     * // Get one DictionaryEntry
     * const dictionaryEntry = await prisma.dictionaryEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DictionaryEntryFindFirstArgs>(args?: SelectSubset<T, DictionaryEntryFindFirstArgs<ExtArgs>>): Prisma__DictionaryEntryClient<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DictionaryEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryEntryFindFirstOrThrowArgs} args - Arguments to find a DictionaryEntry
     * @example
     * // Get one DictionaryEntry
     * const dictionaryEntry = await prisma.dictionaryEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DictionaryEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, DictionaryEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DictionaryEntryClient<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DictionaryEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DictionaryEntries
     * const dictionaryEntries = await prisma.dictionaryEntry.findMany()
     * 
     * // Get first 10 DictionaryEntries
     * const dictionaryEntries = await prisma.dictionaryEntry.findMany({ take: 10 })
     * 
     * // Only select the `entryId`
     * const dictionaryEntryWithEntryIdOnly = await prisma.dictionaryEntry.findMany({ select: { entryId: true } })
     * 
     */
    findMany<T extends DictionaryEntryFindManyArgs>(args?: SelectSubset<T, DictionaryEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DictionaryEntry.
     * @param {DictionaryEntryCreateArgs} args - Arguments to create a DictionaryEntry.
     * @example
     * // Create one DictionaryEntry
     * const DictionaryEntry = await prisma.dictionaryEntry.create({
     *   data: {
     *     // ... data to create a DictionaryEntry
     *   }
     * })
     * 
     */
    create<T extends DictionaryEntryCreateArgs>(args: SelectSubset<T, DictionaryEntryCreateArgs<ExtArgs>>): Prisma__DictionaryEntryClient<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DictionaryEntries.
     * @param {DictionaryEntryCreateManyArgs} args - Arguments to create many DictionaryEntries.
     * @example
     * // Create many DictionaryEntries
     * const dictionaryEntry = await prisma.dictionaryEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DictionaryEntryCreateManyArgs>(args?: SelectSubset<T, DictionaryEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DictionaryEntries and returns the data saved in the database.
     * @param {DictionaryEntryCreateManyAndReturnArgs} args - Arguments to create many DictionaryEntries.
     * @example
     * // Create many DictionaryEntries
     * const dictionaryEntry = await prisma.dictionaryEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DictionaryEntries and only return the `entryId`
     * const dictionaryEntryWithEntryIdOnly = await prisma.dictionaryEntry.createManyAndReturn({
     *   select: { entryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DictionaryEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, DictionaryEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DictionaryEntry.
     * @param {DictionaryEntryDeleteArgs} args - Arguments to delete one DictionaryEntry.
     * @example
     * // Delete one DictionaryEntry
     * const DictionaryEntry = await prisma.dictionaryEntry.delete({
     *   where: {
     *     // ... filter to delete one DictionaryEntry
     *   }
     * })
     * 
     */
    delete<T extends DictionaryEntryDeleteArgs>(args: SelectSubset<T, DictionaryEntryDeleteArgs<ExtArgs>>): Prisma__DictionaryEntryClient<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DictionaryEntry.
     * @param {DictionaryEntryUpdateArgs} args - Arguments to update one DictionaryEntry.
     * @example
     * // Update one DictionaryEntry
     * const dictionaryEntry = await prisma.dictionaryEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DictionaryEntryUpdateArgs>(args: SelectSubset<T, DictionaryEntryUpdateArgs<ExtArgs>>): Prisma__DictionaryEntryClient<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DictionaryEntries.
     * @param {DictionaryEntryDeleteManyArgs} args - Arguments to filter DictionaryEntries to delete.
     * @example
     * // Delete a few DictionaryEntries
     * const { count } = await prisma.dictionaryEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DictionaryEntryDeleteManyArgs>(args?: SelectSubset<T, DictionaryEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DictionaryEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DictionaryEntries
     * const dictionaryEntry = await prisma.dictionaryEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DictionaryEntryUpdateManyArgs>(args: SelectSubset<T, DictionaryEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DictionaryEntries and returns the data updated in the database.
     * @param {DictionaryEntryUpdateManyAndReturnArgs} args - Arguments to update many DictionaryEntries.
     * @example
     * // Update many DictionaryEntries
     * const dictionaryEntry = await prisma.dictionaryEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DictionaryEntries and only return the `entryId`
     * const dictionaryEntryWithEntryIdOnly = await prisma.dictionaryEntry.updateManyAndReturn({
     *   select: { entryId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DictionaryEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, DictionaryEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DictionaryEntry.
     * @param {DictionaryEntryUpsertArgs} args - Arguments to update or create a DictionaryEntry.
     * @example
     * // Update or create a DictionaryEntry
     * const dictionaryEntry = await prisma.dictionaryEntry.upsert({
     *   create: {
     *     // ... data to create a DictionaryEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DictionaryEntry we want to update
     *   }
     * })
     */
    upsert<T extends DictionaryEntryUpsertArgs>(args: SelectSubset<T, DictionaryEntryUpsertArgs<ExtArgs>>): Prisma__DictionaryEntryClient<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DictionaryEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryEntryCountArgs} args - Arguments to filter DictionaryEntries to count.
     * @example
     * // Count the number of DictionaryEntries
     * const count = await prisma.dictionaryEntry.count({
     *   where: {
     *     // ... the filter for the DictionaryEntries we want to count
     *   }
     * })
    **/
    count<T extends DictionaryEntryCountArgs>(
      args?: Subset<T, DictionaryEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DictionaryEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DictionaryEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DictionaryEntryAggregateArgs>(args: Subset<T, DictionaryEntryAggregateArgs>): Prisma.PrismaPromise<GetDictionaryEntryAggregateType<T>>

    /**
     * Group by DictionaryEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DictionaryEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DictionaryEntryGroupByArgs['orderBy'] }
        : { orderBy?: DictionaryEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DictionaryEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDictionaryEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DictionaryEntry model
   */
  readonly fields: DictionaryEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DictionaryEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DictionaryEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    headwords<T extends DictionaryEntry$headwordsArgs<ExtArgs> = {}>(args?: Subset<T, DictionaryEntry$headwordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryHeadwordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    senses<T extends DictionaryEntry$sensesArgs<ExtArgs> = {}>(args?: Subset<T, DictionaryEntry$sensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionarySensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DictionaryEntry model
   */
  interface DictionaryEntryFieldRefs {
    readonly entryId: FieldRef<"DictionaryEntry", 'Int'>
    readonly word: FieldRef<"DictionaryEntry", 'String'>
    readonly page: FieldRef<"DictionaryEntry", 'String'>
    readonly homNumber: FieldRef<"DictionaryEntry", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DictionaryEntry findUnique
   */
  export type DictionaryEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryEntry to fetch.
     */
    where: DictionaryEntryWhereUniqueInput
  }

  /**
   * DictionaryEntry findUniqueOrThrow
   */
  export type DictionaryEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryEntry to fetch.
     */
    where: DictionaryEntryWhereUniqueInput
  }

  /**
   * DictionaryEntry findFirst
   */
  export type DictionaryEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryEntry to fetch.
     */
    where?: DictionaryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryEntries to fetch.
     */
    orderBy?: DictionaryEntryOrderByWithRelationInput | DictionaryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DictionaryEntries.
     */
    cursor?: DictionaryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DictionaryEntries.
     */
    distinct?: DictionaryEntryScalarFieldEnum | DictionaryEntryScalarFieldEnum[]
  }

  /**
   * DictionaryEntry findFirstOrThrow
   */
  export type DictionaryEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryEntry to fetch.
     */
    where?: DictionaryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryEntries to fetch.
     */
    orderBy?: DictionaryEntryOrderByWithRelationInput | DictionaryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DictionaryEntries.
     */
    cursor?: DictionaryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DictionaryEntries.
     */
    distinct?: DictionaryEntryScalarFieldEnum | DictionaryEntryScalarFieldEnum[]
  }

  /**
   * DictionaryEntry findMany
   */
  export type DictionaryEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryEntries to fetch.
     */
    where?: DictionaryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryEntries to fetch.
     */
    orderBy?: DictionaryEntryOrderByWithRelationInput | DictionaryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DictionaryEntries.
     */
    cursor?: DictionaryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryEntries.
     */
    skip?: number
    distinct?: DictionaryEntryScalarFieldEnum | DictionaryEntryScalarFieldEnum[]
  }

  /**
   * DictionaryEntry create
   */
  export type DictionaryEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a DictionaryEntry.
     */
    data: XOR<DictionaryEntryCreateInput, DictionaryEntryUncheckedCreateInput>
  }

  /**
   * DictionaryEntry createMany
   */
  export type DictionaryEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DictionaryEntries.
     */
    data: DictionaryEntryCreateManyInput | DictionaryEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DictionaryEntry createManyAndReturn
   */
  export type DictionaryEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * The data used to create many DictionaryEntries.
     */
    data: DictionaryEntryCreateManyInput | DictionaryEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DictionaryEntry update
   */
  export type DictionaryEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a DictionaryEntry.
     */
    data: XOR<DictionaryEntryUpdateInput, DictionaryEntryUncheckedUpdateInput>
    /**
     * Choose, which DictionaryEntry to update.
     */
    where: DictionaryEntryWhereUniqueInput
  }

  /**
   * DictionaryEntry updateMany
   */
  export type DictionaryEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DictionaryEntries.
     */
    data: XOR<DictionaryEntryUpdateManyMutationInput, DictionaryEntryUncheckedUpdateManyInput>
    /**
     * Filter which DictionaryEntries to update
     */
    where?: DictionaryEntryWhereInput
    /**
     * Limit how many DictionaryEntries to update.
     */
    limit?: number
  }

  /**
   * DictionaryEntry updateManyAndReturn
   */
  export type DictionaryEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * The data used to update DictionaryEntries.
     */
    data: XOR<DictionaryEntryUpdateManyMutationInput, DictionaryEntryUncheckedUpdateManyInput>
    /**
     * Filter which DictionaryEntries to update
     */
    where?: DictionaryEntryWhereInput
    /**
     * Limit how many DictionaryEntries to update.
     */
    limit?: number
  }

  /**
   * DictionaryEntry upsert
   */
  export type DictionaryEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the DictionaryEntry to update in case it exists.
     */
    where: DictionaryEntryWhereUniqueInput
    /**
     * In case the DictionaryEntry found by the `where` argument doesn't exist, create a new DictionaryEntry with this data.
     */
    create: XOR<DictionaryEntryCreateInput, DictionaryEntryUncheckedCreateInput>
    /**
     * In case the DictionaryEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DictionaryEntryUpdateInput, DictionaryEntryUncheckedUpdateInput>
  }

  /**
   * DictionaryEntry delete
   */
  export type DictionaryEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
    /**
     * Filter which DictionaryEntry to delete.
     */
    where: DictionaryEntryWhereUniqueInput
  }

  /**
   * DictionaryEntry deleteMany
   */
  export type DictionaryEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DictionaryEntries to delete
     */
    where?: DictionaryEntryWhereInput
    /**
     * Limit how many DictionaryEntries to delete.
     */
    limit?: number
  }

  /**
   * DictionaryEntry.headwords
   */
  export type DictionaryEntry$headwordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryHeadword
     */
    select?: DictionaryHeadwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryHeadword
     */
    omit?: DictionaryHeadwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryHeadwordInclude<ExtArgs> | null
    where?: DictionaryHeadwordWhereInput
    orderBy?: DictionaryHeadwordOrderByWithRelationInput | DictionaryHeadwordOrderByWithRelationInput[]
    cursor?: DictionaryHeadwordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DictionaryHeadwordScalarFieldEnum | DictionaryHeadwordScalarFieldEnum[]
  }

  /**
   * DictionaryEntry.senses
   */
  export type DictionaryEntry$sensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionarySense
     */
    select?: DictionarySenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionarySense
     */
    omit?: DictionarySenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionarySenseInclude<ExtArgs> | null
    where?: DictionarySenseWhereInput
    orderBy?: DictionarySenseOrderByWithRelationInput | DictionarySenseOrderByWithRelationInput[]
    cursor?: DictionarySenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DictionarySenseScalarFieldEnum | DictionarySenseScalarFieldEnum[]
  }

  /**
   * DictionaryEntry without action
   */
  export type DictionaryEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
  }


  /**
   * Model DictionaryHeadword
   */

  export type AggregateDictionaryHeadword = {
    _count: DictionaryHeadwordCountAggregateOutputType | null
    _avg: DictionaryHeadwordAvgAggregateOutputType | null
    _sum: DictionaryHeadwordSumAggregateOutputType | null
    _min: DictionaryHeadwordMinAggregateOutputType | null
    _max: DictionaryHeadwordMaxAggregateOutputType | null
  }

  export type DictionaryHeadwordAvgAggregateOutputType = {
    headId: number | null
    entryId: number | null
  }

  export type DictionaryHeadwordSumAggregateOutputType = {
    headId: number | null
    entryId: number | null
  }

  export type DictionaryHeadwordMinAggregateOutputType = {
    headId: number | null
    entryId: number | null
    head: string | null
    normalizedHead: string | null
    type: string | null
    pos: string | null
  }

  export type DictionaryHeadwordMaxAggregateOutputType = {
    headId: number | null
    entryId: number | null
    head: string | null
    normalizedHead: string | null
    type: string | null
    pos: string | null
  }

  export type DictionaryHeadwordCountAggregateOutputType = {
    headId: number
    entryId: number
    head: number
    normalizedHead: number
    type: number
    pos: number
    _all: number
  }


  export type DictionaryHeadwordAvgAggregateInputType = {
    headId?: true
    entryId?: true
  }

  export type DictionaryHeadwordSumAggregateInputType = {
    headId?: true
    entryId?: true
  }

  export type DictionaryHeadwordMinAggregateInputType = {
    headId?: true
    entryId?: true
    head?: true
    normalizedHead?: true
    type?: true
    pos?: true
  }

  export type DictionaryHeadwordMaxAggregateInputType = {
    headId?: true
    entryId?: true
    head?: true
    normalizedHead?: true
    type?: true
    pos?: true
  }

  export type DictionaryHeadwordCountAggregateInputType = {
    headId?: true
    entryId?: true
    head?: true
    normalizedHead?: true
    type?: true
    pos?: true
    _all?: true
  }

  export type DictionaryHeadwordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DictionaryHeadword to aggregate.
     */
    where?: DictionaryHeadwordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryHeadwords to fetch.
     */
    orderBy?: DictionaryHeadwordOrderByWithRelationInput | DictionaryHeadwordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DictionaryHeadwordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryHeadwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryHeadwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DictionaryHeadwords
    **/
    _count?: true | DictionaryHeadwordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DictionaryHeadwordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DictionaryHeadwordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DictionaryHeadwordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DictionaryHeadwordMaxAggregateInputType
  }

  export type GetDictionaryHeadwordAggregateType<T extends DictionaryHeadwordAggregateArgs> = {
        [P in keyof T & keyof AggregateDictionaryHeadword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDictionaryHeadword[P]>
      : GetScalarType<T[P], AggregateDictionaryHeadword[P]>
  }




  export type DictionaryHeadwordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictionaryHeadwordWhereInput
    orderBy?: DictionaryHeadwordOrderByWithAggregationInput | DictionaryHeadwordOrderByWithAggregationInput[]
    by: DictionaryHeadwordScalarFieldEnum[] | DictionaryHeadwordScalarFieldEnum
    having?: DictionaryHeadwordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DictionaryHeadwordCountAggregateInputType | true
    _avg?: DictionaryHeadwordAvgAggregateInputType
    _sum?: DictionaryHeadwordSumAggregateInputType
    _min?: DictionaryHeadwordMinAggregateInputType
    _max?: DictionaryHeadwordMaxAggregateInputType
  }

  export type DictionaryHeadwordGroupByOutputType = {
    headId: number
    entryId: number
    head: string
    normalizedHead: string
    type: string | null
    pos: string | null
    _count: DictionaryHeadwordCountAggregateOutputType | null
    _avg: DictionaryHeadwordAvgAggregateOutputType | null
    _sum: DictionaryHeadwordSumAggregateOutputType | null
    _min: DictionaryHeadwordMinAggregateOutputType | null
    _max: DictionaryHeadwordMaxAggregateOutputType | null
  }

  type GetDictionaryHeadwordGroupByPayload<T extends DictionaryHeadwordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DictionaryHeadwordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DictionaryHeadwordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DictionaryHeadwordGroupByOutputType[P]>
            : GetScalarType<T[P], DictionaryHeadwordGroupByOutputType[P]>
        }
      >
    >


  export type DictionaryHeadwordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    headId?: boolean
    entryId?: boolean
    head?: boolean
    normalizedHead?: boolean
    type?: boolean
    pos?: boolean
    entry?: boolean | DictionaryEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictionaryHeadword"]>

  export type DictionaryHeadwordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    headId?: boolean
    entryId?: boolean
    head?: boolean
    normalizedHead?: boolean
    type?: boolean
    pos?: boolean
    entry?: boolean | DictionaryEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictionaryHeadword"]>

  export type DictionaryHeadwordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    headId?: boolean
    entryId?: boolean
    head?: boolean
    normalizedHead?: boolean
    type?: boolean
    pos?: boolean
    entry?: boolean | DictionaryEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictionaryHeadword"]>

  export type DictionaryHeadwordSelectScalar = {
    headId?: boolean
    entryId?: boolean
    head?: boolean
    normalizedHead?: boolean
    type?: boolean
    pos?: boolean
  }

  export type DictionaryHeadwordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"headId" | "entryId" | "head" | "normalizedHead" | "type" | "pos", ExtArgs["result"]["dictionaryHeadword"]>
  export type DictionaryHeadwordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | DictionaryEntryDefaultArgs<ExtArgs>
  }
  export type DictionaryHeadwordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | DictionaryEntryDefaultArgs<ExtArgs>
  }
  export type DictionaryHeadwordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | DictionaryEntryDefaultArgs<ExtArgs>
  }

  export type $DictionaryHeadwordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DictionaryHeadword"
    objects: {
      entry: Prisma.$DictionaryEntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      headId: number
      entryId: number
      head: string
      normalizedHead: string
      type: string | null
      pos: string | null
    }, ExtArgs["result"]["dictionaryHeadword"]>
    composites: {}
  }

  type DictionaryHeadwordGetPayload<S extends boolean | null | undefined | DictionaryHeadwordDefaultArgs> = $Result.GetResult<Prisma.$DictionaryHeadwordPayload, S>

  type DictionaryHeadwordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DictionaryHeadwordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DictionaryHeadwordCountAggregateInputType | true
    }

  export interface DictionaryHeadwordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DictionaryHeadword'], meta: { name: 'DictionaryHeadword' } }
    /**
     * Find zero or one DictionaryHeadword that matches the filter.
     * @param {DictionaryHeadwordFindUniqueArgs} args - Arguments to find a DictionaryHeadword
     * @example
     * // Get one DictionaryHeadword
     * const dictionaryHeadword = await prisma.dictionaryHeadword.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DictionaryHeadwordFindUniqueArgs>(args: SelectSubset<T, DictionaryHeadwordFindUniqueArgs<ExtArgs>>): Prisma__DictionaryHeadwordClient<$Result.GetResult<Prisma.$DictionaryHeadwordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DictionaryHeadword that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DictionaryHeadwordFindUniqueOrThrowArgs} args - Arguments to find a DictionaryHeadword
     * @example
     * // Get one DictionaryHeadword
     * const dictionaryHeadword = await prisma.dictionaryHeadword.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DictionaryHeadwordFindUniqueOrThrowArgs>(args: SelectSubset<T, DictionaryHeadwordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DictionaryHeadwordClient<$Result.GetResult<Prisma.$DictionaryHeadwordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DictionaryHeadword that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryHeadwordFindFirstArgs} args - Arguments to find a DictionaryHeadword
     * @example
     * // Get one DictionaryHeadword
     * const dictionaryHeadword = await prisma.dictionaryHeadword.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DictionaryHeadwordFindFirstArgs>(args?: SelectSubset<T, DictionaryHeadwordFindFirstArgs<ExtArgs>>): Prisma__DictionaryHeadwordClient<$Result.GetResult<Prisma.$DictionaryHeadwordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DictionaryHeadword that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryHeadwordFindFirstOrThrowArgs} args - Arguments to find a DictionaryHeadword
     * @example
     * // Get one DictionaryHeadword
     * const dictionaryHeadword = await prisma.dictionaryHeadword.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DictionaryHeadwordFindFirstOrThrowArgs>(args?: SelectSubset<T, DictionaryHeadwordFindFirstOrThrowArgs<ExtArgs>>): Prisma__DictionaryHeadwordClient<$Result.GetResult<Prisma.$DictionaryHeadwordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DictionaryHeadwords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryHeadwordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DictionaryHeadwords
     * const dictionaryHeadwords = await prisma.dictionaryHeadword.findMany()
     * 
     * // Get first 10 DictionaryHeadwords
     * const dictionaryHeadwords = await prisma.dictionaryHeadword.findMany({ take: 10 })
     * 
     * // Only select the `headId`
     * const dictionaryHeadwordWithHeadIdOnly = await prisma.dictionaryHeadword.findMany({ select: { headId: true } })
     * 
     */
    findMany<T extends DictionaryHeadwordFindManyArgs>(args?: SelectSubset<T, DictionaryHeadwordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryHeadwordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DictionaryHeadword.
     * @param {DictionaryHeadwordCreateArgs} args - Arguments to create a DictionaryHeadword.
     * @example
     * // Create one DictionaryHeadword
     * const DictionaryHeadword = await prisma.dictionaryHeadword.create({
     *   data: {
     *     // ... data to create a DictionaryHeadword
     *   }
     * })
     * 
     */
    create<T extends DictionaryHeadwordCreateArgs>(args: SelectSubset<T, DictionaryHeadwordCreateArgs<ExtArgs>>): Prisma__DictionaryHeadwordClient<$Result.GetResult<Prisma.$DictionaryHeadwordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DictionaryHeadwords.
     * @param {DictionaryHeadwordCreateManyArgs} args - Arguments to create many DictionaryHeadwords.
     * @example
     * // Create many DictionaryHeadwords
     * const dictionaryHeadword = await prisma.dictionaryHeadword.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DictionaryHeadwordCreateManyArgs>(args?: SelectSubset<T, DictionaryHeadwordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DictionaryHeadwords and returns the data saved in the database.
     * @param {DictionaryHeadwordCreateManyAndReturnArgs} args - Arguments to create many DictionaryHeadwords.
     * @example
     * // Create many DictionaryHeadwords
     * const dictionaryHeadword = await prisma.dictionaryHeadword.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DictionaryHeadwords and only return the `headId`
     * const dictionaryHeadwordWithHeadIdOnly = await prisma.dictionaryHeadword.createManyAndReturn({
     *   select: { headId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DictionaryHeadwordCreateManyAndReturnArgs>(args?: SelectSubset<T, DictionaryHeadwordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryHeadwordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DictionaryHeadword.
     * @param {DictionaryHeadwordDeleteArgs} args - Arguments to delete one DictionaryHeadword.
     * @example
     * // Delete one DictionaryHeadword
     * const DictionaryHeadword = await prisma.dictionaryHeadword.delete({
     *   where: {
     *     // ... filter to delete one DictionaryHeadword
     *   }
     * })
     * 
     */
    delete<T extends DictionaryHeadwordDeleteArgs>(args: SelectSubset<T, DictionaryHeadwordDeleteArgs<ExtArgs>>): Prisma__DictionaryHeadwordClient<$Result.GetResult<Prisma.$DictionaryHeadwordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DictionaryHeadword.
     * @param {DictionaryHeadwordUpdateArgs} args - Arguments to update one DictionaryHeadword.
     * @example
     * // Update one DictionaryHeadword
     * const dictionaryHeadword = await prisma.dictionaryHeadword.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DictionaryHeadwordUpdateArgs>(args: SelectSubset<T, DictionaryHeadwordUpdateArgs<ExtArgs>>): Prisma__DictionaryHeadwordClient<$Result.GetResult<Prisma.$DictionaryHeadwordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DictionaryHeadwords.
     * @param {DictionaryHeadwordDeleteManyArgs} args - Arguments to filter DictionaryHeadwords to delete.
     * @example
     * // Delete a few DictionaryHeadwords
     * const { count } = await prisma.dictionaryHeadword.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DictionaryHeadwordDeleteManyArgs>(args?: SelectSubset<T, DictionaryHeadwordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DictionaryHeadwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryHeadwordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DictionaryHeadwords
     * const dictionaryHeadword = await prisma.dictionaryHeadword.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DictionaryHeadwordUpdateManyArgs>(args: SelectSubset<T, DictionaryHeadwordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DictionaryHeadwords and returns the data updated in the database.
     * @param {DictionaryHeadwordUpdateManyAndReturnArgs} args - Arguments to update many DictionaryHeadwords.
     * @example
     * // Update many DictionaryHeadwords
     * const dictionaryHeadword = await prisma.dictionaryHeadword.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DictionaryHeadwords and only return the `headId`
     * const dictionaryHeadwordWithHeadIdOnly = await prisma.dictionaryHeadword.updateManyAndReturn({
     *   select: { headId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DictionaryHeadwordUpdateManyAndReturnArgs>(args: SelectSubset<T, DictionaryHeadwordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryHeadwordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DictionaryHeadword.
     * @param {DictionaryHeadwordUpsertArgs} args - Arguments to update or create a DictionaryHeadword.
     * @example
     * // Update or create a DictionaryHeadword
     * const dictionaryHeadword = await prisma.dictionaryHeadword.upsert({
     *   create: {
     *     // ... data to create a DictionaryHeadword
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DictionaryHeadword we want to update
     *   }
     * })
     */
    upsert<T extends DictionaryHeadwordUpsertArgs>(args: SelectSubset<T, DictionaryHeadwordUpsertArgs<ExtArgs>>): Prisma__DictionaryHeadwordClient<$Result.GetResult<Prisma.$DictionaryHeadwordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DictionaryHeadwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryHeadwordCountArgs} args - Arguments to filter DictionaryHeadwords to count.
     * @example
     * // Count the number of DictionaryHeadwords
     * const count = await prisma.dictionaryHeadword.count({
     *   where: {
     *     // ... the filter for the DictionaryHeadwords we want to count
     *   }
     * })
    **/
    count<T extends DictionaryHeadwordCountArgs>(
      args?: Subset<T, DictionaryHeadwordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DictionaryHeadwordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DictionaryHeadword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryHeadwordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DictionaryHeadwordAggregateArgs>(args: Subset<T, DictionaryHeadwordAggregateArgs>): Prisma.PrismaPromise<GetDictionaryHeadwordAggregateType<T>>

    /**
     * Group by DictionaryHeadword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryHeadwordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DictionaryHeadwordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DictionaryHeadwordGroupByArgs['orderBy'] }
        : { orderBy?: DictionaryHeadwordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DictionaryHeadwordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDictionaryHeadwordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DictionaryHeadword model
   */
  readonly fields: DictionaryHeadwordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DictionaryHeadword.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DictionaryHeadwordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entry<T extends DictionaryEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DictionaryEntryDefaultArgs<ExtArgs>>): Prisma__DictionaryEntryClient<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DictionaryHeadword model
   */
  interface DictionaryHeadwordFieldRefs {
    readonly headId: FieldRef<"DictionaryHeadword", 'Int'>
    readonly entryId: FieldRef<"DictionaryHeadword", 'Int'>
    readonly head: FieldRef<"DictionaryHeadword", 'String'>
    readonly normalizedHead: FieldRef<"DictionaryHeadword", 'String'>
    readonly type: FieldRef<"DictionaryHeadword", 'String'>
    readonly pos: FieldRef<"DictionaryHeadword", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DictionaryHeadword findUnique
   */
  export type DictionaryHeadwordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryHeadword
     */
    select?: DictionaryHeadwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryHeadword
     */
    omit?: DictionaryHeadwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryHeadwordInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryHeadword to fetch.
     */
    where: DictionaryHeadwordWhereUniqueInput
  }

  /**
   * DictionaryHeadword findUniqueOrThrow
   */
  export type DictionaryHeadwordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryHeadword
     */
    select?: DictionaryHeadwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryHeadword
     */
    omit?: DictionaryHeadwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryHeadwordInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryHeadword to fetch.
     */
    where: DictionaryHeadwordWhereUniqueInput
  }

  /**
   * DictionaryHeadword findFirst
   */
  export type DictionaryHeadwordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryHeadword
     */
    select?: DictionaryHeadwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryHeadword
     */
    omit?: DictionaryHeadwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryHeadwordInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryHeadword to fetch.
     */
    where?: DictionaryHeadwordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryHeadwords to fetch.
     */
    orderBy?: DictionaryHeadwordOrderByWithRelationInput | DictionaryHeadwordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DictionaryHeadwords.
     */
    cursor?: DictionaryHeadwordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryHeadwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryHeadwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DictionaryHeadwords.
     */
    distinct?: DictionaryHeadwordScalarFieldEnum | DictionaryHeadwordScalarFieldEnum[]
  }

  /**
   * DictionaryHeadword findFirstOrThrow
   */
  export type DictionaryHeadwordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryHeadword
     */
    select?: DictionaryHeadwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryHeadword
     */
    omit?: DictionaryHeadwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryHeadwordInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryHeadword to fetch.
     */
    where?: DictionaryHeadwordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryHeadwords to fetch.
     */
    orderBy?: DictionaryHeadwordOrderByWithRelationInput | DictionaryHeadwordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DictionaryHeadwords.
     */
    cursor?: DictionaryHeadwordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryHeadwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryHeadwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DictionaryHeadwords.
     */
    distinct?: DictionaryHeadwordScalarFieldEnum | DictionaryHeadwordScalarFieldEnum[]
  }

  /**
   * DictionaryHeadword findMany
   */
  export type DictionaryHeadwordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryHeadword
     */
    select?: DictionaryHeadwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryHeadword
     */
    omit?: DictionaryHeadwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryHeadwordInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryHeadwords to fetch.
     */
    where?: DictionaryHeadwordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryHeadwords to fetch.
     */
    orderBy?: DictionaryHeadwordOrderByWithRelationInput | DictionaryHeadwordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DictionaryHeadwords.
     */
    cursor?: DictionaryHeadwordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryHeadwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryHeadwords.
     */
    skip?: number
    distinct?: DictionaryHeadwordScalarFieldEnum | DictionaryHeadwordScalarFieldEnum[]
  }

  /**
   * DictionaryHeadword create
   */
  export type DictionaryHeadwordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryHeadword
     */
    select?: DictionaryHeadwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryHeadword
     */
    omit?: DictionaryHeadwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryHeadwordInclude<ExtArgs> | null
    /**
     * The data needed to create a DictionaryHeadword.
     */
    data: XOR<DictionaryHeadwordCreateInput, DictionaryHeadwordUncheckedCreateInput>
  }

  /**
   * DictionaryHeadword createMany
   */
  export type DictionaryHeadwordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DictionaryHeadwords.
     */
    data: DictionaryHeadwordCreateManyInput | DictionaryHeadwordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DictionaryHeadword createManyAndReturn
   */
  export type DictionaryHeadwordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryHeadword
     */
    select?: DictionaryHeadwordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryHeadword
     */
    omit?: DictionaryHeadwordOmit<ExtArgs> | null
    /**
     * The data used to create many DictionaryHeadwords.
     */
    data: DictionaryHeadwordCreateManyInput | DictionaryHeadwordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryHeadwordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DictionaryHeadword update
   */
  export type DictionaryHeadwordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryHeadword
     */
    select?: DictionaryHeadwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryHeadword
     */
    omit?: DictionaryHeadwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryHeadwordInclude<ExtArgs> | null
    /**
     * The data needed to update a DictionaryHeadword.
     */
    data: XOR<DictionaryHeadwordUpdateInput, DictionaryHeadwordUncheckedUpdateInput>
    /**
     * Choose, which DictionaryHeadword to update.
     */
    where: DictionaryHeadwordWhereUniqueInput
  }

  /**
   * DictionaryHeadword updateMany
   */
  export type DictionaryHeadwordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DictionaryHeadwords.
     */
    data: XOR<DictionaryHeadwordUpdateManyMutationInput, DictionaryHeadwordUncheckedUpdateManyInput>
    /**
     * Filter which DictionaryHeadwords to update
     */
    where?: DictionaryHeadwordWhereInput
    /**
     * Limit how many DictionaryHeadwords to update.
     */
    limit?: number
  }

  /**
   * DictionaryHeadword updateManyAndReturn
   */
  export type DictionaryHeadwordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryHeadword
     */
    select?: DictionaryHeadwordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryHeadword
     */
    omit?: DictionaryHeadwordOmit<ExtArgs> | null
    /**
     * The data used to update DictionaryHeadwords.
     */
    data: XOR<DictionaryHeadwordUpdateManyMutationInput, DictionaryHeadwordUncheckedUpdateManyInput>
    /**
     * Filter which DictionaryHeadwords to update
     */
    where?: DictionaryHeadwordWhereInput
    /**
     * Limit how many DictionaryHeadwords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryHeadwordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DictionaryHeadword upsert
   */
  export type DictionaryHeadwordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryHeadword
     */
    select?: DictionaryHeadwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryHeadword
     */
    omit?: DictionaryHeadwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryHeadwordInclude<ExtArgs> | null
    /**
     * The filter to search for the DictionaryHeadword to update in case it exists.
     */
    where: DictionaryHeadwordWhereUniqueInput
    /**
     * In case the DictionaryHeadword found by the `where` argument doesn't exist, create a new DictionaryHeadword with this data.
     */
    create: XOR<DictionaryHeadwordCreateInput, DictionaryHeadwordUncheckedCreateInput>
    /**
     * In case the DictionaryHeadword was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DictionaryHeadwordUpdateInput, DictionaryHeadwordUncheckedUpdateInput>
  }

  /**
   * DictionaryHeadword delete
   */
  export type DictionaryHeadwordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryHeadword
     */
    select?: DictionaryHeadwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryHeadword
     */
    omit?: DictionaryHeadwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryHeadwordInclude<ExtArgs> | null
    /**
     * Filter which DictionaryHeadword to delete.
     */
    where: DictionaryHeadwordWhereUniqueInput
  }

  /**
   * DictionaryHeadword deleteMany
   */
  export type DictionaryHeadwordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DictionaryHeadwords to delete
     */
    where?: DictionaryHeadwordWhereInput
    /**
     * Limit how many DictionaryHeadwords to delete.
     */
    limit?: number
  }

  /**
   * DictionaryHeadword without action
   */
  export type DictionaryHeadwordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryHeadword
     */
    select?: DictionaryHeadwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryHeadword
     */
    omit?: DictionaryHeadwordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryHeadwordInclude<ExtArgs> | null
  }


  /**
   * Model DictionarySense
   */

  export type AggregateDictionarySense = {
    _count: DictionarySenseCountAggregateOutputType | null
    _avg: DictionarySenseAvgAggregateOutputType | null
    _sum: DictionarySenseSumAggregateOutputType | null
    _min: DictionarySenseMinAggregateOutputType | null
    _max: DictionarySenseMaxAggregateOutputType | null
  }

  export type DictionarySenseAvgAggregateOutputType = {
    senseId: number | null
    entryId: number | null
    number: number | null
  }

  export type DictionarySenseSumAggregateOutputType = {
    senseId: number | null
    entryId: number | null
    number: number | null
  }

  export type DictionarySenseMinAggregateOutputType = {
    senseId: number | null
    entryId: number | null
    number: number | null
    definition: string | null
    dialect: string | null
  }

  export type DictionarySenseMaxAggregateOutputType = {
    senseId: number | null
    entryId: number | null
    number: number | null
    definition: string | null
    dialect: string | null
  }

  export type DictionarySenseCountAggregateOutputType = {
    senseId: number
    entryId: number
    number: number
    definition: number
    dialect: number
    _all: number
  }


  export type DictionarySenseAvgAggregateInputType = {
    senseId?: true
    entryId?: true
    number?: true
  }

  export type DictionarySenseSumAggregateInputType = {
    senseId?: true
    entryId?: true
    number?: true
  }

  export type DictionarySenseMinAggregateInputType = {
    senseId?: true
    entryId?: true
    number?: true
    definition?: true
    dialect?: true
  }

  export type DictionarySenseMaxAggregateInputType = {
    senseId?: true
    entryId?: true
    number?: true
    definition?: true
    dialect?: true
  }

  export type DictionarySenseCountAggregateInputType = {
    senseId?: true
    entryId?: true
    number?: true
    definition?: true
    dialect?: true
    _all?: true
  }

  export type DictionarySenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DictionarySense to aggregate.
     */
    where?: DictionarySenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionarySenses to fetch.
     */
    orderBy?: DictionarySenseOrderByWithRelationInput | DictionarySenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DictionarySenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionarySenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionarySenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DictionarySenses
    **/
    _count?: true | DictionarySenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DictionarySenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DictionarySenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DictionarySenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DictionarySenseMaxAggregateInputType
  }

  export type GetDictionarySenseAggregateType<T extends DictionarySenseAggregateArgs> = {
        [P in keyof T & keyof AggregateDictionarySense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDictionarySense[P]>
      : GetScalarType<T[P], AggregateDictionarySense[P]>
  }




  export type DictionarySenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictionarySenseWhereInput
    orderBy?: DictionarySenseOrderByWithAggregationInput | DictionarySenseOrderByWithAggregationInput[]
    by: DictionarySenseScalarFieldEnum[] | DictionarySenseScalarFieldEnum
    having?: DictionarySenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DictionarySenseCountAggregateInputType | true
    _avg?: DictionarySenseAvgAggregateInputType
    _sum?: DictionarySenseSumAggregateInputType
    _min?: DictionarySenseMinAggregateInputType
    _max?: DictionarySenseMaxAggregateInputType
  }

  export type DictionarySenseGroupByOutputType = {
    senseId: number
    entryId: number
    number: number | null
    definition: string | null
    dialect: string | null
    _count: DictionarySenseCountAggregateOutputType | null
    _avg: DictionarySenseAvgAggregateOutputType | null
    _sum: DictionarySenseSumAggregateOutputType | null
    _min: DictionarySenseMinAggregateOutputType | null
    _max: DictionarySenseMaxAggregateOutputType | null
  }

  type GetDictionarySenseGroupByPayload<T extends DictionarySenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DictionarySenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DictionarySenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DictionarySenseGroupByOutputType[P]>
            : GetScalarType<T[P], DictionarySenseGroupByOutputType[P]>
        }
      >
    >


  export type DictionarySenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    senseId?: boolean
    entryId?: boolean
    number?: boolean
    definition?: boolean
    dialect?: boolean
    examples?: boolean | DictionarySense$examplesArgs<ExtArgs>
    entry?: boolean | DictionaryEntryDefaultArgs<ExtArgs>
    translations?: boolean | DictionarySense$translationsArgs<ExtArgs>
    crossRefs?: boolean | DictionarySense$crossRefsArgs<ExtArgs>
    _count?: boolean | DictionarySenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictionarySense"]>

  export type DictionarySenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    senseId?: boolean
    entryId?: boolean
    number?: boolean
    definition?: boolean
    dialect?: boolean
    entry?: boolean | DictionaryEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictionarySense"]>

  export type DictionarySenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    senseId?: boolean
    entryId?: boolean
    number?: boolean
    definition?: boolean
    dialect?: boolean
    entry?: boolean | DictionaryEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictionarySense"]>

  export type DictionarySenseSelectScalar = {
    senseId?: boolean
    entryId?: boolean
    number?: boolean
    definition?: boolean
    dialect?: boolean
  }

  export type DictionarySenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"senseId" | "entryId" | "number" | "definition" | "dialect", ExtArgs["result"]["dictionarySense"]>
  export type DictionarySenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examples?: boolean | DictionarySense$examplesArgs<ExtArgs>
    entry?: boolean | DictionaryEntryDefaultArgs<ExtArgs>
    translations?: boolean | DictionarySense$translationsArgs<ExtArgs>
    crossRefs?: boolean | DictionarySense$crossRefsArgs<ExtArgs>
    _count?: boolean | DictionarySenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DictionarySenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | DictionaryEntryDefaultArgs<ExtArgs>
  }
  export type DictionarySenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | DictionaryEntryDefaultArgs<ExtArgs>
  }

  export type $DictionarySensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DictionarySense"
    objects: {
      examples: Prisma.$DictionaryExamplePayload<ExtArgs>[]
      entry: Prisma.$DictionaryEntryPayload<ExtArgs>
      translations: Prisma.$DictionaryTranslationPayload<ExtArgs>[]
      crossRefs: Prisma.$DictionaryCrossRefPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      senseId: number
      entryId: number
      number: number | null
      definition: string | null
      dialect: string | null
    }, ExtArgs["result"]["dictionarySense"]>
    composites: {}
  }

  type DictionarySenseGetPayload<S extends boolean | null | undefined | DictionarySenseDefaultArgs> = $Result.GetResult<Prisma.$DictionarySensePayload, S>

  type DictionarySenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DictionarySenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DictionarySenseCountAggregateInputType | true
    }

  export interface DictionarySenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DictionarySense'], meta: { name: 'DictionarySense' } }
    /**
     * Find zero or one DictionarySense that matches the filter.
     * @param {DictionarySenseFindUniqueArgs} args - Arguments to find a DictionarySense
     * @example
     * // Get one DictionarySense
     * const dictionarySense = await prisma.dictionarySense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DictionarySenseFindUniqueArgs>(args: SelectSubset<T, DictionarySenseFindUniqueArgs<ExtArgs>>): Prisma__DictionarySenseClient<$Result.GetResult<Prisma.$DictionarySensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DictionarySense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DictionarySenseFindUniqueOrThrowArgs} args - Arguments to find a DictionarySense
     * @example
     * // Get one DictionarySense
     * const dictionarySense = await prisma.dictionarySense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DictionarySenseFindUniqueOrThrowArgs>(args: SelectSubset<T, DictionarySenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DictionarySenseClient<$Result.GetResult<Prisma.$DictionarySensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DictionarySense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionarySenseFindFirstArgs} args - Arguments to find a DictionarySense
     * @example
     * // Get one DictionarySense
     * const dictionarySense = await prisma.dictionarySense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DictionarySenseFindFirstArgs>(args?: SelectSubset<T, DictionarySenseFindFirstArgs<ExtArgs>>): Prisma__DictionarySenseClient<$Result.GetResult<Prisma.$DictionarySensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DictionarySense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionarySenseFindFirstOrThrowArgs} args - Arguments to find a DictionarySense
     * @example
     * // Get one DictionarySense
     * const dictionarySense = await prisma.dictionarySense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DictionarySenseFindFirstOrThrowArgs>(args?: SelectSubset<T, DictionarySenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__DictionarySenseClient<$Result.GetResult<Prisma.$DictionarySensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DictionarySenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionarySenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DictionarySenses
     * const dictionarySenses = await prisma.dictionarySense.findMany()
     * 
     * // Get first 10 DictionarySenses
     * const dictionarySenses = await prisma.dictionarySense.findMany({ take: 10 })
     * 
     * // Only select the `senseId`
     * const dictionarySenseWithSenseIdOnly = await prisma.dictionarySense.findMany({ select: { senseId: true } })
     * 
     */
    findMany<T extends DictionarySenseFindManyArgs>(args?: SelectSubset<T, DictionarySenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionarySensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DictionarySense.
     * @param {DictionarySenseCreateArgs} args - Arguments to create a DictionarySense.
     * @example
     * // Create one DictionarySense
     * const DictionarySense = await prisma.dictionarySense.create({
     *   data: {
     *     // ... data to create a DictionarySense
     *   }
     * })
     * 
     */
    create<T extends DictionarySenseCreateArgs>(args: SelectSubset<T, DictionarySenseCreateArgs<ExtArgs>>): Prisma__DictionarySenseClient<$Result.GetResult<Prisma.$DictionarySensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DictionarySenses.
     * @param {DictionarySenseCreateManyArgs} args - Arguments to create many DictionarySenses.
     * @example
     * // Create many DictionarySenses
     * const dictionarySense = await prisma.dictionarySense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DictionarySenseCreateManyArgs>(args?: SelectSubset<T, DictionarySenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DictionarySenses and returns the data saved in the database.
     * @param {DictionarySenseCreateManyAndReturnArgs} args - Arguments to create many DictionarySenses.
     * @example
     * // Create many DictionarySenses
     * const dictionarySense = await prisma.dictionarySense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DictionarySenses and only return the `senseId`
     * const dictionarySenseWithSenseIdOnly = await prisma.dictionarySense.createManyAndReturn({
     *   select: { senseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DictionarySenseCreateManyAndReturnArgs>(args?: SelectSubset<T, DictionarySenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionarySensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DictionarySense.
     * @param {DictionarySenseDeleteArgs} args - Arguments to delete one DictionarySense.
     * @example
     * // Delete one DictionarySense
     * const DictionarySense = await prisma.dictionarySense.delete({
     *   where: {
     *     // ... filter to delete one DictionarySense
     *   }
     * })
     * 
     */
    delete<T extends DictionarySenseDeleteArgs>(args: SelectSubset<T, DictionarySenseDeleteArgs<ExtArgs>>): Prisma__DictionarySenseClient<$Result.GetResult<Prisma.$DictionarySensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DictionarySense.
     * @param {DictionarySenseUpdateArgs} args - Arguments to update one DictionarySense.
     * @example
     * // Update one DictionarySense
     * const dictionarySense = await prisma.dictionarySense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DictionarySenseUpdateArgs>(args: SelectSubset<T, DictionarySenseUpdateArgs<ExtArgs>>): Prisma__DictionarySenseClient<$Result.GetResult<Prisma.$DictionarySensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DictionarySenses.
     * @param {DictionarySenseDeleteManyArgs} args - Arguments to filter DictionarySenses to delete.
     * @example
     * // Delete a few DictionarySenses
     * const { count } = await prisma.dictionarySense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DictionarySenseDeleteManyArgs>(args?: SelectSubset<T, DictionarySenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DictionarySenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionarySenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DictionarySenses
     * const dictionarySense = await prisma.dictionarySense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DictionarySenseUpdateManyArgs>(args: SelectSubset<T, DictionarySenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DictionarySenses and returns the data updated in the database.
     * @param {DictionarySenseUpdateManyAndReturnArgs} args - Arguments to update many DictionarySenses.
     * @example
     * // Update many DictionarySenses
     * const dictionarySense = await prisma.dictionarySense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DictionarySenses and only return the `senseId`
     * const dictionarySenseWithSenseIdOnly = await prisma.dictionarySense.updateManyAndReturn({
     *   select: { senseId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DictionarySenseUpdateManyAndReturnArgs>(args: SelectSubset<T, DictionarySenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionarySensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DictionarySense.
     * @param {DictionarySenseUpsertArgs} args - Arguments to update or create a DictionarySense.
     * @example
     * // Update or create a DictionarySense
     * const dictionarySense = await prisma.dictionarySense.upsert({
     *   create: {
     *     // ... data to create a DictionarySense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DictionarySense we want to update
     *   }
     * })
     */
    upsert<T extends DictionarySenseUpsertArgs>(args: SelectSubset<T, DictionarySenseUpsertArgs<ExtArgs>>): Prisma__DictionarySenseClient<$Result.GetResult<Prisma.$DictionarySensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DictionarySenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionarySenseCountArgs} args - Arguments to filter DictionarySenses to count.
     * @example
     * // Count the number of DictionarySenses
     * const count = await prisma.dictionarySense.count({
     *   where: {
     *     // ... the filter for the DictionarySenses we want to count
     *   }
     * })
    **/
    count<T extends DictionarySenseCountArgs>(
      args?: Subset<T, DictionarySenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DictionarySenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DictionarySense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionarySenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DictionarySenseAggregateArgs>(args: Subset<T, DictionarySenseAggregateArgs>): Prisma.PrismaPromise<GetDictionarySenseAggregateType<T>>

    /**
     * Group by DictionarySense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionarySenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DictionarySenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DictionarySenseGroupByArgs['orderBy'] }
        : { orderBy?: DictionarySenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DictionarySenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDictionarySenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DictionarySense model
   */
  readonly fields: DictionarySenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DictionarySense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DictionarySenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    examples<T extends DictionarySense$examplesArgs<ExtArgs> = {}>(args?: Subset<T, DictionarySense$examplesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryExamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    entry<T extends DictionaryEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DictionaryEntryDefaultArgs<ExtArgs>>): Prisma__DictionaryEntryClient<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    translations<T extends DictionarySense$translationsArgs<ExtArgs> = {}>(args?: Subset<T, DictionarySense$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    crossRefs<T extends DictionarySense$crossRefsArgs<ExtArgs> = {}>(args?: Subset<T, DictionarySense$crossRefsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryCrossRefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DictionarySense model
   */
  interface DictionarySenseFieldRefs {
    readonly senseId: FieldRef<"DictionarySense", 'Int'>
    readonly entryId: FieldRef<"DictionarySense", 'Int'>
    readonly number: FieldRef<"DictionarySense", 'Int'>
    readonly definition: FieldRef<"DictionarySense", 'String'>
    readonly dialect: FieldRef<"DictionarySense", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DictionarySense findUnique
   */
  export type DictionarySenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionarySense
     */
    select?: DictionarySenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionarySense
     */
    omit?: DictionarySenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionarySenseInclude<ExtArgs> | null
    /**
     * Filter, which DictionarySense to fetch.
     */
    where: DictionarySenseWhereUniqueInput
  }

  /**
   * DictionarySense findUniqueOrThrow
   */
  export type DictionarySenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionarySense
     */
    select?: DictionarySenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionarySense
     */
    omit?: DictionarySenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionarySenseInclude<ExtArgs> | null
    /**
     * Filter, which DictionarySense to fetch.
     */
    where: DictionarySenseWhereUniqueInput
  }

  /**
   * DictionarySense findFirst
   */
  export type DictionarySenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionarySense
     */
    select?: DictionarySenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionarySense
     */
    omit?: DictionarySenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionarySenseInclude<ExtArgs> | null
    /**
     * Filter, which DictionarySense to fetch.
     */
    where?: DictionarySenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionarySenses to fetch.
     */
    orderBy?: DictionarySenseOrderByWithRelationInput | DictionarySenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DictionarySenses.
     */
    cursor?: DictionarySenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionarySenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionarySenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DictionarySenses.
     */
    distinct?: DictionarySenseScalarFieldEnum | DictionarySenseScalarFieldEnum[]
  }

  /**
   * DictionarySense findFirstOrThrow
   */
  export type DictionarySenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionarySense
     */
    select?: DictionarySenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionarySense
     */
    omit?: DictionarySenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionarySenseInclude<ExtArgs> | null
    /**
     * Filter, which DictionarySense to fetch.
     */
    where?: DictionarySenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionarySenses to fetch.
     */
    orderBy?: DictionarySenseOrderByWithRelationInput | DictionarySenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DictionarySenses.
     */
    cursor?: DictionarySenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionarySenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionarySenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DictionarySenses.
     */
    distinct?: DictionarySenseScalarFieldEnum | DictionarySenseScalarFieldEnum[]
  }

  /**
   * DictionarySense findMany
   */
  export type DictionarySenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionarySense
     */
    select?: DictionarySenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionarySense
     */
    omit?: DictionarySenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionarySenseInclude<ExtArgs> | null
    /**
     * Filter, which DictionarySenses to fetch.
     */
    where?: DictionarySenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionarySenses to fetch.
     */
    orderBy?: DictionarySenseOrderByWithRelationInput | DictionarySenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DictionarySenses.
     */
    cursor?: DictionarySenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionarySenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionarySenses.
     */
    skip?: number
    distinct?: DictionarySenseScalarFieldEnum | DictionarySenseScalarFieldEnum[]
  }

  /**
   * DictionarySense create
   */
  export type DictionarySenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionarySense
     */
    select?: DictionarySenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionarySense
     */
    omit?: DictionarySenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionarySenseInclude<ExtArgs> | null
    /**
     * The data needed to create a DictionarySense.
     */
    data: XOR<DictionarySenseCreateInput, DictionarySenseUncheckedCreateInput>
  }

  /**
   * DictionarySense createMany
   */
  export type DictionarySenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DictionarySenses.
     */
    data: DictionarySenseCreateManyInput | DictionarySenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DictionarySense createManyAndReturn
   */
  export type DictionarySenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionarySense
     */
    select?: DictionarySenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DictionarySense
     */
    omit?: DictionarySenseOmit<ExtArgs> | null
    /**
     * The data used to create many DictionarySenses.
     */
    data: DictionarySenseCreateManyInput | DictionarySenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionarySenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DictionarySense update
   */
  export type DictionarySenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionarySense
     */
    select?: DictionarySenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionarySense
     */
    omit?: DictionarySenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionarySenseInclude<ExtArgs> | null
    /**
     * The data needed to update a DictionarySense.
     */
    data: XOR<DictionarySenseUpdateInput, DictionarySenseUncheckedUpdateInput>
    /**
     * Choose, which DictionarySense to update.
     */
    where: DictionarySenseWhereUniqueInput
  }

  /**
   * DictionarySense updateMany
   */
  export type DictionarySenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DictionarySenses.
     */
    data: XOR<DictionarySenseUpdateManyMutationInput, DictionarySenseUncheckedUpdateManyInput>
    /**
     * Filter which DictionarySenses to update
     */
    where?: DictionarySenseWhereInput
    /**
     * Limit how many DictionarySenses to update.
     */
    limit?: number
  }

  /**
   * DictionarySense updateManyAndReturn
   */
  export type DictionarySenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionarySense
     */
    select?: DictionarySenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DictionarySense
     */
    omit?: DictionarySenseOmit<ExtArgs> | null
    /**
     * The data used to update DictionarySenses.
     */
    data: XOR<DictionarySenseUpdateManyMutationInput, DictionarySenseUncheckedUpdateManyInput>
    /**
     * Filter which DictionarySenses to update
     */
    where?: DictionarySenseWhereInput
    /**
     * Limit how many DictionarySenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionarySenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DictionarySense upsert
   */
  export type DictionarySenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionarySense
     */
    select?: DictionarySenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionarySense
     */
    omit?: DictionarySenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionarySenseInclude<ExtArgs> | null
    /**
     * The filter to search for the DictionarySense to update in case it exists.
     */
    where: DictionarySenseWhereUniqueInput
    /**
     * In case the DictionarySense found by the `where` argument doesn't exist, create a new DictionarySense with this data.
     */
    create: XOR<DictionarySenseCreateInput, DictionarySenseUncheckedCreateInput>
    /**
     * In case the DictionarySense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DictionarySenseUpdateInput, DictionarySenseUncheckedUpdateInput>
  }

  /**
   * DictionarySense delete
   */
  export type DictionarySenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionarySense
     */
    select?: DictionarySenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionarySense
     */
    omit?: DictionarySenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionarySenseInclude<ExtArgs> | null
    /**
     * Filter which DictionarySense to delete.
     */
    where: DictionarySenseWhereUniqueInput
  }

  /**
   * DictionarySense deleteMany
   */
  export type DictionarySenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DictionarySenses to delete
     */
    where?: DictionarySenseWhereInput
    /**
     * Limit how many DictionarySenses to delete.
     */
    limit?: number
  }

  /**
   * DictionarySense.examples
   */
  export type DictionarySense$examplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryExample
     */
    select?: DictionaryExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryExample
     */
    omit?: DictionaryExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryExampleInclude<ExtArgs> | null
    where?: DictionaryExampleWhereInput
    orderBy?: DictionaryExampleOrderByWithRelationInput | DictionaryExampleOrderByWithRelationInput[]
    cursor?: DictionaryExampleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DictionaryExampleScalarFieldEnum | DictionaryExampleScalarFieldEnum[]
  }

  /**
   * DictionarySense.translations
   */
  export type DictionarySense$translationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryTranslation
     */
    select?: DictionaryTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryTranslation
     */
    omit?: DictionaryTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryTranslationInclude<ExtArgs> | null
    where?: DictionaryTranslationWhereInput
    orderBy?: DictionaryTranslationOrderByWithRelationInput | DictionaryTranslationOrderByWithRelationInput[]
    cursor?: DictionaryTranslationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DictionaryTranslationScalarFieldEnum | DictionaryTranslationScalarFieldEnum[]
  }

  /**
   * DictionarySense.crossRefs
   */
  export type DictionarySense$crossRefsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryCrossRef
     */
    select?: DictionaryCrossRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryCrossRef
     */
    omit?: DictionaryCrossRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryCrossRefInclude<ExtArgs> | null
    where?: DictionaryCrossRefWhereInput
    orderBy?: DictionaryCrossRefOrderByWithRelationInput | DictionaryCrossRefOrderByWithRelationInput[]
    cursor?: DictionaryCrossRefWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DictionaryCrossRefScalarFieldEnum | DictionaryCrossRefScalarFieldEnum[]
  }

  /**
   * DictionarySense without action
   */
  export type DictionarySenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionarySense
     */
    select?: DictionarySenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionarySense
     */
    omit?: DictionarySenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionarySenseInclude<ExtArgs> | null
  }


  /**
   * Model DictionaryTranslation
   */

  export type AggregateDictionaryTranslation = {
    _count: DictionaryTranslationCountAggregateOutputType | null
    _avg: DictionaryTranslationAvgAggregateOutputType | null
    _sum: DictionaryTranslationSumAggregateOutputType | null
    _min: DictionaryTranslationMinAggregateOutputType | null
    _max: DictionaryTranslationMaxAggregateOutputType | null
  }

  export type DictionaryTranslationAvgAggregateOutputType = {
    transId: number | null
    senseId: number | null
  }

  export type DictionaryTranslationSumAggregateOutputType = {
    transId: number | null
    senseId: number | null
  }

  export type DictionaryTranslationMinAggregateOutputType = {
    transId: number | null
    senseId: number | null
    lang: string | null
    translation: string | null
  }

  export type DictionaryTranslationMaxAggregateOutputType = {
    transId: number | null
    senseId: number | null
    lang: string | null
    translation: string | null
  }

  export type DictionaryTranslationCountAggregateOutputType = {
    transId: number
    senseId: number
    lang: number
    translation: number
    _all: number
  }


  export type DictionaryTranslationAvgAggregateInputType = {
    transId?: true
    senseId?: true
  }

  export type DictionaryTranslationSumAggregateInputType = {
    transId?: true
    senseId?: true
  }

  export type DictionaryTranslationMinAggregateInputType = {
    transId?: true
    senseId?: true
    lang?: true
    translation?: true
  }

  export type DictionaryTranslationMaxAggregateInputType = {
    transId?: true
    senseId?: true
    lang?: true
    translation?: true
  }

  export type DictionaryTranslationCountAggregateInputType = {
    transId?: true
    senseId?: true
    lang?: true
    translation?: true
    _all?: true
  }

  export type DictionaryTranslationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DictionaryTranslation to aggregate.
     */
    where?: DictionaryTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryTranslations to fetch.
     */
    orderBy?: DictionaryTranslationOrderByWithRelationInput | DictionaryTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DictionaryTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DictionaryTranslations
    **/
    _count?: true | DictionaryTranslationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DictionaryTranslationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DictionaryTranslationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DictionaryTranslationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DictionaryTranslationMaxAggregateInputType
  }

  export type GetDictionaryTranslationAggregateType<T extends DictionaryTranslationAggregateArgs> = {
        [P in keyof T & keyof AggregateDictionaryTranslation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDictionaryTranslation[P]>
      : GetScalarType<T[P], AggregateDictionaryTranslation[P]>
  }




  export type DictionaryTranslationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictionaryTranslationWhereInput
    orderBy?: DictionaryTranslationOrderByWithAggregationInput | DictionaryTranslationOrderByWithAggregationInput[]
    by: DictionaryTranslationScalarFieldEnum[] | DictionaryTranslationScalarFieldEnum
    having?: DictionaryTranslationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DictionaryTranslationCountAggregateInputType | true
    _avg?: DictionaryTranslationAvgAggregateInputType
    _sum?: DictionaryTranslationSumAggregateInputType
    _min?: DictionaryTranslationMinAggregateInputType
    _max?: DictionaryTranslationMaxAggregateInputType
  }

  export type DictionaryTranslationGroupByOutputType = {
    transId: number
    senseId: number
    lang: string
    translation: string
    _count: DictionaryTranslationCountAggregateOutputType | null
    _avg: DictionaryTranslationAvgAggregateOutputType | null
    _sum: DictionaryTranslationSumAggregateOutputType | null
    _min: DictionaryTranslationMinAggregateOutputType | null
    _max: DictionaryTranslationMaxAggregateOutputType | null
  }

  type GetDictionaryTranslationGroupByPayload<T extends DictionaryTranslationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DictionaryTranslationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DictionaryTranslationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DictionaryTranslationGroupByOutputType[P]>
            : GetScalarType<T[P], DictionaryTranslationGroupByOutputType[P]>
        }
      >
    >


  export type DictionaryTranslationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transId?: boolean
    senseId?: boolean
    lang?: boolean
    translation?: boolean
    sense?: boolean | DictionarySenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictionaryTranslation"]>

  export type DictionaryTranslationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transId?: boolean
    senseId?: boolean
    lang?: boolean
    translation?: boolean
    sense?: boolean | DictionarySenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictionaryTranslation"]>

  export type DictionaryTranslationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transId?: boolean
    senseId?: boolean
    lang?: boolean
    translation?: boolean
    sense?: boolean | DictionarySenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictionaryTranslation"]>

  export type DictionaryTranslationSelectScalar = {
    transId?: boolean
    senseId?: boolean
    lang?: boolean
    translation?: boolean
  }

  export type DictionaryTranslationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"transId" | "senseId" | "lang" | "translation", ExtArgs["result"]["dictionaryTranslation"]>
  export type DictionaryTranslationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sense?: boolean | DictionarySenseDefaultArgs<ExtArgs>
  }
  export type DictionaryTranslationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sense?: boolean | DictionarySenseDefaultArgs<ExtArgs>
  }
  export type DictionaryTranslationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sense?: boolean | DictionarySenseDefaultArgs<ExtArgs>
  }

  export type $DictionaryTranslationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DictionaryTranslation"
    objects: {
      sense: Prisma.$DictionarySensePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      transId: number
      senseId: number
      lang: string
      translation: string
    }, ExtArgs["result"]["dictionaryTranslation"]>
    composites: {}
  }

  type DictionaryTranslationGetPayload<S extends boolean | null | undefined | DictionaryTranslationDefaultArgs> = $Result.GetResult<Prisma.$DictionaryTranslationPayload, S>

  type DictionaryTranslationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DictionaryTranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DictionaryTranslationCountAggregateInputType | true
    }

  export interface DictionaryTranslationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DictionaryTranslation'], meta: { name: 'DictionaryTranslation' } }
    /**
     * Find zero or one DictionaryTranslation that matches the filter.
     * @param {DictionaryTranslationFindUniqueArgs} args - Arguments to find a DictionaryTranslation
     * @example
     * // Get one DictionaryTranslation
     * const dictionaryTranslation = await prisma.dictionaryTranslation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DictionaryTranslationFindUniqueArgs>(args: SelectSubset<T, DictionaryTranslationFindUniqueArgs<ExtArgs>>): Prisma__DictionaryTranslationClient<$Result.GetResult<Prisma.$DictionaryTranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DictionaryTranslation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DictionaryTranslationFindUniqueOrThrowArgs} args - Arguments to find a DictionaryTranslation
     * @example
     * // Get one DictionaryTranslation
     * const dictionaryTranslation = await prisma.dictionaryTranslation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DictionaryTranslationFindUniqueOrThrowArgs>(args: SelectSubset<T, DictionaryTranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DictionaryTranslationClient<$Result.GetResult<Prisma.$DictionaryTranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DictionaryTranslation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryTranslationFindFirstArgs} args - Arguments to find a DictionaryTranslation
     * @example
     * // Get one DictionaryTranslation
     * const dictionaryTranslation = await prisma.dictionaryTranslation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DictionaryTranslationFindFirstArgs>(args?: SelectSubset<T, DictionaryTranslationFindFirstArgs<ExtArgs>>): Prisma__DictionaryTranslationClient<$Result.GetResult<Prisma.$DictionaryTranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DictionaryTranslation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryTranslationFindFirstOrThrowArgs} args - Arguments to find a DictionaryTranslation
     * @example
     * // Get one DictionaryTranslation
     * const dictionaryTranslation = await prisma.dictionaryTranslation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DictionaryTranslationFindFirstOrThrowArgs>(args?: SelectSubset<T, DictionaryTranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DictionaryTranslationClient<$Result.GetResult<Prisma.$DictionaryTranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DictionaryTranslations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryTranslationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DictionaryTranslations
     * const dictionaryTranslations = await prisma.dictionaryTranslation.findMany()
     * 
     * // Get first 10 DictionaryTranslations
     * const dictionaryTranslations = await prisma.dictionaryTranslation.findMany({ take: 10 })
     * 
     * // Only select the `transId`
     * const dictionaryTranslationWithTransIdOnly = await prisma.dictionaryTranslation.findMany({ select: { transId: true } })
     * 
     */
    findMany<T extends DictionaryTranslationFindManyArgs>(args?: SelectSubset<T, DictionaryTranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DictionaryTranslation.
     * @param {DictionaryTranslationCreateArgs} args - Arguments to create a DictionaryTranslation.
     * @example
     * // Create one DictionaryTranslation
     * const DictionaryTranslation = await prisma.dictionaryTranslation.create({
     *   data: {
     *     // ... data to create a DictionaryTranslation
     *   }
     * })
     * 
     */
    create<T extends DictionaryTranslationCreateArgs>(args: SelectSubset<T, DictionaryTranslationCreateArgs<ExtArgs>>): Prisma__DictionaryTranslationClient<$Result.GetResult<Prisma.$DictionaryTranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DictionaryTranslations.
     * @param {DictionaryTranslationCreateManyArgs} args - Arguments to create many DictionaryTranslations.
     * @example
     * // Create many DictionaryTranslations
     * const dictionaryTranslation = await prisma.dictionaryTranslation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DictionaryTranslationCreateManyArgs>(args?: SelectSubset<T, DictionaryTranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DictionaryTranslations and returns the data saved in the database.
     * @param {DictionaryTranslationCreateManyAndReturnArgs} args - Arguments to create many DictionaryTranslations.
     * @example
     * // Create many DictionaryTranslations
     * const dictionaryTranslation = await prisma.dictionaryTranslation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DictionaryTranslations and only return the `transId`
     * const dictionaryTranslationWithTransIdOnly = await prisma.dictionaryTranslation.createManyAndReturn({
     *   select: { transId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DictionaryTranslationCreateManyAndReturnArgs>(args?: SelectSubset<T, DictionaryTranslationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryTranslationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DictionaryTranslation.
     * @param {DictionaryTranslationDeleteArgs} args - Arguments to delete one DictionaryTranslation.
     * @example
     * // Delete one DictionaryTranslation
     * const DictionaryTranslation = await prisma.dictionaryTranslation.delete({
     *   where: {
     *     // ... filter to delete one DictionaryTranslation
     *   }
     * })
     * 
     */
    delete<T extends DictionaryTranslationDeleteArgs>(args: SelectSubset<T, DictionaryTranslationDeleteArgs<ExtArgs>>): Prisma__DictionaryTranslationClient<$Result.GetResult<Prisma.$DictionaryTranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DictionaryTranslation.
     * @param {DictionaryTranslationUpdateArgs} args - Arguments to update one DictionaryTranslation.
     * @example
     * // Update one DictionaryTranslation
     * const dictionaryTranslation = await prisma.dictionaryTranslation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DictionaryTranslationUpdateArgs>(args: SelectSubset<T, DictionaryTranslationUpdateArgs<ExtArgs>>): Prisma__DictionaryTranslationClient<$Result.GetResult<Prisma.$DictionaryTranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DictionaryTranslations.
     * @param {DictionaryTranslationDeleteManyArgs} args - Arguments to filter DictionaryTranslations to delete.
     * @example
     * // Delete a few DictionaryTranslations
     * const { count } = await prisma.dictionaryTranslation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DictionaryTranslationDeleteManyArgs>(args?: SelectSubset<T, DictionaryTranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DictionaryTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryTranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DictionaryTranslations
     * const dictionaryTranslation = await prisma.dictionaryTranslation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DictionaryTranslationUpdateManyArgs>(args: SelectSubset<T, DictionaryTranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DictionaryTranslations and returns the data updated in the database.
     * @param {DictionaryTranslationUpdateManyAndReturnArgs} args - Arguments to update many DictionaryTranslations.
     * @example
     * // Update many DictionaryTranslations
     * const dictionaryTranslation = await prisma.dictionaryTranslation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DictionaryTranslations and only return the `transId`
     * const dictionaryTranslationWithTransIdOnly = await prisma.dictionaryTranslation.updateManyAndReturn({
     *   select: { transId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DictionaryTranslationUpdateManyAndReturnArgs>(args: SelectSubset<T, DictionaryTranslationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryTranslationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DictionaryTranslation.
     * @param {DictionaryTranslationUpsertArgs} args - Arguments to update or create a DictionaryTranslation.
     * @example
     * // Update or create a DictionaryTranslation
     * const dictionaryTranslation = await prisma.dictionaryTranslation.upsert({
     *   create: {
     *     // ... data to create a DictionaryTranslation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DictionaryTranslation we want to update
     *   }
     * })
     */
    upsert<T extends DictionaryTranslationUpsertArgs>(args: SelectSubset<T, DictionaryTranslationUpsertArgs<ExtArgs>>): Prisma__DictionaryTranslationClient<$Result.GetResult<Prisma.$DictionaryTranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DictionaryTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryTranslationCountArgs} args - Arguments to filter DictionaryTranslations to count.
     * @example
     * // Count the number of DictionaryTranslations
     * const count = await prisma.dictionaryTranslation.count({
     *   where: {
     *     // ... the filter for the DictionaryTranslations we want to count
     *   }
     * })
    **/
    count<T extends DictionaryTranslationCountArgs>(
      args?: Subset<T, DictionaryTranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DictionaryTranslationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DictionaryTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryTranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DictionaryTranslationAggregateArgs>(args: Subset<T, DictionaryTranslationAggregateArgs>): Prisma.PrismaPromise<GetDictionaryTranslationAggregateType<T>>

    /**
     * Group by DictionaryTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryTranslationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DictionaryTranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DictionaryTranslationGroupByArgs['orderBy'] }
        : { orderBy?: DictionaryTranslationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DictionaryTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDictionaryTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DictionaryTranslation model
   */
  readonly fields: DictionaryTranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DictionaryTranslation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DictionaryTranslationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sense<T extends DictionarySenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DictionarySenseDefaultArgs<ExtArgs>>): Prisma__DictionarySenseClient<$Result.GetResult<Prisma.$DictionarySensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DictionaryTranslation model
   */
  interface DictionaryTranslationFieldRefs {
    readonly transId: FieldRef<"DictionaryTranslation", 'Int'>
    readonly senseId: FieldRef<"DictionaryTranslation", 'Int'>
    readonly lang: FieldRef<"DictionaryTranslation", 'String'>
    readonly translation: FieldRef<"DictionaryTranslation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DictionaryTranslation findUnique
   */
  export type DictionaryTranslationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryTranslation
     */
    select?: DictionaryTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryTranslation
     */
    omit?: DictionaryTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryTranslationInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryTranslation to fetch.
     */
    where: DictionaryTranslationWhereUniqueInput
  }

  /**
   * DictionaryTranslation findUniqueOrThrow
   */
  export type DictionaryTranslationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryTranslation
     */
    select?: DictionaryTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryTranslation
     */
    omit?: DictionaryTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryTranslationInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryTranslation to fetch.
     */
    where: DictionaryTranslationWhereUniqueInput
  }

  /**
   * DictionaryTranslation findFirst
   */
  export type DictionaryTranslationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryTranslation
     */
    select?: DictionaryTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryTranslation
     */
    omit?: DictionaryTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryTranslationInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryTranslation to fetch.
     */
    where?: DictionaryTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryTranslations to fetch.
     */
    orderBy?: DictionaryTranslationOrderByWithRelationInput | DictionaryTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DictionaryTranslations.
     */
    cursor?: DictionaryTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DictionaryTranslations.
     */
    distinct?: DictionaryTranslationScalarFieldEnum | DictionaryTranslationScalarFieldEnum[]
  }

  /**
   * DictionaryTranslation findFirstOrThrow
   */
  export type DictionaryTranslationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryTranslation
     */
    select?: DictionaryTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryTranslation
     */
    omit?: DictionaryTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryTranslationInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryTranslation to fetch.
     */
    where?: DictionaryTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryTranslations to fetch.
     */
    orderBy?: DictionaryTranslationOrderByWithRelationInput | DictionaryTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DictionaryTranslations.
     */
    cursor?: DictionaryTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DictionaryTranslations.
     */
    distinct?: DictionaryTranslationScalarFieldEnum | DictionaryTranslationScalarFieldEnum[]
  }

  /**
   * DictionaryTranslation findMany
   */
  export type DictionaryTranslationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryTranslation
     */
    select?: DictionaryTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryTranslation
     */
    omit?: DictionaryTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryTranslationInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryTranslations to fetch.
     */
    where?: DictionaryTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryTranslations to fetch.
     */
    orderBy?: DictionaryTranslationOrderByWithRelationInput | DictionaryTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DictionaryTranslations.
     */
    cursor?: DictionaryTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryTranslations.
     */
    skip?: number
    distinct?: DictionaryTranslationScalarFieldEnum | DictionaryTranslationScalarFieldEnum[]
  }

  /**
   * DictionaryTranslation create
   */
  export type DictionaryTranslationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryTranslation
     */
    select?: DictionaryTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryTranslation
     */
    omit?: DictionaryTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryTranslationInclude<ExtArgs> | null
    /**
     * The data needed to create a DictionaryTranslation.
     */
    data: XOR<DictionaryTranslationCreateInput, DictionaryTranslationUncheckedCreateInput>
  }

  /**
   * DictionaryTranslation createMany
   */
  export type DictionaryTranslationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DictionaryTranslations.
     */
    data: DictionaryTranslationCreateManyInput | DictionaryTranslationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DictionaryTranslation createManyAndReturn
   */
  export type DictionaryTranslationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryTranslation
     */
    select?: DictionaryTranslationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryTranslation
     */
    omit?: DictionaryTranslationOmit<ExtArgs> | null
    /**
     * The data used to create many DictionaryTranslations.
     */
    data: DictionaryTranslationCreateManyInput | DictionaryTranslationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryTranslationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DictionaryTranslation update
   */
  export type DictionaryTranslationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryTranslation
     */
    select?: DictionaryTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryTranslation
     */
    omit?: DictionaryTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryTranslationInclude<ExtArgs> | null
    /**
     * The data needed to update a DictionaryTranslation.
     */
    data: XOR<DictionaryTranslationUpdateInput, DictionaryTranslationUncheckedUpdateInput>
    /**
     * Choose, which DictionaryTranslation to update.
     */
    where: DictionaryTranslationWhereUniqueInput
  }

  /**
   * DictionaryTranslation updateMany
   */
  export type DictionaryTranslationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DictionaryTranslations.
     */
    data: XOR<DictionaryTranslationUpdateManyMutationInput, DictionaryTranslationUncheckedUpdateManyInput>
    /**
     * Filter which DictionaryTranslations to update
     */
    where?: DictionaryTranslationWhereInput
    /**
     * Limit how many DictionaryTranslations to update.
     */
    limit?: number
  }

  /**
   * DictionaryTranslation updateManyAndReturn
   */
  export type DictionaryTranslationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryTranslation
     */
    select?: DictionaryTranslationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryTranslation
     */
    omit?: DictionaryTranslationOmit<ExtArgs> | null
    /**
     * The data used to update DictionaryTranslations.
     */
    data: XOR<DictionaryTranslationUpdateManyMutationInput, DictionaryTranslationUncheckedUpdateManyInput>
    /**
     * Filter which DictionaryTranslations to update
     */
    where?: DictionaryTranslationWhereInput
    /**
     * Limit how many DictionaryTranslations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryTranslationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DictionaryTranslation upsert
   */
  export type DictionaryTranslationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryTranslation
     */
    select?: DictionaryTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryTranslation
     */
    omit?: DictionaryTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryTranslationInclude<ExtArgs> | null
    /**
     * The filter to search for the DictionaryTranslation to update in case it exists.
     */
    where: DictionaryTranslationWhereUniqueInput
    /**
     * In case the DictionaryTranslation found by the `where` argument doesn't exist, create a new DictionaryTranslation with this data.
     */
    create: XOR<DictionaryTranslationCreateInput, DictionaryTranslationUncheckedCreateInput>
    /**
     * In case the DictionaryTranslation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DictionaryTranslationUpdateInput, DictionaryTranslationUncheckedUpdateInput>
  }

  /**
   * DictionaryTranslation delete
   */
  export type DictionaryTranslationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryTranslation
     */
    select?: DictionaryTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryTranslation
     */
    omit?: DictionaryTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryTranslationInclude<ExtArgs> | null
    /**
     * Filter which DictionaryTranslation to delete.
     */
    where: DictionaryTranslationWhereUniqueInput
  }

  /**
   * DictionaryTranslation deleteMany
   */
  export type DictionaryTranslationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DictionaryTranslations to delete
     */
    where?: DictionaryTranslationWhereInput
    /**
     * Limit how many DictionaryTranslations to delete.
     */
    limit?: number
  }

  /**
   * DictionaryTranslation without action
   */
  export type DictionaryTranslationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryTranslation
     */
    select?: DictionaryTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryTranslation
     */
    omit?: DictionaryTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryTranslationInclude<ExtArgs> | null
  }


  /**
   * Model DictionaryExample
   */

  export type AggregateDictionaryExample = {
    _count: DictionaryExampleCountAggregateOutputType | null
    _avg: DictionaryExampleAvgAggregateOutputType | null
    _sum: DictionaryExampleSumAggregateOutputType | null
    _min: DictionaryExampleMinAggregateOutputType | null
    _max: DictionaryExampleMaxAggregateOutputType | null
  }

  export type DictionaryExampleAvgAggregateOutputType = {
    exampleId: number | null
    senseId: number | null
  }

  export type DictionaryExampleSumAggregateOutputType = {
    exampleId: number | null
    senseId: number | null
  }

  export type DictionaryExampleMinAggregateOutputType = {
    exampleId: number | null
    senseId: number | null
    textCebuano: string | null
    textTranslation: string | null
  }

  export type DictionaryExampleMaxAggregateOutputType = {
    exampleId: number | null
    senseId: number | null
    textCebuano: string | null
    textTranslation: string | null
  }

  export type DictionaryExampleCountAggregateOutputType = {
    exampleId: number
    senseId: number
    textCebuano: number
    textTranslation: number
    _all: number
  }


  export type DictionaryExampleAvgAggregateInputType = {
    exampleId?: true
    senseId?: true
  }

  export type DictionaryExampleSumAggregateInputType = {
    exampleId?: true
    senseId?: true
  }

  export type DictionaryExampleMinAggregateInputType = {
    exampleId?: true
    senseId?: true
    textCebuano?: true
    textTranslation?: true
  }

  export type DictionaryExampleMaxAggregateInputType = {
    exampleId?: true
    senseId?: true
    textCebuano?: true
    textTranslation?: true
  }

  export type DictionaryExampleCountAggregateInputType = {
    exampleId?: true
    senseId?: true
    textCebuano?: true
    textTranslation?: true
    _all?: true
  }

  export type DictionaryExampleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DictionaryExample to aggregate.
     */
    where?: DictionaryExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryExamples to fetch.
     */
    orderBy?: DictionaryExampleOrderByWithRelationInput | DictionaryExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DictionaryExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryExamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryExamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DictionaryExamples
    **/
    _count?: true | DictionaryExampleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DictionaryExampleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DictionaryExampleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DictionaryExampleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DictionaryExampleMaxAggregateInputType
  }

  export type GetDictionaryExampleAggregateType<T extends DictionaryExampleAggregateArgs> = {
        [P in keyof T & keyof AggregateDictionaryExample]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDictionaryExample[P]>
      : GetScalarType<T[P], AggregateDictionaryExample[P]>
  }




  export type DictionaryExampleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictionaryExampleWhereInput
    orderBy?: DictionaryExampleOrderByWithAggregationInput | DictionaryExampleOrderByWithAggregationInput[]
    by: DictionaryExampleScalarFieldEnum[] | DictionaryExampleScalarFieldEnum
    having?: DictionaryExampleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DictionaryExampleCountAggregateInputType | true
    _avg?: DictionaryExampleAvgAggregateInputType
    _sum?: DictionaryExampleSumAggregateInputType
    _min?: DictionaryExampleMinAggregateInputType
    _max?: DictionaryExampleMaxAggregateInputType
  }

  export type DictionaryExampleGroupByOutputType = {
    exampleId: number
    senseId: number
    textCebuano: string
    textTranslation: string | null
    _count: DictionaryExampleCountAggregateOutputType | null
    _avg: DictionaryExampleAvgAggregateOutputType | null
    _sum: DictionaryExampleSumAggregateOutputType | null
    _min: DictionaryExampleMinAggregateOutputType | null
    _max: DictionaryExampleMaxAggregateOutputType | null
  }

  type GetDictionaryExampleGroupByPayload<T extends DictionaryExampleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DictionaryExampleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DictionaryExampleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DictionaryExampleGroupByOutputType[P]>
            : GetScalarType<T[P], DictionaryExampleGroupByOutputType[P]>
        }
      >
    >


  export type DictionaryExampleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    exampleId?: boolean
    senseId?: boolean
    textCebuano?: boolean
    textTranslation?: boolean
    sense?: boolean | DictionarySenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictionaryExample"]>

  export type DictionaryExampleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    exampleId?: boolean
    senseId?: boolean
    textCebuano?: boolean
    textTranslation?: boolean
    sense?: boolean | DictionarySenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictionaryExample"]>

  export type DictionaryExampleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    exampleId?: boolean
    senseId?: boolean
    textCebuano?: boolean
    textTranslation?: boolean
    sense?: boolean | DictionarySenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictionaryExample"]>

  export type DictionaryExampleSelectScalar = {
    exampleId?: boolean
    senseId?: boolean
    textCebuano?: boolean
    textTranslation?: boolean
  }

  export type DictionaryExampleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"exampleId" | "senseId" | "textCebuano" | "textTranslation", ExtArgs["result"]["dictionaryExample"]>
  export type DictionaryExampleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sense?: boolean | DictionarySenseDefaultArgs<ExtArgs>
  }
  export type DictionaryExampleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sense?: boolean | DictionarySenseDefaultArgs<ExtArgs>
  }
  export type DictionaryExampleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sense?: boolean | DictionarySenseDefaultArgs<ExtArgs>
  }

  export type $DictionaryExamplePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DictionaryExample"
    objects: {
      sense: Prisma.$DictionarySensePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      exampleId: number
      senseId: number
      textCebuano: string
      textTranslation: string | null
    }, ExtArgs["result"]["dictionaryExample"]>
    composites: {}
  }

  type DictionaryExampleGetPayload<S extends boolean | null | undefined | DictionaryExampleDefaultArgs> = $Result.GetResult<Prisma.$DictionaryExamplePayload, S>

  type DictionaryExampleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DictionaryExampleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DictionaryExampleCountAggregateInputType | true
    }

  export interface DictionaryExampleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DictionaryExample'], meta: { name: 'DictionaryExample' } }
    /**
     * Find zero or one DictionaryExample that matches the filter.
     * @param {DictionaryExampleFindUniqueArgs} args - Arguments to find a DictionaryExample
     * @example
     * // Get one DictionaryExample
     * const dictionaryExample = await prisma.dictionaryExample.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DictionaryExampleFindUniqueArgs>(args: SelectSubset<T, DictionaryExampleFindUniqueArgs<ExtArgs>>): Prisma__DictionaryExampleClient<$Result.GetResult<Prisma.$DictionaryExamplePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DictionaryExample that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DictionaryExampleFindUniqueOrThrowArgs} args - Arguments to find a DictionaryExample
     * @example
     * // Get one DictionaryExample
     * const dictionaryExample = await prisma.dictionaryExample.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DictionaryExampleFindUniqueOrThrowArgs>(args: SelectSubset<T, DictionaryExampleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DictionaryExampleClient<$Result.GetResult<Prisma.$DictionaryExamplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DictionaryExample that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryExampleFindFirstArgs} args - Arguments to find a DictionaryExample
     * @example
     * // Get one DictionaryExample
     * const dictionaryExample = await prisma.dictionaryExample.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DictionaryExampleFindFirstArgs>(args?: SelectSubset<T, DictionaryExampleFindFirstArgs<ExtArgs>>): Prisma__DictionaryExampleClient<$Result.GetResult<Prisma.$DictionaryExamplePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DictionaryExample that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryExampleFindFirstOrThrowArgs} args - Arguments to find a DictionaryExample
     * @example
     * // Get one DictionaryExample
     * const dictionaryExample = await prisma.dictionaryExample.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DictionaryExampleFindFirstOrThrowArgs>(args?: SelectSubset<T, DictionaryExampleFindFirstOrThrowArgs<ExtArgs>>): Prisma__DictionaryExampleClient<$Result.GetResult<Prisma.$DictionaryExamplePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DictionaryExamples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryExampleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DictionaryExamples
     * const dictionaryExamples = await prisma.dictionaryExample.findMany()
     * 
     * // Get first 10 DictionaryExamples
     * const dictionaryExamples = await prisma.dictionaryExample.findMany({ take: 10 })
     * 
     * // Only select the `exampleId`
     * const dictionaryExampleWithExampleIdOnly = await prisma.dictionaryExample.findMany({ select: { exampleId: true } })
     * 
     */
    findMany<T extends DictionaryExampleFindManyArgs>(args?: SelectSubset<T, DictionaryExampleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryExamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DictionaryExample.
     * @param {DictionaryExampleCreateArgs} args - Arguments to create a DictionaryExample.
     * @example
     * // Create one DictionaryExample
     * const DictionaryExample = await prisma.dictionaryExample.create({
     *   data: {
     *     // ... data to create a DictionaryExample
     *   }
     * })
     * 
     */
    create<T extends DictionaryExampleCreateArgs>(args: SelectSubset<T, DictionaryExampleCreateArgs<ExtArgs>>): Prisma__DictionaryExampleClient<$Result.GetResult<Prisma.$DictionaryExamplePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DictionaryExamples.
     * @param {DictionaryExampleCreateManyArgs} args - Arguments to create many DictionaryExamples.
     * @example
     * // Create many DictionaryExamples
     * const dictionaryExample = await prisma.dictionaryExample.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DictionaryExampleCreateManyArgs>(args?: SelectSubset<T, DictionaryExampleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DictionaryExamples and returns the data saved in the database.
     * @param {DictionaryExampleCreateManyAndReturnArgs} args - Arguments to create many DictionaryExamples.
     * @example
     * // Create many DictionaryExamples
     * const dictionaryExample = await prisma.dictionaryExample.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DictionaryExamples and only return the `exampleId`
     * const dictionaryExampleWithExampleIdOnly = await prisma.dictionaryExample.createManyAndReturn({
     *   select: { exampleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DictionaryExampleCreateManyAndReturnArgs>(args?: SelectSubset<T, DictionaryExampleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryExamplePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DictionaryExample.
     * @param {DictionaryExampleDeleteArgs} args - Arguments to delete one DictionaryExample.
     * @example
     * // Delete one DictionaryExample
     * const DictionaryExample = await prisma.dictionaryExample.delete({
     *   where: {
     *     // ... filter to delete one DictionaryExample
     *   }
     * })
     * 
     */
    delete<T extends DictionaryExampleDeleteArgs>(args: SelectSubset<T, DictionaryExampleDeleteArgs<ExtArgs>>): Prisma__DictionaryExampleClient<$Result.GetResult<Prisma.$DictionaryExamplePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DictionaryExample.
     * @param {DictionaryExampleUpdateArgs} args - Arguments to update one DictionaryExample.
     * @example
     * // Update one DictionaryExample
     * const dictionaryExample = await prisma.dictionaryExample.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DictionaryExampleUpdateArgs>(args: SelectSubset<T, DictionaryExampleUpdateArgs<ExtArgs>>): Prisma__DictionaryExampleClient<$Result.GetResult<Prisma.$DictionaryExamplePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DictionaryExamples.
     * @param {DictionaryExampleDeleteManyArgs} args - Arguments to filter DictionaryExamples to delete.
     * @example
     * // Delete a few DictionaryExamples
     * const { count } = await prisma.dictionaryExample.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DictionaryExampleDeleteManyArgs>(args?: SelectSubset<T, DictionaryExampleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DictionaryExamples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryExampleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DictionaryExamples
     * const dictionaryExample = await prisma.dictionaryExample.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DictionaryExampleUpdateManyArgs>(args: SelectSubset<T, DictionaryExampleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DictionaryExamples and returns the data updated in the database.
     * @param {DictionaryExampleUpdateManyAndReturnArgs} args - Arguments to update many DictionaryExamples.
     * @example
     * // Update many DictionaryExamples
     * const dictionaryExample = await prisma.dictionaryExample.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DictionaryExamples and only return the `exampleId`
     * const dictionaryExampleWithExampleIdOnly = await prisma.dictionaryExample.updateManyAndReturn({
     *   select: { exampleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DictionaryExampleUpdateManyAndReturnArgs>(args: SelectSubset<T, DictionaryExampleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryExamplePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DictionaryExample.
     * @param {DictionaryExampleUpsertArgs} args - Arguments to update or create a DictionaryExample.
     * @example
     * // Update or create a DictionaryExample
     * const dictionaryExample = await prisma.dictionaryExample.upsert({
     *   create: {
     *     // ... data to create a DictionaryExample
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DictionaryExample we want to update
     *   }
     * })
     */
    upsert<T extends DictionaryExampleUpsertArgs>(args: SelectSubset<T, DictionaryExampleUpsertArgs<ExtArgs>>): Prisma__DictionaryExampleClient<$Result.GetResult<Prisma.$DictionaryExamplePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DictionaryExamples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryExampleCountArgs} args - Arguments to filter DictionaryExamples to count.
     * @example
     * // Count the number of DictionaryExamples
     * const count = await prisma.dictionaryExample.count({
     *   where: {
     *     // ... the filter for the DictionaryExamples we want to count
     *   }
     * })
    **/
    count<T extends DictionaryExampleCountArgs>(
      args?: Subset<T, DictionaryExampleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DictionaryExampleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DictionaryExample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryExampleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DictionaryExampleAggregateArgs>(args: Subset<T, DictionaryExampleAggregateArgs>): Prisma.PrismaPromise<GetDictionaryExampleAggregateType<T>>

    /**
     * Group by DictionaryExample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryExampleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DictionaryExampleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DictionaryExampleGroupByArgs['orderBy'] }
        : { orderBy?: DictionaryExampleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DictionaryExampleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDictionaryExampleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DictionaryExample model
   */
  readonly fields: DictionaryExampleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DictionaryExample.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DictionaryExampleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sense<T extends DictionarySenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DictionarySenseDefaultArgs<ExtArgs>>): Prisma__DictionarySenseClient<$Result.GetResult<Prisma.$DictionarySensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DictionaryExample model
   */
  interface DictionaryExampleFieldRefs {
    readonly exampleId: FieldRef<"DictionaryExample", 'Int'>
    readonly senseId: FieldRef<"DictionaryExample", 'Int'>
    readonly textCebuano: FieldRef<"DictionaryExample", 'String'>
    readonly textTranslation: FieldRef<"DictionaryExample", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DictionaryExample findUnique
   */
  export type DictionaryExampleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryExample
     */
    select?: DictionaryExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryExample
     */
    omit?: DictionaryExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryExampleInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryExample to fetch.
     */
    where: DictionaryExampleWhereUniqueInput
  }

  /**
   * DictionaryExample findUniqueOrThrow
   */
  export type DictionaryExampleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryExample
     */
    select?: DictionaryExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryExample
     */
    omit?: DictionaryExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryExampleInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryExample to fetch.
     */
    where: DictionaryExampleWhereUniqueInput
  }

  /**
   * DictionaryExample findFirst
   */
  export type DictionaryExampleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryExample
     */
    select?: DictionaryExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryExample
     */
    omit?: DictionaryExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryExampleInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryExample to fetch.
     */
    where?: DictionaryExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryExamples to fetch.
     */
    orderBy?: DictionaryExampleOrderByWithRelationInput | DictionaryExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DictionaryExamples.
     */
    cursor?: DictionaryExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryExamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryExamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DictionaryExamples.
     */
    distinct?: DictionaryExampleScalarFieldEnum | DictionaryExampleScalarFieldEnum[]
  }

  /**
   * DictionaryExample findFirstOrThrow
   */
  export type DictionaryExampleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryExample
     */
    select?: DictionaryExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryExample
     */
    omit?: DictionaryExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryExampleInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryExample to fetch.
     */
    where?: DictionaryExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryExamples to fetch.
     */
    orderBy?: DictionaryExampleOrderByWithRelationInput | DictionaryExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DictionaryExamples.
     */
    cursor?: DictionaryExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryExamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryExamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DictionaryExamples.
     */
    distinct?: DictionaryExampleScalarFieldEnum | DictionaryExampleScalarFieldEnum[]
  }

  /**
   * DictionaryExample findMany
   */
  export type DictionaryExampleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryExample
     */
    select?: DictionaryExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryExample
     */
    omit?: DictionaryExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryExampleInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryExamples to fetch.
     */
    where?: DictionaryExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryExamples to fetch.
     */
    orderBy?: DictionaryExampleOrderByWithRelationInput | DictionaryExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DictionaryExamples.
     */
    cursor?: DictionaryExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryExamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryExamples.
     */
    skip?: number
    distinct?: DictionaryExampleScalarFieldEnum | DictionaryExampleScalarFieldEnum[]
  }

  /**
   * DictionaryExample create
   */
  export type DictionaryExampleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryExample
     */
    select?: DictionaryExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryExample
     */
    omit?: DictionaryExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryExampleInclude<ExtArgs> | null
    /**
     * The data needed to create a DictionaryExample.
     */
    data: XOR<DictionaryExampleCreateInput, DictionaryExampleUncheckedCreateInput>
  }

  /**
   * DictionaryExample createMany
   */
  export type DictionaryExampleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DictionaryExamples.
     */
    data: DictionaryExampleCreateManyInput | DictionaryExampleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DictionaryExample createManyAndReturn
   */
  export type DictionaryExampleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryExample
     */
    select?: DictionaryExampleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryExample
     */
    omit?: DictionaryExampleOmit<ExtArgs> | null
    /**
     * The data used to create many DictionaryExamples.
     */
    data: DictionaryExampleCreateManyInput | DictionaryExampleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryExampleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DictionaryExample update
   */
  export type DictionaryExampleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryExample
     */
    select?: DictionaryExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryExample
     */
    omit?: DictionaryExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryExampleInclude<ExtArgs> | null
    /**
     * The data needed to update a DictionaryExample.
     */
    data: XOR<DictionaryExampleUpdateInput, DictionaryExampleUncheckedUpdateInput>
    /**
     * Choose, which DictionaryExample to update.
     */
    where: DictionaryExampleWhereUniqueInput
  }

  /**
   * DictionaryExample updateMany
   */
  export type DictionaryExampleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DictionaryExamples.
     */
    data: XOR<DictionaryExampleUpdateManyMutationInput, DictionaryExampleUncheckedUpdateManyInput>
    /**
     * Filter which DictionaryExamples to update
     */
    where?: DictionaryExampleWhereInput
    /**
     * Limit how many DictionaryExamples to update.
     */
    limit?: number
  }

  /**
   * DictionaryExample updateManyAndReturn
   */
  export type DictionaryExampleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryExample
     */
    select?: DictionaryExampleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryExample
     */
    omit?: DictionaryExampleOmit<ExtArgs> | null
    /**
     * The data used to update DictionaryExamples.
     */
    data: XOR<DictionaryExampleUpdateManyMutationInput, DictionaryExampleUncheckedUpdateManyInput>
    /**
     * Filter which DictionaryExamples to update
     */
    where?: DictionaryExampleWhereInput
    /**
     * Limit how many DictionaryExamples to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryExampleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DictionaryExample upsert
   */
  export type DictionaryExampleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryExample
     */
    select?: DictionaryExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryExample
     */
    omit?: DictionaryExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryExampleInclude<ExtArgs> | null
    /**
     * The filter to search for the DictionaryExample to update in case it exists.
     */
    where: DictionaryExampleWhereUniqueInput
    /**
     * In case the DictionaryExample found by the `where` argument doesn't exist, create a new DictionaryExample with this data.
     */
    create: XOR<DictionaryExampleCreateInput, DictionaryExampleUncheckedCreateInput>
    /**
     * In case the DictionaryExample was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DictionaryExampleUpdateInput, DictionaryExampleUncheckedUpdateInput>
  }

  /**
   * DictionaryExample delete
   */
  export type DictionaryExampleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryExample
     */
    select?: DictionaryExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryExample
     */
    omit?: DictionaryExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryExampleInclude<ExtArgs> | null
    /**
     * Filter which DictionaryExample to delete.
     */
    where: DictionaryExampleWhereUniqueInput
  }

  /**
   * DictionaryExample deleteMany
   */
  export type DictionaryExampleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DictionaryExamples to delete
     */
    where?: DictionaryExampleWhereInput
    /**
     * Limit how many DictionaryExamples to delete.
     */
    limit?: number
  }

  /**
   * DictionaryExample without action
   */
  export type DictionaryExampleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryExample
     */
    select?: DictionaryExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryExample
     */
    omit?: DictionaryExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryExampleInclude<ExtArgs> | null
  }


  /**
   * Model DictionaryCrossRef
   */

  export type AggregateDictionaryCrossRef = {
    _count: DictionaryCrossRefCountAggregateOutputType | null
    _avg: DictionaryCrossRefAvgAggregateOutputType | null
    _sum: DictionaryCrossRefSumAggregateOutputType | null
    _min: DictionaryCrossRefMinAggregateOutputType | null
    _max: DictionaryCrossRefMaxAggregateOutputType | null
  }

  export type DictionaryCrossRefAvgAggregateOutputType = {
    xrefId: number | null
    senseId: number | null
  }

  export type DictionaryCrossRefSumAggregateOutputType = {
    xrefId: number | null
    senseId: number | null
  }

  export type DictionaryCrossRefMinAggregateOutputType = {
    xrefId: number | null
    senseId: number | null
    targetWord: string | null
    lang: string | null
  }

  export type DictionaryCrossRefMaxAggregateOutputType = {
    xrefId: number | null
    senseId: number | null
    targetWord: string | null
    lang: string | null
  }

  export type DictionaryCrossRefCountAggregateOutputType = {
    xrefId: number
    senseId: number
    targetWord: number
    lang: number
    _all: number
  }


  export type DictionaryCrossRefAvgAggregateInputType = {
    xrefId?: true
    senseId?: true
  }

  export type DictionaryCrossRefSumAggregateInputType = {
    xrefId?: true
    senseId?: true
  }

  export type DictionaryCrossRefMinAggregateInputType = {
    xrefId?: true
    senseId?: true
    targetWord?: true
    lang?: true
  }

  export type DictionaryCrossRefMaxAggregateInputType = {
    xrefId?: true
    senseId?: true
    targetWord?: true
    lang?: true
  }

  export type DictionaryCrossRefCountAggregateInputType = {
    xrefId?: true
    senseId?: true
    targetWord?: true
    lang?: true
    _all?: true
  }

  export type DictionaryCrossRefAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DictionaryCrossRef to aggregate.
     */
    where?: DictionaryCrossRefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryCrossRefs to fetch.
     */
    orderBy?: DictionaryCrossRefOrderByWithRelationInput | DictionaryCrossRefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DictionaryCrossRefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryCrossRefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryCrossRefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DictionaryCrossRefs
    **/
    _count?: true | DictionaryCrossRefCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DictionaryCrossRefAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DictionaryCrossRefSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DictionaryCrossRefMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DictionaryCrossRefMaxAggregateInputType
  }

  export type GetDictionaryCrossRefAggregateType<T extends DictionaryCrossRefAggregateArgs> = {
        [P in keyof T & keyof AggregateDictionaryCrossRef]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDictionaryCrossRef[P]>
      : GetScalarType<T[P], AggregateDictionaryCrossRef[P]>
  }




  export type DictionaryCrossRefGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictionaryCrossRefWhereInput
    orderBy?: DictionaryCrossRefOrderByWithAggregationInput | DictionaryCrossRefOrderByWithAggregationInput[]
    by: DictionaryCrossRefScalarFieldEnum[] | DictionaryCrossRefScalarFieldEnum
    having?: DictionaryCrossRefScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DictionaryCrossRefCountAggregateInputType | true
    _avg?: DictionaryCrossRefAvgAggregateInputType
    _sum?: DictionaryCrossRefSumAggregateInputType
    _min?: DictionaryCrossRefMinAggregateInputType
    _max?: DictionaryCrossRefMaxAggregateInputType
  }

  export type DictionaryCrossRefGroupByOutputType = {
    xrefId: number
    senseId: number
    targetWord: string
    lang: string
    _count: DictionaryCrossRefCountAggregateOutputType | null
    _avg: DictionaryCrossRefAvgAggregateOutputType | null
    _sum: DictionaryCrossRefSumAggregateOutputType | null
    _min: DictionaryCrossRefMinAggregateOutputType | null
    _max: DictionaryCrossRefMaxAggregateOutputType | null
  }

  type GetDictionaryCrossRefGroupByPayload<T extends DictionaryCrossRefGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DictionaryCrossRefGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DictionaryCrossRefGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DictionaryCrossRefGroupByOutputType[P]>
            : GetScalarType<T[P], DictionaryCrossRefGroupByOutputType[P]>
        }
      >
    >


  export type DictionaryCrossRefSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    xrefId?: boolean
    senseId?: boolean
    targetWord?: boolean
    lang?: boolean
    sense?: boolean | DictionarySenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictionaryCrossRef"]>

  export type DictionaryCrossRefSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    xrefId?: boolean
    senseId?: boolean
    targetWord?: boolean
    lang?: boolean
    sense?: boolean | DictionarySenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictionaryCrossRef"]>

  export type DictionaryCrossRefSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    xrefId?: boolean
    senseId?: boolean
    targetWord?: boolean
    lang?: boolean
    sense?: boolean | DictionarySenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictionaryCrossRef"]>

  export type DictionaryCrossRefSelectScalar = {
    xrefId?: boolean
    senseId?: boolean
    targetWord?: boolean
    lang?: boolean
  }

  export type DictionaryCrossRefOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"xrefId" | "senseId" | "targetWord" | "lang", ExtArgs["result"]["dictionaryCrossRef"]>
  export type DictionaryCrossRefInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sense?: boolean | DictionarySenseDefaultArgs<ExtArgs>
  }
  export type DictionaryCrossRefIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sense?: boolean | DictionarySenseDefaultArgs<ExtArgs>
  }
  export type DictionaryCrossRefIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sense?: boolean | DictionarySenseDefaultArgs<ExtArgs>
  }

  export type $DictionaryCrossRefPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DictionaryCrossRef"
    objects: {
      sense: Prisma.$DictionarySensePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      xrefId: number
      senseId: number
      targetWord: string
      lang: string
    }, ExtArgs["result"]["dictionaryCrossRef"]>
    composites: {}
  }

  type DictionaryCrossRefGetPayload<S extends boolean | null | undefined | DictionaryCrossRefDefaultArgs> = $Result.GetResult<Prisma.$DictionaryCrossRefPayload, S>

  type DictionaryCrossRefCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DictionaryCrossRefFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DictionaryCrossRefCountAggregateInputType | true
    }

  export interface DictionaryCrossRefDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DictionaryCrossRef'], meta: { name: 'DictionaryCrossRef' } }
    /**
     * Find zero or one DictionaryCrossRef that matches the filter.
     * @param {DictionaryCrossRefFindUniqueArgs} args - Arguments to find a DictionaryCrossRef
     * @example
     * // Get one DictionaryCrossRef
     * const dictionaryCrossRef = await prisma.dictionaryCrossRef.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DictionaryCrossRefFindUniqueArgs>(args: SelectSubset<T, DictionaryCrossRefFindUniqueArgs<ExtArgs>>): Prisma__DictionaryCrossRefClient<$Result.GetResult<Prisma.$DictionaryCrossRefPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DictionaryCrossRef that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DictionaryCrossRefFindUniqueOrThrowArgs} args - Arguments to find a DictionaryCrossRef
     * @example
     * // Get one DictionaryCrossRef
     * const dictionaryCrossRef = await prisma.dictionaryCrossRef.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DictionaryCrossRefFindUniqueOrThrowArgs>(args: SelectSubset<T, DictionaryCrossRefFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DictionaryCrossRefClient<$Result.GetResult<Prisma.$DictionaryCrossRefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DictionaryCrossRef that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryCrossRefFindFirstArgs} args - Arguments to find a DictionaryCrossRef
     * @example
     * // Get one DictionaryCrossRef
     * const dictionaryCrossRef = await prisma.dictionaryCrossRef.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DictionaryCrossRefFindFirstArgs>(args?: SelectSubset<T, DictionaryCrossRefFindFirstArgs<ExtArgs>>): Prisma__DictionaryCrossRefClient<$Result.GetResult<Prisma.$DictionaryCrossRefPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DictionaryCrossRef that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryCrossRefFindFirstOrThrowArgs} args - Arguments to find a DictionaryCrossRef
     * @example
     * // Get one DictionaryCrossRef
     * const dictionaryCrossRef = await prisma.dictionaryCrossRef.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DictionaryCrossRefFindFirstOrThrowArgs>(args?: SelectSubset<T, DictionaryCrossRefFindFirstOrThrowArgs<ExtArgs>>): Prisma__DictionaryCrossRefClient<$Result.GetResult<Prisma.$DictionaryCrossRefPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DictionaryCrossRefs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryCrossRefFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DictionaryCrossRefs
     * const dictionaryCrossRefs = await prisma.dictionaryCrossRef.findMany()
     * 
     * // Get first 10 DictionaryCrossRefs
     * const dictionaryCrossRefs = await prisma.dictionaryCrossRef.findMany({ take: 10 })
     * 
     * // Only select the `xrefId`
     * const dictionaryCrossRefWithXrefIdOnly = await prisma.dictionaryCrossRef.findMany({ select: { xrefId: true } })
     * 
     */
    findMany<T extends DictionaryCrossRefFindManyArgs>(args?: SelectSubset<T, DictionaryCrossRefFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryCrossRefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DictionaryCrossRef.
     * @param {DictionaryCrossRefCreateArgs} args - Arguments to create a DictionaryCrossRef.
     * @example
     * // Create one DictionaryCrossRef
     * const DictionaryCrossRef = await prisma.dictionaryCrossRef.create({
     *   data: {
     *     // ... data to create a DictionaryCrossRef
     *   }
     * })
     * 
     */
    create<T extends DictionaryCrossRefCreateArgs>(args: SelectSubset<T, DictionaryCrossRefCreateArgs<ExtArgs>>): Prisma__DictionaryCrossRefClient<$Result.GetResult<Prisma.$DictionaryCrossRefPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DictionaryCrossRefs.
     * @param {DictionaryCrossRefCreateManyArgs} args - Arguments to create many DictionaryCrossRefs.
     * @example
     * // Create many DictionaryCrossRefs
     * const dictionaryCrossRef = await prisma.dictionaryCrossRef.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DictionaryCrossRefCreateManyArgs>(args?: SelectSubset<T, DictionaryCrossRefCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DictionaryCrossRefs and returns the data saved in the database.
     * @param {DictionaryCrossRefCreateManyAndReturnArgs} args - Arguments to create many DictionaryCrossRefs.
     * @example
     * // Create many DictionaryCrossRefs
     * const dictionaryCrossRef = await prisma.dictionaryCrossRef.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DictionaryCrossRefs and only return the `xrefId`
     * const dictionaryCrossRefWithXrefIdOnly = await prisma.dictionaryCrossRef.createManyAndReturn({
     *   select: { xrefId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DictionaryCrossRefCreateManyAndReturnArgs>(args?: SelectSubset<T, DictionaryCrossRefCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryCrossRefPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DictionaryCrossRef.
     * @param {DictionaryCrossRefDeleteArgs} args - Arguments to delete one DictionaryCrossRef.
     * @example
     * // Delete one DictionaryCrossRef
     * const DictionaryCrossRef = await prisma.dictionaryCrossRef.delete({
     *   where: {
     *     // ... filter to delete one DictionaryCrossRef
     *   }
     * })
     * 
     */
    delete<T extends DictionaryCrossRefDeleteArgs>(args: SelectSubset<T, DictionaryCrossRefDeleteArgs<ExtArgs>>): Prisma__DictionaryCrossRefClient<$Result.GetResult<Prisma.$DictionaryCrossRefPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DictionaryCrossRef.
     * @param {DictionaryCrossRefUpdateArgs} args - Arguments to update one DictionaryCrossRef.
     * @example
     * // Update one DictionaryCrossRef
     * const dictionaryCrossRef = await prisma.dictionaryCrossRef.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DictionaryCrossRefUpdateArgs>(args: SelectSubset<T, DictionaryCrossRefUpdateArgs<ExtArgs>>): Prisma__DictionaryCrossRefClient<$Result.GetResult<Prisma.$DictionaryCrossRefPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DictionaryCrossRefs.
     * @param {DictionaryCrossRefDeleteManyArgs} args - Arguments to filter DictionaryCrossRefs to delete.
     * @example
     * // Delete a few DictionaryCrossRefs
     * const { count } = await prisma.dictionaryCrossRef.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DictionaryCrossRefDeleteManyArgs>(args?: SelectSubset<T, DictionaryCrossRefDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DictionaryCrossRefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryCrossRefUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DictionaryCrossRefs
     * const dictionaryCrossRef = await prisma.dictionaryCrossRef.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DictionaryCrossRefUpdateManyArgs>(args: SelectSubset<T, DictionaryCrossRefUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DictionaryCrossRefs and returns the data updated in the database.
     * @param {DictionaryCrossRefUpdateManyAndReturnArgs} args - Arguments to update many DictionaryCrossRefs.
     * @example
     * // Update many DictionaryCrossRefs
     * const dictionaryCrossRef = await prisma.dictionaryCrossRef.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DictionaryCrossRefs and only return the `xrefId`
     * const dictionaryCrossRefWithXrefIdOnly = await prisma.dictionaryCrossRef.updateManyAndReturn({
     *   select: { xrefId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DictionaryCrossRefUpdateManyAndReturnArgs>(args: SelectSubset<T, DictionaryCrossRefUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryCrossRefPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DictionaryCrossRef.
     * @param {DictionaryCrossRefUpsertArgs} args - Arguments to update or create a DictionaryCrossRef.
     * @example
     * // Update or create a DictionaryCrossRef
     * const dictionaryCrossRef = await prisma.dictionaryCrossRef.upsert({
     *   create: {
     *     // ... data to create a DictionaryCrossRef
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DictionaryCrossRef we want to update
     *   }
     * })
     */
    upsert<T extends DictionaryCrossRefUpsertArgs>(args: SelectSubset<T, DictionaryCrossRefUpsertArgs<ExtArgs>>): Prisma__DictionaryCrossRefClient<$Result.GetResult<Prisma.$DictionaryCrossRefPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DictionaryCrossRefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryCrossRefCountArgs} args - Arguments to filter DictionaryCrossRefs to count.
     * @example
     * // Count the number of DictionaryCrossRefs
     * const count = await prisma.dictionaryCrossRef.count({
     *   where: {
     *     // ... the filter for the DictionaryCrossRefs we want to count
     *   }
     * })
    **/
    count<T extends DictionaryCrossRefCountArgs>(
      args?: Subset<T, DictionaryCrossRefCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DictionaryCrossRefCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DictionaryCrossRef.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryCrossRefAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DictionaryCrossRefAggregateArgs>(args: Subset<T, DictionaryCrossRefAggregateArgs>): Prisma.PrismaPromise<GetDictionaryCrossRefAggregateType<T>>

    /**
     * Group by DictionaryCrossRef.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryCrossRefGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DictionaryCrossRefGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DictionaryCrossRefGroupByArgs['orderBy'] }
        : { orderBy?: DictionaryCrossRefGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DictionaryCrossRefGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDictionaryCrossRefGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DictionaryCrossRef model
   */
  readonly fields: DictionaryCrossRefFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DictionaryCrossRef.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DictionaryCrossRefClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sense<T extends DictionarySenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DictionarySenseDefaultArgs<ExtArgs>>): Prisma__DictionarySenseClient<$Result.GetResult<Prisma.$DictionarySensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DictionaryCrossRef model
   */
  interface DictionaryCrossRefFieldRefs {
    readonly xrefId: FieldRef<"DictionaryCrossRef", 'Int'>
    readonly senseId: FieldRef<"DictionaryCrossRef", 'Int'>
    readonly targetWord: FieldRef<"DictionaryCrossRef", 'String'>
    readonly lang: FieldRef<"DictionaryCrossRef", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DictionaryCrossRef findUnique
   */
  export type DictionaryCrossRefFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryCrossRef
     */
    select?: DictionaryCrossRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryCrossRef
     */
    omit?: DictionaryCrossRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryCrossRefInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryCrossRef to fetch.
     */
    where: DictionaryCrossRefWhereUniqueInput
  }

  /**
   * DictionaryCrossRef findUniqueOrThrow
   */
  export type DictionaryCrossRefFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryCrossRef
     */
    select?: DictionaryCrossRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryCrossRef
     */
    omit?: DictionaryCrossRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryCrossRefInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryCrossRef to fetch.
     */
    where: DictionaryCrossRefWhereUniqueInput
  }

  /**
   * DictionaryCrossRef findFirst
   */
  export type DictionaryCrossRefFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryCrossRef
     */
    select?: DictionaryCrossRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryCrossRef
     */
    omit?: DictionaryCrossRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryCrossRefInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryCrossRef to fetch.
     */
    where?: DictionaryCrossRefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryCrossRefs to fetch.
     */
    orderBy?: DictionaryCrossRefOrderByWithRelationInput | DictionaryCrossRefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DictionaryCrossRefs.
     */
    cursor?: DictionaryCrossRefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryCrossRefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryCrossRefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DictionaryCrossRefs.
     */
    distinct?: DictionaryCrossRefScalarFieldEnum | DictionaryCrossRefScalarFieldEnum[]
  }

  /**
   * DictionaryCrossRef findFirstOrThrow
   */
  export type DictionaryCrossRefFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryCrossRef
     */
    select?: DictionaryCrossRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryCrossRef
     */
    omit?: DictionaryCrossRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryCrossRefInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryCrossRef to fetch.
     */
    where?: DictionaryCrossRefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryCrossRefs to fetch.
     */
    orderBy?: DictionaryCrossRefOrderByWithRelationInput | DictionaryCrossRefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DictionaryCrossRefs.
     */
    cursor?: DictionaryCrossRefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryCrossRefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryCrossRefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DictionaryCrossRefs.
     */
    distinct?: DictionaryCrossRefScalarFieldEnum | DictionaryCrossRefScalarFieldEnum[]
  }

  /**
   * DictionaryCrossRef findMany
   */
  export type DictionaryCrossRefFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryCrossRef
     */
    select?: DictionaryCrossRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryCrossRef
     */
    omit?: DictionaryCrossRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryCrossRefInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryCrossRefs to fetch.
     */
    where?: DictionaryCrossRefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryCrossRefs to fetch.
     */
    orderBy?: DictionaryCrossRefOrderByWithRelationInput | DictionaryCrossRefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DictionaryCrossRefs.
     */
    cursor?: DictionaryCrossRefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryCrossRefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryCrossRefs.
     */
    skip?: number
    distinct?: DictionaryCrossRefScalarFieldEnum | DictionaryCrossRefScalarFieldEnum[]
  }

  /**
   * DictionaryCrossRef create
   */
  export type DictionaryCrossRefCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryCrossRef
     */
    select?: DictionaryCrossRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryCrossRef
     */
    omit?: DictionaryCrossRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryCrossRefInclude<ExtArgs> | null
    /**
     * The data needed to create a DictionaryCrossRef.
     */
    data: XOR<DictionaryCrossRefCreateInput, DictionaryCrossRefUncheckedCreateInput>
  }

  /**
   * DictionaryCrossRef createMany
   */
  export type DictionaryCrossRefCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DictionaryCrossRefs.
     */
    data: DictionaryCrossRefCreateManyInput | DictionaryCrossRefCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DictionaryCrossRef createManyAndReturn
   */
  export type DictionaryCrossRefCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryCrossRef
     */
    select?: DictionaryCrossRefSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryCrossRef
     */
    omit?: DictionaryCrossRefOmit<ExtArgs> | null
    /**
     * The data used to create many DictionaryCrossRefs.
     */
    data: DictionaryCrossRefCreateManyInput | DictionaryCrossRefCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryCrossRefIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DictionaryCrossRef update
   */
  export type DictionaryCrossRefUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryCrossRef
     */
    select?: DictionaryCrossRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryCrossRef
     */
    omit?: DictionaryCrossRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryCrossRefInclude<ExtArgs> | null
    /**
     * The data needed to update a DictionaryCrossRef.
     */
    data: XOR<DictionaryCrossRefUpdateInput, DictionaryCrossRefUncheckedUpdateInput>
    /**
     * Choose, which DictionaryCrossRef to update.
     */
    where: DictionaryCrossRefWhereUniqueInput
  }

  /**
   * DictionaryCrossRef updateMany
   */
  export type DictionaryCrossRefUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DictionaryCrossRefs.
     */
    data: XOR<DictionaryCrossRefUpdateManyMutationInput, DictionaryCrossRefUncheckedUpdateManyInput>
    /**
     * Filter which DictionaryCrossRefs to update
     */
    where?: DictionaryCrossRefWhereInput
    /**
     * Limit how many DictionaryCrossRefs to update.
     */
    limit?: number
  }

  /**
   * DictionaryCrossRef updateManyAndReturn
   */
  export type DictionaryCrossRefUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryCrossRef
     */
    select?: DictionaryCrossRefSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryCrossRef
     */
    omit?: DictionaryCrossRefOmit<ExtArgs> | null
    /**
     * The data used to update DictionaryCrossRefs.
     */
    data: XOR<DictionaryCrossRefUpdateManyMutationInput, DictionaryCrossRefUncheckedUpdateManyInput>
    /**
     * Filter which DictionaryCrossRefs to update
     */
    where?: DictionaryCrossRefWhereInput
    /**
     * Limit how many DictionaryCrossRefs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryCrossRefIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DictionaryCrossRef upsert
   */
  export type DictionaryCrossRefUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryCrossRef
     */
    select?: DictionaryCrossRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryCrossRef
     */
    omit?: DictionaryCrossRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryCrossRefInclude<ExtArgs> | null
    /**
     * The filter to search for the DictionaryCrossRef to update in case it exists.
     */
    where: DictionaryCrossRefWhereUniqueInput
    /**
     * In case the DictionaryCrossRef found by the `where` argument doesn't exist, create a new DictionaryCrossRef with this data.
     */
    create: XOR<DictionaryCrossRefCreateInput, DictionaryCrossRefUncheckedCreateInput>
    /**
     * In case the DictionaryCrossRef was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DictionaryCrossRefUpdateInput, DictionaryCrossRefUncheckedUpdateInput>
  }

  /**
   * DictionaryCrossRef delete
   */
  export type DictionaryCrossRefDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryCrossRef
     */
    select?: DictionaryCrossRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryCrossRef
     */
    omit?: DictionaryCrossRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryCrossRefInclude<ExtArgs> | null
    /**
     * Filter which DictionaryCrossRef to delete.
     */
    where: DictionaryCrossRefWhereUniqueInput
  }

  /**
   * DictionaryCrossRef deleteMany
   */
  export type DictionaryCrossRefDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DictionaryCrossRefs to delete
     */
    where?: DictionaryCrossRefWhereInput
    /**
     * Limit how many DictionaryCrossRefs to delete.
     */
    limit?: number
  }

  /**
   * DictionaryCrossRef without action
   */
  export type DictionaryCrossRefDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryCrossRef
     */
    select?: DictionaryCrossRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryCrossRef
     */
    omit?: DictionaryCrossRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryCrossRefInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createAt: 'createAt',
    updateAt: 'updateAt',
    username: 'username'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    user_id: 'user_id',
    musicSource: 'musicSource',
    premade_music_id: 'premade_music_id',
    uploaded_music_id: 'uploaded_music_id',
    audio_timeline: 'audio_timeline',
    creation_date: 'creation_date'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const StickyNotesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    user_id: 'user_id',
    music_id: 'music_id'
  };

  export type StickyNotesScalarFieldEnum = (typeof StickyNotesScalarFieldEnum)[keyof typeof StickyNotesScalarFieldEnum]


  export const LinkScalarFieldEnum: {
    link_id: 'link_id',
    song_id: 'song_id',
    created_by: 'created_by',
    is_public: 'is_public',
    created_at: 'created_at',
    expires_at: 'expires_at'
  };

  export type LinkScalarFieldEnum = (typeof LinkScalarFieldEnum)[keyof typeof LinkScalarFieldEnum]


  export const LinkPermissionScalarFieldEnum: {
    link_permission_id: 'link_permission_id',
    link_id: 'link_id',
    user_id: 'user_id',
    can_view: 'can_view'
  };

  export type LinkPermissionScalarFieldEnum = (typeof LinkPermissionScalarFieldEnum)[keyof typeof LinkPermissionScalarFieldEnum]


  export const PremadeMusicScalarFieldEnum: {
    music_id: 'music_id',
    uploaded_date: 'uploaded_date',
    music_name: 'music_name',
    path: 'path'
  };

  export type PremadeMusicScalarFieldEnum = (typeof PremadeMusicScalarFieldEnum)[keyof typeof PremadeMusicScalarFieldEnum]


  export const UploadedMusicScalarFieldEnum: {
    music_id: 'music_id',
    uploaded_by: 'uploaded_by',
    music_name: 'music_name',
    path: 'path'
  };

  export type UploadedMusicScalarFieldEnum = (typeof UploadedMusicScalarFieldEnum)[keyof typeof UploadedMusicScalarFieldEnum]


  export const DictionaryEntryScalarFieldEnum: {
    entryId: 'entryId',
    word: 'word',
    page: 'page',
    homNumber: 'homNumber'
  };

  export type DictionaryEntryScalarFieldEnum = (typeof DictionaryEntryScalarFieldEnum)[keyof typeof DictionaryEntryScalarFieldEnum]


  export const DictionaryHeadwordScalarFieldEnum: {
    headId: 'headId',
    entryId: 'entryId',
    head: 'head',
    normalizedHead: 'normalizedHead',
    type: 'type',
    pos: 'pos'
  };

  export type DictionaryHeadwordScalarFieldEnum = (typeof DictionaryHeadwordScalarFieldEnum)[keyof typeof DictionaryHeadwordScalarFieldEnum]


  export const DictionarySenseScalarFieldEnum: {
    senseId: 'senseId',
    entryId: 'entryId',
    number: 'number',
    definition: 'definition',
    dialect: 'dialect'
  };

  export type DictionarySenseScalarFieldEnum = (typeof DictionarySenseScalarFieldEnum)[keyof typeof DictionarySenseScalarFieldEnum]


  export const DictionaryTranslationScalarFieldEnum: {
    transId: 'transId',
    senseId: 'senseId',
    lang: 'lang',
    translation: 'translation'
  };

  export type DictionaryTranslationScalarFieldEnum = (typeof DictionaryTranslationScalarFieldEnum)[keyof typeof DictionaryTranslationScalarFieldEnum]


  export const DictionaryExampleScalarFieldEnum: {
    exampleId: 'exampleId',
    senseId: 'senseId',
    textCebuano: 'textCebuano',
    textTranslation: 'textTranslation'
  };

  export type DictionaryExampleScalarFieldEnum = (typeof DictionaryExampleScalarFieldEnum)[keyof typeof DictionaryExampleScalarFieldEnum]


  export const DictionaryCrossRefScalarFieldEnum: {
    xrefId: 'xrefId',
    senseId: 'senseId',
    targetWord: 'targetWord',
    lang: 'lang'
  };

  export type DictionaryCrossRefScalarFieldEnum = (typeof DictionaryCrossRefScalarFieldEnum)[keyof typeof DictionaryCrossRefScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MusicSource'
   */
  export type EnumMusicSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MusicSource'>
    


  /**
   * Reference to a field of type 'MusicSource[]'
   */
  export type ListEnumMusicSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MusicSource[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    username?: StringFilter<"User"> | string
    links?: LinkListRelationFilter
    linkPermissions?: LinkPermissionListRelationFilter
    sessions?: SessionListRelationFilter
    stickyNotes?: StickyNotesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    username?: SortOrder
    links?: LinkOrderByRelationAggregateInput
    linkPermissions?: LinkPermissionOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    stickyNotes?: StickyNotesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    links?: LinkListRelationFilter
    linkPermissions?: LinkPermissionListRelationFilter
    sessions?: SessionListRelationFilter
    stickyNotes?: StickyNotesListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    username?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    username?: StringWithAggregatesFilter<"User"> | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    title?: StringFilter<"Session"> | string
    user_id?: StringFilter<"Session"> | string
    musicSource?: EnumMusicSourceFilter<"Session"> | $Enums.MusicSource
    premade_music_id?: StringNullableFilter<"Session"> | string | null
    uploaded_music_id?: StringNullableFilter<"Session"> | string | null
    audio_timeline?: JsonFilter<"Session">
    creation_date?: DateTimeFilter<"Session"> | Date | string
    links?: LinkListRelationFilter
    premadeMusic?: XOR<PremadeMusicNullableScalarRelationFilter, PremadeMusicWhereInput> | null
    uploadedMusic?: XOR<UploadedMusicNullableScalarRelationFilter, UploadedMusicWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    user_id?: SortOrder
    musicSource?: SortOrder
    premade_music_id?: SortOrderInput | SortOrder
    uploaded_music_id?: SortOrderInput | SortOrder
    audio_timeline?: SortOrder
    creation_date?: SortOrder
    links?: LinkOrderByRelationAggregateInput
    premadeMusic?: PremadeMusicOrderByWithRelationInput
    uploadedMusic?: UploadedMusicOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    title?: StringFilter<"Session"> | string
    user_id?: StringFilter<"Session"> | string
    musicSource?: EnumMusicSourceFilter<"Session"> | $Enums.MusicSource
    premade_music_id?: StringNullableFilter<"Session"> | string | null
    uploaded_music_id?: StringNullableFilter<"Session"> | string | null
    audio_timeline?: JsonFilter<"Session">
    creation_date?: DateTimeFilter<"Session"> | Date | string
    links?: LinkListRelationFilter
    premadeMusic?: XOR<PremadeMusicNullableScalarRelationFilter, PremadeMusicWhereInput> | null
    uploadedMusic?: XOR<UploadedMusicNullableScalarRelationFilter, UploadedMusicWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    user_id?: SortOrder
    musicSource?: SortOrder
    premade_music_id?: SortOrderInput | SortOrder
    uploaded_music_id?: SortOrderInput | SortOrder
    audio_timeline?: SortOrder
    creation_date?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    title?: StringWithAggregatesFilter<"Session"> | string
    user_id?: StringWithAggregatesFilter<"Session"> | string
    musicSource?: EnumMusicSourceWithAggregatesFilter<"Session"> | $Enums.MusicSource
    premade_music_id?: StringNullableWithAggregatesFilter<"Session"> | string | null
    uploaded_music_id?: StringNullableWithAggregatesFilter<"Session"> | string | null
    audio_timeline?: JsonWithAggregatesFilter<"Session">
    creation_date?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type StickyNotesWhereInput = {
    AND?: StickyNotesWhereInput | StickyNotesWhereInput[]
    OR?: StickyNotesWhereInput[]
    NOT?: StickyNotesWhereInput | StickyNotesWhereInput[]
    id?: StringFilter<"StickyNotes"> | string
    title?: StringFilter<"StickyNotes"> | string
    content?: StringFilter<"StickyNotes"> | string
    user_id?: StringFilter<"StickyNotes"> | string
    music_id?: StringNullableFilter<"StickyNotes"> | string | null
    music?: XOR<UploadedMusicNullableScalarRelationFilter, UploadedMusicWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StickyNotesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    music_id?: SortOrderInput | SortOrder
    music?: UploadedMusicOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type StickyNotesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StickyNotesWhereInput | StickyNotesWhereInput[]
    OR?: StickyNotesWhereInput[]
    NOT?: StickyNotesWhereInput | StickyNotesWhereInput[]
    title?: StringFilter<"StickyNotes"> | string
    content?: StringFilter<"StickyNotes"> | string
    user_id?: StringFilter<"StickyNotes"> | string
    music_id?: StringNullableFilter<"StickyNotes"> | string | null
    music?: XOR<UploadedMusicNullableScalarRelationFilter, UploadedMusicWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StickyNotesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    music_id?: SortOrderInput | SortOrder
    _count?: StickyNotesCountOrderByAggregateInput
    _max?: StickyNotesMaxOrderByAggregateInput
    _min?: StickyNotesMinOrderByAggregateInput
  }

  export type StickyNotesScalarWhereWithAggregatesInput = {
    AND?: StickyNotesScalarWhereWithAggregatesInput | StickyNotesScalarWhereWithAggregatesInput[]
    OR?: StickyNotesScalarWhereWithAggregatesInput[]
    NOT?: StickyNotesScalarWhereWithAggregatesInput | StickyNotesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StickyNotes"> | string
    title?: StringWithAggregatesFilter<"StickyNotes"> | string
    content?: StringWithAggregatesFilter<"StickyNotes"> | string
    user_id?: StringWithAggregatesFilter<"StickyNotes"> | string
    music_id?: StringNullableWithAggregatesFilter<"StickyNotes"> | string | null
  }

  export type LinkWhereInput = {
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    link_id?: StringFilter<"Link"> | string
    song_id?: StringFilter<"Link"> | string
    created_by?: StringFilter<"Link"> | string
    is_public?: BoolFilter<"Link"> | boolean
    created_at?: DateTimeFilter<"Link"> | Date | string
    expires_at?: DateTimeFilter<"Link"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    linkPermissions?: LinkPermissionListRelationFilter
  }

  export type LinkOrderByWithRelationInput = {
    link_id?: SortOrder
    song_id?: SortOrder
    created_by?: SortOrder
    is_public?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    creator?: UserOrderByWithRelationInput
    session?: SessionOrderByWithRelationInput
    linkPermissions?: LinkPermissionOrderByRelationAggregateInput
  }

  export type LinkWhereUniqueInput = Prisma.AtLeast<{
    link_id?: string
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    song_id?: StringFilter<"Link"> | string
    created_by?: StringFilter<"Link"> | string
    is_public?: BoolFilter<"Link"> | boolean
    created_at?: DateTimeFilter<"Link"> | Date | string
    expires_at?: DateTimeFilter<"Link"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    linkPermissions?: LinkPermissionListRelationFilter
  }, "link_id">

  export type LinkOrderByWithAggregationInput = {
    link_id?: SortOrder
    song_id?: SortOrder
    created_by?: SortOrder
    is_public?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    _count?: LinkCountOrderByAggregateInput
    _max?: LinkMaxOrderByAggregateInput
    _min?: LinkMinOrderByAggregateInput
  }

  export type LinkScalarWhereWithAggregatesInput = {
    AND?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    OR?: LinkScalarWhereWithAggregatesInput[]
    NOT?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    link_id?: StringWithAggregatesFilter<"Link"> | string
    song_id?: StringWithAggregatesFilter<"Link"> | string
    created_by?: StringWithAggregatesFilter<"Link"> | string
    is_public?: BoolWithAggregatesFilter<"Link"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Link"> | Date | string
    expires_at?: DateTimeWithAggregatesFilter<"Link"> | Date | string
  }

  export type LinkPermissionWhereInput = {
    AND?: LinkPermissionWhereInput | LinkPermissionWhereInput[]
    OR?: LinkPermissionWhereInput[]
    NOT?: LinkPermissionWhereInput | LinkPermissionWhereInput[]
    link_permission_id?: StringFilter<"LinkPermission"> | string
    link_id?: StringFilter<"LinkPermission"> | string
    user_id?: StringFilter<"LinkPermission"> | string
    can_view?: BoolFilter<"LinkPermission"> | boolean
    userLink?: XOR<LinkScalarRelationFilter, LinkWhereInput>
    link?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LinkPermissionOrderByWithRelationInput = {
    link_permission_id?: SortOrder
    link_id?: SortOrder
    user_id?: SortOrder
    can_view?: SortOrder
    userLink?: LinkOrderByWithRelationInput
    link?: UserOrderByWithRelationInput
  }

  export type LinkPermissionWhereUniqueInput = Prisma.AtLeast<{
    link_permission_id?: string
    AND?: LinkPermissionWhereInput | LinkPermissionWhereInput[]
    OR?: LinkPermissionWhereInput[]
    NOT?: LinkPermissionWhereInput | LinkPermissionWhereInput[]
    link_id?: StringFilter<"LinkPermission"> | string
    user_id?: StringFilter<"LinkPermission"> | string
    can_view?: BoolFilter<"LinkPermission"> | boolean
    userLink?: XOR<LinkScalarRelationFilter, LinkWhereInput>
    link?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "link_permission_id">

  export type LinkPermissionOrderByWithAggregationInput = {
    link_permission_id?: SortOrder
    link_id?: SortOrder
    user_id?: SortOrder
    can_view?: SortOrder
    _count?: LinkPermissionCountOrderByAggregateInput
    _max?: LinkPermissionMaxOrderByAggregateInput
    _min?: LinkPermissionMinOrderByAggregateInput
  }

  export type LinkPermissionScalarWhereWithAggregatesInput = {
    AND?: LinkPermissionScalarWhereWithAggregatesInput | LinkPermissionScalarWhereWithAggregatesInput[]
    OR?: LinkPermissionScalarWhereWithAggregatesInput[]
    NOT?: LinkPermissionScalarWhereWithAggregatesInput | LinkPermissionScalarWhereWithAggregatesInput[]
    link_permission_id?: StringWithAggregatesFilter<"LinkPermission"> | string
    link_id?: StringWithAggregatesFilter<"LinkPermission"> | string
    user_id?: StringWithAggregatesFilter<"LinkPermission"> | string
    can_view?: BoolWithAggregatesFilter<"LinkPermission"> | boolean
  }

  export type PremadeMusicWhereInput = {
    AND?: PremadeMusicWhereInput | PremadeMusicWhereInput[]
    OR?: PremadeMusicWhereInput[]
    NOT?: PremadeMusicWhereInput | PremadeMusicWhereInput[]
    music_id?: StringFilter<"PremadeMusic"> | string
    uploaded_date?: DateTimeFilter<"PremadeMusic"> | Date | string
    music_name?: StringFilter<"PremadeMusic"> | string
    path?: StringFilter<"PremadeMusic"> | string
    session?: SessionListRelationFilter
  }

  export type PremadeMusicOrderByWithRelationInput = {
    music_id?: SortOrder
    uploaded_date?: SortOrder
    music_name?: SortOrder
    path?: SortOrder
    session?: SessionOrderByRelationAggregateInput
  }

  export type PremadeMusicWhereUniqueInput = Prisma.AtLeast<{
    music_id?: string
    music_name?: string
    AND?: PremadeMusicWhereInput | PremadeMusicWhereInput[]
    OR?: PremadeMusicWhereInput[]
    NOT?: PremadeMusicWhereInput | PremadeMusicWhereInput[]
    uploaded_date?: DateTimeFilter<"PremadeMusic"> | Date | string
    path?: StringFilter<"PremadeMusic"> | string
    session?: SessionListRelationFilter
  }, "music_id" | "music_name">

  export type PremadeMusicOrderByWithAggregationInput = {
    music_id?: SortOrder
    uploaded_date?: SortOrder
    music_name?: SortOrder
    path?: SortOrder
    _count?: PremadeMusicCountOrderByAggregateInput
    _max?: PremadeMusicMaxOrderByAggregateInput
    _min?: PremadeMusicMinOrderByAggregateInput
  }

  export type PremadeMusicScalarWhereWithAggregatesInput = {
    AND?: PremadeMusicScalarWhereWithAggregatesInput | PremadeMusicScalarWhereWithAggregatesInput[]
    OR?: PremadeMusicScalarWhereWithAggregatesInput[]
    NOT?: PremadeMusicScalarWhereWithAggregatesInput | PremadeMusicScalarWhereWithAggregatesInput[]
    music_id?: StringWithAggregatesFilter<"PremadeMusic"> | string
    uploaded_date?: DateTimeWithAggregatesFilter<"PremadeMusic"> | Date | string
    music_name?: StringWithAggregatesFilter<"PremadeMusic"> | string
    path?: StringWithAggregatesFilter<"PremadeMusic"> | string
  }

  export type UploadedMusicWhereInput = {
    AND?: UploadedMusicWhereInput | UploadedMusicWhereInput[]
    OR?: UploadedMusicWhereInput[]
    NOT?: UploadedMusicWhereInput | UploadedMusicWhereInput[]
    music_id?: StringFilter<"UploadedMusic"> | string
    uploaded_by?: StringFilter<"UploadedMusic"> | string
    music_name?: StringFilter<"UploadedMusic"> | string
    path?: StringFilter<"UploadedMusic"> | string
    session?: SessionListRelationFilter
    stickyNotes?: StickyNotesListRelationFilter
  }

  export type UploadedMusicOrderByWithRelationInput = {
    music_id?: SortOrder
    uploaded_by?: SortOrder
    music_name?: SortOrder
    path?: SortOrder
    session?: SessionOrderByRelationAggregateInput
    stickyNotes?: StickyNotesOrderByRelationAggregateInput
  }

  export type UploadedMusicWhereUniqueInput = Prisma.AtLeast<{
    music_id?: string
    music_name?: string
    AND?: UploadedMusicWhereInput | UploadedMusicWhereInput[]
    OR?: UploadedMusicWhereInput[]
    NOT?: UploadedMusicWhereInput | UploadedMusicWhereInput[]
    uploaded_by?: StringFilter<"UploadedMusic"> | string
    path?: StringFilter<"UploadedMusic"> | string
    session?: SessionListRelationFilter
    stickyNotes?: StickyNotesListRelationFilter
  }, "music_id" | "music_name">

  export type UploadedMusicOrderByWithAggregationInput = {
    music_id?: SortOrder
    uploaded_by?: SortOrder
    music_name?: SortOrder
    path?: SortOrder
    _count?: UploadedMusicCountOrderByAggregateInput
    _max?: UploadedMusicMaxOrderByAggregateInput
    _min?: UploadedMusicMinOrderByAggregateInput
  }

  export type UploadedMusicScalarWhereWithAggregatesInput = {
    AND?: UploadedMusicScalarWhereWithAggregatesInput | UploadedMusicScalarWhereWithAggregatesInput[]
    OR?: UploadedMusicScalarWhereWithAggregatesInput[]
    NOT?: UploadedMusicScalarWhereWithAggregatesInput | UploadedMusicScalarWhereWithAggregatesInput[]
    music_id?: StringWithAggregatesFilter<"UploadedMusic"> | string
    uploaded_by?: StringWithAggregatesFilter<"UploadedMusic"> | string
    music_name?: StringWithAggregatesFilter<"UploadedMusic"> | string
    path?: StringWithAggregatesFilter<"UploadedMusic"> | string
  }

  export type DictionaryEntryWhereInput = {
    AND?: DictionaryEntryWhereInput | DictionaryEntryWhereInput[]
    OR?: DictionaryEntryWhereInput[]
    NOT?: DictionaryEntryWhereInput | DictionaryEntryWhereInput[]
    entryId?: IntFilter<"DictionaryEntry"> | number
    word?: StringFilter<"DictionaryEntry"> | string
    page?: StringNullableFilter<"DictionaryEntry"> | string | null
    homNumber?: IntNullableFilter<"DictionaryEntry"> | number | null
    headwords?: DictionaryHeadwordListRelationFilter
    senses?: DictionarySenseListRelationFilter
  }

  export type DictionaryEntryOrderByWithRelationInput = {
    entryId?: SortOrder
    word?: SortOrder
    page?: SortOrderInput | SortOrder
    homNumber?: SortOrderInput | SortOrder
    headwords?: DictionaryHeadwordOrderByRelationAggregateInput
    senses?: DictionarySenseOrderByRelationAggregateInput
  }

  export type DictionaryEntryWhereUniqueInput = Prisma.AtLeast<{
    entryId?: number
    AND?: DictionaryEntryWhereInput | DictionaryEntryWhereInput[]
    OR?: DictionaryEntryWhereInput[]
    NOT?: DictionaryEntryWhereInput | DictionaryEntryWhereInput[]
    word?: StringFilter<"DictionaryEntry"> | string
    page?: StringNullableFilter<"DictionaryEntry"> | string | null
    homNumber?: IntNullableFilter<"DictionaryEntry"> | number | null
    headwords?: DictionaryHeadwordListRelationFilter
    senses?: DictionarySenseListRelationFilter
  }, "entryId">

  export type DictionaryEntryOrderByWithAggregationInput = {
    entryId?: SortOrder
    word?: SortOrder
    page?: SortOrderInput | SortOrder
    homNumber?: SortOrderInput | SortOrder
    _count?: DictionaryEntryCountOrderByAggregateInput
    _avg?: DictionaryEntryAvgOrderByAggregateInput
    _max?: DictionaryEntryMaxOrderByAggregateInput
    _min?: DictionaryEntryMinOrderByAggregateInput
    _sum?: DictionaryEntrySumOrderByAggregateInput
  }

  export type DictionaryEntryScalarWhereWithAggregatesInput = {
    AND?: DictionaryEntryScalarWhereWithAggregatesInput | DictionaryEntryScalarWhereWithAggregatesInput[]
    OR?: DictionaryEntryScalarWhereWithAggregatesInput[]
    NOT?: DictionaryEntryScalarWhereWithAggregatesInput | DictionaryEntryScalarWhereWithAggregatesInput[]
    entryId?: IntWithAggregatesFilter<"DictionaryEntry"> | number
    word?: StringWithAggregatesFilter<"DictionaryEntry"> | string
    page?: StringNullableWithAggregatesFilter<"DictionaryEntry"> | string | null
    homNumber?: IntNullableWithAggregatesFilter<"DictionaryEntry"> | number | null
  }

  export type DictionaryHeadwordWhereInput = {
    AND?: DictionaryHeadwordWhereInput | DictionaryHeadwordWhereInput[]
    OR?: DictionaryHeadwordWhereInput[]
    NOT?: DictionaryHeadwordWhereInput | DictionaryHeadwordWhereInput[]
    headId?: IntFilter<"DictionaryHeadword"> | number
    entryId?: IntFilter<"DictionaryHeadword"> | number
    head?: StringFilter<"DictionaryHeadword"> | string
    normalizedHead?: StringFilter<"DictionaryHeadword"> | string
    type?: StringNullableFilter<"DictionaryHeadword"> | string | null
    pos?: StringNullableFilter<"DictionaryHeadword"> | string | null
    entry?: XOR<DictionaryEntryScalarRelationFilter, DictionaryEntryWhereInput>
  }

  export type DictionaryHeadwordOrderByWithRelationInput = {
    headId?: SortOrder
    entryId?: SortOrder
    head?: SortOrder
    normalizedHead?: SortOrder
    type?: SortOrderInput | SortOrder
    pos?: SortOrderInput | SortOrder
    entry?: DictionaryEntryOrderByWithRelationInput
  }

  export type DictionaryHeadwordWhereUniqueInput = Prisma.AtLeast<{
    headId?: number
    AND?: DictionaryHeadwordWhereInput | DictionaryHeadwordWhereInput[]
    OR?: DictionaryHeadwordWhereInput[]
    NOT?: DictionaryHeadwordWhereInput | DictionaryHeadwordWhereInput[]
    entryId?: IntFilter<"DictionaryHeadword"> | number
    head?: StringFilter<"DictionaryHeadword"> | string
    normalizedHead?: StringFilter<"DictionaryHeadword"> | string
    type?: StringNullableFilter<"DictionaryHeadword"> | string | null
    pos?: StringNullableFilter<"DictionaryHeadword"> | string | null
    entry?: XOR<DictionaryEntryScalarRelationFilter, DictionaryEntryWhereInput>
  }, "headId">

  export type DictionaryHeadwordOrderByWithAggregationInput = {
    headId?: SortOrder
    entryId?: SortOrder
    head?: SortOrder
    normalizedHead?: SortOrder
    type?: SortOrderInput | SortOrder
    pos?: SortOrderInput | SortOrder
    _count?: DictionaryHeadwordCountOrderByAggregateInput
    _avg?: DictionaryHeadwordAvgOrderByAggregateInput
    _max?: DictionaryHeadwordMaxOrderByAggregateInput
    _min?: DictionaryHeadwordMinOrderByAggregateInput
    _sum?: DictionaryHeadwordSumOrderByAggregateInput
  }

  export type DictionaryHeadwordScalarWhereWithAggregatesInput = {
    AND?: DictionaryHeadwordScalarWhereWithAggregatesInput | DictionaryHeadwordScalarWhereWithAggregatesInput[]
    OR?: DictionaryHeadwordScalarWhereWithAggregatesInput[]
    NOT?: DictionaryHeadwordScalarWhereWithAggregatesInput | DictionaryHeadwordScalarWhereWithAggregatesInput[]
    headId?: IntWithAggregatesFilter<"DictionaryHeadword"> | number
    entryId?: IntWithAggregatesFilter<"DictionaryHeadword"> | number
    head?: StringWithAggregatesFilter<"DictionaryHeadword"> | string
    normalizedHead?: StringWithAggregatesFilter<"DictionaryHeadword"> | string
    type?: StringNullableWithAggregatesFilter<"DictionaryHeadword"> | string | null
    pos?: StringNullableWithAggregatesFilter<"DictionaryHeadword"> | string | null
  }

  export type DictionarySenseWhereInput = {
    AND?: DictionarySenseWhereInput | DictionarySenseWhereInput[]
    OR?: DictionarySenseWhereInput[]
    NOT?: DictionarySenseWhereInput | DictionarySenseWhereInput[]
    senseId?: IntFilter<"DictionarySense"> | number
    entryId?: IntFilter<"DictionarySense"> | number
    number?: IntNullableFilter<"DictionarySense"> | number | null
    definition?: StringNullableFilter<"DictionarySense"> | string | null
    dialect?: StringNullableFilter<"DictionarySense"> | string | null
    examples?: DictionaryExampleListRelationFilter
    entry?: XOR<DictionaryEntryScalarRelationFilter, DictionaryEntryWhereInput>
    translations?: DictionaryTranslationListRelationFilter
    crossRefs?: DictionaryCrossRefListRelationFilter
  }

  export type DictionarySenseOrderByWithRelationInput = {
    senseId?: SortOrder
    entryId?: SortOrder
    number?: SortOrderInput | SortOrder
    definition?: SortOrderInput | SortOrder
    dialect?: SortOrderInput | SortOrder
    examples?: DictionaryExampleOrderByRelationAggregateInput
    entry?: DictionaryEntryOrderByWithRelationInput
    translations?: DictionaryTranslationOrderByRelationAggregateInput
    crossRefs?: DictionaryCrossRefOrderByRelationAggregateInput
  }

  export type DictionarySenseWhereUniqueInput = Prisma.AtLeast<{
    senseId?: number
    AND?: DictionarySenseWhereInput | DictionarySenseWhereInput[]
    OR?: DictionarySenseWhereInput[]
    NOT?: DictionarySenseWhereInput | DictionarySenseWhereInput[]
    entryId?: IntFilter<"DictionarySense"> | number
    number?: IntNullableFilter<"DictionarySense"> | number | null
    definition?: StringNullableFilter<"DictionarySense"> | string | null
    dialect?: StringNullableFilter<"DictionarySense"> | string | null
    examples?: DictionaryExampleListRelationFilter
    entry?: XOR<DictionaryEntryScalarRelationFilter, DictionaryEntryWhereInput>
    translations?: DictionaryTranslationListRelationFilter
    crossRefs?: DictionaryCrossRefListRelationFilter
  }, "senseId">

  export type DictionarySenseOrderByWithAggregationInput = {
    senseId?: SortOrder
    entryId?: SortOrder
    number?: SortOrderInput | SortOrder
    definition?: SortOrderInput | SortOrder
    dialect?: SortOrderInput | SortOrder
    _count?: DictionarySenseCountOrderByAggregateInput
    _avg?: DictionarySenseAvgOrderByAggregateInput
    _max?: DictionarySenseMaxOrderByAggregateInput
    _min?: DictionarySenseMinOrderByAggregateInput
    _sum?: DictionarySenseSumOrderByAggregateInput
  }

  export type DictionarySenseScalarWhereWithAggregatesInput = {
    AND?: DictionarySenseScalarWhereWithAggregatesInput | DictionarySenseScalarWhereWithAggregatesInput[]
    OR?: DictionarySenseScalarWhereWithAggregatesInput[]
    NOT?: DictionarySenseScalarWhereWithAggregatesInput | DictionarySenseScalarWhereWithAggregatesInput[]
    senseId?: IntWithAggregatesFilter<"DictionarySense"> | number
    entryId?: IntWithAggregatesFilter<"DictionarySense"> | number
    number?: IntNullableWithAggregatesFilter<"DictionarySense"> | number | null
    definition?: StringNullableWithAggregatesFilter<"DictionarySense"> | string | null
    dialect?: StringNullableWithAggregatesFilter<"DictionarySense"> | string | null
  }

  export type DictionaryTranslationWhereInput = {
    AND?: DictionaryTranslationWhereInput | DictionaryTranslationWhereInput[]
    OR?: DictionaryTranslationWhereInput[]
    NOT?: DictionaryTranslationWhereInput | DictionaryTranslationWhereInput[]
    transId?: IntFilter<"DictionaryTranslation"> | number
    senseId?: IntFilter<"DictionaryTranslation"> | number
    lang?: StringFilter<"DictionaryTranslation"> | string
    translation?: StringFilter<"DictionaryTranslation"> | string
    sense?: XOR<DictionarySenseScalarRelationFilter, DictionarySenseWhereInput>
  }

  export type DictionaryTranslationOrderByWithRelationInput = {
    transId?: SortOrder
    senseId?: SortOrder
    lang?: SortOrder
    translation?: SortOrder
    sense?: DictionarySenseOrderByWithRelationInput
  }

  export type DictionaryTranslationWhereUniqueInput = Prisma.AtLeast<{
    transId?: number
    AND?: DictionaryTranslationWhereInput | DictionaryTranslationWhereInput[]
    OR?: DictionaryTranslationWhereInput[]
    NOT?: DictionaryTranslationWhereInput | DictionaryTranslationWhereInput[]
    senseId?: IntFilter<"DictionaryTranslation"> | number
    lang?: StringFilter<"DictionaryTranslation"> | string
    translation?: StringFilter<"DictionaryTranslation"> | string
    sense?: XOR<DictionarySenseScalarRelationFilter, DictionarySenseWhereInput>
  }, "transId">

  export type DictionaryTranslationOrderByWithAggregationInput = {
    transId?: SortOrder
    senseId?: SortOrder
    lang?: SortOrder
    translation?: SortOrder
    _count?: DictionaryTranslationCountOrderByAggregateInput
    _avg?: DictionaryTranslationAvgOrderByAggregateInput
    _max?: DictionaryTranslationMaxOrderByAggregateInput
    _min?: DictionaryTranslationMinOrderByAggregateInput
    _sum?: DictionaryTranslationSumOrderByAggregateInput
  }

  export type DictionaryTranslationScalarWhereWithAggregatesInput = {
    AND?: DictionaryTranslationScalarWhereWithAggregatesInput | DictionaryTranslationScalarWhereWithAggregatesInput[]
    OR?: DictionaryTranslationScalarWhereWithAggregatesInput[]
    NOT?: DictionaryTranslationScalarWhereWithAggregatesInput | DictionaryTranslationScalarWhereWithAggregatesInput[]
    transId?: IntWithAggregatesFilter<"DictionaryTranslation"> | number
    senseId?: IntWithAggregatesFilter<"DictionaryTranslation"> | number
    lang?: StringWithAggregatesFilter<"DictionaryTranslation"> | string
    translation?: StringWithAggregatesFilter<"DictionaryTranslation"> | string
  }

  export type DictionaryExampleWhereInput = {
    AND?: DictionaryExampleWhereInput | DictionaryExampleWhereInput[]
    OR?: DictionaryExampleWhereInput[]
    NOT?: DictionaryExampleWhereInput | DictionaryExampleWhereInput[]
    exampleId?: IntFilter<"DictionaryExample"> | number
    senseId?: IntFilter<"DictionaryExample"> | number
    textCebuano?: StringFilter<"DictionaryExample"> | string
    textTranslation?: StringNullableFilter<"DictionaryExample"> | string | null
    sense?: XOR<DictionarySenseScalarRelationFilter, DictionarySenseWhereInput>
  }

  export type DictionaryExampleOrderByWithRelationInput = {
    exampleId?: SortOrder
    senseId?: SortOrder
    textCebuano?: SortOrder
    textTranslation?: SortOrderInput | SortOrder
    sense?: DictionarySenseOrderByWithRelationInput
  }

  export type DictionaryExampleWhereUniqueInput = Prisma.AtLeast<{
    exampleId?: number
    AND?: DictionaryExampleWhereInput | DictionaryExampleWhereInput[]
    OR?: DictionaryExampleWhereInput[]
    NOT?: DictionaryExampleWhereInput | DictionaryExampleWhereInput[]
    senseId?: IntFilter<"DictionaryExample"> | number
    textCebuano?: StringFilter<"DictionaryExample"> | string
    textTranslation?: StringNullableFilter<"DictionaryExample"> | string | null
    sense?: XOR<DictionarySenseScalarRelationFilter, DictionarySenseWhereInput>
  }, "exampleId">

  export type DictionaryExampleOrderByWithAggregationInput = {
    exampleId?: SortOrder
    senseId?: SortOrder
    textCebuano?: SortOrder
    textTranslation?: SortOrderInput | SortOrder
    _count?: DictionaryExampleCountOrderByAggregateInput
    _avg?: DictionaryExampleAvgOrderByAggregateInput
    _max?: DictionaryExampleMaxOrderByAggregateInput
    _min?: DictionaryExampleMinOrderByAggregateInput
    _sum?: DictionaryExampleSumOrderByAggregateInput
  }

  export type DictionaryExampleScalarWhereWithAggregatesInput = {
    AND?: DictionaryExampleScalarWhereWithAggregatesInput | DictionaryExampleScalarWhereWithAggregatesInput[]
    OR?: DictionaryExampleScalarWhereWithAggregatesInput[]
    NOT?: DictionaryExampleScalarWhereWithAggregatesInput | DictionaryExampleScalarWhereWithAggregatesInput[]
    exampleId?: IntWithAggregatesFilter<"DictionaryExample"> | number
    senseId?: IntWithAggregatesFilter<"DictionaryExample"> | number
    textCebuano?: StringWithAggregatesFilter<"DictionaryExample"> | string
    textTranslation?: StringNullableWithAggregatesFilter<"DictionaryExample"> | string | null
  }

  export type DictionaryCrossRefWhereInput = {
    AND?: DictionaryCrossRefWhereInput | DictionaryCrossRefWhereInput[]
    OR?: DictionaryCrossRefWhereInput[]
    NOT?: DictionaryCrossRefWhereInput | DictionaryCrossRefWhereInput[]
    xrefId?: IntFilter<"DictionaryCrossRef"> | number
    senseId?: IntFilter<"DictionaryCrossRef"> | number
    targetWord?: StringFilter<"DictionaryCrossRef"> | string
    lang?: StringFilter<"DictionaryCrossRef"> | string
    sense?: XOR<DictionarySenseScalarRelationFilter, DictionarySenseWhereInput>
  }

  export type DictionaryCrossRefOrderByWithRelationInput = {
    xrefId?: SortOrder
    senseId?: SortOrder
    targetWord?: SortOrder
    lang?: SortOrder
    sense?: DictionarySenseOrderByWithRelationInput
  }

  export type DictionaryCrossRefWhereUniqueInput = Prisma.AtLeast<{
    xrefId?: number
    AND?: DictionaryCrossRefWhereInput | DictionaryCrossRefWhereInput[]
    OR?: DictionaryCrossRefWhereInput[]
    NOT?: DictionaryCrossRefWhereInput | DictionaryCrossRefWhereInput[]
    senseId?: IntFilter<"DictionaryCrossRef"> | number
    targetWord?: StringFilter<"DictionaryCrossRef"> | string
    lang?: StringFilter<"DictionaryCrossRef"> | string
    sense?: XOR<DictionarySenseScalarRelationFilter, DictionarySenseWhereInput>
  }, "xrefId">

  export type DictionaryCrossRefOrderByWithAggregationInput = {
    xrefId?: SortOrder
    senseId?: SortOrder
    targetWord?: SortOrder
    lang?: SortOrder
    _count?: DictionaryCrossRefCountOrderByAggregateInput
    _avg?: DictionaryCrossRefAvgOrderByAggregateInput
    _max?: DictionaryCrossRefMaxOrderByAggregateInput
    _min?: DictionaryCrossRefMinOrderByAggregateInput
    _sum?: DictionaryCrossRefSumOrderByAggregateInput
  }

  export type DictionaryCrossRefScalarWhereWithAggregatesInput = {
    AND?: DictionaryCrossRefScalarWhereWithAggregatesInput | DictionaryCrossRefScalarWhereWithAggregatesInput[]
    OR?: DictionaryCrossRefScalarWhereWithAggregatesInput[]
    NOT?: DictionaryCrossRefScalarWhereWithAggregatesInput | DictionaryCrossRefScalarWhereWithAggregatesInput[]
    xrefId?: IntWithAggregatesFilter<"DictionaryCrossRef"> | number
    senseId?: IntWithAggregatesFilter<"DictionaryCrossRef"> | number
    targetWord?: StringWithAggregatesFilter<"DictionaryCrossRef"> | string
    lang?: StringWithAggregatesFilter<"DictionaryCrossRef"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    username: string
    links?: LinkCreateNestedManyWithoutCreatorInput
    linkPermissions?: LinkPermissionCreateNestedManyWithoutLinkInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    stickyNotes?: StickyNotesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    username: string
    links?: LinkUncheckedCreateNestedManyWithoutCreatorInput
    linkPermissions?: LinkPermissionUncheckedCreateNestedManyWithoutLinkInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    stickyNotes?: StickyNotesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    links?: LinkUpdateManyWithoutCreatorNestedInput
    linkPermissions?: LinkPermissionUpdateManyWithoutLinkNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    stickyNotes?: StickyNotesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    links?: LinkUncheckedUpdateManyWithoutCreatorNestedInput
    linkPermissions?: LinkPermissionUncheckedUpdateManyWithoutLinkNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    stickyNotes?: StickyNotesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    username: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateInput = {
    id?: string
    title?: string
    musicSource?: $Enums.MusicSource
    audio_timeline: JsonNullValueInput | InputJsonValue
    creation_date?: Date | string
    links?: LinkCreateNestedManyWithoutSessionInput
    premadeMusic?: PremadeMusicCreateNestedOneWithoutSessionInput
    uploadedMusic?: UploadedMusicCreateNestedOneWithoutSessionInput
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    title?: string
    user_id: string
    musicSource?: $Enums.MusicSource
    premade_music_id?: string | null
    uploaded_music_id?: string | null
    audio_timeline: JsonNullValueInput | InputJsonValue
    creation_date?: Date | string
    links?: LinkUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    musicSource?: EnumMusicSourceFieldUpdateOperationsInput | $Enums.MusicSource
    audio_timeline?: JsonNullValueInput | InputJsonValue
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUpdateManyWithoutSessionNestedInput
    premadeMusic?: PremadeMusicUpdateOneWithoutSessionNestedInput
    uploadedMusic?: UploadedMusicUpdateOneWithoutSessionNestedInput
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    musicSource?: EnumMusicSourceFieldUpdateOperationsInput | $Enums.MusicSource
    premade_music_id?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_music_id?: NullableStringFieldUpdateOperationsInput | string | null
    audio_timeline?: JsonNullValueInput | InputJsonValue
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id?: string
    title?: string
    user_id: string
    musicSource?: $Enums.MusicSource
    premade_music_id?: string | null
    uploaded_music_id?: string | null
    audio_timeline: JsonNullValueInput | InputJsonValue
    creation_date?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    musicSource?: EnumMusicSourceFieldUpdateOperationsInput | $Enums.MusicSource
    audio_timeline?: JsonNullValueInput | InputJsonValue
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    musicSource?: EnumMusicSourceFieldUpdateOperationsInput | $Enums.MusicSource
    premade_music_id?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_music_id?: NullableStringFieldUpdateOperationsInput | string | null
    audio_timeline?: JsonNullValueInput | InputJsonValue
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StickyNotesCreateInput = {
    id?: string
    title?: string
    content?: string
    music?: UploadedMusicCreateNestedOneWithoutStickyNotesInput
    user: UserCreateNestedOneWithoutStickyNotesInput
  }

  export type StickyNotesUncheckedCreateInput = {
    id?: string
    title?: string
    content?: string
    user_id: string
    music_id?: string | null
  }

  export type StickyNotesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    music?: UploadedMusicUpdateOneWithoutStickyNotesNestedInput
    user?: UserUpdateOneRequiredWithoutStickyNotesNestedInput
  }

  export type StickyNotesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    music_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StickyNotesCreateManyInput = {
    id?: string
    title?: string
    content?: string
    user_id: string
    music_id?: string | null
  }

  export type StickyNotesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type StickyNotesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    music_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LinkCreateInput = {
    link_id?: string
    is_public?: boolean
    created_at?: Date | string
    expires_at: Date | string
    creator: UserCreateNestedOneWithoutLinksInput
    session: SessionCreateNestedOneWithoutLinksInput
    linkPermissions?: LinkPermissionCreateNestedManyWithoutUserLinkInput
  }

  export type LinkUncheckedCreateInput = {
    link_id?: string
    song_id: string
    created_by: string
    is_public?: boolean
    created_at?: Date | string
    expires_at: Date | string
    linkPermissions?: LinkPermissionUncheckedCreateNestedManyWithoutUserLinkInput
  }

  export type LinkUpdateInput = {
    link_id?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutLinksNestedInput
    session?: SessionUpdateOneRequiredWithoutLinksNestedInput
    linkPermissions?: LinkPermissionUpdateManyWithoutUserLinkNestedInput
  }

  export type LinkUncheckedUpdateInput = {
    link_id?: StringFieldUpdateOperationsInput | string
    song_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    linkPermissions?: LinkPermissionUncheckedUpdateManyWithoutUserLinkNestedInput
  }

  export type LinkCreateManyInput = {
    link_id?: string
    song_id: string
    created_by: string
    is_public?: boolean
    created_at?: Date | string
    expires_at: Date | string
  }

  export type LinkUpdateManyMutationInput = {
    link_id?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUncheckedUpdateManyInput = {
    link_id?: StringFieldUpdateOperationsInput | string
    song_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkPermissionCreateInput = {
    link_permission_id?: string
    can_view?: boolean
    userLink: LinkCreateNestedOneWithoutLinkPermissionsInput
    link: UserCreateNestedOneWithoutLinkPermissionsInput
  }

  export type LinkPermissionUncheckedCreateInput = {
    link_permission_id?: string
    link_id: string
    user_id: string
    can_view?: boolean
  }

  export type LinkPermissionUpdateInput = {
    link_permission_id?: StringFieldUpdateOperationsInput | string
    can_view?: BoolFieldUpdateOperationsInput | boolean
    userLink?: LinkUpdateOneRequiredWithoutLinkPermissionsNestedInput
    link?: UserUpdateOneRequiredWithoutLinkPermissionsNestedInput
  }

  export type LinkPermissionUncheckedUpdateInput = {
    link_permission_id?: StringFieldUpdateOperationsInput | string
    link_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    can_view?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LinkPermissionCreateManyInput = {
    link_permission_id?: string
    link_id: string
    user_id: string
    can_view?: boolean
  }

  export type LinkPermissionUpdateManyMutationInput = {
    link_permission_id?: StringFieldUpdateOperationsInput | string
    can_view?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LinkPermissionUncheckedUpdateManyInput = {
    link_permission_id?: StringFieldUpdateOperationsInput | string
    link_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    can_view?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PremadeMusicCreateInput = {
    music_id?: string
    uploaded_date?: Date | string
    music_name: string
    path: string
    session?: SessionCreateNestedManyWithoutPremadeMusicInput
  }

  export type PremadeMusicUncheckedCreateInput = {
    music_id?: string
    uploaded_date?: Date | string
    music_name: string
    path: string
    session?: SessionUncheckedCreateNestedManyWithoutPremadeMusicInput
  }

  export type PremadeMusicUpdateInput = {
    music_id?: StringFieldUpdateOperationsInput | string
    uploaded_date?: DateTimeFieldUpdateOperationsInput | Date | string
    music_name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    session?: SessionUpdateManyWithoutPremadeMusicNestedInput
  }

  export type PremadeMusicUncheckedUpdateInput = {
    music_id?: StringFieldUpdateOperationsInput | string
    uploaded_date?: DateTimeFieldUpdateOperationsInput | Date | string
    music_name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    session?: SessionUncheckedUpdateManyWithoutPremadeMusicNestedInput
  }

  export type PremadeMusicCreateManyInput = {
    music_id?: string
    uploaded_date?: Date | string
    music_name: string
    path: string
  }

  export type PremadeMusicUpdateManyMutationInput = {
    music_id?: StringFieldUpdateOperationsInput | string
    uploaded_date?: DateTimeFieldUpdateOperationsInput | Date | string
    music_name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type PremadeMusicUncheckedUpdateManyInput = {
    music_id?: StringFieldUpdateOperationsInput | string
    uploaded_date?: DateTimeFieldUpdateOperationsInput | Date | string
    music_name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type UploadedMusicCreateInput = {
    music_id?: string
    uploaded_by: string
    music_name: string
    path?: string
    session?: SessionCreateNestedManyWithoutUploadedMusicInput
    stickyNotes?: StickyNotesCreateNestedManyWithoutMusicInput
  }

  export type UploadedMusicUncheckedCreateInput = {
    music_id?: string
    uploaded_by: string
    music_name: string
    path?: string
    session?: SessionUncheckedCreateNestedManyWithoutUploadedMusicInput
    stickyNotes?: StickyNotesUncheckedCreateNestedManyWithoutMusicInput
  }

  export type UploadedMusicUpdateInput = {
    music_id?: StringFieldUpdateOperationsInput | string
    uploaded_by?: StringFieldUpdateOperationsInput | string
    music_name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    session?: SessionUpdateManyWithoutUploadedMusicNestedInput
    stickyNotes?: StickyNotesUpdateManyWithoutMusicNestedInput
  }

  export type UploadedMusicUncheckedUpdateInput = {
    music_id?: StringFieldUpdateOperationsInput | string
    uploaded_by?: StringFieldUpdateOperationsInput | string
    music_name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    session?: SessionUncheckedUpdateManyWithoutUploadedMusicNestedInput
    stickyNotes?: StickyNotesUncheckedUpdateManyWithoutMusicNestedInput
  }

  export type UploadedMusicCreateManyInput = {
    music_id?: string
    uploaded_by: string
    music_name: string
    path?: string
  }

  export type UploadedMusicUpdateManyMutationInput = {
    music_id?: StringFieldUpdateOperationsInput | string
    uploaded_by?: StringFieldUpdateOperationsInput | string
    music_name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type UploadedMusicUncheckedUpdateManyInput = {
    music_id?: StringFieldUpdateOperationsInput | string
    uploaded_by?: StringFieldUpdateOperationsInput | string
    music_name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type DictionaryEntryCreateInput = {
    word: string
    page?: string | null
    homNumber?: number | null
    headwords?: DictionaryHeadwordCreateNestedManyWithoutEntryInput
    senses?: DictionarySenseCreateNestedManyWithoutEntryInput
  }

  export type DictionaryEntryUncheckedCreateInput = {
    entryId?: number
    word: string
    page?: string | null
    homNumber?: number | null
    headwords?: DictionaryHeadwordUncheckedCreateNestedManyWithoutEntryInput
    senses?: DictionarySenseUncheckedCreateNestedManyWithoutEntryInput
  }

  export type DictionaryEntryUpdateInput = {
    word?: StringFieldUpdateOperationsInput | string
    page?: NullableStringFieldUpdateOperationsInput | string | null
    homNumber?: NullableIntFieldUpdateOperationsInput | number | null
    headwords?: DictionaryHeadwordUpdateManyWithoutEntryNestedInput
    senses?: DictionarySenseUpdateManyWithoutEntryNestedInput
  }

  export type DictionaryEntryUncheckedUpdateInput = {
    entryId?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    page?: NullableStringFieldUpdateOperationsInput | string | null
    homNumber?: NullableIntFieldUpdateOperationsInput | number | null
    headwords?: DictionaryHeadwordUncheckedUpdateManyWithoutEntryNestedInput
    senses?: DictionarySenseUncheckedUpdateManyWithoutEntryNestedInput
  }

  export type DictionaryEntryCreateManyInput = {
    entryId?: number
    word: string
    page?: string | null
    homNumber?: number | null
  }

  export type DictionaryEntryUpdateManyMutationInput = {
    word?: StringFieldUpdateOperationsInput | string
    page?: NullableStringFieldUpdateOperationsInput | string | null
    homNumber?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DictionaryEntryUncheckedUpdateManyInput = {
    entryId?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    page?: NullableStringFieldUpdateOperationsInput | string | null
    homNumber?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DictionaryHeadwordCreateInput = {
    head: string
    normalizedHead: string
    type?: string | null
    pos?: string | null
    entry: DictionaryEntryCreateNestedOneWithoutHeadwordsInput
  }

  export type DictionaryHeadwordUncheckedCreateInput = {
    headId?: number
    entryId: number
    head: string
    normalizedHead: string
    type?: string | null
    pos?: string | null
  }

  export type DictionaryHeadwordUpdateInput = {
    head?: StringFieldUpdateOperationsInput | string
    normalizedHead?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    pos?: NullableStringFieldUpdateOperationsInput | string | null
    entry?: DictionaryEntryUpdateOneRequiredWithoutHeadwordsNestedInput
  }

  export type DictionaryHeadwordUncheckedUpdateInput = {
    headId?: IntFieldUpdateOperationsInput | number
    entryId?: IntFieldUpdateOperationsInput | number
    head?: StringFieldUpdateOperationsInput | string
    normalizedHead?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    pos?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DictionaryHeadwordCreateManyInput = {
    headId?: number
    entryId: number
    head: string
    normalizedHead: string
    type?: string | null
    pos?: string | null
  }

  export type DictionaryHeadwordUpdateManyMutationInput = {
    head?: StringFieldUpdateOperationsInput | string
    normalizedHead?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    pos?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DictionaryHeadwordUncheckedUpdateManyInput = {
    headId?: IntFieldUpdateOperationsInput | number
    entryId?: IntFieldUpdateOperationsInput | number
    head?: StringFieldUpdateOperationsInput | string
    normalizedHead?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    pos?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DictionarySenseCreateInput = {
    number?: number | null
    definition?: string | null
    dialect?: string | null
    examples?: DictionaryExampleCreateNestedManyWithoutSenseInput
    entry: DictionaryEntryCreateNestedOneWithoutSensesInput
    translations?: DictionaryTranslationCreateNestedManyWithoutSenseInput
    crossRefs?: DictionaryCrossRefCreateNestedManyWithoutSenseInput
  }

  export type DictionarySenseUncheckedCreateInput = {
    senseId?: number
    entryId: number
    number?: number | null
    definition?: string | null
    dialect?: string | null
    examples?: DictionaryExampleUncheckedCreateNestedManyWithoutSenseInput
    translations?: DictionaryTranslationUncheckedCreateNestedManyWithoutSenseInput
    crossRefs?: DictionaryCrossRefUncheckedCreateNestedManyWithoutSenseInput
  }

  export type DictionarySenseUpdateInput = {
    number?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    dialect?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: DictionaryExampleUpdateManyWithoutSenseNestedInput
    entry?: DictionaryEntryUpdateOneRequiredWithoutSensesNestedInput
    translations?: DictionaryTranslationUpdateManyWithoutSenseNestedInput
    crossRefs?: DictionaryCrossRefUpdateManyWithoutSenseNestedInput
  }

  export type DictionarySenseUncheckedUpdateInput = {
    senseId?: IntFieldUpdateOperationsInput | number
    entryId?: IntFieldUpdateOperationsInput | number
    number?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    dialect?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: DictionaryExampleUncheckedUpdateManyWithoutSenseNestedInput
    translations?: DictionaryTranslationUncheckedUpdateManyWithoutSenseNestedInput
    crossRefs?: DictionaryCrossRefUncheckedUpdateManyWithoutSenseNestedInput
  }

  export type DictionarySenseCreateManyInput = {
    senseId?: number
    entryId: number
    number?: number | null
    definition?: string | null
    dialect?: string | null
  }

  export type DictionarySenseUpdateManyMutationInput = {
    number?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    dialect?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DictionarySenseUncheckedUpdateManyInput = {
    senseId?: IntFieldUpdateOperationsInput | number
    entryId?: IntFieldUpdateOperationsInput | number
    number?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    dialect?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DictionaryTranslationCreateInput = {
    lang: string
    translation: string
    sense: DictionarySenseCreateNestedOneWithoutTranslationsInput
  }

  export type DictionaryTranslationUncheckedCreateInput = {
    transId?: number
    senseId: number
    lang: string
    translation: string
  }

  export type DictionaryTranslationUpdateInput = {
    lang?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
    sense?: DictionarySenseUpdateOneRequiredWithoutTranslationsNestedInput
  }

  export type DictionaryTranslationUncheckedUpdateInput = {
    transId?: IntFieldUpdateOperationsInput | number
    senseId?: IntFieldUpdateOperationsInput | number
    lang?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type DictionaryTranslationCreateManyInput = {
    transId?: number
    senseId: number
    lang: string
    translation: string
  }

  export type DictionaryTranslationUpdateManyMutationInput = {
    lang?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type DictionaryTranslationUncheckedUpdateManyInput = {
    transId?: IntFieldUpdateOperationsInput | number
    senseId?: IntFieldUpdateOperationsInput | number
    lang?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type DictionaryExampleCreateInput = {
    textCebuano: string
    textTranslation?: string | null
    sense: DictionarySenseCreateNestedOneWithoutExamplesInput
  }

  export type DictionaryExampleUncheckedCreateInput = {
    exampleId?: number
    senseId: number
    textCebuano: string
    textTranslation?: string | null
  }

  export type DictionaryExampleUpdateInput = {
    textCebuano?: StringFieldUpdateOperationsInput | string
    textTranslation?: NullableStringFieldUpdateOperationsInput | string | null
    sense?: DictionarySenseUpdateOneRequiredWithoutExamplesNestedInput
  }

  export type DictionaryExampleUncheckedUpdateInput = {
    exampleId?: IntFieldUpdateOperationsInput | number
    senseId?: IntFieldUpdateOperationsInput | number
    textCebuano?: StringFieldUpdateOperationsInput | string
    textTranslation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DictionaryExampleCreateManyInput = {
    exampleId?: number
    senseId: number
    textCebuano: string
    textTranslation?: string | null
  }

  export type DictionaryExampleUpdateManyMutationInput = {
    textCebuano?: StringFieldUpdateOperationsInput | string
    textTranslation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DictionaryExampleUncheckedUpdateManyInput = {
    exampleId?: IntFieldUpdateOperationsInput | number
    senseId?: IntFieldUpdateOperationsInput | number
    textCebuano?: StringFieldUpdateOperationsInput | string
    textTranslation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DictionaryCrossRefCreateInput = {
    targetWord: string
    lang?: string
    sense: DictionarySenseCreateNestedOneWithoutCrossRefsInput
  }

  export type DictionaryCrossRefUncheckedCreateInput = {
    xrefId?: number
    senseId: number
    targetWord: string
    lang?: string
  }

  export type DictionaryCrossRefUpdateInput = {
    targetWord?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    sense?: DictionarySenseUpdateOneRequiredWithoutCrossRefsNestedInput
  }

  export type DictionaryCrossRefUncheckedUpdateInput = {
    xrefId?: IntFieldUpdateOperationsInput | number
    senseId?: IntFieldUpdateOperationsInput | number
    targetWord?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type DictionaryCrossRefCreateManyInput = {
    xrefId?: number
    senseId: number
    targetWord: string
    lang?: string
  }

  export type DictionaryCrossRefUpdateManyMutationInput = {
    targetWord?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type DictionaryCrossRefUncheckedUpdateManyInput = {
    xrefId?: IntFieldUpdateOperationsInput | number
    senseId?: IntFieldUpdateOperationsInput | number
    targetWord?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LinkListRelationFilter = {
    every?: LinkWhereInput
    some?: LinkWhereInput
    none?: LinkWhereInput
  }

  export type LinkPermissionListRelationFilter = {
    every?: LinkPermissionWhereInput
    some?: LinkPermissionWhereInput
    none?: LinkPermissionWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type StickyNotesListRelationFilter = {
    every?: StickyNotesWhereInput
    some?: StickyNotesWhereInput
    none?: StickyNotesWhereInput
  }

  export type LinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LinkPermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StickyNotesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    username?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    username?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    username?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumMusicSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.MusicSource | EnumMusicSourceFieldRefInput<$PrismaModel>
    in?: $Enums.MusicSource[] | ListEnumMusicSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.MusicSource[] | ListEnumMusicSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumMusicSourceFilter<$PrismaModel> | $Enums.MusicSource
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PremadeMusicNullableScalarRelationFilter = {
    is?: PremadeMusicWhereInput | null
    isNot?: PremadeMusicWhereInput | null
  }

  export type UploadedMusicNullableScalarRelationFilter = {
    is?: UploadedMusicWhereInput | null
    isNot?: UploadedMusicWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    user_id?: SortOrder
    musicSource?: SortOrder
    premade_music_id?: SortOrder
    uploaded_music_id?: SortOrder
    audio_timeline?: SortOrder
    creation_date?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    user_id?: SortOrder
    musicSource?: SortOrder
    premade_music_id?: SortOrder
    uploaded_music_id?: SortOrder
    creation_date?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    user_id?: SortOrder
    musicSource?: SortOrder
    premade_music_id?: SortOrder
    uploaded_music_id?: SortOrder
    creation_date?: SortOrder
  }

  export type EnumMusicSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MusicSource | EnumMusicSourceFieldRefInput<$PrismaModel>
    in?: $Enums.MusicSource[] | ListEnumMusicSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.MusicSource[] | ListEnumMusicSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumMusicSourceWithAggregatesFilter<$PrismaModel> | $Enums.MusicSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMusicSourceFilter<$PrismaModel>
    _max?: NestedEnumMusicSourceFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StickyNotesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    music_id?: SortOrder
  }

  export type StickyNotesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    music_id?: SortOrder
  }

  export type StickyNotesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    music_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SessionScalarRelationFilter = {
    is?: SessionWhereInput
    isNot?: SessionWhereInput
  }

  export type LinkCountOrderByAggregateInput = {
    link_id?: SortOrder
    song_id?: SortOrder
    created_by?: SortOrder
    is_public?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
  }

  export type LinkMaxOrderByAggregateInput = {
    link_id?: SortOrder
    song_id?: SortOrder
    created_by?: SortOrder
    is_public?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
  }

  export type LinkMinOrderByAggregateInput = {
    link_id?: SortOrder
    song_id?: SortOrder
    created_by?: SortOrder
    is_public?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LinkScalarRelationFilter = {
    is?: LinkWhereInput
    isNot?: LinkWhereInput
  }

  export type LinkPermissionCountOrderByAggregateInput = {
    link_permission_id?: SortOrder
    link_id?: SortOrder
    user_id?: SortOrder
    can_view?: SortOrder
  }

  export type LinkPermissionMaxOrderByAggregateInput = {
    link_permission_id?: SortOrder
    link_id?: SortOrder
    user_id?: SortOrder
    can_view?: SortOrder
  }

  export type LinkPermissionMinOrderByAggregateInput = {
    link_permission_id?: SortOrder
    link_id?: SortOrder
    user_id?: SortOrder
    can_view?: SortOrder
  }

  export type PremadeMusicCountOrderByAggregateInput = {
    music_id?: SortOrder
    uploaded_date?: SortOrder
    music_name?: SortOrder
    path?: SortOrder
  }

  export type PremadeMusicMaxOrderByAggregateInput = {
    music_id?: SortOrder
    uploaded_date?: SortOrder
    music_name?: SortOrder
    path?: SortOrder
  }

  export type PremadeMusicMinOrderByAggregateInput = {
    music_id?: SortOrder
    uploaded_date?: SortOrder
    music_name?: SortOrder
    path?: SortOrder
  }

  export type UploadedMusicCountOrderByAggregateInput = {
    music_id?: SortOrder
    uploaded_by?: SortOrder
    music_name?: SortOrder
    path?: SortOrder
  }

  export type UploadedMusicMaxOrderByAggregateInput = {
    music_id?: SortOrder
    uploaded_by?: SortOrder
    music_name?: SortOrder
    path?: SortOrder
  }

  export type UploadedMusicMinOrderByAggregateInput = {
    music_id?: SortOrder
    uploaded_by?: SortOrder
    music_name?: SortOrder
    path?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DictionaryHeadwordListRelationFilter = {
    every?: DictionaryHeadwordWhereInput
    some?: DictionaryHeadwordWhereInput
    none?: DictionaryHeadwordWhereInput
  }

  export type DictionarySenseListRelationFilter = {
    every?: DictionarySenseWhereInput
    some?: DictionarySenseWhereInput
    none?: DictionarySenseWhereInput
  }

  export type DictionaryHeadwordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DictionarySenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DictionaryEntryCountOrderByAggregateInput = {
    entryId?: SortOrder
    word?: SortOrder
    page?: SortOrder
    homNumber?: SortOrder
  }

  export type DictionaryEntryAvgOrderByAggregateInput = {
    entryId?: SortOrder
    homNumber?: SortOrder
  }

  export type DictionaryEntryMaxOrderByAggregateInput = {
    entryId?: SortOrder
    word?: SortOrder
    page?: SortOrder
    homNumber?: SortOrder
  }

  export type DictionaryEntryMinOrderByAggregateInput = {
    entryId?: SortOrder
    word?: SortOrder
    page?: SortOrder
    homNumber?: SortOrder
  }

  export type DictionaryEntrySumOrderByAggregateInput = {
    entryId?: SortOrder
    homNumber?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DictionaryEntryScalarRelationFilter = {
    is?: DictionaryEntryWhereInput
    isNot?: DictionaryEntryWhereInput
  }

  export type DictionaryHeadwordCountOrderByAggregateInput = {
    headId?: SortOrder
    entryId?: SortOrder
    head?: SortOrder
    normalizedHead?: SortOrder
    type?: SortOrder
    pos?: SortOrder
  }

  export type DictionaryHeadwordAvgOrderByAggregateInput = {
    headId?: SortOrder
    entryId?: SortOrder
  }

  export type DictionaryHeadwordMaxOrderByAggregateInput = {
    headId?: SortOrder
    entryId?: SortOrder
    head?: SortOrder
    normalizedHead?: SortOrder
    type?: SortOrder
    pos?: SortOrder
  }

  export type DictionaryHeadwordMinOrderByAggregateInput = {
    headId?: SortOrder
    entryId?: SortOrder
    head?: SortOrder
    normalizedHead?: SortOrder
    type?: SortOrder
    pos?: SortOrder
  }

  export type DictionaryHeadwordSumOrderByAggregateInput = {
    headId?: SortOrder
    entryId?: SortOrder
  }

  export type DictionaryExampleListRelationFilter = {
    every?: DictionaryExampleWhereInput
    some?: DictionaryExampleWhereInput
    none?: DictionaryExampleWhereInput
  }

  export type DictionaryTranslationListRelationFilter = {
    every?: DictionaryTranslationWhereInput
    some?: DictionaryTranslationWhereInput
    none?: DictionaryTranslationWhereInput
  }

  export type DictionaryCrossRefListRelationFilter = {
    every?: DictionaryCrossRefWhereInput
    some?: DictionaryCrossRefWhereInput
    none?: DictionaryCrossRefWhereInput
  }

  export type DictionaryExampleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DictionaryTranslationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DictionaryCrossRefOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DictionarySenseCountOrderByAggregateInput = {
    senseId?: SortOrder
    entryId?: SortOrder
    number?: SortOrder
    definition?: SortOrder
    dialect?: SortOrder
  }

  export type DictionarySenseAvgOrderByAggregateInput = {
    senseId?: SortOrder
    entryId?: SortOrder
    number?: SortOrder
  }

  export type DictionarySenseMaxOrderByAggregateInput = {
    senseId?: SortOrder
    entryId?: SortOrder
    number?: SortOrder
    definition?: SortOrder
    dialect?: SortOrder
  }

  export type DictionarySenseMinOrderByAggregateInput = {
    senseId?: SortOrder
    entryId?: SortOrder
    number?: SortOrder
    definition?: SortOrder
    dialect?: SortOrder
  }

  export type DictionarySenseSumOrderByAggregateInput = {
    senseId?: SortOrder
    entryId?: SortOrder
    number?: SortOrder
  }

  export type DictionarySenseScalarRelationFilter = {
    is?: DictionarySenseWhereInput
    isNot?: DictionarySenseWhereInput
  }

  export type DictionaryTranslationCountOrderByAggregateInput = {
    transId?: SortOrder
    senseId?: SortOrder
    lang?: SortOrder
    translation?: SortOrder
  }

  export type DictionaryTranslationAvgOrderByAggregateInput = {
    transId?: SortOrder
    senseId?: SortOrder
  }

  export type DictionaryTranslationMaxOrderByAggregateInput = {
    transId?: SortOrder
    senseId?: SortOrder
    lang?: SortOrder
    translation?: SortOrder
  }

  export type DictionaryTranslationMinOrderByAggregateInput = {
    transId?: SortOrder
    senseId?: SortOrder
    lang?: SortOrder
    translation?: SortOrder
  }

  export type DictionaryTranslationSumOrderByAggregateInput = {
    transId?: SortOrder
    senseId?: SortOrder
  }

  export type DictionaryExampleCountOrderByAggregateInput = {
    exampleId?: SortOrder
    senseId?: SortOrder
    textCebuano?: SortOrder
    textTranslation?: SortOrder
  }

  export type DictionaryExampleAvgOrderByAggregateInput = {
    exampleId?: SortOrder
    senseId?: SortOrder
  }

  export type DictionaryExampleMaxOrderByAggregateInput = {
    exampleId?: SortOrder
    senseId?: SortOrder
    textCebuano?: SortOrder
    textTranslation?: SortOrder
  }

  export type DictionaryExampleMinOrderByAggregateInput = {
    exampleId?: SortOrder
    senseId?: SortOrder
    textCebuano?: SortOrder
    textTranslation?: SortOrder
  }

  export type DictionaryExampleSumOrderByAggregateInput = {
    exampleId?: SortOrder
    senseId?: SortOrder
  }

  export type DictionaryCrossRefCountOrderByAggregateInput = {
    xrefId?: SortOrder
    senseId?: SortOrder
    targetWord?: SortOrder
    lang?: SortOrder
  }

  export type DictionaryCrossRefAvgOrderByAggregateInput = {
    xrefId?: SortOrder
    senseId?: SortOrder
  }

  export type DictionaryCrossRefMaxOrderByAggregateInput = {
    xrefId?: SortOrder
    senseId?: SortOrder
    targetWord?: SortOrder
    lang?: SortOrder
  }

  export type DictionaryCrossRefMinOrderByAggregateInput = {
    xrefId?: SortOrder
    senseId?: SortOrder
    targetWord?: SortOrder
    lang?: SortOrder
  }

  export type DictionaryCrossRefSumOrderByAggregateInput = {
    xrefId?: SortOrder
    senseId?: SortOrder
  }

  export type LinkCreateNestedManyWithoutCreatorInput = {
    create?: XOR<LinkCreateWithoutCreatorInput, LinkUncheckedCreateWithoutCreatorInput> | LinkCreateWithoutCreatorInput[] | LinkUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutCreatorInput | LinkCreateOrConnectWithoutCreatorInput[]
    createMany?: LinkCreateManyCreatorInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type LinkPermissionCreateNestedManyWithoutLinkInput = {
    create?: XOR<LinkPermissionCreateWithoutLinkInput, LinkPermissionUncheckedCreateWithoutLinkInput> | LinkPermissionCreateWithoutLinkInput[] | LinkPermissionUncheckedCreateWithoutLinkInput[]
    connectOrCreate?: LinkPermissionCreateOrConnectWithoutLinkInput | LinkPermissionCreateOrConnectWithoutLinkInput[]
    createMany?: LinkPermissionCreateManyLinkInputEnvelope
    connect?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StickyNotesCreateNestedManyWithoutUserInput = {
    create?: XOR<StickyNotesCreateWithoutUserInput, StickyNotesUncheckedCreateWithoutUserInput> | StickyNotesCreateWithoutUserInput[] | StickyNotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StickyNotesCreateOrConnectWithoutUserInput | StickyNotesCreateOrConnectWithoutUserInput[]
    createMany?: StickyNotesCreateManyUserInputEnvelope
    connect?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
  }

  export type LinkUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<LinkCreateWithoutCreatorInput, LinkUncheckedCreateWithoutCreatorInput> | LinkCreateWithoutCreatorInput[] | LinkUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutCreatorInput | LinkCreateOrConnectWithoutCreatorInput[]
    createMany?: LinkCreateManyCreatorInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type LinkPermissionUncheckedCreateNestedManyWithoutLinkInput = {
    create?: XOR<LinkPermissionCreateWithoutLinkInput, LinkPermissionUncheckedCreateWithoutLinkInput> | LinkPermissionCreateWithoutLinkInput[] | LinkPermissionUncheckedCreateWithoutLinkInput[]
    connectOrCreate?: LinkPermissionCreateOrConnectWithoutLinkInput | LinkPermissionCreateOrConnectWithoutLinkInput[]
    createMany?: LinkPermissionCreateManyLinkInputEnvelope
    connect?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StickyNotesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StickyNotesCreateWithoutUserInput, StickyNotesUncheckedCreateWithoutUserInput> | StickyNotesCreateWithoutUserInput[] | StickyNotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StickyNotesCreateOrConnectWithoutUserInput | StickyNotesCreateOrConnectWithoutUserInput[]
    createMany?: StickyNotesCreateManyUserInputEnvelope
    connect?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LinkUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<LinkCreateWithoutCreatorInput, LinkUncheckedCreateWithoutCreatorInput> | LinkCreateWithoutCreatorInput[] | LinkUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutCreatorInput | LinkCreateOrConnectWithoutCreatorInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutCreatorInput | LinkUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: LinkCreateManyCreatorInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutCreatorInput | LinkUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutCreatorInput | LinkUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type LinkPermissionUpdateManyWithoutLinkNestedInput = {
    create?: XOR<LinkPermissionCreateWithoutLinkInput, LinkPermissionUncheckedCreateWithoutLinkInput> | LinkPermissionCreateWithoutLinkInput[] | LinkPermissionUncheckedCreateWithoutLinkInput[]
    connectOrCreate?: LinkPermissionCreateOrConnectWithoutLinkInput | LinkPermissionCreateOrConnectWithoutLinkInput[]
    upsert?: LinkPermissionUpsertWithWhereUniqueWithoutLinkInput | LinkPermissionUpsertWithWhereUniqueWithoutLinkInput[]
    createMany?: LinkPermissionCreateManyLinkInputEnvelope
    set?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
    disconnect?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
    delete?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
    connect?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
    update?: LinkPermissionUpdateWithWhereUniqueWithoutLinkInput | LinkPermissionUpdateWithWhereUniqueWithoutLinkInput[]
    updateMany?: LinkPermissionUpdateManyWithWhereWithoutLinkInput | LinkPermissionUpdateManyWithWhereWithoutLinkInput[]
    deleteMany?: LinkPermissionScalarWhereInput | LinkPermissionScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type StickyNotesUpdateManyWithoutUserNestedInput = {
    create?: XOR<StickyNotesCreateWithoutUserInput, StickyNotesUncheckedCreateWithoutUserInput> | StickyNotesCreateWithoutUserInput[] | StickyNotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StickyNotesCreateOrConnectWithoutUserInput | StickyNotesCreateOrConnectWithoutUserInput[]
    upsert?: StickyNotesUpsertWithWhereUniqueWithoutUserInput | StickyNotesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StickyNotesCreateManyUserInputEnvelope
    set?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
    disconnect?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
    delete?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
    connect?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
    update?: StickyNotesUpdateWithWhereUniqueWithoutUserInput | StickyNotesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StickyNotesUpdateManyWithWhereWithoutUserInput | StickyNotesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StickyNotesScalarWhereInput | StickyNotesScalarWhereInput[]
  }

  export type LinkUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<LinkCreateWithoutCreatorInput, LinkUncheckedCreateWithoutCreatorInput> | LinkCreateWithoutCreatorInput[] | LinkUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutCreatorInput | LinkCreateOrConnectWithoutCreatorInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutCreatorInput | LinkUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: LinkCreateManyCreatorInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutCreatorInput | LinkUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutCreatorInput | LinkUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type LinkPermissionUncheckedUpdateManyWithoutLinkNestedInput = {
    create?: XOR<LinkPermissionCreateWithoutLinkInput, LinkPermissionUncheckedCreateWithoutLinkInput> | LinkPermissionCreateWithoutLinkInput[] | LinkPermissionUncheckedCreateWithoutLinkInput[]
    connectOrCreate?: LinkPermissionCreateOrConnectWithoutLinkInput | LinkPermissionCreateOrConnectWithoutLinkInput[]
    upsert?: LinkPermissionUpsertWithWhereUniqueWithoutLinkInput | LinkPermissionUpsertWithWhereUniqueWithoutLinkInput[]
    createMany?: LinkPermissionCreateManyLinkInputEnvelope
    set?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
    disconnect?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
    delete?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
    connect?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
    update?: LinkPermissionUpdateWithWhereUniqueWithoutLinkInput | LinkPermissionUpdateWithWhereUniqueWithoutLinkInput[]
    updateMany?: LinkPermissionUpdateManyWithWhereWithoutLinkInput | LinkPermissionUpdateManyWithWhereWithoutLinkInput[]
    deleteMany?: LinkPermissionScalarWhereInput | LinkPermissionScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type StickyNotesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StickyNotesCreateWithoutUserInput, StickyNotesUncheckedCreateWithoutUserInput> | StickyNotesCreateWithoutUserInput[] | StickyNotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StickyNotesCreateOrConnectWithoutUserInput | StickyNotesCreateOrConnectWithoutUserInput[]
    upsert?: StickyNotesUpsertWithWhereUniqueWithoutUserInput | StickyNotesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StickyNotesCreateManyUserInputEnvelope
    set?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
    disconnect?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
    delete?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
    connect?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
    update?: StickyNotesUpdateWithWhereUniqueWithoutUserInput | StickyNotesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StickyNotesUpdateManyWithWhereWithoutUserInput | StickyNotesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StickyNotesScalarWhereInput | StickyNotesScalarWhereInput[]
  }

  export type LinkCreateNestedManyWithoutSessionInput = {
    create?: XOR<LinkCreateWithoutSessionInput, LinkUncheckedCreateWithoutSessionInput> | LinkCreateWithoutSessionInput[] | LinkUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutSessionInput | LinkCreateOrConnectWithoutSessionInput[]
    createMany?: LinkCreateManySessionInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type PremadeMusicCreateNestedOneWithoutSessionInput = {
    create?: XOR<PremadeMusicCreateWithoutSessionInput, PremadeMusicUncheckedCreateWithoutSessionInput>
    connectOrCreate?: PremadeMusicCreateOrConnectWithoutSessionInput
    connect?: PremadeMusicWhereUniqueInput
  }

  export type UploadedMusicCreateNestedOneWithoutSessionInput = {
    create?: XOR<UploadedMusicCreateWithoutSessionInput, UploadedMusicUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UploadedMusicCreateOrConnectWithoutSessionInput
    connect?: UploadedMusicWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type LinkUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<LinkCreateWithoutSessionInput, LinkUncheckedCreateWithoutSessionInput> | LinkCreateWithoutSessionInput[] | LinkUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutSessionInput | LinkCreateOrConnectWithoutSessionInput[]
    createMany?: LinkCreateManySessionInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type EnumMusicSourceFieldUpdateOperationsInput = {
    set?: $Enums.MusicSource
  }

  export type LinkUpdateManyWithoutSessionNestedInput = {
    create?: XOR<LinkCreateWithoutSessionInput, LinkUncheckedCreateWithoutSessionInput> | LinkCreateWithoutSessionInput[] | LinkUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutSessionInput | LinkCreateOrConnectWithoutSessionInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutSessionInput | LinkUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: LinkCreateManySessionInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutSessionInput | LinkUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutSessionInput | LinkUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type PremadeMusicUpdateOneWithoutSessionNestedInput = {
    create?: XOR<PremadeMusicCreateWithoutSessionInput, PremadeMusicUncheckedCreateWithoutSessionInput>
    connectOrCreate?: PremadeMusicCreateOrConnectWithoutSessionInput
    upsert?: PremadeMusicUpsertWithoutSessionInput
    disconnect?: PremadeMusicWhereInput | boolean
    delete?: PremadeMusicWhereInput | boolean
    connect?: PremadeMusicWhereUniqueInput
    update?: XOR<XOR<PremadeMusicUpdateToOneWithWhereWithoutSessionInput, PremadeMusicUpdateWithoutSessionInput>, PremadeMusicUncheckedUpdateWithoutSessionInput>
  }

  export type UploadedMusicUpdateOneWithoutSessionNestedInput = {
    create?: XOR<UploadedMusicCreateWithoutSessionInput, UploadedMusicUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UploadedMusicCreateOrConnectWithoutSessionInput
    upsert?: UploadedMusicUpsertWithoutSessionInput
    disconnect?: UploadedMusicWhereInput | boolean
    delete?: UploadedMusicWhereInput | boolean
    connect?: UploadedMusicWhereUniqueInput
    update?: XOR<XOR<UploadedMusicUpdateToOneWithWhereWithoutSessionInput, UploadedMusicUpdateWithoutSessionInput>, UploadedMusicUncheckedUpdateWithoutSessionInput>
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LinkUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<LinkCreateWithoutSessionInput, LinkUncheckedCreateWithoutSessionInput> | LinkCreateWithoutSessionInput[] | LinkUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutSessionInput | LinkCreateOrConnectWithoutSessionInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutSessionInput | LinkUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: LinkCreateManySessionInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutSessionInput | LinkUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutSessionInput | LinkUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type UploadedMusicCreateNestedOneWithoutStickyNotesInput = {
    create?: XOR<UploadedMusicCreateWithoutStickyNotesInput, UploadedMusicUncheckedCreateWithoutStickyNotesInput>
    connectOrCreate?: UploadedMusicCreateOrConnectWithoutStickyNotesInput
    connect?: UploadedMusicWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStickyNotesInput = {
    create?: XOR<UserCreateWithoutStickyNotesInput, UserUncheckedCreateWithoutStickyNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStickyNotesInput
    connect?: UserWhereUniqueInput
  }

  export type UploadedMusicUpdateOneWithoutStickyNotesNestedInput = {
    create?: XOR<UploadedMusicCreateWithoutStickyNotesInput, UploadedMusicUncheckedCreateWithoutStickyNotesInput>
    connectOrCreate?: UploadedMusicCreateOrConnectWithoutStickyNotesInput
    upsert?: UploadedMusicUpsertWithoutStickyNotesInput
    disconnect?: UploadedMusicWhereInput | boolean
    delete?: UploadedMusicWhereInput | boolean
    connect?: UploadedMusicWhereUniqueInput
    update?: XOR<XOR<UploadedMusicUpdateToOneWithWhereWithoutStickyNotesInput, UploadedMusicUpdateWithoutStickyNotesInput>, UploadedMusicUncheckedUpdateWithoutStickyNotesInput>
  }

  export type UserUpdateOneRequiredWithoutStickyNotesNestedInput = {
    create?: XOR<UserCreateWithoutStickyNotesInput, UserUncheckedCreateWithoutStickyNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStickyNotesInput
    upsert?: UserUpsertWithoutStickyNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStickyNotesInput, UserUpdateWithoutStickyNotesInput>, UserUncheckedUpdateWithoutStickyNotesInput>
  }

  export type UserCreateNestedOneWithoutLinksInput = {
    create?: XOR<UserCreateWithoutLinksInput, UserUncheckedCreateWithoutLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinksInput
    connect?: UserWhereUniqueInput
  }

  export type SessionCreateNestedOneWithoutLinksInput = {
    create?: XOR<SessionCreateWithoutLinksInput, SessionUncheckedCreateWithoutLinksInput>
    connectOrCreate?: SessionCreateOrConnectWithoutLinksInput
    connect?: SessionWhereUniqueInput
  }

  export type LinkPermissionCreateNestedManyWithoutUserLinkInput = {
    create?: XOR<LinkPermissionCreateWithoutUserLinkInput, LinkPermissionUncheckedCreateWithoutUserLinkInput> | LinkPermissionCreateWithoutUserLinkInput[] | LinkPermissionUncheckedCreateWithoutUserLinkInput[]
    connectOrCreate?: LinkPermissionCreateOrConnectWithoutUserLinkInput | LinkPermissionCreateOrConnectWithoutUserLinkInput[]
    createMany?: LinkPermissionCreateManyUserLinkInputEnvelope
    connect?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
  }

  export type LinkPermissionUncheckedCreateNestedManyWithoutUserLinkInput = {
    create?: XOR<LinkPermissionCreateWithoutUserLinkInput, LinkPermissionUncheckedCreateWithoutUserLinkInput> | LinkPermissionCreateWithoutUserLinkInput[] | LinkPermissionUncheckedCreateWithoutUserLinkInput[]
    connectOrCreate?: LinkPermissionCreateOrConnectWithoutUserLinkInput | LinkPermissionCreateOrConnectWithoutUserLinkInput[]
    createMany?: LinkPermissionCreateManyUserLinkInputEnvelope
    connect?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutLinksNestedInput = {
    create?: XOR<UserCreateWithoutLinksInput, UserUncheckedCreateWithoutLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinksInput
    upsert?: UserUpsertWithoutLinksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLinksInput, UserUpdateWithoutLinksInput>, UserUncheckedUpdateWithoutLinksInput>
  }

  export type SessionUpdateOneRequiredWithoutLinksNestedInput = {
    create?: XOR<SessionCreateWithoutLinksInput, SessionUncheckedCreateWithoutLinksInput>
    connectOrCreate?: SessionCreateOrConnectWithoutLinksInput
    upsert?: SessionUpsertWithoutLinksInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutLinksInput, SessionUpdateWithoutLinksInput>, SessionUncheckedUpdateWithoutLinksInput>
  }

  export type LinkPermissionUpdateManyWithoutUserLinkNestedInput = {
    create?: XOR<LinkPermissionCreateWithoutUserLinkInput, LinkPermissionUncheckedCreateWithoutUserLinkInput> | LinkPermissionCreateWithoutUserLinkInput[] | LinkPermissionUncheckedCreateWithoutUserLinkInput[]
    connectOrCreate?: LinkPermissionCreateOrConnectWithoutUserLinkInput | LinkPermissionCreateOrConnectWithoutUserLinkInput[]
    upsert?: LinkPermissionUpsertWithWhereUniqueWithoutUserLinkInput | LinkPermissionUpsertWithWhereUniqueWithoutUserLinkInput[]
    createMany?: LinkPermissionCreateManyUserLinkInputEnvelope
    set?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
    disconnect?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
    delete?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
    connect?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
    update?: LinkPermissionUpdateWithWhereUniqueWithoutUserLinkInput | LinkPermissionUpdateWithWhereUniqueWithoutUserLinkInput[]
    updateMany?: LinkPermissionUpdateManyWithWhereWithoutUserLinkInput | LinkPermissionUpdateManyWithWhereWithoutUserLinkInput[]
    deleteMany?: LinkPermissionScalarWhereInput | LinkPermissionScalarWhereInput[]
  }

  export type LinkPermissionUncheckedUpdateManyWithoutUserLinkNestedInput = {
    create?: XOR<LinkPermissionCreateWithoutUserLinkInput, LinkPermissionUncheckedCreateWithoutUserLinkInput> | LinkPermissionCreateWithoutUserLinkInput[] | LinkPermissionUncheckedCreateWithoutUserLinkInput[]
    connectOrCreate?: LinkPermissionCreateOrConnectWithoutUserLinkInput | LinkPermissionCreateOrConnectWithoutUserLinkInput[]
    upsert?: LinkPermissionUpsertWithWhereUniqueWithoutUserLinkInput | LinkPermissionUpsertWithWhereUniqueWithoutUserLinkInput[]
    createMany?: LinkPermissionCreateManyUserLinkInputEnvelope
    set?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
    disconnect?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
    delete?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
    connect?: LinkPermissionWhereUniqueInput | LinkPermissionWhereUniqueInput[]
    update?: LinkPermissionUpdateWithWhereUniqueWithoutUserLinkInput | LinkPermissionUpdateWithWhereUniqueWithoutUserLinkInput[]
    updateMany?: LinkPermissionUpdateManyWithWhereWithoutUserLinkInput | LinkPermissionUpdateManyWithWhereWithoutUserLinkInput[]
    deleteMany?: LinkPermissionScalarWhereInput | LinkPermissionScalarWhereInput[]
  }

  export type LinkCreateNestedOneWithoutLinkPermissionsInput = {
    create?: XOR<LinkCreateWithoutLinkPermissionsInput, LinkUncheckedCreateWithoutLinkPermissionsInput>
    connectOrCreate?: LinkCreateOrConnectWithoutLinkPermissionsInput
    connect?: LinkWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLinkPermissionsInput = {
    create?: XOR<UserCreateWithoutLinkPermissionsInput, UserUncheckedCreateWithoutLinkPermissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkPermissionsInput
    connect?: UserWhereUniqueInput
  }

  export type LinkUpdateOneRequiredWithoutLinkPermissionsNestedInput = {
    create?: XOR<LinkCreateWithoutLinkPermissionsInput, LinkUncheckedCreateWithoutLinkPermissionsInput>
    connectOrCreate?: LinkCreateOrConnectWithoutLinkPermissionsInput
    upsert?: LinkUpsertWithoutLinkPermissionsInput
    connect?: LinkWhereUniqueInput
    update?: XOR<XOR<LinkUpdateToOneWithWhereWithoutLinkPermissionsInput, LinkUpdateWithoutLinkPermissionsInput>, LinkUncheckedUpdateWithoutLinkPermissionsInput>
  }

  export type UserUpdateOneRequiredWithoutLinkPermissionsNestedInput = {
    create?: XOR<UserCreateWithoutLinkPermissionsInput, UserUncheckedCreateWithoutLinkPermissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkPermissionsInput
    upsert?: UserUpsertWithoutLinkPermissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLinkPermissionsInput, UserUpdateWithoutLinkPermissionsInput>, UserUncheckedUpdateWithoutLinkPermissionsInput>
  }

  export type SessionCreateNestedManyWithoutPremadeMusicInput = {
    create?: XOR<SessionCreateWithoutPremadeMusicInput, SessionUncheckedCreateWithoutPremadeMusicInput> | SessionCreateWithoutPremadeMusicInput[] | SessionUncheckedCreateWithoutPremadeMusicInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPremadeMusicInput | SessionCreateOrConnectWithoutPremadeMusicInput[]
    createMany?: SessionCreateManyPremadeMusicInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutPremadeMusicInput = {
    create?: XOR<SessionCreateWithoutPremadeMusicInput, SessionUncheckedCreateWithoutPremadeMusicInput> | SessionCreateWithoutPremadeMusicInput[] | SessionUncheckedCreateWithoutPremadeMusicInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPremadeMusicInput | SessionCreateOrConnectWithoutPremadeMusicInput[]
    createMany?: SessionCreateManyPremadeMusicInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionUpdateManyWithoutPremadeMusicNestedInput = {
    create?: XOR<SessionCreateWithoutPremadeMusicInput, SessionUncheckedCreateWithoutPremadeMusicInput> | SessionCreateWithoutPremadeMusicInput[] | SessionUncheckedCreateWithoutPremadeMusicInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPremadeMusicInput | SessionCreateOrConnectWithoutPremadeMusicInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutPremadeMusicInput | SessionUpsertWithWhereUniqueWithoutPremadeMusicInput[]
    createMany?: SessionCreateManyPremadeMusicInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutPremadeMusicInput | SessionUpdateWithWhereUniqueWithoutPremadeMusicInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutPremadeMusicInput | SessionUpdateManyWithWhereWithoutPremadeMusicInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutPremadeMusicNestedInput = {
    create?: XOR<SessionCreateWithoutPremadeMusicInput, SessionUncheckedCreateWithoutPremadeMusicInput> | SessionCreateWithoutPremadeMusicInput[] | SessionUncheckedCreateWithoutPremadeMusicInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPremadeMusicInput | SessionCreateOrConnectWithoutPremadeMusicInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutPremadeMusicInput | SessionUpsertWithWhereUniqueWithoutPremadeMusicInput[]
    createMany?: SessionCreateManyPremadeMusicInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutPremadeMusicInput | SessionUpdateWithWhereUniqueWithoutPremadeMusicInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutPremadeMusicInput | SessionUpdateManyWithWhereWithoutPremadeMusicInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionCreateNestedManyWithoutUploadedMusicInput = {
    create?: XOR<SessionCreateWithoutUploadedMusicInput, SessionUncheckedCreateWithoutUploadedMusicInput> | SessionCreateWithoutUploadedMusicInput[] | SessionUncheckedCreateWithoutUploadedMusicInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUploadedMusicInput | SessionCreateOrConnectWithoutUploadedMusicInput[]
    createMany?: SessionCreateManyUploadedMusicInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StickyNotesCreateNestedManyWithoutMusicInput = {
    create?: XOR<StickyNotesCreateWithoutMusicInput, StickyNotesUncheckedCreateWithoutMusicInput> | StickyNotesCreateWithoutMusicInput[] | StickyNotesUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: StickyNotesCreateOrConnectWithoutMusicInput | StickyNotesCreateOrConnectWithoutMusicInput[]
    createMany?: StickyNotesCreateManyMusicInputEnvelope
    connect?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUploadedMusicInput = {
    create?: XOR<SessionCreateWithoutUploadedMusicInput, SessionUncheckedCreateWithoutUploadedMusicInput> | SessionCreateWithoutUploadedMusicInput[] | SessionUncheckedCreateWithoutUploadedMusicInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUploadedMusicInput | SessionCreateOrConnectWithoutUploadedMusicInput[]
    createMany?: SessionCreateManyUploadedMusicInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StickyNotesUncheckedCreateNestedManyWithoutMusicInput = {
    create?: XOR<StickyNotesCreateWithoutMusicInput, StickyNotesUncheckedCreateWithoutMusicInput> | StickyNotesCreateWithoutMusicInput[] | StickyNotesUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: StickyNotesCreateOrConnectWithoutMusicInput | StickyNotesCreateOrConnectWithoutMusicInput[]
    createMany?: StickyNotesCreateManyMusicInputEnvelope
    connect?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
  }

  export type SessionUpdateManyWithoutUploadedMusicNestedInput = {
    create?: XOR<SessionCreateWithoutUploadedMusicInput, SessionUncheckedCreateWithoutUploadedMusicInput> | SessionCreateWithoutUploadedMusicInput[] | SessionUncheckedCreateWithoutUploadedMusicInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUploadedMusicInput | SessionCreateOrConnectWithoutUploadedMusicInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUploadedMusicInput | SessionUpsertWithWhereUniqueWithoutUploadedMusicInput[]
    createMany?: SessionCreateManyUploadedMusicInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUploadedMusicInput | SessionUpdateWithWhereUniqueWithoutUploadedMusicInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUploadedMusicInput | SessionUpdateManyWithWhereWithoutUploadedMusicInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type StickyNotesUpdateManyWithoutMusicNestedInput = {
    create?: XOR<StickyNotesCreateWithoutMusicInput, StickyNotesUncheckedCreateWithoutMusicInput> | StickyNotesCreateWithoutMusicInput[] | StickyNotesUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: StickyNotesCreateOrConnectWithoutMusicInput | StickyNotesCreateOrConnectWithoutMusicInput[]
    upsert?: StickyNotesUpsertWithWhereUniqueWithoutMusicInput | StickyNotesUpsertWithWhereUniqueWithoutMusicInput[]
    createMany?: StickyNotesCreateManyMusicInputEnvelope
    set?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
    disconnect?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
    delete?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
    connect?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
    update?: StickyNotesUpdateWithWhereUniqueWithoutMusicInput | StickyNotesUpdateWithWhereUniqueWithoutMusicInput[]
    updateMany?: StickyNotesUpdateManyWithWhereWithoutMusicInput | StickyNotesUpdateManyWithWhereWithoutMusicInput[]
    deleteMany?: StickyNotesScalarWhereInput | StickyNotesScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUploadedMusicNestedInput = {
    create?: XOR<SessionCreateWithoutUploadedMusicInput, SessionUncheckedCreateWithoutUploadedMusicInput> | SessionCreateWithoutUploadedMusicInput[] | SessionUncheckedCreateWithoutUploadedMusicInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUploadedMusicInput | SessionCreateOrConnectWithoutUploadedMusicInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUploadedMusicInput | SessionUpsertWithWhereUniqueWithoutUploadedMusicInput[]
    createMany?: SessionCreateManyUploadedMusicInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUploadedMusicInput | SessionUpdateWithWhereUniqueWithoutUploadedMusicInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUploadedMusicInput | SessionUpdateManyWithWhereWithoutUploadedMusicInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type StickyNotesUncheckedUpdateManyWithoutMusicNestedInput = {
    create?: XOR<StickyNotesCreateWithoutMusicInput, StickyNotesUncheckedCreateWithoutMusicInput> | StickyNotesCreateWithoutMusicInput[] | StickyNotesUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: StickyNotesCreateOrConnectWithoutMusicInput | StickyNotesCreateOrConnectWithoutMusicInput[]
    upsert?: StickyNotesUpsertWithWhereUniqueWithoutMusicInput | StickyNotesUpsertWithWhereUniqueWithoutMusicInput[]
    createMany?: StickyNotesCreateManyMusicInputEnvelope
    set?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
    disconnect?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
    delete?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
    connect?: StickyNotesWhereUniqueInput | StickyNotesWhereUniqueInput[]
    update?: StickyNotesUpdateWithWhereUniqueWithoutMusicInput | StickyNotesUpdateWithWhereUniqueWithoutMusicInput[]
    updateMany?: StickyNotesUpdateManyWithWhereWithoutMusicInput | StickyNotesUpdateManyWithWhereWithoutMusicInput[]
    deleteMany?: StickyNotesScalarWhereInput | StickyNotesScalarWhereInput[]
  }

  export type DictionaryHeadwordCreateNestedManyWithoutEntryInput = {
    create?: XOR<DictionaryHeadwordCreateWithoutEntryInput, DictionaryHeadwordUncheckedCreateWithoutEntryInput> | DictionaryHeadwordCreateWithoutEntryInput[] | DictionaryHeadwordUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: DictionaryHeadwordCreateOrConnectWithoutEntryInput | DictionaryHeadwordCreateOrConnectWithoutEntryInput[]
    createMany?: DictionaryHeadwordCreateManyEntryInputEnvelope
    connect?: DictionaryHeadwordWhereUniqueInput | DictionaryHeadwordWhereUniqueInput[]
  }

  export type DictionarySenseCreateNestedManyWithoutEntryInput = {
    create?: XOR<DictionarySenseCreateWithoutEntryInput, DictionarySenseUncheckedCreateWithoutEntryInput> | DictionarySenseCreateWithoutEntryInput[] | DictionarySenseUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: DictionarySenseCreateOrConnectWithoutEntryInput | DictionarySenseCreateOrConnectWithoutEntryInput[]
    createMany?: DictionarySenseCreateManyEntryInputEnvelope
    connect?: DictionarySenseWhereUniqueInput | DictionarySenseWhereUniqueInput[]
  }

  export type DictionaryHeadwordUncheckedCreateNestedManyWithoutEntryInput = {
    create?: XOR<DictionaryHeadwordCreateWithoutEntryInput, DictionaryHeadwordUncheckedCreateWithoutEntryInput> | DictionaryHeadwordCreateWithoutEntryInput[] | DictionaryHeadwordUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: DictionaryHeadwordCreateOrConnectWithoutEntryInput | DictionaryHeadwordCreateOrConnectWithoutEntryInput[]
    createMany?: DictionaryHeadwordCreateManyEntryInputEnvelope
    connect?: DictionaryHeadwordWhereUniqueInput | DictionaryHeadwordWhereUniqueInput[]
  }

  export type DictionarySenseUncheckedCreateNestedManyWithoutEntryInput = {
    create?: XOR<DictionarySenseCreateWithoutEntryInput, DictionarySenseUncheckedCreateWithoutEntryInput> | DictionarySenseCreateWithoutEntryInput[] | DictionarySenseUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: DictionarySenseCreateOrConnectWithoutEntryInput | DictionarySenseCreateOrConnectWithoutEntryInput[]
    createMany?: DictionarySenseCreateManyEntryInputEnvelope
    connect?: DictionarySenseWhereUniqueInput | DictionarySenseWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DictionaryHeadwordUpdateManyWithoutEntryNestedInput = {
    create?: XOR<DictionaryHeadwordCreateWithoutEntryInput, DictionaryHeadwordUncheckedCreateWithoutEntryInput> | DictionaryHeadwordCreateWithoutEntryInput[] | DictionaryHeadwordUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: DictionaryHeadwordCreateOrConnectWithoutEntryInput | DictionaryHeadwordCreateOrConnectWithoutEntryInput[]
    upsert?: DictionaryHeadwordUpsertWithWhereUniqueWithoutEntryInput | DictionaryHeadwordUpsertWithWhereUniqueWithoutEntryInput[]
    createMany?: DictionaryHeadwordCreateManyEntryInputEnvelope
    set?: DictionaryHeadwordWhereUniqueInput | DictionaryHeadwordWhereUniqueInput[]
    disconnect?: DictionaryHeadwordWhereUniqueInput | DictionaryHeadwordWhereUniqueInput[]
    delete?: DictionaryHeadwordWhereUniqueInput | DictionaryHeadwordWhereUniqueInput[]
    connect?: DictionaryHeadwordWhereUniqueInput | DictionaryHeadwordWhereUniqueInput[]
    update?: DictionaryHeadwordUpdateWithWhereUniqueWithoutEntryInput | DictionaryHeadwordUpdateWithWhereUniqueWithoutEntryInput[]
    updateMany?: DictionaryHeadwordUpdateManyWithWhereWithoutEntryInput | DictionaryHeadwordUpdateManyWithWhereWithoutEntryInput[]
    deleteMany?: DictionaryHeadwordScalarWhereInput | DictionaryHeadwordScalarWhereInput[]
  }

  export type DictionarySenseUpdateManyWithoutEntryNestedInput = {
    create?: XOR<DictionarySenseCreateWithoutEntryInput, DictionarySenseUncheckedCreateWithoutEntryInput> | DictionarySenseCreateWithoutEntryInput[] | DictionarySenseUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: DictionarySenseCreateOrConnectWithoutEntryInput | DictionarySenseCreateOrConnectWithoutEntryInput[]
    upsert?: DictionarySenseUpsertWithWhereUniqueWithoutEntryInput | DictionarySenseUpsertWithWhereUniqueWithoutEntryInput[]
    createMany?: DictionarySenseCreateManyEntryInputEnvelope
    set?: DictionarySenseWhereUniqueInput | DictionarySenseWhereUniqueInput[]
    disconnect?: DictionarySenseWhereUniqueInput | DictionarySenseWhereUniqueInput[]
    delete?: DictionarySenseWhereUniqueInput | DictionarySenseWhereUniqueInput[]
    connect?: DictionarySenseWhereUniqueInput | DictionarySenseWhereUniqueInput[]
    update?: DictionarySenseUpdateWithWhereUniqueWithoutEntryInput | DictionarySenseUpdateWithWhereUniqueWithoutEntryInput[]
    updateMany?: DictionarySenseUpdateManyWithWhereWithoutEntryInput | DictionarySenseUpdateManyWithWhereWithoutEntryInput[]
    deleteMany?: DictionarySenseScalarWhereInput | DictionarySenseScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DictionaryHeadwordUncheckedUpdateManyWithoutEntryNestedInput = {
    create?: XOR<DictionaryHeadwordCreateWithoutEntryInput, DictionaryHeadwordUncheckedCreateWithoutEntryInput> | DictionaryHeadwordCreateWithoutEntryInput[] | DictionaryHeadwordUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: DictionaryHeadwordCreateOrConnectWithoutEntryInput | DictionaryHeadwordCreateOrConnectWithoutEntryInput[]
    upsert?: DictionaryHeadwordUpsertWithWhereUniqueWithoutEntryInput | DictionaryHeadwordUpsertWithWhereUniqueWithoutEntryInput[]
    createMany?: DictionaryHeadwordCreateManyEntryInputEnvelope
    set?: DictionaryHeadwordWhereUniqueInput | DictionaryHeadwordWhereUniqueInput[]
    disconnect?: DictionaryHeadwordWhereUniqueInput | DictionaryHeadwordWhereUniqueInput[]
    delete?: DictionaryHeadwordWhereUniqueInput | DictionaryHeadwordWhereUniqueInput[]
    connect?: DictionaryHeadwordWhereUniqueInput | DictionaryHeadwordWhereUniqueInput[]
    update?: DictionaryHeadwordUpdateWithWhereUniqueWithoutEntryInput | DictionaryHeadwordUpdateWithWhereUniqueWithoutEntryInput[]
    updateMany?: DictionaryHeadwordUpdateManyWithWhereWithoutEntryInput | DictionaryHeadwordUpdateManyWithWhereWithoutEntryInput[]
    deleteMany?: DictionaryHeadwordScalarWhereInput | DictionaryHeadwordScalarWhereInput[]
  }

  export type DictionarySenseUncheckedUpdateManyWithoutEntryNestedInput = {
    create?: XOR<DictionarySenseCreateWithoutEntryInput, DictionarySenseUncheckedCreateWithoutEntryInput> | DictionarySenseCreateWithoutEntryInput[] | DictionarySenseUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: DictionarySenseCreateOrConnectWithoutEntryInput | DictionarySenseCreateOrConnectWithoutEntryInput[]
    upsert?: DictionarySenseUpsertWithWhereUniqueWithoutEntryInput | DictionarySenseUpsertWithWhereUniqueWithoutEntryInput[]
    createMany?: DictionarySenseCreateManyEntryInputEnvelope
    set?: DictionarySenseWhereUniqueInput | DictionarySenseWhereUniqueInput[]
    disconnect?: DictionarySenseWhereUniqueInput | DictionarySenseWhereUniqueInput[]
    delete?: DictionarySenseWhereUniqueInput | DictionarySenseWhereUniqueInput[]
    connect?: DictionarySenseWhereUniqueInput | DictionarySenseWhereUniqueInput[]
    update?: DictionarySenseUpdateWithWhereUniqueWithoutEntryInput | DictionarySenseUpdateWithWhereUniqueWithoutEntryInput[]
    updateMany?: DictionarySenseUpdateManyWithWhereWithoutEntryInput | DictionarySenseUpdateManyWithWhereWithoutEntryInput[]
    deleteMany?: DictionarySenseScalarWhereInput | DictionarySenseScalarWhereInput[]
  }

  export type DictionaryEntryCreateNestedOneWithoutHeadwordsInput = {
    create?: XOR<DictionaryEntryCreateWithoutHeadwordsInput, DictionaryEntryUncheckedCreateWithoutHeadwordsInput>
    connectOrCreate?: DictionaryEntryCreateOrConnectWithoutHeadwordsInput
    connect?: DictionaryEntryWhereUniqueInput
  }

  export type DictionaryEntryUpdateOneRequiredWithoutHeadwordsNestedInput = {
    create?: XOR<DictionaryEntryCreateWithoutHeadwordsInput, DictionaryEntryUncheckedCreateWithoutHeadwordsInput>
    connectOrCreate?: DictionaryEntryCreateOrConnectWithoutHeadwordsInput
    upsert?: DictionaryEntryUpsertWithoutHeadwordsInput
    connect?: DictionaryEntryWhereUniqueInput
    update?: XOR<XOR<DictionaryEntryUpdateToOneWithWhereWithoutHeadwordsInput, DictionaryEntryUpdateWithoutHeadwordsInput>, DictionaryEntryUncheckedUpdateWithoutHeadwordsInput>
  }

  export type DictionaryExampleCreateNestedManyWithoutSenseInput = {
    create?: XOR<DictionaryExampleCreateWithoutSenseInput, DictionaryExampleUncheckedCreateWithoutSenseInput> | DictionaryExampleCreateWithoutSenseInput[] | DictionaryExampleUncheckedCreateWithoutSenseInput[]
    connectOrCreate?: DictionaryExampleCreateOrConnectWithoutSenseInput | DictionaryExampleCreateOrConnectWithoutSenseInput[]
    createMany?: DictionaryExampleCreateManySenseInputEnvelope
    connect?: DictionaryExampleWhereUniqueInput | DictionaryExampleWhereUniqueInput[]
  }

  export type DictionaryEntryCreateNestedOneWithoutSensesInput = {
    create?: XOR<DictionaryEntryCreateWithoutSensesInput, DictionaryEntryUncheckedCreateWithoutSensesInput>
    connectOrCreate?: DictionaryEntryCreateOrConnectWithoutSensesInput
    connect?: DictionaryEntryWhereUniqueInput
  }

  export type DictionaryTranslationCreateNestedManyWithoutSenseInput = {
    create?: XOR<DictionaryTranslationCreateWithoutSenseInput, DictionaryTranslationUncheckedCreateWithoutSenseInput> | DictionaryTranslationCreateWithoutSenseInput[] | DictionaryTranslationUncheckedCreateWithoutSenseInput[]
    connectOrCreate?: DictionaryTranslationCreateOrConnectWithoutSenseInput | DictionaryTranslationCreateOrConnectWithoutSenseInput[]
    createMany?: DictionaryTranslationCreateManySenseInputEnvelope
    connect?: DictionaryTranslationWhereUniqueInput | DictionaryTranslationWhereUniqueInput[]
  }

  export type DictionaryCrossRefCreateNestedManyWithoutSenseInput = {
    create?: XOR<DictionaryCrossRefCreateWithoutSenseInput, DictionaryCrossRefUncheckedCreateWithoutSenseInput> | DictionaryCrossRefCreateWithoutSenseInput[] | DictionaryCrossRefUncheckedCreateWithoutSenseInput[]
    connectOrCreate?: DictionaryCrossRefCreateOrConnectWithoutSenseInput | DictionaryCrossRefCreateOrConnectWithoutSenseInput[]
    createMany?: DictionaryCrossRefCreateManySenseInputEnvelope
    connect?: DictionaryCrossRefWhereUniqueInput | DictionaryCrossRefWhereUniqueInput[]
  }

  export type DictionaryExampleUncheckedCreateNestedManyWithoutSenseInput = {
    create?: XOR<DictionaryExampleCreateWithoutSenseInput, DictionaryExampleUncheckedCreateWithoutSenseInput> | DictionaryExampleCreateWithoutSenseInput[] | DictionaryExampleUncheckedCreateWithoutSenseInput[]
    connectOrCreate?: DictionaryExampleCreateOrConnectWithoutSenseInput | DictionaryExampleCreateOrConnectWithoutSenseInput[]
    createMany?: DictionaryExampleCreateManySenseInputEnvelope
    connect?: DictionaryExampleWhereUniqueInput | DictionaryExampleWhereUniqueInput[]
  }

  export type DictionaryTranslationUncheckedCreateNestedManyWithoutSenseInput = {
    create?: XOR<DictionaryTranslationCreateWithoutSenseInput, DictionaryTranslationUncheckedCreateWithoutSenseInput> | DictionaryTranslationCreateWithoutSenseInput[] | DictionaryTranslationUncheckedCreateWithoutSenseInput[]
    connectOrCreate?: DictionaryTranslationCreateOrConnectWithoutSenseInput | DictionaryTranslationCreateOrConnectWithoutSenseInput[]
    createMany?: DictionaryTranslationCreateManySenseInputEnvelope
    connect?: DictionaryTranslationWhereUniqueInput | DictionaryTranslationWhereUniqueInput[]
  }

  export type DictionaryCrossRefUncheckedCreateNestedManyWithoutSenseInput = {
    create?: XOR<DictionaryCrossRefCreateWithoutSenseInput, DictionaryCrossRefUncheckedCreateWithoutSenseInput> | DictionaryCrossRefCreateWithoutSenseInput[] | DictionaryCrossRefUncheckedCreateWithoutSenseInput[]
    connectOrCreate?: DictionaryCrossRefCreateOrConnectWithoutSenseInput | DictionaryCrossRefCreateOrConnectWithoutSenseInput[]
    createMany?: DictionaryCrossRefCreateManySenseInputEnvelope
    connect?: DictionaryCrossRefWhereUniqueInput | DictionaryCrossRefWhereUniqueInput[]
  }

  export type DictionaryExampleUpdateManyWithoutSenseNestedInput = {
    create?: XOR<DictionaryExampleCreateWithoutSenseInput, DictionaryExampleUncheckedCreateWithoutSenseInput> | DictionaryExampleCreateWithoutSenseInput[] | DictionaryExampleUncheckedCreateWithoutSenseInput[]
    connectOrCreate?: DictionaryExampleCreateOrConnectWithoutSenseInput | DictionaryExampleCreateOrConnectWithoutSenseInput[]
    upsert?: DictionaryExampleUpsertWithWhereUniqueWithoutSenseInput | DictionaryExampleUpsertWithWhereUniqueWithoutSenseInput[]
    createMany?: DictionaryExampleCreateManySenseInputEnvelope
    set?: DictionaryExampleWhereUniqueInput | DictionaryExampleWhereUniqueInput[]
    disconnect?: DictionaryExampleWhereUniqueInput | DictionaryExampleWhereUniqueInput[]
    delete?: DictionaryExampleWhereUniqueInput | DictionaryExampleWhereUniqueInput[]
    connect?: DictionaryExampleWhereUniqueInput | DictionaryExampleWhereUniqueInput[]
    update?: DictionaryExampleUpdateWithWhereUniqueWithoutSenseInput | DictionaryExampleUpdateWithWhereUniqueWithoutSenseInput[]
    updateMany?: DictionaryExampleUpdateManyWithWhereWithoutSenseInput | DictionaryExampleUpdateManyWithWhereWithoutSenseInput[]
    deleteMany?: DictionaryExampleScalarWhereInput | DictionaryExampleScalarWhereInput[]
  }

  export type DictionaryEntryUpdateOneRequiredWithoutSensesNestedInput = {
    create?: XOR<DictionaryEntryCreateWithoutSensesInput, DictionaryEntryUncheckedCreateWithoutSensesInput>
    connectOrCreate?: DictionaryEntryCreateOrConnectWithoutSensesInput
    upsert?: DictionaryEntryUpsertWithoutSensesInput
    connect?: DictionaryEntryWhereUniqueInput
    update?: XOR<XOR<DictionaryEntryUpdateToOneWithWhereWithoutSensesInput, DictionaryEntryUpdateWithoutSensesInput>, DictionaryEntryUncheckedUpdateWithoutSensesInput>
  }

  export type DictionaryTranslationUpdateManyWithoutSenseNestedInput = {
    create?: XOR<DictionaryTranslationCreateWithoutSenseInput, DictionaryTranslationUncheckedCreateWithoutSenseInput> | DictionaryTranslationCreateWithoutSenseInput[] | DictionaryTranslationUncheckedCreateWithoutSenseInput[]
    connectOrCreate?: DictionaryTranslationCreateOrConnectWithoutSenseInput | DictionaryTranslationCreateOrConnectWithoutSenseInput[]
    upsert?: DictionaryTranslationUpsertWithWhereUniqueWithoutSenseInput | DictionaryTranslationUpsertWithWhereUniqueWithoutSenseInput[]
    createMany?: DictionaryTranslationCreateManySenseInputEnvelope
    set?: DictionaryTranslationWhereUniqueInput | DictionaryTranslationWhereUniqueInput[]
    disconnect?: DictionaryTranslationWhereUniqueInput | DictionaryTranslationWhereUniqueInput[]
    delete?: DictionaryTranslationWhereUniqueInput | DictionaryTranslationWhereUniqueInput[]
    connect?: DictionaryTranslationWhereUniqueInput | DictionaryTranslationWhereUniqueInput[]
    update?: DictionaryTranslationUpdateWithWhereUniqueWithoutSenseInput | DictionaryTranslationUpdateWithWhereUniqueWithoutSenseInput[]
    updateMany?: DictionaryTranslationUpdateManyWithWhereWithoutSenseInput | DictionaryTranslationUpdateManyWithWhereWithoutSenseInput[]
    deleteMany?: DictionaryTranslationScalarWhereInput | DictionaryTranslationScalarWhereInput[]
  }

  export type DictionaryCrossRefUpdateManyWithoutSenseNestedInput = {
    create?: XOR<DictionaryCrossRefCreateWithoutSenseInput, DictionaryCrossRefUncheckedCreateWithoutSenseInput> | DictionaryCrossRefCreateWithoutSenseInput[] | DictionaryCrossRefUncheckedCreateWithoutSenseInput[]
    connectOrCreate?: DictionaryCrossRefCreateOrConnectWithoutSenseInput | DictionaryCrossRefCreateOrConnectWithoutSenseInput[]
    upsert?: DictionaryCrossRefUpsertWithWhereUniqueWithoutSenseInput | DictionaryCrossRefUpsertWithWhereUniqueWithoutSenseInput[]
    createMany?: DictionaryCrossRefCreateManySenseInputEnvelope
    set?: DictionaryCrossRefWhereUniqueInput | DictionaryCrossRefWhereUniqueInput[]
    disconnect?: DictionaryCrossRefWhereUniqueInput | DictionaryCrossRefWhereUniqueInput[]
    delete?: DictionaryCrossRefWhereUniqueInput | DictionaryCrossRefWhereUniqueInput[]
    connect?: DictionaryCrossRefWhereUniqueInput | DictionaryCrossRefWhereUniqueInput[]
    update?: DictionaryCrossRefUpdateWithWhereUniqueWithoutSenseInput | DictionaryCrossRefUpdateWithWhereUniqueWithoutSenseInput[]
    updateMany?: DictionaryCrossRefUpdateManyWithWhereWithoutSenseInput | DictionaryCrossRefUpdateManyWithWhereWithoutSenseInput[]
    deleteMany?: DictionaryCrossRefScalarWhereInput | DictionaryCrossRefScalarWhereInput[]
  }

  export type DictionaryExampleUncheckedUpdateManyWithoutSenseNestedInput = {
    create?: XOR<DictionaryExampleCreateWithoutSenseInput, DictionaryExampleUncheckedCreateWithoutSenseInput> | DictionaryExampleCreateWithoutSenseInput[] | DictionaryExampleUncheckedCreateWithoutSenseInput[]
    connectOrCreate?: DictionaryExampleCreateOrConnectWithoutSenseInput | DictionaryExampleCreateOrConnectWithoutSenseInput[]
    upsert?: DictionaryExampleUpsertWithWhereUniqueWithoutSenseInput | DictionaryExampleUpsertWithWhereUniqueWithoutSenseInput[]
    createMany?: DictionaryExampleCreateManySenseInputEnvelope
    set?: DictionaryExampleWhereUniqueInput | DictionaryExampleWhereUniqueInput[]
    disconnect?: DictionaryExampleWhereUniqueInput | DictionaryExampleWhereUniqueInput[]
    delete?: DictionaryExampleWhereUniqueInput | DictionaryExampleWhereUniqueInput[]
    connect?: DictionaryExampleWhereUniqueInput | DictionaryExampleWhereUniqueInput[]
    update?: DictionaryExampleUpdateWithWhereUniqueWithoutSenseInput | DictionaryExampleUpdateWithWhereUniqueWithoutSenseInput[]
    updateMany?: DictionaryExampleUpdateManyWithWhereWithoutSenseInput | DictionaryExampleUpdateManyWithWhereWithoutSenseInput[]
    deleteMany?: DictionaryExampleScalarWhereInput | DictionaryExampleScalarWhereInput[]
  }

  export type DictionaryTranslationUncheckedUpdateManyWithoutSenseNestedInput = {
    create?: XOR<DictionaryTranslationCreateWithoutSenseInput, DictionaryTranslationUncheckedCreateWithoutSenseInput> | DictionaryTranslationCreateWithoutSenseInput[] | DictionaryTranslationUncheckedCreateWithoutSenseInput[]
    connectOrCreate?: DictionaryTranslationCreateOrConnectWithoutSenseInput | DictionaryTranslationCreateOrConnectWithoutSenseInput[]
    upsert?: DictionaryTranslationUpsertWithWhereUniqueWithoutSenseInput | DictionaryTranslationUpsertWithWhereUniqueWithoutSenseInput[]
    createMany?: DictionaryTranslationCreateManySenseInputEnvelope
    set?: DictionaryTranslationWhereUniqueInput | DictionaryTranslationWhereUniqueInput[]
    disconnect?: DictionaryTranslationWhereUniqueInput | DictionaryTranslationWhereUniqueInput[]
    delete?: DictionaryTranslationWhereUniqueInput | DictionaryTranslationWhereUniqueInput[]
    connect?: DictionaryTranslationWhereUniqueInput | DictionaryTranslationWhereUniqueInput[]
    update?: DictionaryTranslationUpdateWithWhereUniqueWithoutSenseInput | DictionaryTranslationUpdateWithWhereUniqueWithoutSenseInput[]
    updateMany?: DictionaryTranslationUpdateManyWithWhereWithoutSenseInput | DictionaryTranslationUpdateManyWithWhereWithoutSenseInput[]
    deleteMany?: DictionaryTranslationScalarWhereInput | DictionaryTranslationScalarWhereInput[]
  }

  export type DictionaryCrossRefUncheckedUpdateManyWithoutSenseNestedInput = {
    create?: XOR<DictionaryCrossRefCreateWithoutSenseInput, DictionaryCrossRefUncheckedCreateWithoutSenseInput> | DictionaryCrossRefCreateWithoutSenseInput[] | DictionaryCrossRefUncheckedCreateWithoutSenseInput[]
    connectOrCreate?: DictionaryCrossRefCreateOrConnectWithoutSenseInput | DictionaryCrossRefCreateOrConnectWithoutSenseInput[]
    upsert?: DictionaryCrossRefUpsertWithWhereUniqueWithoutSenseInput | DictionaryCrossRefUpsertWithWhereUniqueWithoutSenseInput[]
    createMany?: DictionaryCrossRefCreateManySenseInputEnvelope
    set?: DictionaryCrossRefWhereUniqueInput | DictionaryCrossRefWhereUniqueInput[]
    disconnect?: DictionaryCrossRefWhereUniqueInput | DictionaryCrossRefWhereUniqueInput[]
    delete?: DictionaryCrossRefWhereUniqueInput | DictionaryCrossRefWhereUniqueInput[]
    connect?: DictionaryCrossRefWhereUniqueInput | DictionaryCrossRefWhereUniqueInput[]
    update?: DictionaryCrossRefUpdateWithWhereUniqueWithoutSenseInput | DictionaryCrossRefUpdateWithWhereUniqueWithoutSenseInput[]
    updateMany?: DictionaryCrossRefUpdateManyWithWhereWithoutSenseInput | DictionaryCrossRefUpdateManyWithWhereWithoutSenseInput[]
    deleteMany?: DictionaryCrossRefScalarWhereInput | DictionaryCrossRefScalarWhereInput[]
  }

  export type DictionarySenseCreateNestedOneWithoutTranslationsInput = {
    create?: XOR<DictionarySenseCreateWithoutTranslationsInput, DictionarySenseUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: DictionarySenseCreateOrConnectWithoutTranslationsInput
    connect?: DictionarySenseWhereUniqueInput
  }

  export type DictionarySenseUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: XOR<DictionarySenseCreateWithoutTranslationsInput, DictionarySenseUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: DictionarySenseCreateOrConnectWithoutTranslationsInput
    upsert?: DictionarySenseUpsertWithoutTranslationsInput
    connect?: DictionarySenseWhereUniqueInput
    update?: XOR<XOR<DictionarySenseUpdateToOneWithWhereWithoutTranslationsInput, DictionarySenseUpdateWithoutTranslationsInput>, DictionarySenseUncheckedUpdateWithoutTranslationsInput>
  }

  export type DictionarySenseCreateNestedOneWithoutExamplesInput = {
    create?: XOR<DictionarySenseCreateWithoutExamplesInput, DictionarySenseUncheckedCreateWithoutExamplesInput>
    connectOrCreate?: DictionarySenseCreateOrConnectWithoutExamplesInput
    connect?: DictionarySenseWhereUniqueInput
  }

  export type DictionarySenseUpdateOneRequiredWithoutExamplesNestedInput = {
    create?: XOR<DictionarySenseCreateWithoutExamplesInput, DictionarySenseUncheckedCreateWithoutExamplesInput>
    connectOrCreate?: DictionarySenseCreateOrConnectWithoutExamplesInput
    upsert?: DictionarySenseUpsertWithoutExamplesInput
    connect?: DictionarySenseWhereUniqueInput
    update?: XOR<XOR<DictionarySenseUpdateToOneWithWhereWithoutExamplesInput, DictionarySenseUpdateWithoutExamplesInput>, DictionarySenseUncheckedUpdateWithoutExamplesInput>
  }

  export type DictionarySenseCreateNestedOneWithoutCrossRefsInput = {
    create?: XOR<DictionarySenseCreateWithoutCrossRefsInput, DictionarySenseUncheckedCreateWithoutCrossRefsInput>
    connectOrCreate?: DictionarySenseCreateOrConnectWithoutCrossRefsInput
    connect?: DictionarySenseWhereUniqueInput
  }

  export type DictionarySenseUpdateOneRequiredWithoutCrossRefsNestedInput = {
    create?: XOR<DictionarySenseCreateWithoutCrossRefsInput, DictionarySenseUncheckedCreateWithoutCrossRefsInput>
    connectOrCreate?: DictionarySenseCreateOrConnectWithoutCrossRefsInput
    upsert?: DictionarySenseUpsertWithoutCrossRefsInput
    connect?: DictionarySenseWhereUniqueInput
    update?: XOR<XOR<DictionarySenseUpdateToOneWithWhereWithoutCrossRefsInput, DictionarySenseUpdateWithoutCrossRefsInput>, DictionarySenseUncheckedUpdateWithoutCrossRefsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMusicSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.MusicSource | EnumMusicSourceFieldRefInput<$PrismaModel>
    in?: $Enums.MusicSource[] | ListEnumMusicSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.MusicSource[] | ListEnumMusicSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumMusicSourceFilter<$PrismaModel> | $Enums.MusicSource
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumMusicSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MusicSource | EnumMusicSourceFieldRefInput<$PrismaModel>
    in?: $Enums.MusicSource[] | ListEnumMusicSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.MusicSource[] | ListEnumMusicSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumMusicSourceWithAggregatesFilter<$PrismaModel> | $Enums.MusicSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMusicSourceFilter<$PrismaModel>
    _max?: NestedEnumMusicSourceFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type LinkCreateWithoutCreatorInput = {
    link_id?: string
    is_public?: boolean
    created_at?: Date | string
    expires_at: Date | string
    session: SessionCreateNestedOneWithoutLinksInput
    linkPermissions?: LinkPermissionCreateNestedManyWithoutUserLinkInput
  }

  export type LinkUncheckedCreateWithoutCreatorInput = {
    link_id?: string
    song_id: string
    is_public?: boolean
    created_at?: Date | string
    expires_at: Date | string
    linkPermissions?: LinkPermissionUncheckedCreateNestedManyWithoutUserLinkInput
  }

  export type LinkCreateOrConnectWithoutCreatorInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutCreatorInput, LinkUncheckedCreateWithoutCreatorInput>
  }

  export type LinkCreateManyCreatorInputEnvelope = {
    data: LinkCreateManyCreatorInput | LinkCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type LinkPermissionCreateWithoutLinkInput = {
    link_permission_id?: string
    can_view?: boolean
    userLink: LinkCreateNestedOneWithoutLinkPermissionsInput
  }

  export type LinkPermissionUncheckedCreateWithoutLinkInput = {
    link_permission_id?: string
    link_id: string
    can_view?: boolean
  }

  export type LinkPermissionCreateOrConnectWithoutLinkInput = {
    where: LinkPermissionWhereUniqueInput
    create: XOR<LinkPermissionCreateWithoutLinkInput, LinkPermissionUncheckedCreateWithoutLinkInput>
  }

  export type LinkPermissionCreateManyLinkInputEnvelope = {
    data: LinkPermissionCreateManyLinkInput | LinkPermissionCreateManyLinkInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    title?: string
    musicSource?: $Enums.MusicSource
    audio_timeline: JsonNullValueInput | InputJsonValue
    creation_date?: Date | string
    links?: LinkCreateNestedManyWithoutSessionInput
    premadeMusic?: PremadeMusicCreateNestedOneWithoutSessionInput
    uploadedMusic?: UploadedMusicCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string
    musicSource?: $Enums.MusicSource
    premade_music_id?: string | null
    uploaded_music_id?: string | null
    audio_timeline: JsonNullValueInput | InputJsonValue
    creation_date?: Date | string
    links?: LinkUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StickyNotesCreateWithoutUserInput = {
    id?: string
    title?: string
    content?: string
    music?: UploadedMusicCreateNestedOneWithoutStickyNotesInput
  }

  export type StickyNotesUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string
    content?: string
    music_id?: string | null
  }

  export type StickyNotesCreateOrConnectWithoutUserInput = {
    where: StickyNotesWhereUniqueInput
    create: XOR<StickyNotesCreateWithoutUserInput, StickyNotesUncheckedCreateWithoutUserInput>
  }

  export type StickyNotesCreateManyUserInputEnvelope = {
    data: StickyNotesCreateManyUserInput | StickyNotesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LinkUpsertWithWhereUniqueWithoutCreatorInput = {
    where: LinkWhereUniqueInput
    update: XOR<LinkUpdateWithoutCreatorInput, LinkUncheckedUpdateWithoutCreatorInput>
    create: XOR<LinkCreateWithoutCreatorInput, LinkUncheckedCreateWithoutCreatorInput>
  }

  export type LinkUpdateWithWhereUniqueWithoutCreatorInput = {
    where: LinkWhereUniqueInput
    data: XOR<LinkUpdateWithoutCreatorInput, LinkUncheckedUpdateWithoutCreatorInput>
  }

  export type LinkUpdateManyWithWhereWithoutCreatorInput = {
    where: LinkScalarWhereInput
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyWithoutCreatorInput>
  }

  export type LinkScalarWhereInput = {
    AND?: LinkScalarWhereInput | LinkScalarWhereInput[]
    OR?: LinkScalarWhereInput[]
    NOT?: LinkScalarWhereInput | LinkScalarWhereInput[]
    link_id?: StringFilter<"Link"> | string
    song_id?: StringFilter<"Link"> | string
    created_by?: StringFilter<"Link"> | string
    is_public?: BoolFilter<"Link"> | boolean
    created_at?: DateTimeFilter<"Link"> | Date | string
    expires_at?: DateTimeFilter<"Link"> | Date | string
  }

  export type LinkPermissionUpsertWithWhereUniqueWithoutLinkInput = {
    where: LinkPermissionWhereUniqueInput
    update: XOR<LinkPermissionUpdateWithoutLinkInput, LinkPermissionUncheckedUpdateWithoutLinkInput>
    create: XOR<LinkPermissionCreateWithoutLinkInput, LinkPermissionUncheckedCreateWithoutLinkInput>
  }

  export type LinkPermissionUpdateWithWhereUniqueWithoutLinkInput = {
    where: LinkPermissionWhereUniqueInput
    data: XOR<LinkPermissionUpdateWithoutLinkInput, LinkPermissionUncheckedUpdateWithoutLinkInput>
  }

  export type LinkPermissionUpdateManyWithWhereWithoutLinkInput = {
    where: LinkPermissionScalarWhereInput
    data: XOR<LinkPermissionUpdateManyMutationInput, LinkPermissionUncheckedUpdateManyWithoutLinkInput>
  }

  export type LinkPermissionScalarWhereInput = {
    AND?: LinkPermissionScalarWhereInput | LinkPermissionScalarWhereInput[]
    OR?: LinkPermissionScalarWhereInput[]
    NOT?: LinkPermissionScalarWhereInput | LinkPermissionScalarWhereInput[]
    link_permission_id?: StringFilter<"LinkPermission"> | string
    link_id?: StringFilter<"LinkPermission"> | string
    user_id?: StringFilter<"LinkPermission"> | string
    can_view?: BoolFilter<"LinkPermission"> | boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    title?: StringFilter<"Session"> | string
    user_id?: StringFilter<"Session"> | string
    musicSource?: EnumMusicSourceFilter<"Session"> | $Enums.MusicSource
    premade_music_id?: StringNullableFilter<"Session"> | string | null
    uploaded_music_id?: StringNullableFilter<"Session"> | string | null
    audio_timeline?: JsonFilter<"Session">
    creation_date?: DateTimeFilter<"Session"> | Date | string
  }

  export type StickyNotesUpsertWithWhereUniqueWithoutUserInput = {
    where: StickyNotesWhereUniqueInput
    update: XOR<StickyNotesUpdateWithoutUserInput, StickyNotesUncheckedUpdateWithoutUserInput>
    create: XOR<StickyNotesCreateWithoutUserInput, StickyNotesUncheckedCreateWithoutUserInput>
  }

  export type StickyNotesUpdateWithWhereUniqueWithoutUserInput = {
    where: StickyNotesWhereUniqueInput
    data: XOR<StickyNotesUpdateWithoutUserInput, StickyNotesUncheckedUpdateWithoutUserInput>
  }

  export type StickyNotesUpdateManyWithWhereWithoutUserInput = {
    where: StickyNotesScalarWhereInput
    data: XOR<StickyNotesUpdateManyMutationInput, StickyNotesUncheckedUpdateManyWithoutUserInput>
  }

  export type StickyNotesScalarWhereInput = {
    AND?: StickyNotesScalarWhereInput | StickyNotesScalarWhereInput[]
    OR?: StickyNotesScalarWhereInput[]
    NOT?: StickyNotesScalarWhereInput | StickyNotesScalarWhereInput[]
    id?: StringFilter<"StickyNotes"> | string
    title?: StringFilter<"StickyNotes"> | string
    content?: StringFilter<"StickyNotes"> | string
    user_id?: StringFilter<"StickyNotes"> | string
    music_id?: StringNullableFilter<"StickyNotes"> | string | null
  }

  export type LinkCreateWithoutSessionInput = {
    link_id?: string
    is_public?: boolean
    created_at?: Date | string
    expires_at: Date | string
    creator: UserCreateNestedOneWithoutLinksInput
    linkPermissions?: LinkPermissionCreateNestedManyWithoutUserLinkInput
  }

  export type LinkUncheckedCreateWithoutSessionInput = {
    link_id?: string
    created_by: string
    is_public?: boolean
    created_at?: Date | string
    expires_at: Date | string
    linkPermissions?: LinkPermissionUncheckedCreateNestedManyWithoutUserLinkInput
  }

  export type LinkCreateOrConnectWithoutSessionInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutSessionInput, LinkUncheckedCreateWithoutSessionInput>
  }

  export type LinkCreateManySessionInputEnvelope = {
    data: LinkCreateManySessionInput | LinkCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type PremadeMusicCreateWithoutSessionInput = {
    music_id?: string
    uploaded_date?: Date | string
    music_name: string
    path: string
  }

  export type PremadeMusicUncheckedCreateWithoutSessionInput = {
    music_id?: string
    uploaded_date?: Date | string
    music_name: string
    path: string
  }

  export type PremadeMusicCreateOrConnectWithoutSessionInput = {
    where: PremadeMusicWhereUniqueInput
    create: XOR<PremadeMusicCreateWithoutSessionInput, PremadeMusicUncheckedCreateWithoutSessionInput>
  }

  export type UploadedMusicCreateWithoutSessionInput = {
    music_id?: string
    uploaded_by: string
    music_name: string
    path?: string
    stickyNotes?: StickyNotesCreateNestedManyWithoutMusicInput
  }

  export type UploadedMusicUncheckedCreateWithoutSessionInput = {
    music_id?: string
    uploaded_by: string
    music_name: string
    path?: string
    stickyNotes?: StickyNotesUncheckedCreateNestedManyWithoutMusicInput
  }

  export type UploadedMusicCreateOrConnectWithoutSessionInput = {
    where: UploadedMusicWhereUniqueInput
    create: XOR<UploadedMusicCreateWithoutSessionInput, UploadedMusicUncheckedCreateWithoutSessionInput>
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    username: string
    links?: LinkCreateNestedManyWithoutCreatorInput
    linkPermissions?: LinkPermissionCreateNestedManyWithoutLinkInput
    stickyNotes?: StickyNotesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    username: string
    links?: LinkUncheckedCreateNestedManyWithoutCreatorInput
    linkPermissions?: LinkPermissionUncheckedCreateNestedManyWithoutLinkInput
    stickyNotes?: StickyNotesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type LinkUpsertWithWhereUniqueWithoutSessionInput = {
    where: LinkWhereUniqueInput
    update: XOR<LinkUpdateWithoutSessionInput, LinkUncheckedUpdateWithoutSessionInput>
    create: XOR<LinkCreateWithoutSessionInput, LinkUncheckedCreateWithoutSessionInput>
  }

  export type LinkUpdateWithWhereUniqueWithoutSessionInput = {
    where: LinkWhereUniqueInput
    data: XOR<LinkUpdateWithoutSessionInput, LinkUncheckedUpdateWithoutSessionInput>
  }

  export type LinkUpdateManyWithWhereWithoutSessionInput = {
    where: LinkScalarWhereInput
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyWithoutSessionInput>
  }

  export type PremadeMusicUpsertWithoutSessionInput = {
    update: XOR<PremadeMusicUpdateWithoutSessionInput, PremadeMusicUncheckedUpdateWithoutSessionInput>
    create: XOR<PremadeMusicCreateWithoutSessionInput, PremadeMusicUncheckedCreateWithoutSessionInput>
    where?: PremadeMusicWhereInput
  }

  export type PremadeMusicUpdateToOneWithWhereWithoutSessionInput = {
    where?: PremadeMusicWhereInput
    data: XOR<PremadeMusicUpdateWithoutSessionInput, PremadeMusicUncheckedUpdateWithoutSessionInput>
  }

  export type PremadeMusicUpdateWithoutSessionInput = {
    music_id?: StringFieldUpdateOperationsInput | string
    uploaded_date?: DateTimeFieldUpdateOperationsInput | Date | string
    music_name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type PremadeMusicUncheckedUpdateWithoutSessionInput = {
    music_id?: StringFieldUpdateOperationsInput | string
    uploaded_date?: DateTimeFieldUpdateOperationsInput | Date | string
    music_name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type UploadedMusicUpsertWithoutSessionInput = {
    update: XOR<UploadedMusicUpdateWithoutSessionInput, UploadedMusicUncheckedUpdateWithoutSessionInput>
    create: XOR<UploadedMusicCreateWithoutSessionInput, UploadedMusicUncheckedCreateWithoutSessionInput>
    where?: UploadedMusicWhereInput
  }

  export type UploadedMusicUpdateToOneWithWhereWithoutSessionInput = {
    where?: UploadedMusicWhereInput
    data: XOR<UploadedMusicUpdateWithoutSessionInput, UploadedMusicUncheckedUpdateWithoutSessionInput>
  }

  export type UploadedMusicUpdateWithoutSessionInput = {
    music_id?: StringFieldUpdateOperationsInput | string
    uploaded_by?: StringFieldUpdateOperationsInput | string
    music_name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    stickyNotes?: StickyNotesUpdateManyWithoutMusicNestedInput
  }

  export type UploadedMusicUncheckedUpdateWithoutSessionInput = {
    music_id?: StringFieldUpdateOperationsInput | string
    uploaded_by?: StringFieldUpdateOperationsInput | string
    music_name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    stickyNotes?: StickyNotesUncheckedUpdateManyWithoutMusicNestedInput
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    links?: LinkUpdateManyWithoutCreatorNestedInput
    linkPermissions?: LinkPermissionUpdateManyWithoutLinkNestedInput
    stickyNotes?: StickyNotesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    links?: LinkUncheckedUpdateManyWithoutCreatorNestedInput
    linkPermissions?: LinkPermissionUncheckedUpdateManyWithoutLinkNestedInput
    stickyNotes?: StickyNotesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UploadedMusicCreateWithoutStickyNotesInput = {
    music_id?: string
    uploaded_by: string
    music_name: string
    path?: string
    session?: SessionCreateNestedManyWithoutUploadedMusicInput
  }

  export type UploadedMusicUncheckedCreateWithoutStickyNotesInput = {
    music_id?: string
    uploaded_by: string
    music_name: string
    path?: string
    session?: SessionUncheckedCreateNestedManyWithoutUploadedMusicInput
  }

  export type UploadedMusicCreateOrConnectWithoutStickyNotesInput = {
    where: UploadedMusicWhereUniqueInput
    create: XOR<UploadedMusicCreateWithoutStickyNotesInput, UploadedMusicUncheckedCreateWithoutStickyNotesInput>
  }

  export type UserCreateWithoutStickyNotesInput = {
    id?: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    username: string
    links?: LinkCreateNestedManyWithoutCreatorInput
    linkPermissions?: LinkPermissionCreateNestedManyWithoutLinkInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStickyNotesInput = {
    id?: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    username: string
    links?: LinkUncheckedCreateNestedManyWithoutCreatorInput
    linkPermissions?: LinkPermissionUncheckedCreateNestedManyWithoutLinkInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStickyNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStickyNotesInput, UserUncheckedCreateWithoutStickyNotesInput>
  }

  export type UploadedMusicUpsertWithoutStickyNotesInput = {
    update: XOR<UploadedMusicUpdateWithoutStickyNotesInput, UploadedMusicUncheckedUpdateWithoutStickyNotesInput>
    create: XOR<UploadedMusicCreateWithoutStickyNotesInput, UploadedMusicUncheckedCreateWithoutStickyNotesInput>
    where?: UploadedMusicWhereInput
  }

  export type UploadedMusicUpdateToOneWithWhereWithoutStickyNotesInput = {
    where?: UploadedMusicWhereInput
    data: XOR<UploadedMusicUpdateWithoutStickyNotesInput, UploadedMusicUncheckedUpdateWithoutStickyNotesInput>
  }

  export type UploadedMusicUpdateWithoutStickyNotesInput = {
    music_id?: StringFieldUpdateOperationsInput | string
    uploaded_by?: StringFieldUpdateOperationsInput | string
    music_name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    session?: SessionUpdateManyWithoutUploadedMusicNestedInput
  }

  export type UploadedMusicUncheckedUpdateWithoutStickyNotesInput = {
    music_id?: StringFieldUpdateOperationsInput | string
    uploaded_by?: StringFieldUpdateOperationsInput | string
    music_name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    session?: SessionUncheckedUpdateManyWithoutUploadedMusicNestedInput
  }

  export type UserUpsertWithoutStickyNotesInput = {
    update: XOR<UserUpdateWithoutStickyNotesInput, UserUncheckedUpdateWithoutStickyNotesInput>
    create: XOR<UserCreateWithoutStickyNotesInput, UserUncheckedCreateWithoutStickyNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStickyNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStickyNotesInput, UserUncheckedUpdateWithoutStickyNotesInput>
  }

  export type UserUpdateWithoutStickyNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    links?: LinkUpdateManyWithoutCreatorNestedInput
    linkPermissions?: LinkPermissionUpdateManyWithoutLinkNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStickyNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    links?: LinkUncheckedUpdateManyWithoutCreatorNestedInput
    linkPermissions?: LinkPermissionUncheckedUpdateManyWithoutLinkNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLinksInput = {
    id?: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    username: string
    linkPermissions?: LinkPermissionCreateNestedManyWithoutLinkInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    stickyNotes?: StickyNotesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLinksInput = {
    id?: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    username: string
    linkPermissions?: LinkPermissionUncheckedCreateNestedManyWithoutLinkInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    stickyNotes?: StickyNotesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLinksInput, UserUncheckedCreateWithoutLinksInput>
  }

  export type SessionCreateWithoutLinksInput = {
    id?: string
    title?: string
    musicSource?: $Enums.MusicSource
    audio_timeline: JsonNullValueInput | InputJsonValue
    creation_date?: Date | string
    premadeMusic?: PremadeMusicCreateNestedOneWithoutSessionInput
    uploadedMusic?: UploadedMusicCreateNestedOneWithoutSessionInput
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateWithoutLinksInput = {
    id?: string
    title?: string
    user_id: string
    musicSource?: $Enums.MusicSource
    premade_music_id?: string | null
    uploaded_music_id?: string | null
    audio_timeline: JsonNullValueInput | InputJsonValue
    creation_date?: Date | string
  }

  export type SessionCreateOrConnectWithoutLinksInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutLinksInput, SessionUncheckedCreateWithoutLinksInput>
  }

  export type LinkPermissionCreateWithoutUserLinkInput = {
    link_permission_id?: string
    can_view?: boolean
    link: UserCreateNestedOneWithoutLinkPermissionsInput
  }

  export type LinkPermissionUncheckedCreateWithoutUserLinkInput = {
    link_permission_id?: string
    user_id: string
    can_view?: boolean
  }

  export type LinkPermissionCreateOrConnectWithoutUserLinkInput = {
    where: LinkPermissionWhereUniqueInput
    create: XOR<LinkPermissionCreateWithoutUserLinkInput, LinkPermissionUncheckedCreateWithoutUserLinkInput>
  }

  export type LinkPermissionCreateManyUserLinkInputEnvelope = {
    data: LinkPermissionCreateManyUserLinkInput | LinkPermissionCreateManyUserLinkInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLinksInput = {
    update: XOR<UserUpdateWithoutLinksInput, UserUncheckedUpdateWithoutLinksInput>
    create: XOR<UserCreateWithoutLinksInput, UserUncheckedCreateWithoutLinksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLinksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLinksInput, UserUncheckedUpdateWithoutLinksInput>
  }

  export type UserUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    linkPermissions?: LinkPermissionUpdateManyWithoutLinkNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    stickyNotes?: StickyNotesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    linkPermissions?: LinkPermissionUncheckedUpdateManyWithoutLinkNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    stickyNotes?: StickyNotesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionUpsertWithoutLinksInput = {
    update: XOR<SessionUpdateWithoutLinksInput, SessionUncheckedUpdateWithoutLinksInput>
    create: XOR<SessionCreateWithoutLinksInput, SessionUncheckedCreateWithoutLinksInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutLinksInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutLinksInput, SessionUncheckedUpdateWithoutLinksInput>
  }

  export type SessionUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    musicSource?: EnumMusicSourceFieldUpdateOperationsInput | $Enums.MusicSource
    audio_timeline?: JsonNullValueInput | InputJsonValue
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    premadeMusic?: PremadeMusicUpdateOneWithoutSessionNestedInput
    uploadedMusic?: UploadedMusicUpdateOneWithoutSessionNestedInput
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    musicSource?: EnumMusicSourceFieldUpdateOperationsInput | $Enums.MusicSource
    premade_music_id?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_music_id?: NullableStringFieldUpdateOperationsInput | string | null
    audio_timeline?: JsonNullValueInput | InputJsonValue
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkPermissionUpsertWithWhereUniqueWithoutUserLinkInput = {
    where: LinkPermissionWhereUniqueInput
    update: XOR<LinkPermissionUpdateWithoutUserLinkInput, LinkPermissionUncheckedUpdateWithoutUserLinkInput>
    create: XOR<LinkPermissionCreateWithoutUserLinkInput, LinkPermissionUncheckedCreateWithoutUserLinkInput>
  }

  export type LinkPermissionUpdateWithWhereUniqueWithoutUserLinkInput = {
    where: LinkPermissionWhereUniqueInput
    data: XOR<LinkPermissionUpdateWithoutUserLinkInput, LinkPermissionUncheckedUpdateWithoutUserLinkInput>
  }

  export type LinkPermissionUpdateManyWithWhereWithoutUserLinkInput = {
    where: LinkPermissionScalarWhereInput
    data: XOR<LinkPermissionUpdateManyMutationInput, LinkPermissionUncheckedUpdateManyWithoutUserLinkInput>
  }

  export type LinkCreateWithoutLinkPermissionsInput = {
    link_id?: string
    is_public?: boolean
    created_at?: Date | string
    expires_at: Date | string
    creator: UserCreateNestedOneWithoutLinksInput
    session: SessionCreateNestedOneWithoutLinksInput
  }

  export type LinkUncheckedCreateWithoutLinkPermissionsInput = {
    link_id?: string
    song_id: string
    created_by: string
    is_public?: boolean
    created_at?: Date | string
    expires_at: Date | string
  }

  export type LinkCreateOrConnectWithoutLinkPermissionsInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutLinkPermissionsInput, LinkUncheckedCreateWithoutLinkPermissionsInput>
  }

  export type UserCreateWithoutLinkPermissionsInput = {
    id?: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    username: string
    links?: LinkCreateNestedManyWithoutCreatorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    stickyNotes?: StickyNotesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLinkPermissionsInput = {
    id?: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    username: string
    links?: LinkUncheckedCreateNestedManyWithoutCreatorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    stickyNotes?: StickyNotesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLinkPermissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLinkPermissionsInput, UserUncheckedCreateWithoutLinkPermissionsInput>
  }

  export type LinkUpsertWithoutLinkPermissionsInput = {
    update: XOR<LinkUpdateWithoutLinkPermissionsInput, LinkUncheckedUpdateWithoutLinkPermissionsInput>
    create: XOR<LinkCreateWithoutLinkPermissionsInput, LinkUncheckedCreateWithoutLinkPermissionsInput>
    where?: LinkWhereInput
  }

  export type LinkUpdateToOneWithWhereWithoutLinkPermissionsInput = {
    where?: LinkWhereInput
    data: XOR<LinkUpdateWithoutLinkPermissionsInput, LinkUncheckedUpdateWithoutLinkPermissionsInput>
  }

  export type LinkUpdateWithoutLinkPermissionsInput = {
    link_id?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutLinksNestedInput
    session?: SessionUpdateOneRequiredWithoutLinksNestedInput
  }

  export type LinkUncheckedUpdateWithoutLinkPermissionsInput = {
    link_id?: StringFieldUpdateOperationsInput | string
    song_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutLinkPermissionsInput = {
    update: XOR<UserUpdateWithoutLinkPermissionsInput, UserUncheckedUpdateWithoutLinkPermissionsInput>
    create: XOR<UserCreateWithoutLinkPermissionsInput, UserUncheckedCreateWithoutLinkPermissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLinkPermissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLinkPermissionsInput, UserUncheckedUpdateWithoutLinkPermissionsInput>
  }

  export type UserUpdateWithoutLinkPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    links?: LinkUpdateManyWithoutCreatorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    stickyNotes?: StickyNotesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLinkPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    links?: LinkUncheckedUpdateManyWithoutCreatorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    stickyNotes?: StickyNotesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionCreateWithoutPremadeMusicInput = {
    id?: string
    title?: string
    musicSource?: $Enums.MusicSource
    audio_timeline: JsonNullValueInput | InputJsonValue
    creation_date?: Date | string
    links?: LinkCreateNestedManyWithoutSessionInput
    uploadedMusic?: UploadedMusicCreateNestedOneWithoutSessionInput
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateWithoutPremadeMusicInput = {
    id?: string
    title?: string
    user_id: string
    musicSource?: $Enums.MusicSource
    uploaded_music_id?: string | null
    audio_timeline: JsonNullValueInput | InputJsonValue
    creation_date?: Date | string
    links?: LinkUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutPremadeMusicInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutPremadeMusicInput, SessionUncheckedCreateWithoutPremadeMusicInput>
  }

  export type SessionCreateManyPremadeMusicInputEnvelope = {
    data: SessionCreateManyPremadeMusicInput | SessionCreateManyPremadeMusicInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutPremadeMusicInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutPremadeMusicInput, SessionUncheckedUpdateWithoutPremadeMusicInput>
    create: XOR<SessionCreateWithoutPremadeMusicInput, SessionUncheckedCreateWithoutPremadeMusicInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutPremadeMusicInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutPremadeMusicInput, SessionUncheckedUpdateWithoutPremadeMusicInput>
  }

  export type SessionUpdateManyWithWhereWithoutPremadeMusicInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutPremadeMusicInput>
  }

  export type SessionCreateWithoutUploadedMusicInput = {
    id?: string
    title?: string
    musicSource?: $Enums.MusicSource
    audio_timeline: JsonNullValueInput | InputJsonValue
    creation_date?: Date | string
    links?: LinkCreateNestedManyWithoutSessionInput
    premadeMusic?: PremadeMusicCreateNestedOneWithoutSessionInput
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateWithoutUploadedMusicInput = {
    id?: string
    title?: string
    user_id: string
    musicSource?: $Enums.MusicSource
    premade_music_id?: string | null
    audio_timeline: JsonNullValueInput | InputJsonValue
    creation_date?: Date | string
    links?: LinkUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutUploadedMusicInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUploadedMusicInput, SessionUncheckedCreateWithoutUploadedMusicInput>
  }

  export type SessionCreateManyUploadedMusicInputEnvelope = {
    data: SessionCreateManyUploadedMusicInput | SessionCreateManyUploadedMusicInput[]
    skipDuplicates?: boolean
  }

  export type StickyNotesCreateWithoutMusicInput = {
    id?: string
    title?: string
    content?: string
    user: UserCreateNestedOneWithoutStickyNotesInput
  }

  export type StickyNotesUncheckedCreateWithoutMusicInput = {
    id?: string
    title?: string
    content?: string
    user_id: string
  }

  export type StickyNotesCreateOrConnectWithoutMusicInput = {
    where: StickyNotesWhereUniqueInput
    create: XOR<StickyNotesCreateWithoutMusicInput, StickyNotesUncheckedCreateWithoutMusicInput>
  }

  export type StickyNotesCreateManyMusicInputEnvelope = {
    data: StickyNotesCreateManyMusicInput | StickyNotesCreateManyMusicInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUploadedMusicInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUploadedMusicInput, SessionUncheckedUpdateWithoutUploadedMusicInput>
    create: XOR<SessionCreateWithoutUploadedMusicInput, SessionUncheckedCreateWithoutUploadedMusicInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUploadedMusicInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUploadedMusicInput, SessionUncheckedUpdateWithoutUploadedMusicInput>
  }

  export type SessionUpdateManyWithWhereWithoutUploadedMusicInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUploadedMusicInput>
  }

  export type StickyNotesUpsertWithWhereUniqueWithoutMusicInput = {
    where: StickyNotesWhereUniqueInput
    update: XOR<StickyNotesUpdateWithoutMusicInput, StickyNotesUncheckedUpdateWithoutMusicInput>
    create: XOR<StickyNotesCreateWithoutMusicInput, StickyNotesUncheckedCreateWithoutMusicInput>
  }

  export type StickyNotesUpdateWithWhereUniqueWithoutMusicInput = {
    where: StickyNotesWhereUniqueInput
    data: XOR<StickyNotesUpdateWithoutMusicInput, StickyNotesUncheckedUpdateWithoutMusicInput>
  }

  export type StickyNotesUpdateManyWithWhereWithoutMusicInput = {
    where: StickyNotesScalarWhereInput
    data: XOR<StickyNotesUpdateManyMutationInput, StickyNotesUncheckedUpdateManyWithoutMusicInput>
  }

  export type DictionaryHeadwordCreateWithoutEntryInput = {
    head: string
    normalizedHead: string
    type?: string | null
    pos?: string | null
  }

  export type DictionaryHeadwordUncheckedCreateWithoutEntryInput = {
    headId?: number
    head: string
    normalizedHead: string
    type?: string | null
    pos?: string | null
  }

  export type DictionaryHeadwordCreateOrConnectWithoutEntryInput = {
    where: DictionaryHeadwordWhereUniqueInput
    create: XOR<DictionaryHeadwordCreateWithoutEntryInput, DictionaryHeadwordUncheckedCreateWithoutEntryInput>
  }

  export type DictionaryHeadwordCreateManyEntryInputEnvelope = {
    data: DictionaryHeadwordCreateManyEntryInput | DictionaryHeadwordCreateManyEntryInput[]
    skipDuplicates?: boolean
  }

  export type DictionarySenseCreateWithoutEntryInput = {
    number?: number | null
    definition?: string | null
    dialect?: string | null
    examples?: DictionaryExampleCreateNestedManyWithoutSenseInput
    translations?: DictionaryTranslationCreateNestedManyWithoutSenseInput
    crossRefs?: DictionaryCrossRefCreateNestedManyWithoutSenseInput
  }

  export type DictionarySenseUncheckedCreateWithoutEntryInput = {
    senseId?: number
    number?: number | null
    definition?: string | null
    dialect?: string | null
    examples?: DictionaryExampleUncheckedCreateNestedManyWithoutSenseInput
    translations?: DictionaryTranslationUncheckedCreateNestedManyWithoutSenseInput
    crossRefs?: DictionaryCrossRefUncheckedCreateNestedManyWithoutSenseInput
  }

  export type DictionarySenseCreateOrConnectWithoutEntryInput = {
    where: DictionarySenseWhereUniqueInput
    create: XOR<DictionarySenseCreateWithoutEntryInput, DictionarySenseUncheckedCreateWithoutEntryInput>
  }

  export type DictionarySenseCreateManyEntryInputEnvelope = {
    data: DictionarySenseCreateManyEntryInput | DictionarySenseCreateManyEntryInput[]
    skipDuplicates?: boolean
  }

  export type DictionaryHeadwordUpsertWithWhereUniqueWithoutEntryInput = {
    where: DictionaryHeadwordWhereUniqueInput
    update: XOR<DictionaryHeadwordUpdateWithoutEntryInput, DictionaryHeadwordUncheckedUpdateWithoutEntryInput>
    create: XOR<DictionaryHeadwordCreateWithoutEntryInput, DictionaryHeadwordUncheckedCreateWithoutEntryInput>
  }

  export type DictionaryHeadwordUpdateWithWhereUniqueWithoutEntryInput = {
    where: DictionaryHeadwordWhereUniqueInput
    data: XOR<DictionaryHeadwordUpdateWithoutEntryInput, DictionaryHeadwordUncheckedUpdateWithoutEntryInput>
  }

  export type DictionaryHeadwordUpdateManyWithWhereWithoutEntryInput = {
    where: DictionaryHeadwordScalarWhereInput
    data: XOR<DictionaryHeadwordUpdateManyMutationInput, DictionaryHeadwordUncheckedUpdateManyWithoutEntryInput>
  }

  export type DictionaryHeadwordScalarWhereInput = {
    AND?: DictionaryHeadwordScalarWhereInput | DictionaryHeadwordScalarWhereInput[]
    OR?: DictionaryHeadwordScalarWhereInput[]
    NOT?: DictionaryHeadwordScalarWhereInput | DictionaryHeadwordScalarWhereInput[]
    headId?: IntFilter<"DictionaryHeadword"> | number
    entryId?: IntFilter<"DictionaryHeadword"> | number
    head?: StringFilter<"DictionaryHeadword"> | string
    normalizedHead?: StringFilter<"DictionaryHeadword"> | string
    type?: StringNullableFilter<"DictionaryHeadword"> | string | null
    pos?: StringNullableFilter<"DictionaryHeadword"> | string | null
  }

  export type DictionarySenseUpsertWithWhereUniqueWithoutEntryInput = {
    where: DictionarySenseWhereUniqueInput
    update: XOR<DictionarySenseUpdateWithoutEntryInput, DictionarySenseUncheckedUpdateWithoutEntryInput>
    create: XOR<DictionarySenseCreateWithoutEntryInput, DictionarySenseUncheckedCreateWithoutEntryInput>
  }

  export type DictionarySenseUpdateWithWhereUniqueWithoutEntryInput = {
    where: DictionarySenseWhereUniqueInput
    data: XOR<DictionarySenseUpdateWithoutEntryInput, DictionarySenseUncheckedUpdateWithoutEntryInput>
  }

  export type DictionarySenseUpdateManyWithWhereWithoutEntryInput = {
    where: DictionarySenseScalarWhereInput
    data: XOR<DictionarySenseUpdateManyMutationInput, DictionarySenseUncheckedUpdateManyWithoutEntryInput>
  }

  export type DictionarySenseScalarWhereInput = {
    AND?: DictionarySenseScalarWhereInput | DictionarySenseScalarWhereInput[]
    OR?: DictionarySenseScalarWhereInput[]
    NOT?: DictionarySenseScalarWhereInput | DictionarySenseScalarWhereInput[]
    senseId?: IntFilter<"DictionarySense"> | number
    entryId?: IntFilter<"DictionarySense"> | number
    number?: IntNullableFilter<"DictionarySense"> | number | null
    definition?: StringNullableFilter<"DictionarySense"> | string | null
    dialect?: StringNullableFilter<"DictionarySense"> | string | null
  }

  export type DictionaryEntryCreateWithoutHeadwordsInput = {
    word: string
    page?: string | null
    homNumber?: number | null
    senses?: DictionarySenseCreateNestedManyWithoutEntryInput
  }

  export type DictionaryEntryUncheckedCreateWithoutHeadwordsInput = {
    entryId?: number
    word: string
    page?: string | null
    homNumber?: number | null
    senses?: DictionarySenseUncheckedCreateNestedManyWithoutEntryInput
  }

  export type DictionaryEntryCreateOrConnectWithoutHeadwordsInput = {
    where: DictionaryEntryWhereUniqueInput
    create: XOR<DictionaryEntryCreateWithoutHeadwordsInput, DictionaryEntryUncheckedCreateWithoutHeadwordsInput>
  }

  export type DictionaryEntryUpsertWithoutHeadwordsInput = {
    update: XOR<DictionaryEntryUpdateWithoutHeadwordsInput, DictionaryEntryUncheckedUpdateWithoutHeadwordsInput>
    create: XOR<DictionaryEntryCreateWithoutHeadwordsInput, DictionaryEntryUncheckedCreateWithoutHeadwordsInput>
    where?: DictionaryEntryWhereInput
  }

  export type DictionaryEntryUpdateToOneWithWhereWithoutHeadwordsInput = {
    where?: DictionaryEntryWhereInput
    data: XOR<DictionaryEntryUpdateWithoutHeadwordsInput, DictionaryEntryUncheckedUpdateWithoutHeadwordsInput>
  }

  export type DictionaryEntryUpdateWithoutHeadwordsInput = {
    word?: StringFieldUpdateOperationsInput | string
    page?: NullableStringFieldUpdateOperationsInput | string | null
    homNumber?: NullableIntFieldUpdateOperationsInput | number | null
    senses?: DictionarySenseUpdateManyWithoutEntryNestedInput
  }

  export type DictionaryEntryUncheckedUpdateWithoutHeadwordsInput = {
    entryId?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    page?: NullableStringFieldUpdateOperationsInput | string | null
    homNumber?: NullableIntFieldUpdateOperationsInput | number | null
    senses?: DictionarySenseUncheckedUpdateManyWithoutEntryNestedInput
  }

  export type DictionaryExampleCreateWithoutSenseInput = {
    textCebuano: string
    textTranslation?: string | null
  }

  export type DictionaryExampleUncheckedCreateWithoutSenseInput = {
    exampleId?: number
    textCebuano: string
    textTranslation?: string | null
  }

  export type DictionaryExampleCreateOrConnectWithoutSenseInput = {
    where: DictionaryExampleWhereUniqueInput
    create: XOR<DictionaryExampleCreateWithoutSenseInput, DictionaryExampleUncheckedCreateWithoutSenseInput>
  }

  export type DictionaryExampleCreateManySenseInputEnvelope = {
    data: DictionaryExampleCreateManySenseInput | DictionaryExampleCreateManySenseInput[]
    skipDuplicates?: boolean
  }

  export type DictionaryEntryCreateWithoutSensesInput = {
    word: string
    page?: string | null
    homNumber?: number | null
    headwords?: DictionaryHeadwordCreateNestedManyWithoutEntryInput
  }

  export type DictionaryEntryUncheckedCreateWithoutSensesInput = {
    entryId?: number
    word: string
    page?: string | null
    homNumber?: number | null
    headwords?: DictionaryHeadwordUncheckedCreateNestedManyWithoutEntryInput
  }

  export type DictionaryEntryCreateOrConnectWithoutSensesInput = {
    where: DictionaryEntryWhereUniqueInput
    create: XOR<DictionaryEntryCreateWithoutSensesInput, DictionaryEntryUncheckedCreateWithoutSensesInput>
  }

  export type DictionaryTranslationCreateWithoutSenseInput = {
    lang: string
    translation: string
  }

  export type DictionaryTranslationUncheckedCreateWithoutSenseInput = {
    transId?: number
    lang: string
    translation: string
  }

  export type DictionaryTranslationCreateOrConnectWithoutSenseInput = {
    where: DictionaryTranslationWhereUniqueInput
    create: XOR<DictionaryTranslationCreateWithoutSenseInput, DictionaryTranslationUncheckedCreateWithoutSenseInput>
  }

  export type DictionaryTranslationCreateManySenseInputEnvelope = {
    data: DictionaryTranslationCreateManySenseInput | DictionaryTranslationCreateManySenseInput[]
    skipDuplicates?: boolean
  }

  export type DictionaryCrossRefCreateWithoutSenseInput = {
    targetWord: string
    lang?: string
  }

  export type DictionaryCrossRefUncheckedCreateWithoutSenseInput = {
    xrefId?: number
    targetWord: string
    lang?: string
  }

  export type DictionaryCrossRefCreateOrConnectWithoutSenseInput = {
    where: DictionaryCrossRefWhereUniqueInput
    create: XOR<DictionaryCrossRefCreateWithoutSenseInput, DictionaryCrossRefUncheckedCreateWithoutSenseInput>
  }

  export type DictionaryCrossRefCreateManySenseInputEnvelope = {
    data: DictionaryCrossRefCreateManySenseInput | DictionaryCrossRefCreateManySenseInput[]
    skipDuplicates?: boolean
  }

  export type DictionaryExampleUpsertWithWhereUniqueWithoutSenseInput = {
    where: DictionaryExampleWhereUniqueInput
    update: XOR<DictionaryExampleUpdateWithoutSenseInput, DictionaryExampleUncheckedUpdateWithoutSenseInput>
    create: XOR<DictionaryExampleCreateWithoutSenseInput, DictionaryExampleUncheckedCreateWithoutSenseInput>
  }

  export type DictionaryExampleUpdateWithWhereUniqueWithoutSenseInput = {
    where: DictionaryExampleWhereUniqueInput
    data: XOR<DictionaryExampleUpdateWithoutSenseInput, DictionaryExampleUncheckedUpdateWithoutSenseInput>
  }

  export type DictionaryExampleUpdateManyWithWhereWithoutSenseInput = {
    where: DictionaryExampleScalarWhereInput
    data: XOR<DictionaryExampleUpdateManyMutationInput, DictionaryExampleUncheckedUpdateManyWithoutSenseInput>
  }

  export type DictionaryExampleScalarWhereInput = {
    AND?: DictionaryExampleScalarWhereInput | DictionaryExampleScalarWhereInput[]
    OR?: DictionaryExampleScalarWhereInput[]
    NOT?: DictionaryExampleScalarWhereInput | DictionaryExampleScalarWhereInput[]
    exampleId?: IntFilter<"DictionaryExample"> | number
    senseId?: IntFilter<"DictionaryExample"> | number
    textCebuano?: StringFilter<"DictionaryExample"> | string
    textTranslation?: StringNullableFilter<"DictionaryExample"> | string | null
  }

  export type DictionaryEntryUpsertWithoutSensesInput = {
    update: XOR<DictionaryEntryUpdateWithoutSensesInput, DictionaryEntryUncheckedUpdateWithoutSensesInput>
    create: XOR<DictionaryEntryCreateWithoutSensesInput, DictionaryEntryUncheckedCreateWithoutSensesInput>
    where?: DictionaryEntryWhereInput
  }

  export type DictionaryEntryUpdateToOneWithWhereWithoutSensesInput = {
    where?: DictionaryEntryWhereInput
    data: XOR<DictionaryEntryUpdateWithoutSensesInput, DictionaryEntryUncheckedUpdateWithoutSensesInput>
  }

  export type DictionaryEntryUpdateWithoutSensesInput = {
    word?: StringFieldUpdateOperationsInput | string
    page?: NullableStringFieldUpdateOperationsInput | string | null
    homNumber?: NullableIntFieldUpdateOperationsInput | number | null
    headwords?: DictionaryHeadwordUpdateManyWithoutEntryNestedInput
  }

  export type DictionaryEntryUncheckedUpdateWithoutSensesInput = {
    entryId?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    page?: NullableStringFieldUpdateOperationsInput | string | null
    homNumber?: NullableIntFieldUpdateOperationsInput | number | null
    headwords?: DictionaryHeadwordUncheckedUpdateManyWithoutEntryNestedInput
  }

  export type DictionaryTranslationUpsertWithWhereUniqueWithoutSenseInput = {
    where: DictionaryTranslationWhereUniqueInput
    update: XOR<DictionaryTranslationUpdateWithoutSenseInput, DictionaryTranslationUncheckedUpdateWithoutSenseInput>
    create: XOR<DictionaryTranslationCreateWithoutSenseInput, DictionaryTranslationUncheckedCreateWithoutSenseInput>
  }

  export type DictionaryTranslationUpdateWithWhereUniqueWithoutSenseInput = {
    where: DictionaryTranslationWhereUniqueInput
    data: XOR<DictionaryTranslationUpdateWithoutSenseInput, DictionaryTranslationUncheckedUpdateWithoutSenseInput>
  }

  export type DictionaryTranslationUpdateManyWithWhereWithoutSenseInput = {
    where: DictionaryTranslationScalarWhereInput
    data: XOR<DictionaryTranslationUpdateManyMutationInput, DictionaryTranslationUncheckedUpdateManyWithoutSenseInput>
  }

  export type DictionaryTranslationScalarWhereInput = {
    AND?: DictionaryTranslationScalarWhereInput | DictionaryTranslationScalarWhereInput[]
    OR?: DictionaryTranslationScalarWhereInput[]
    NOT?: DictionaryTranslationScalarWhereInput | DictionaryTranslationScalarWhereInput[]
    transId?: IntFilter<"DictionaryTranslation"> | number
    senseId?: IntFilter<"DictionaryTranslation"> | number
    lang?: StringFilter<"DictionaryTranslation"> | string
    translation?: StringFilter<"DictionaryTranslation"> | string
  }

  export type DictionaryCrossRefUpsertWithWhereUniqueWithoutSenseInput = {
    where: DictionaryCrossRefWhereUniqueInput
    update: XOR<DictionaryCrossRefUpdateWithoutSenseInput, DictionaryCrossRefUncheckedUpdateWithoutSenseInput>
    create: XOR<DictionaryCrossRefCreateWithoutSenseInput, DictionaryCrossRefUncheckedCreateWithoutSenseInput>
  }

  export type DictionaryCrossRefUpdateWithWhereUniqueWithoutSenseInput = {
    where: DictionaryCrossRefWhereUniqueInput
    data: XOR<DictionaryCrossRefUpdateWithoutSenseInput, DictionaryCrossRefUncheckedUpdateWithoutSenseInput>
  }

  export type DictionaryCrossRefUpdateManyWithWhereWithoutSenseInput = {
    where: DictionaryCrossRefScalarWhereInput
    data: XOR<DictionaryCrossRefUpdateManyMutationInput, DictionaryCrossRefUncheckedUpdateManyWithoutSenseInput>
  }

  export type DictionaryCrossRefScalarWhereInput = {
    AND?: DictionaryCrossRefScalarWhereInput | DictionaryCrossRefScalarWhereInput[]
    OR?: DictionaryCrossRefScalarWhereInput[]
    NOT?: DictionaryCrossRefScalarWhereInput | DictionaryCrossRefScalarWhereInput[]
    xrefId?: IntFilter<"DictionaryCrossRef"> | number
    senseId?: IntFilter<"DictionaryCrossRef"> | number
    targetWord?: StringFilter<"DictionaryCrossRef"> | string
    lang?: StringFilter<"DictionaryCrossRef"> | string
  }

  export type DictionarySenseCreateWithoutTranslationsInput = {
    number?: number | null
    definition?: string | null
    dialect?: string | null
    examples?: DictionaryExampleCreateNestedManyWithoutSenseInput
    entry: DictionaryEntryCreateNestedOneWithoutSensesInput
    crossRefs?: DictionaryCrossRefCreateNestedManyWithoutSenseInput
  }

  export type DictionarySenseUncheckedCreateWithoutTranslationsInput = {
    senseId?: number
    entryId: number
    number?: number | null
    definition?: string | null
    dialect?: string | null
    examples?: DictionaryExampleUncheckedCreateNestedManyWithoutSenseInput
    crossRefs?: DictionaryCrossRefUncheckedCreateNestedManyWithoutSenseInput
  }

  export type DictionarySenseCreateOrConnectWithoutTranslationsInput = {
    where: DictionarySenseWhereUniqueInput
    create: XOR<DictionarySenseCreateWithoutTranslationsInput, DictionarySenseUncheckedCreateWithoutTranslationsInput>
  }

  export type DictionarySenseUpsertWithoutTranslationsInput = {
    update: XOR<DictionarySenseUpdateWithoutTranslationsInput, DictionarySenseUncheckedUpdateWithoutTranslationsInput>
    create: XOR<DictionarySenseCreateWithoutTranslationsInput, DictionarySenseUncheckedCreateWithoutTranslationsInput>
    where?: DictionarySenseWhereInput
  }

  export type DictionarySenseUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: DictionarySenseWhereInput
    data: XOR<DictionarySenseUpdateWithoutTranslationsInput, DictionarySenseUncheckedUpdateWithoutTranslationsInput>
  }

  export type DictionarySenseUpdateWithoutTranslationsInput = {
    number?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    dialect?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: DictionaryExampleUpdateManyWithoutSenseNestedInput
    entry?: DictionaryEntryUpdateOneRequiredWithoutSensesNestedInput
    crossRefs?: DictionaryCrossRefUpdateManyWithoutSenseNestedInput
  }

  export type DictionarySenseUncheckedUpdateWithoutTranslationsInput = {
    senseId?: IntFieldUpdateOperationsInput | number
    entryId?: IntFieldUpdateOperationsInput | number
    number?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    dialect?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: DictionaryExampleUncheckedUpdateManyWithoutSenseNestedInput
    crossRefs?: DictionaryCrossRefUncheckedUpdateManyWithoutSenseNestedInput
  }

  export type DictionarySenseCreateWithoutExamplesInput = {
    number?: number | null
    definition?: string | null
    dialect?: string | null
    entry: DictionaryEntryCreateNestedOneWithoutSensesInput
    translations?: DictionaryTranslationCreateNestedManyWithoutSenseInput
    crossRefs?: DictionaryCrossRefCreateNestedManyWithoutSenseInput
  }

  export type DictionarySenseUncheckedCreateWithoutExamplesInput = {
    senseId?: number
    entryId: number
    number?: number | null
    definition?: string | null
    dialect?: string | null
    translations?: DictionaryTranslationUncheckedCreateNestedManyWithoutSenseInput
    crossRefs?: DictionaryCrossRefUncheckedCreateNestedManyWithoutSenseInput
  }

  export type DictionarySenseCreateOrConnectWithoutExamplesInput = {
    where: DictionarySenseWhereUniqueInput
    create: XOR<DictionarySenseCreateWithoutExamplesInput, DictionarySenseUncheckedCreateWithoutExamplesInput>
  }

  export type DictionarySenseUpsertWithoutExamplesInput = {
    update: XOR<DictionarySenseUpdateWithoutExamplesInput, DictionarySenseUncheckedUpdateWithoutExamplesInput>
    create: XOR<DictionarySenseCreateWithoutExamplesInput, DictionarySenseUncheckedCreateWithoutExamplesInput>
    where?: DictionarySenseWhereInput
  }

  export type DictionarySenseUpdateToOneWithWhereWithoutExamplesInput = {
    where?: DictionarySenseWhereInput
    data: XOR<DictionarySenseUpdateWithoutExamplesInput, DictionarySenseUncheckedUpdateWithoutExamplesInput>
  }

  export type DictionarySenseUpdateWithoutExamplesInput = {
    number?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    dialect?: NullableStringFieldUpdateOperationsInput | string | null
    entry?: DictionaryEntryUpdateOneRequiredWithoutSensesNestedInput
    translations?: DictionaryTranslationUpdateManyWithoutSenseNestedInput
    crossRefs?: DictionaryCrossRefUpdateManyWithoutSenseNestedInput
  }

  export type DictionarySenseUncheckedUpdateWithoutExamplesInput = {
    senseId?: IntFieldUpdateOperationsInput | number
    entryId?: IntFieldUpdateOperationsInput | number
    number?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    dialect?: NullableStringFieldUpdateOperationsInput | string | null
    translations?: DictionaryTranslationUncheckedUpdateManyWithoutSenseNestedInput
    crossRefs?: DictionaryCrossRefUncheckedUpdateManyWithoutSenseNestedInput
  }

  export type DictionarySenseCreateWithoutCrossRefsInput = {
    number?: number | null
    definition?: string | null
    dialect?: string | null
    examples?: DictionaryExampleCreateNestedManyWithoutSenseInput
    entry: DictionaryEntryCreateNestedOneWithoutSensesInput
    translations?: DictionaryTranslationCreateNestedManyWithoutSenseInput
  }

  export type DictionarySenseUncheckedCreateWithoutCrossRefsInput = {
    senseId?: number
    entryId: number
    number?: number | null
    definition?: string | null
    dialect?: string | null
    examples?: DictionaryExampleUncheckedCreateNestedManyWithoutSenseInput
    translations?: DictionaryTranslationUncheckedCreateNestedManyWithoutSenseInput
  }

  export type DictionarySenseCreateOrConnectWithoutCrossRefsInput = {
    where: DictionarySenseWhereUniqueInput
    create: XOR<DictionarySenseCreateWithoutCrossRefsInput, DictionarySenseUncheckedCreateWithoutCrossRefsInput>
  }

  export type DictionarySenseUpsertWithoutCrossRefsInput = {
    update: XOR<DictionarySenseUpdateWithoutCrossRefsInput, DictionarySenseUncheckedUpdateWithoutCrossRefsInput>
    create: XOR<DictionarySenseCreateWithoutCrossRefsInput, DictionarySenseUncheckedCreateWithoutCrossRefsInput>
    where?: DictionarySenseWhereInput
  }

  export type DictionarySenseUpdateToOneWithWhereWithoutCrossRefsInput = {
    where?: DictionarySenseWhereInput
    data: XOR<DictionarySenseUpdateWithoutCrossRefsInput, DictionarySenseUncheckedUpdateWithoutCrossRefsInput>
  }

  export type DictionarySenseUpdateWithoutCrossRefsInput = {
    number?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    dialect?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: DictionaryExampleUpdateManyWithoutSenseNestedInput
    entry?: DictionaryEntryUpdateOneRequiredWithoutSensesNestedInput
    translations?: DictionaryTranslationUpdateManyWithoutSenseNestedInput
  }

  export type DictionarySenseUncheckedUpdateWithoutCrossRefsInput = {
    senseId?: IntFieldUpdateOperationsInput | number
    entryId?: IntFieldUpdateOperationsInput | number
    number?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    dialect?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: DictionaryExampleUncheckedUpdateManyWithoutSenseNestedInput
    translations?: DictionaryTranslationUncheckedUpdateManyWithoutSenseNestedInput
  }

  export type LinkCreateManyCreatorInput = {
    link_id?: string
    song_id: string
    is_public?: boolean
    created_at?: Date | string
    expires_at: Date | string
  }

  export type LinkPermissionCreateManyLinkInput = {
    link_permission_id?: string
    link_id: string
    can_view?: boolean
  }

  export type SessionCreateManyUserInput = {
    id?: string
    title?: string
    musicSource?: $Enums.MusicSource
    premade_music_id?: string | null
    uploaded_music_id?: string | null
    audio_timeline: JsonNullValueInput | InputJsonValue
    creation_date?: Date | string
  }

  export type StickyNotesCreateManyUserInput = {
    id?: string
    title?: string
    content?: string
    music_id?: string | null
  }

  export type LinkUpdateWithoutCreatorInput = {
    link_id?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutLinksNestedInput
    linkPermissions?: LinkPermissionUpdateManyWithoutUserLinkNestedInput
  }

  export type LinkUncheckedUpdateWithoutCreatorInput = {
    link_id?: StringFieldUpdateOperationsInput | string
    song_id?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    linkPermissions?: LinkPermissionUncheckedUpdateManyWithoutUserLinkNestedInput
  }

  export type LinkUncheckedUpdateManyWithoutCreatorInput = {
    link_id?: StringFieldUpdateOperationsInput | string
    song_id?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkPermissionUpdateWithoutLinkInput = {
    link_permission_id?: StringFieldUpdateOperationsInput | string
    can_view?: BoolFieldUpdateOperationsInput | boolean
    userLink?: LinkUpdateOneRequiredWithoutLinkPermissionsNestedInput
  }

  export type LinkPermissionUncheckedUpdateWithoutLinkInput = {
    link_permission_id?: StringFieldUpdateOperationsInput | string
    link_id?: StringFieldUpdateOperationsInput | string
    can_view?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LinkPermissionUncheckedUpdateManyWithoutLinkInput = {
    link_permission_id?: StringFieldUpdateOperationsInput | string
    link_id?: StringFieldUpdateOperationsInput | string
    can_view?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    musicSource?: EnumMusicSourceFieldUpdateOperationsInput | $Enums.MusicSource
    audio_timeline?: JsonNullValueInput | InputJsonValue
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUpdateManyWithoutSessionNestedInput
    premadeMusic?: PremadeMusicUpdateOneWithoutSessionNestedInput
    uploadedMusic?: UploadedMusicUpdateOneWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    musicSource?: EnumMusicSourceFieldUpdateOperationsInput | $Enums.MusicSource
    premade_music_id?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_music_id?: NullableStringFieldUpdateOperationsInput | string | null
    audio_timeline?: JsonNullValueInput | InputJsonValue
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    musicSource?: EnumMusicSourceFieldUpdateOperationsInput | $Enums.MusicSource
    premade_music_id?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_music_id?: NullableStringFieldUpdateOperationsInput | string | null
    audio_timeline?: JsonNullValueInput | InputJsonValue
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StickyNotesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    music?: UploadedMusicUpdateOneWithoutStickyNotesNestedInput
  }

  export type StickyNotesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    music_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StickyNotesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    music_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LinkCreateManySessionInput = {
    link_id?: string
    created_by: string
    is_public?: boolean
    created_at?: Date | string
    expires_at: Date | string
  }

  export type LinkUpdateWithoutSessionInput = {
    link_id?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutLinksNestedInput
    linkPermissions?: LinkPermissionUpdateManyWithoutUserLinkNestedInput
  }

  export type LinkUncheckedUpdateWithoutSessionInput = {
    link_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    linkPermissions?: LinkPermissionUncheckedUpdateManyWithoutUserLinkNestedInput
  }

  export type LinkUncheckedUpdateManyWithoutSessionInput = {
    link_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkPermissionCreateManyUserLinkInput = {
    link_permission_id?: string
    user_id: string
    can_view?: boolean
  }

  export type LinkPermissionUpdateWithoutUserLinkInput = {
    link_permission_id?: StringFieldUpdateOperationsInput | string
    can_view?: BoolFieldUpdateOperationsInput | boolean
    link?: UserUpdateOneRequiredWithoutLinkPermissionsNestedInput
  }

  export type LinkPermissionUncheckedUpdateWithoutUserLinkInput = {
    link_permission_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    can_view?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LinkPermissionUncheckedUpdateManyWithoutUserLinkInput = {
    link_permission_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    can_view?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionCreateManyPremadeMusicInput = {
    id?: string
    title?: string
    user_id: string
    musicSource?: $Enums.MusicSource
    uploaded_music_id?: string | null
    audio_timeline: JsonNullValueInput | InputJsonValue
    creation_date?: Date | string
  }

  export type SessionUpdateWithoutPremadeMusicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    musicSource?: EnumMusicSourceFieldUpdateOperationsInput | $Enums.MusicSource
    audio_timeline?: JsonNullValueInput | InputJsonValue
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUpdateManyWithoutSessionNestedInput
    uploadedMusic?: UploadedMusicUpdateOneWithoutSessionNestedInput
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateWithoutPremadeMusicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    musicSource?: EnumMusicSourceFieldUpdateOperationsInput | $Enums.MusicSource
    uploaded_music_id?: NullableStringFieldUpdateOperationsInput | string | null
    audio_timeline?: JsonNullValueInput | InputJsonValue
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutPremadeMusicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    musicSource?: EnumMusicSourceFieldUpdateOperationsInput | $Enums.MusicSource
    uploaded_music_id?: NullableStringFieldUpdateOperationsInput | string | null
    audio_timeline?: JsonNullValueInput | InputJsonValue
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUploadedMusicInput = {
    id?: string
    title?: string
    user_id: string
    musicSource?: $Enums.MusicSource
    premade_music_id?: string | null
    audio_timeline: JsonNullValueInput | InputJsonValue
    creation_date?: Date | string
  }

  export type StickyNotesCreateManyMusicInput = {
    id?: string
    title?: string
    content?: string
    user_id: string
  }

  export type SessionUpdateWithoutUploadedMusicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    musicSource?: EnumMusicSourceFieldUpdateOperationsInput | $Enums.MusicSource
    audio_timeline?: JsonNullValueInput | InputJsonValue
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUpdateManyWithoutSessionNestedInput
    premadeMusic?: PremadeMusicUpdateOneWithoutSessionNestedInput
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateWithoutUploadedMusicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    musicSource?: EnumMusicSourceFieldUpdateOperationsInput | $Enums.MusicSource
    premade_music_id?: NullableStringFieldUpdateOperationsInput | string | null
    audio_timeline?: JsonNullValueInput | InputJsonValue
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutUploadedMusicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    musicSource?: EnumMusicSourceFieldUpdateOperationsInput | $Enums.MusicSource
    premade_music_id?: NullableStringFieldUpdateOperationsInput | string | null
    audio_timeline?: JsonNullValueInput | InputJsonValue
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StickyNotesUpdateWithoutMusicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutStickyNotesNestedInput
  }

  export type StickyNotesUncheckedUpdateWithoutMusicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type StickyNotesUncheckedUpdateManyWithoutMusicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type DictionaryHeadwordCreateManyEntryInput = {
    headId?: number
    head: string
    normalizedHead: string
    type?: string | null
    pos?: string | null
  }

  export type DictionarySenseCreateManyEntryInput = {
    senseId?: number
    number?: number | null
    definition?: string | null
    dialect?: string | null
  }

  export type DictionaryHeadwordUpdateWithoutEntryInput = {
    head?: StringFieldUpdateOperationsInput | string
    normalizedHead?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    pos?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DictionaryHeadwordUncheckedUpdateWithoutEntryInput = {
    headId?: IntFieldUpdateOperationsInput | number
    head?: StringFieldUpdateOperationsInput | string
    normalizedHead?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    pos?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DictionaryHeadwordUncheckedUpdateManyWithoutEntryInput = {
    headId?: IntFieldUpdateOperationsInput | number
    head?: StringFieldUpdateOperationsInput | string
    normalizedHead?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    pos?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DictionarySenseUpdateWithoutEntryInput = {
    number?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    dialect?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: DictionaryExampleUpdateManyWithoutSenseNestedInput
    translations?: DictionaryTranslationUpdateManyWithoutSenseNestedInput
    crossRefs?: DictionaryCrossRefUpdateManyWithoutSenseNestedInput
  }

  export type DictionarySenseUncheckedUpdateWithoutEntryInput = {
    senseId?: IntFieldUpdateOperationsInput | number
    number?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    dialect?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: DictionaryExampleUncheckedUpdateManyWithoutSenseNestedInput
    translations?: DictionaryTranslationUncheckedUpdateManyWithoutSenseNestedInput
    crossRefs?: DictionaryCrossRefUncheckedUpdateManyWithoutSenseNestedInput
  }

  export type DictionarySenseUncheckedUpdateManyWithoutEntryInput = {
    senseId?: IntFieldUpdateOperationsInput | number
    number?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    dialect?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DictionaryExampleCreateManySenseInput = {
    exampleId?: number
    textCebuano: string
    textTranslation?: string | null
  }

  export type DictionaryTranslationCreateManySenseInput = {
    transId?: number
    lang: string
    translation: string
  }

  export type DictionaryCrossRefCreateManySenseInput = {
    xrefId?: number
    targetWord: string
    lang?: string
  }

  export type DictionaryExampleUpdateWithoutSenseInput = {
    textCebuano?: StringFieldUpdateOperationsInput | string
    textTranslation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DictionaryExampleUncheckedUpdateWithoutSenseInput = {
    exampleId?: IntFieldUpdateOperationsInput | number
    textCebuano?: StringFieldUpdateOperationsInput | string
    textTranslation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DictionaryExampleUncheckedUpdateManyWithoutSenseInput = {
    exampleId?: IntFieldUpdateOperationsInput | number
    textCebuano?: StringFieldUpdateOperationsInput | string
    textTranslation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DictionaryTranslationUpdateWithoutSenseInput = {
    lang?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type DictionaryTranslationUncheckedUpdateWithoutSenseInput = {
    transId?: IntFieldUpdateOperationsInput | number
    lang?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type DictionaryTranslationUncheckedUpdateManyWithoutSenseInput = {
    transId?: IntFieldUpdateOperationsInput | number
    lang?: StringFieldUpdateOperationsInput | string
    translation?: StringFieldUpdateOperationsInput | string
  }

  export type DictionaryCrossRefUpdateWithoutSenseInput = {
    targetWord?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type DictionaryCrossRefUncheckedUpdateWithoutSenseInput = {
    xrefId?: IntFieldUpdateOperationsInput | number
    targetWord?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type DictionaryCrossRefUncheckedUpdateManyWithoutSenseInput = {
    xrefId?: IntFieldUpdateOperationsInput | number
    targetWord?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}