
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
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model Warehouse
 * 
 */
export type Warehouse = $Result.DefaultSelection<Prisma.$WarehousePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductBarcode
 * 
 */
export type ProductBarcode = $Result.DefaultSelection<Prisma.$ProductBarcodePayload>
/**
 * Model StockLot
 * 
 */
export type StockLot = $Result.DefaultSelection<Prisma.$StockLotPayload>
/**
 * Model StockMovement
 * 
 */
export type StockMovement = $Result.DefaultSelection<Prisma.$StockMovementPayload>
/**
 * Model ExpiryAlert
 * 
 */
export type ExpiryAlert = $Result.DefaultSelection<Prisma.$ExpiryAlertPayload>
/**
 * Model NotificationSetting
 * 
 */
export type NotificationSetting = $Result.DefaultSelection<Prisma.$NotificationSettingPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model InventoryCount
 * 
 */
export type InventoryCount = $Result.DefaultSelection<Prisma.$InventoryCountPayload>
/**
 * Model InventoryCountItem
 * 
 */
export type InventoryCountItem = $Result.DefaultSelection<Prisma.$InventoryCountItemPayload>

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs>;

  /**
   * `prisma.warehouse`: Exposes CRUD operations for the **Warehouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warehouses
    * const warehouses = await prisma.warehouse.findMany()
    * ```
    */
  get warehouse(): Prisma.WarehouseDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.productBarcode`: Exposes CRUD operations for the **ProductBarcode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductBarcodes
    * const productBarcodes = await prisma.productBarcode.findMany()
    * ```
    */
  get productBarcode(): Prisma.ProductBarcodeDelegate<ExtArgs>;

  /**
   * `prisma.stockLot`: Exposes CRUD operations for the **StockLot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockLots
    * const stockLots = await prisma.stockLot.findMany()
    * ```
    */
  get stockLot(): Prisma.StockLotDelegate<ExtArgs>;

  /**
   * `prisma.stockMovement`: Exposes CRUD operations for the **StockMovement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockMovements
    * const stockMovements = await prisma.stockMovement.findMany()
    * ```
    */
  get stockMovement(): Prisma.StockMovementDelegate<ExtArgs>;

  /**
   * `prisma.expiryAlert`: Exposes CRUD operations for the **ExpiryAlert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpiryAlerts
    * const expiryAlerts = await prisma.expiryAlert.findMany()
    * ```
    */
  get expiryAlert(): Prisma.ExpiryAlertDelegate<ExtArgs>;

  /**
   * `prisma.notificationSetting`: Exposes CRUD operations for the **NotificationSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationSettings
    * const notificationSettings = await prisma.notificationSetting.findMany()
    * ```
    */
  get notificationSetting(): Prisma.NotificationSettingDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;

  /**
   * `prisma.inventoryCount`: Exposes CRUD operations for the **InventoryCount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryCounts
    * const inventoryCounts = await prisma.inventoryCount.findMany()
    * ```
    */
  get inventoryCount(): Prisma.InventoryCountDelegate<ExtArgs>;

  /**
   * `prisma.inventoryCountItem`: Exposes CRUD operations for the **InventoryCountItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryCountItems
    * const inventoryCountItems = await prisma.inventoryCountItem.findMany()
    * ```
    */
  get inventoryCountItem(): Prisma.InventoryCountItemDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Branch: 'Branch',
    Warehouse: 'Warehouse',
    Category: 'Category',
    Supplier: 'Supplier',
    Product: 'Product',
    ProductBarcode: 'ProductBarcode',
    StockLot: 'StockLot',
    StockMovement: 'StockMovement',
    ExpiryAlert: 'ExpiryAlert',
    NotificationSetting: 'NotificationSetting',
    AuditLog: 'AuditLog',
    InventoryCount: 'InventoryCount',
    InventoryCountItem: 'InventoryCountItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "branch" | "warehouse" | "category" | "supplier" | "product" | "productBarcode" | "stockLot" | "stockMovement" | "expiryAlert" | "notificationSetting" | "auditLog" | "inventoryCount" | "inventoryCountItem"
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
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BranchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      Warehouse: {
        payload: Prisma.$WarehousePayload<ExtArgs>
        fields: Prisma.WarehouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findFirst: {
            args: Prisma.WarehouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findMany: {
            args: Prisma.WarehouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          create: {
            args: Prisma.WarehouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          createMany: {
            args: Prisma.WarehouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarehouseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          delete: {
            args: Prisma.WarehouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          update: {
            args: Prisma.WarehouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          deleteMany: {
            args: Prisma.WarehouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarehouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WarehouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          aggregate: {
            args: Prisma.WarehouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouse>
          }
          groupBy: {
            args: Prisma.WarehouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarehouseCountArgs<ExtArgs>
            result: $Utils.Optional<WarehouseCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductBarcode: {
        payload: Prisma.$ProductBarcodePayload<ExtArgs>
        fields: Prisma.ProductBarcodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductBarcodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBarcodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductBarcodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBarcodePayload>
          }
          findFirst: {
            args: Prisma.ProductBarcodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBarcodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductBarcodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBarcodePayload>
          }
          findMany: {
            args: Prisma.ProductBarcodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBarcodePayload>[]
          }
          create: {
            args: Prisma.ProductBarcodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBarcodePayload>
          }
          createMany: {
            args: Prisma.ProductBarcodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductBarcodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBarcodePayload>[]
          }
          delete: {
            args: Prisma.ProductBarcodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBarcodePayload>
          }
          update: {
            args: Prisma.ProductBarcodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBarcodePayload>
          }
          deleteMany: {
            args: Prisma.ProductBarcodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductBarcodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductBarcodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductBarcodePayload>
          }
          aggregate: {
            args: Prisma.ProductBarcodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductBarcode>
          }
          groupBy: {
            args: Prisma.ProductBarcodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductBarcodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductBarcodeCountArgs<ExtArgs>
            result: $Utils.Optional<ProductBarcodeCountAggregateOutputType> | number
          }
        }
      }
      StockLot: {
        payload: Prisma.$StockLotPayload<ExtArgs>
        fields: Prisma.StockLotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockLotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockLotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLotPayload>
          }
          findFirst: {
            args: Prisma.StockLotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockLotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLotPayload>
          }
          findMany: {
            args: Prisma.StockLotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLotPayload>[]
          }
          create: {
            args: Prisma.StockLotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLotPayload>
          }
          createMany: {
            args: Prisma.StockLotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockLotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLotPayload>[]
          }
          delete: {
            args: Prisma.StockLotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLotPayload>
          }
          update: {
            args: Prisma.StockLotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLotPayload>
          }
          deleteMany: {
            args: Prisma.StockLotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockLotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockLotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLotPayload>
          }
          aggregate: {
            args: Prisma.StockLotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockLot>
          }
          groupBy: {
            args: Prisma.StockLotGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockLotGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockLotCountArgs<ExtArgs>
            result: $Utils.Optional<StockLotCountAggregateOutputType> | number
          }
        }
      }
      StockMovement: {
        payload: Prisma.$StockMovementPayload<ExtArgs>
        fields: Prisma.StockMovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockMovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockMovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          findFirst: {
            args: Prisma.StockMovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockMovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          findMany: {
            args: Prisma.StockMovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          create: {
            args: Prisma.StockMovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          createMany: {
            args: Prisma.StockMovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockMovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          delete: {
            args: Prisma.StockMovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          update: {
            args: Prisma.StockMovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          deleteMany: {
            args: Prisma.StockMovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockMovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockMovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          aggregate: {
            args: Prisma.StockMovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockMovement>
          }
          groupBy: {
            args: Prisma.StockMovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockMovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockMovementCountArgs<ExtArgs>
            result: $Utils.Optional<StockMovementCountAggregateOutputType> | number
          }
        }
      }
      ExpiryAlert: {
        payload: Prisma.$ExpiryAlertPayload<ExtArgs>
        fields: Prisma.ExpiryAlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpiryAlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpiryAlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpiryAlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpiryAlertPayload>
          }
          findFirst: {
            args: Prisma.ExpiryAlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpiryAlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpiryAlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpiryAlertPayload>
          }
          findMany: {
            args: Prisma.ExpiryAlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpiryAlertPayload>[]
          }
          create: {
            args: Prisma.ExpiryAlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpiryAlertPayload>
          }
          createMany: {
            args: Prisma.ExpiryAlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpiryAlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpiryAlertPayload>[]
          }
          delete: {
            args: Prisma.ExpiryAlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpiryAlertPayload>
          }
          update: {
            args: Prisma.ExpiryAlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpiryAlertPayload>
          }
          deleteMany: {
            args: Prisma.ExpiryAlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpiryAlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExpiryAlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpiryAlertPayload>
          }
          aggregate: {
            args: Prisma.ExpiryAlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpiryAlert>
          }
          groupBy: {
            args: Prisma.ExpiryAlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpiryAlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpiryAlertCountArgs<ExtArgs>
            result: $Utils.Optional<ExpiryAlertCountAggregateOutputType> | number
          }
        }
      }
      NotificationSetting: {
        payload: Prisma.$NotificationSettingPayload<ExtArgs>
        fields: Prisma.NotificationSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload>
          }
          findFirst: {
            args: Prisma.NotificationSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload>
          }
          findMany: {
            args: Prisma.NotificationSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload>[]
          }
          create: {
            args: Prisma.NotificationSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload>
          }
          createMany: {
            args: Prisma.NotificationSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload>[]
          }
          delete: {
            args: Prisma.NotificationSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload>
          }
          update: {
            args: Prisma.NotificationSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload>
          }
          deleteMany: {
            args: Prisma.NotificationSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload>
          }
          aggregate: {
            args: Prisma.NotificationSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationSetting>
          }
          groupBy: {
            args: Prisma.NotificationSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationSettingCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationSettingCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      InventoryCount: {
        payload: Prisma.$InventoryCountPayload<ExtArgs>
        fields: Prisma.InventoryCountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryCountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryCountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountPayload>
          }
          findFirst: {
            args: Prisma.InventoryCountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryCountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountPayload>
          }
          findMany: {
            args: Prisma.InventoryCountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountPayload>[]
          }
          create: {
            args: Prisma.InventoryCountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountPayload>
          }
          createMany: {
            args: Prisma.InventoryCountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryCountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountPayload>[]
          }
          delete: {
            args: Prisma.InventoryCountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountPayload>
          }
          update: {
            args: Prisma.InventoryCountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountPayload>
          }
          deleteMany: {
            args: Prisma.InventoryCountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryCountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryCountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountPayload>
          }
          aggregate: {
            args: Prisma.InventoryCountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryCount>
          }
          groupBy: {
            args: Prisma.InventoryCountGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountCountAggregateOutputType> | number
          }
        }
      }
      InventoryCountItem: {
        payload: Prisma.$InventoryCountItemPayload<ExtArgs>
        fields: Prisma.InventoryCountItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryCountItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryCountItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountItemPayload>
          }
          findFirst: {
            args: Prisma.InventoryCountItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryCountItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountItemPayload>
          }
          findMany: {
            args: Prisma.InventoryCountItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountItemPayload>[]
          }
          create: {
            args: Prisma.InventoryCountItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountItemPayload>
          }
          createMany: {
            args: Prisma.InventoryCountItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryCountItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountItemPayload>[]
          }
          delete: {
            args: Prisma.InventoryCountItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountItemPayload>
          }
          update: {
            args: Prisma.InventoryCountItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountItemPayload>
          }
          deleteMany: {
            args: Prisma.InventoryCountItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryCountItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryCountItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCountItemPayload>
          }
          aggregate: {
            args: Prisma.InventoryCountItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryCountItem>
          }
          groupBy: {
            args: Prisma.InventoryCountItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountItemCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountItemCountAggregateOutputType> | number
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
    stockMovements: number
    auditLogs: number
    inventoryCountsCreated: number
    inventoryCountsConfirmed: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockMovements?: boolean | UserCountOutputTypeCountStockMovementsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
    inventoryCountsCreated?: boolean | UserCountOutputTypeCountInventoryCountsCreatedArgs
    inventoryCountsConfirmed?: boolean | UserCountOutputTypeCountInventoryCountsConfirmedArgs
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
  export type UserCountOutputTypeCountStockMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInventoryCountsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryCountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInventoryCountsConfirmedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryCountWhereInput
  }


  /**
   * Count Type BranchCountOutputType
   */

  export type BranchCountOutputType = {
    users: number
    warehouses: number
    stockLots: number
    inventoryCounts: number
  }

  export type BranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | BranchCountOutputTypeCountUsersArgs
    warehouses?: boolean | BranchCountOutputTypeCountWarehousesArgs
    stockLots?: boolean | BranchCountOutputTypeCountStockLotsArgs
    inventoryCounts?: boolean | BranchCountOutputTypeCountInventoryCountsArgs
  }

  // Custom InputTypes
  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchCountOutputType
     */
    select?: BranchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountWarehousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountStockLotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockLotWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountInventoryCountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryCountWhereInput
  }


  /**
   * Count Type WarehouseCountOutputType
   */

  export type WarehouseCountOutputType = {
    stockLots: number
    inventoryItems: number
  }

  export type WarehouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockLots?: boolean | WarehouseCountOutputTypeCountStockLotsArgs
    inventoryItems?: boolean | WarehouseCountOutputTypeCountInventoryItemsArgs
  }

  // Custom InputTypes
  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseCountOutputType
     */
    select?: WarehouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountStockLotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockLotWhereInput
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountInventoryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryCountItemWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    stockLots: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockLots?: boolean | SupplierCountOutputTypeCountStockLotsArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountStockLotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockLotWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    barcodes: number
    stockLots: number
    inventoryItems: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barcodes?: boolean | ProductCountOutputTypeCountBarcodesArgs
    stockLots?: boolean | ProductCountOutputTypeCountStockLotsArgs
    inventoryItems?: boolean | ProductCountOutputTypeCountInventoryItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountBarcodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductBarcodeWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountStockLotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockLotWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountInventoryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryCountItemWhereInput
  }


  /**
   * Count Type StockLotCountOutputType
   */

  export type StockLotCountOutputType = {
    movements: number
    expiryAlerts: number
  }

  export type StockLotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movements?: boolean | StockLotCountOutputTypeCountMovementsArgs
    expiryAlerts?: boolean | StockLotCountOutputTypeCountExpiryAlertsArgs
  }

  // Custom InputTypes
  /**
   * StockLotCountOutputType without action
   */
  export type StockLotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLotCountOutputType
     */
    select?: StockLotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StockLotCountOutputType without action
   */
  export type StockLotCountOutputTypeCountMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
  }

  /**
   * StockLotCountOutputType without action
   */
  export type StockLotCountOutputTypeCountExpiryAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpiryAlertWhereInput
  }


  /**
   * Count Type InventoryCountCountOutputType
   */

  export type InventoryCountCountOutputType = {
    items: number
  }

  export type InventoryCountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | InventoryCountCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * InventoryCountCountOutputType without action
   */
  export type InventoryCountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountCountOutputType
     */
    select?: InventoryCountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryCountCountOutputType without action
   */
  export type InventoryCountCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryCountItemWhereInput
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
    name: string | null
    role: string | null
    branchId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    branchId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    branchId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    branchId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    branchId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    branchId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
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
    name: string
    role: string
    branchId: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
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
    name?: boolean
    role?: boolean
    branchId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | User$branchArgs<ExtArgs>
    stockMovements?: boolean | User$stockMovementsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    notificationSetting?: boolean | User$notificationSettingArgs<ExtArgs>
    inventoryCountsCreated?: boolean | User$inventoryCountsCreatedArgs<ExtArgs>
    inventoryCountsConfirmed?: boolean | User$inventoryCountsConfirmedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    branchId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | User$branchArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    branchId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | User$branchArgs<ExtArgs>
    stockMovements?: boolean | User$stockMovementsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    notificationSetting?: boolean | User$notificationSettingArgs<ExtArgs>
    inventoryCountsCreated?: boolean | User$inventoryCountsCreatedArgs<ExtArgs>
    inventoryCountsConfirmed?: boolean | User$inventoryCountsConfirmedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | User$branchArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs> | null
      stockMovements: Prisma.$StockMovementPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      notificationSetting: Prisma.$NotificationSettingPayload<ExtArgs> | null
      inventoryCountsCreated: Prisma.$InventoryCountPayload<ExtArgs>[]
      inventoryCountsConfirmed: Prisma.$InventoryCountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: string
      branchId: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends User$branchArgs<ExtArgs> = {}>(args?: Subset<T, User$branchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    stockMovements<T extends User$stockMovementsArgs<ExtArgs> = {}>(args?: Subset<T, User$stockMovementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany"> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany"> | Null>
    notificationSetting<T extends User$notificationSettingArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationSettingArgs<ExtArgs>>): Prisma__NotificationSettingClient<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    inventoryCountsCreated<T extends User$inventoryCountsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$inventoryCountsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryCountPayload<ExtArgs>, T, "findMany"> | Null>
    inventoryCountsConfirmed<T extends User$inventoryCountsConfirmedArgs<ExtArgs> = {}>(args?: Subset<T, User$inventoryCountsConfirmedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryCountPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly branchId: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
  }

  /**
   * User.branch
   */
  export type User$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * User.stockMovements
   */
  export type User$stockMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    cursor?: StockMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User.notificationSetting
   */
  export type User$notificationSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingInclude<ExtArgs> | null
    where?: NotificationSettingWhereInput
  }

  /**
   * User.inventoryCountsCreated
   */
  export type User$inventoryCountsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCount
     */
    select?: InventoryCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountInclude<ExtArgs> | null
    where?: InventoryCountWhereInput
    orderBy?: InventoryCountOrderByWithRelationInput | InventoryCountOrderByWithRelationInput[]
    cursor?: InventoryCountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryCountScalarFieldEnum | InventoryCountScalarFieldEnum[]
  }

  /**
   * User.inventoryCountsConfirmed
   */
  export type User$inventoryCountsConfirmedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCount
     */
    select?: InventoryCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountInclude<ExtArgs> | null
    where?: InventoryCountWhereInput
    orderBy?: InventoryCountOrderByWithRelationInput | InventoryCountOrderByWithRelationInput[]
    cursor?: InventoryCountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryCountScalarFieldEnum | InventoryCountScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BranchMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BranchMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: string
    name: string
    address: string | null
    phone: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Branch$usersArgs<ExtArgs>
    warehouses?: boolean | Branch$warehousesArgs<ExtArgs>
    stockLots?: boolean | Branch$stockLotsArgs<ExtArgs>
    inventoryCounts?: boolean | Branch$inventoryCountsArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Branch$usersArgs<ExtArgs>
    warehouses?: boolean | Branch$warehousesArgs<ExtArgs>
    stockLots?: boolean | Branch$stockLotsArgs<ExtArgs>
    inventoryCounts?: boolean | Branch$inventoryCountsArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BranchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      warehouses: Prisma.$WarehousePayload<ExtArgs>[]
      stockLots: Prisma.$StockLotPayload<ExtArgs>[]
      inventoryCounts: Prisma.$InventoryCountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string | null
      phone: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }

  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchFindUniqueArgs>(args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Branch that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchFindFirstArgs>(args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchFindManyArgs>(args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
     */
    create<T extends BranchCreateArgs>(args: SelectSubset<T, BranchCreateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Branches.
     * @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchCreateManyArgs>(args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Branches and returns the data saved in the database.
     * @param {BranchCreateManyAndReturnArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BranchCreateManyAndReturnArgs>(args?: SelectSubset<T, BranchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
     */
    delete<T extends BranchDeleteArgs>(args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchUpdateArgs>(args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchDeleteManyArgs>(args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchUpdateManyArgs>(args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
     */
    upsert<T extends BranchUpsertArgs>(args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
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
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Branch$usersArgs<ExtArgs> = {}>(args?: Subset<T, Branch$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    warehouses<T extends Branch$warehousesArgs<ExtArgs> = {}>(args?: Subset<T, Branch$warehousesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findMany"> | Null>
    stockLots<T extends Branch$stockLotsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$stockLotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockLotPayload<ExtArgs>, T, "findMany"> | Null>
    inventoryCounts<T extends Branch$inventoryCountsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$inventoryCountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryCountPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Branch model
   */ 
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'String'>
    readonly name: FieldRef<"Branch", 'String'>
    readonly address: FieldRef<"Branch", 'String'>
    readonly phone: FieldRef<"Branch", 'String'>
    readonly isActive: FieldRef<"Branch", 'Boolean'>
    readonly createdAt: FieldRef<"Branch", 'DateTime'>
    readonly updatedAt: FieldRef<"Branch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
  }

  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch createManyAndReturn
   */
  export type BranchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
  }

  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
  }

  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
  }

  /**
   * Branch.users
   */
  export type Branch$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Branch.warehouses
   */
  export type Branch$warehousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    where?: WarehouseWhereInput
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    cursor?: WarehouseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Branch.stockLots
   */
  export type Branch$stockLotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLot
     */
    select?: StockLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLotInclude<ExtArgs> | null
    where?: StockLotWhereInput
    orderBy?: StockLotOrderByWithRelationInput | StockLotOrderByWithRelationInput[]
    cursor?: StockLotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockLotScalarFieldEnum | StockLotScalarFieldEnum[]
  }

  /**
   * Branch.inventoryCounts
   */
  export type Branch$inventoryCountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCount
     */
    select?: InventoryCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountInclude<ExtArgs> | null
    where?: InventoryCountWhereInput
    orderBy?: InventoryCountOrderByWithRelationInput | InventoryCountOrderByWithRelationInput[]
    cursor?: InventoryCountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryCountScalarFieldEnum | InventoryCountScalarFieldEnum[]
  }

  /**
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
  }


  /**
   * Model Warehouse
   */

  export type AggregateWarehouse = {
    _count: WarehouseCountAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  export type WarehouseMinAggregateOutputType = {
    id: string | null
    name: string | null
    branchId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WarehouseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    branchId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WarehouseCountAggregateOutputType = {
    id: number
    name: number
    branchId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WarehouseMinAggregateInputType = {
    id?: true
    name?: true
    branchId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WarehouseMaxAggregateInputType = {
    id?: true
    name?: true
    branchId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WarehouseCountAggregateInputType = {
    id?: true
    name?: true
    branchId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WarehouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouse to aggregate.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warehouses
    **/
    _count?: true | WarehouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehouseMaxAggregateInputType
  }

  export type GetWarehouseAggregateType<T extends WarehouseAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouse[P]>
      : GetScalarType<T[P], AggregateWarehouse[P]>
  }




  export type WarehouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseWhereInput
    orderBy?: WarehouseOrderByWithAggregationInput | WarehouseOrderByWithAggregationInput[]
    by: WarehouseScalarFieldEnum[] | WarehouseScalarFieldEnum
    having?: WarehouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehouseCountAggregateInputType | true
    _min?: WarehouseMinAggregateInputType
    _max?: WarehouseMaxAggregateInputType
  }

  export type WarehouseGroupByOutputType = {
    id: string
    name: string
    branchId: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: WarehouseCountAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  type GetWarehouseGroupByPayload<T extends WarehouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
            : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
        }
      >
    >


  export type WarehouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branchId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    stockLots?: boolean | Warehouse$stockLotsArgs<ExtArgs>
    inventoryItems?: boolean | Warehouse$inventoryItemsArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branchId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectScalar = {
    id?: boolean
    name?: boolean
    branchId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WarehouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    stockLots?: boolean | Warehouse$stockLotsArgs<ExtArgs>
    inventoryItems?: boolean | Warehouse$inventoryItemsArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WarehouseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }

  export type $WarehousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warehouse"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
      stockLots: Prisma.$StockLotPayload<ExtArgs>[]
      inventoryItems: Prisma.$InventoryCountItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      branchId: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["warehouse"]>
    composites: {}
  }

  type WarehouseGetPayload<S extends boolean | null | undefined | WarehouseDefaultArgs> = $Result.GetResult<Prisma.$WarehousePayload, S>

  type WarehouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WarehouseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WarehouseCountAggregateInputType | true
    }

  export interface WarehouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warehouse'], meta: { name: 'Warehouse' } }
    /**
     * Find zero or one Warehouse that matches the filter.
     * @param {WarehouseFindUniqueArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarehouseFindUniqueArgs>(args: SelectSubset<T, WarehouseFindUniqueArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Warehouse that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WarehouseFindUniqueOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarehouseFindUniqueOrThrowArgs>(args: SelectSubset<T, WarehouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Warehouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarehouseFindFirstArgs>(args?: SelectSubset<T, WarehouseFindFirstArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Warehouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarehouseFindFirstOrThrowArgs>(args?: SelectSubset<T, WarehouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warehouses
     * const warehouses = await prisma.warehouse.findMany()
     * 
     * // Get first 10 Warehouses
     * const warehouses = await prisma.warehouse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarehouseFindManyArgs>(args?: SelectSubset<T, WarehouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Warehouse.
     * @param {WarehouseCreateArgs} args - Arguments to create a Warehouse.
     * @example
     * // Create one Warehouse
     * const Warehouse = await prisma.warehouse.create({
     *   data: {
     *     // ... data to create a Warehouse
     *   }
     * })
     * 
     */
    create<T extends WarehouseCreateArgs>(args: SelectSubset<T, WarehouseCreateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Warehouses.
     * @param {WarehouseCreateManyArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouse = await prisma.warehouse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarehouseCreateManyArgs>(args?: SelectSubset<T, WarehouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Warehouses and returns the data saved in the database.
     * @param {WarehouseCreateManyAndReturnArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouse = await prisma.warehouse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Warehouses and only return the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarehouseCreateManyAndReturnArgs>(args?: SelectSubset<T, WarehouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Warehouse.
     * @param {WarehouseDeleteArgs} args - Arguments to delete one Warehouse.
     * @example
     * // Delete one Warehouse
     * const Warehouse = await prisma.warehouse.delete({
     *   where: {
     *     // ... filter to delete one Warehouse
     *   }
     * })
     * 
     */
    delete<T extends WarehouseDeleteArgs>(args: SelectSubset<T, WarehouseDeleteArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Warehouse.
     * @param {WarehouseUpdateArgs} args - Arguments to update one Warehouse.
     * @example
     * // Update one Warehouse
     * const warehouse = await prisma.warehouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarehouseUpdateArgs>(args: SelectSubset<T, WarehouseUpdateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Warehouses.
     * @param {WarehouseDeleteManyArgs} args - Arguments to filter Warehouses to delete.
     * @example
     * // Delete a few Warehouses
     * const { count } = await prisma.warehouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarehouseDeleteManyArgs>(args?: SelectSubset<T, WarehouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warehouses
     * const warehouse = await prisma.warehouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarehouseUpdateManyArgs>(args: SelectSubset<T, WarehouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Warehouse.
     * @param {WarehouseUpsertArgs} args - Arguments to update or create a Warehouse.
     * @example
     * // Update or create a Warehouse
     * const warehouse = await prisma.warehouse.upsert({
     *   create: {
     *     // ... data to create a Warehouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warehouse we want to update
     *   }
     * })
     */
    upsert<T extends WarehouseUpsertArgs>(args: SelectSubset<T, WarehouseUpsertArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseCountArgs} args - Arguments to filter Warehouses to count.
     * @example
     * // Count the number of Warehouses
     * const count = await prisma.warehouse.count({
     *   where: {
     *     // ... the filter for the Warehouses we want to count
     *   }
     * })
    **/
    count<T extends WarehouseCountArgs>(
      args?: Subset<T, WarehouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WarehouseAggregateArgs>(args: Subset<T, WarehouseAggregateArgs>): Prisma.PrismaPromise<GetWarehouseAggregateType<T>>

    /**
     * Group by Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseGroupByArgs} args - Group by arguments.
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
      T extends WarehouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehouseGroupByArgs['orderBy'] }
        : { orderBy?: WarehouseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WarehouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warehouse model
   */
  readonly fields: WarehouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warehouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    stockLots<T extends Warehouse$stockLotsArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$stockLotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockLotPayload<ExtArgs>, T, "findMany"> | Null>
    inventoryItems<T extends Warehouse$inventoryItemsArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$inventoryItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryCountItemPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Warehouse model
   */ 
  interface WarehouseFieldRefs {
    readonly id: FieldRef<"Warehouse", 'String'>
    readonly name: FieldRef<"Warehouse", 'String'>
    readonly branchId: FieldRef<"Warehouse", 'String'>
    readonly isActive: FieldRef<"Warehouse", 'Boolean'>
    readonly createdAt: FieldRef<"Warehouse", 'DateTime'>
    readonly updatedAt: FieldRef<"Warehouse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Warehouse findUnique
   */
  export type WarehouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findUniqueOrThrow
   */
  export type WarehouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findFirst
   */
  export type WarehouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findFirstOrThrow
   */
  export type WarehouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findMany
   */
  export type WarehouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse create
   */
  export type WarehouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to create a Warehouse.
     */
    data: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
  }

  /**
   * Warehouse createMany
   */
  export type WarehouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warehouse createManyAndReturn
   */
  export type WarehouseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Warehouse update
   */
  export type WarehouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to update a Warehouse.
     */
    data: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
    /**
     * Choose, which Warehouse to update.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse updateMany
   */
  export type WarehouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehouseWhereInput
  }

  /**
   * Warehouse upsert
   */
  export type WarehouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The filter to search for the Warehouse to update in case it exists.
     */
    where: WarehouseWhereUniqueInput
    /**
     * In case the Warehouse found by the `where` argument doesn't exist, create a new Warehouse with this data.
     */
    create: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
    /**
     * In case the Warehouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
  }

  /**
   * Warehouse delete
   */
  export type WarehouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter which Warehouse to delete.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse deleteMany
   */
  export type WarehouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouses to delete
     */
    where?: WarehouseWhereInput
  }

  /**
   * Warehouse.stockLots
   */
  export type Warehouse$stockLotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLot
     */
    select?: StockLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLotInclude<ExtArgs> | null
    where?: StockLotWhereInput
    orderBy?: StockLotOrderByWithRelationInput | StockLotOrderByWithRelationInput[]
    cursor?: StockLotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockLotScalarFieldEnum | StockLotScalarFieldEnum[]
  }

  /**
   * Warehouse.inventoryItems
   */
  export type Warehouse$inventoryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountItem
     */
    select?: InventoryCountItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountItemInclude<ExtArgs> | null
    where?: InventoryCountItemWhereInput
    orderBy?: InventoryCountItemOrderByWithRelationInput | InventoryCountItemOrderByWithRelationInput[]
    cursor?: InventoryCountItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryCountItemScalarFieldEnum | InventoryCountItemScalarFieldEnum[]
  }

  /**
   * Warehouse without action
   */
  export type WarehouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierMinAggregateOutputType = {
    id: string | null
    name: string | null
    contact: string | null
    phone: string | null
    email: string | null
    address: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: string | null
    name: string | null
    contact: string | null
    phone: string | null
    email: string | null
    address: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    contact: number
    phone: number
    email: number
    address: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    contact?: true
    phone?: true
    email?: true
    address?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    contact?: true
    phone?: true
    email?: true
    address?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    contact?: true
    phone?: true
    email?: true
    address?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: string
    name: string
    contact: string | null
    phone: string | null
    email: string | null
    address: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contact?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stockLots?: boolean | Supplier$stockLotsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contact?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
    contact?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockLots?: boolean | Supplier$stockLotsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      stockLots: Prisma.$StockLotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      contact: string | null
      phone: string | null
      email: string | null
      address: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
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
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stockLots<T extends Supplier$stockLotsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$stockLotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockLotPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Supplier model
   */ 
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'String'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly contact: FieldRef<"Supplier", 'String'>
    readonly phone: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String'>
    readonly address: FieldRef<"Supplier", 'String'>
    readonly isActive: FieldRef<"Supplier", 'Boolean'>
    readonly createdAt: FieldRef<"Supplier", 'DateTime'>
    readonly updatedAt: FieldRef<"Supplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
  }

  /**
   * Supplier.stockLots
   */
  export type Supplier$stockLotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLot
     */
    select?: StockLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLotInclude<ExtArgs> | null
    where?: StockLotWhereInput
    orderBy?: StockLotOrderByWithRelationInput | StockLotOrderByWithRelationInput[]
    cursor?: StockLotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockLotScalarFieldEnum | StockLotScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    minStock: number | null
  }

  export type ProductSumAggregateOutputType = {
    minStock: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    categoryId: string | null
    unit: string | null
    minStock: number | null
    productType: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    categoryId: string | null
    unit: string | null
    minStock: number | null
    productType: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    categoryId: number
    unit: number
    minStock: number
    productType: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    minStock?: true
  }

  export type ProductSumAggregateInputType = {
    minStock?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    unit?: true
    minStock?: true
    productType?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    unit?: true
    minStock?: true
    productType?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    unit?: true
    minStock?: true
    productType?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    description: string | null
    categoryId: string | null
    unit: string
    minStock: number
    productType: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    unit?: boolean
    minStock?: boolean
    productType?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
    barcodes?: boolean | Product$barcodesArgs<ExtArgs>
    stockLots?: boolean | Product$stockLotsArgs<ExtArgs>
    inventoryItems?: boolean | Product$inventoryItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    unit?: boolean
    minStock?: boolean
    productType?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    unit?: boolean
    minStock?: boolean
    productType?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
    barcodes?: boolean | Product$barcodesArgs<ExtArgs>
    stockLots?: boolean | Product$stockLotsArgs<ExtArgs>
    inventoryItems?: boolean | Product$inventoryItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      barcodes: Prisma.$ProductBarcodePayload<ExtArgs>[]
      stockLots: Prisma.$StockLotPayload<ExtArgs>[]
      inventoryItems: Prisma.$InventoryCountItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      categoryId: string | null
      unit: string
      minStock: number
      productType: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Product$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    barcodes<T extends Product$barcodesArgs<ExtArgs> = {}>(args?: Subset<T, Product$barcodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBarcodePayload<ExtArgs>, T, "findMany"> | Null>
    stockLots<T extends Product$stockLotsArgs<ExtArgs> = {}>(args?: Subset<T, Product$stockLotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockLotPayload<ExtArgs>, T, "findMany"> | Null>
    inventoryItems<T extends Product$inventoryItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$inventoryItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryCountItemPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly unit: FieldRef<"Product", 'String'>
    readonly minStock: FieldRef<"Product", 'Int'>
    readonly productType: FieldRef<"Product", 'String'>
    readonly isActive: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.category
   */
  export type Product$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Product.barcodes
   */
  export type Product$barcodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBarcode
     */
    select?: ProductBarcodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBarcodeInclude<ExtArgs> | null
    where?: ProductBarcodeWhereInput
    orderBy?: ProductBarcodeOrderByWithRelationInput | ProductBarcodeOrderByWithRelationInput[]
    cursor?: ProductBarcodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductBarcodeScalarFieldEnum | ProductBarcodeScalarFieldEnum[]
  }

  /**
   * Product.stockLots
   */
  export type Product$stockLotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLot
     */
    select?: StockLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLotInclude<ExtArgs> | null
    where?: StockLotWhereInput
    orderBy?: StockLotOrderByWithRelationInput | StockLotOrderByWithRelationInput[]
    cursor?: StockLotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockLotScalarFieldEnum | StockLotScalarFieldEnum[]
  }

  /**
   * Product.inventoryItems
   */
  export type Product$inventoryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountItem
     */
    select?: InventoryCountItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountItemInclude<ExtArgs> | null
    where?: InventoryCountItemWhereInput
    orderBy?: InventoryCountItemOrderByWithRelationInput | InventoryCountItemOrderByWithRelationInput[]
    cursor?: InventoryCountItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryCountItemScalarFieldEnum | InventoryCountItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductBarcode
   */

  export type AggregateProductBarcode = {
    _count: ProductBarcodeCountAggregateOutputType | null
    _min: ProductBarcodeMinAggregateOutputType | null
    _max: ProductBarcodeMaxAggregateOutputType | null
  }

  export type ProductBarcodeMinAggregateOutputType = {
    id: string | null
    barcode: string | null
    productId: string | null
    isPrimary: boolean | null
  }

  export type ProductBarcodeMaxAggregateOutputType = {
    id: string | null
    barcode: string | null
    productId: string | null
    isPrimary: boolean | null
  }

  export type ProductBarcodeCountAggregateOutputType = {
    id: number
    barcode: number
    productId: number
    isPrimary: number
    _all: number
  }


  export type ProductBarcodeMinAggregateInputType = {
    id?: true
    barcode?: true
    productId?: true
    isPrimary?: true
  }

  export type ProductBarcodeMaxAggregateInputType = {
    id?: true
    barcode?: true
    productId?: true
    isPrimary?: true
  }

  export type ProductBarcodeCountAggregateInputType = {
    id?: true
    barcode?: true
    productId?: true
    isPrimary?: true
    _all?: true
  }

  export type ProductBarcodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductBarcode to aggregate.
     */
    where?: ProductBarcodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBarcodes to fetch.
     */
    orderBy?: ProductBarcodeOrderByWithRelationInput | ProductBarcodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductBarcodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBarcodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBarcodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductBarcodes
    **/
    _count?: true | ProductBarcodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductBarcodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductBarcodeMaxAggregateInputType
  }

  export type GetProductBarcodeAggregateType<T extends ProductBarcodeAggregateArgs> = {
        [P in keyof T & keyof AggregateProductBarcode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductBarcode[P]>
      : GetScalarType<T[P], AggregateProductBarcode[P]>
  }




  export type ProductBarcodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductBarcodeWhereInput
    orderBy?: ProductBarcodeOrderByWithAggregationInput | ProductBarcodeOrderByWithAggregationInput[]
    by: ProductBarcodeScalarFieldEnum[] | ProductBarcodeScalarFieldEnum
    having?: ProductBarcodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductBarcodeCountAggregateInputType | true
    _min?: ProductBarcodeMinAggregateInputType
    _max?: ProductBarcodeMaxAggregateInputType
  }

  export type ProductBarcodeGroupByOutputType = {
    id: string
    barcode: string
    productId: string
    isPrimary: boolean
    _count: ProductBarcodeCountAggregateOutputType | null
    _min: ProductBarcodeMinAggregateOutputType | null
    _max: ProductBarcodeMaxAggregateOutputType | null
  }

  type GetProductBarcodeGroupByPayload<T extends ProductBarcodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductBarcodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductBarcodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductBarcodeGroupByOutputType[P]>
            : GetScalarType<T[P], ProductBarcodeGroupByOutputType[P]>
        }
      >
    >


  export type ProductBarcodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barcode?: boolean
    productId?: boolean
    isPrimary?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productBarcode"]>

  export type ProductBarcodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barcode?: boolean
    productId?: boolean
    isPrimary?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productBarcode"]>

  export type ProductBarcodeSelectScalar = {
    id?: boolean
    barcode?: boolean
    productId?: boolean
    isPrimary?: boolean
  }

  export type ProductBarcodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductBarcodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductBarcodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductBarcode"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      barcode: string
      productId: string
      isPrimary: boolean
    }, ExtArgs["result"]["productBarcode"]>
    composites: {}
  }

  type ProductBarcodeGetPayload<S extends boolean | null | undefined | ProductBarcodeDefaultArgs> = $Result.GetResult<Prisma.$ProductBarcodePayload, S>

  type ProductBarcodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductBarcodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductBarcodeCountAggregateInputType | true
    }

  export interface ProductBarcodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductBarcode'], meta: { name: 'ProductBarcode' } }
    /**
     * Find zero or one ProductBarcode that matches the filter.
     * @param {ProductBarcodeFindUniqueArgs} args - Arguments to find a ProductBarcode
     * @example
     * // Get one ProductBarcode
     * const productBarcode = await prisma.productBarcode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductBarcodeFindUniqueArgs>(args: SelectSubset<T, ProductBarcodeFindUniqueArgs<ExtArgs>>): Prisma__ProductBarcodeClient<$Result.GetResult<Prisma.$ProductBarcodePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductBarcode that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductBarcodeFindUniqueOrThrowArgs} args - Arguments to find a ProductBarcode
     * @example
     * // Get one ProductBarcode
     * const productBarcode = await prisma.productBarcode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductBarcodeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductBarcodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductBarcodeClient<$Result.GetResult<Prisma.$ProductBarcodePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductBarcode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBarcodeFindFirstArgs} args - Arguments to find a ProductBarcode
     * @example
     * // Get one ProductBarcode
     * const productBarcode = await prisma.productBarcode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductBarcodeFindFirstArgs>(args?: SelectSubset<T, ProductBarcodeFindFirstArgs<ExtArgs>>): Prisma__ProductBarcodeClient<$Result.GetResult<Prisma.$ProductBarcodePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductBarcode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBarcodeFindFirstOrThrowArgs} args - Arguments to find a ProductBarcode
     * @example
     * // Get one ProductBarcode
     * const productBarcode = await prisma.productBarcode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductBarcodeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductBarcodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductBarcodeClient<$Result.GetResult<Prisma.$ProductBarcodePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductBarcodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBarcodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductBarcodes
     * const productBarcodes = await prisma.productBarcode.findMany()
     * 
     * // Get first 10 ProductBarcodes
     * const productBarcodes = await prisma.productBarcode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productBarcodeWithIdOnly = await prisma.productBarcode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductBarcodeFindManyArgs>(args?: SelectSubset<T, ProductBarcodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBarcodePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductBarcode.
     * @param {ProductBarcodeCreateArgs} args - Arguments to create a ProductBarcode.
     * @example
     * // Create one ProductBarcode
     * const ProductBarcode = await prisma.productBarcode.create({
     *   data: {
     *     // ... data to create a ProductBarcode
     *   }
     * })
     * 
     */
    create<T extends ProductBarcodeCreateArgs>(args: SelectSubset<T, ProductBarcodeCreateArgs<ExtArgs>>): Prisma__ProductBarcodeClient<$Result.GetResult<Prisma.$ProductBarcodePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductBarcodes.
     * @param {ProductBarcodeCreateManyArgs} args - Arguments to create many ProductBarcodes.
     * @example
     * // Create many ProductBarcodes
     * const productBarcode = await prisma.productBarcode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductBarcodeCreateManyArgs>(args?: SelectSubset<T, ProductBarcodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductBarcodes and returns the data saved in the database.
     * @param {ProductBarcodeCreateManyAndReturnArgs} args - Arguments to create many ProductBarcodes.
     * @example
     * // Create many ProductBarcodes
     * const productBarcode = await prisma.productBarcode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductBarcodes and only return the `id`
     * const productBarcodeWithIdOnly = await prisma.productBarcode.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductBarcodeCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductBarcodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductBarcodePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProductBarcode.
     * @param {ProductBarcodeDeleteArgs} args - Arguments to delete one ProductBarcode.
     * @example
     * // Delete one ProductBarcode
     * const ProductBarcode = await prisma.productBarcode.delete({
     *   where: {
     *     // ... filter to delete one ProductBarcode
     *   }
     * })
     * 
     */
    delete<T extends ProductBarcodeDeleteArgs>(args: SelectSubset<T, ProductBarcodeDeleteArgs<ExtArgs>>): Prisma__ProductBarcodeClient<$Result.GetResult<Prisma.$ProductBarcodePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductBarcode.
     * @param {ProductBarcodeUpdateArgs} args - Arguments to update one ProductBarcode.
     * @example
     * // Update one ProductBarcode
     * const productBarcode = await prisma.productBarcode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductBarcodeUpdateArgs>(args: SelectSubset<T, ProductBarcodeUpdateArgs<ExtArgs>>): Prisma__ProductBarcodeClient<$Result.GetResult<Prisma.$ProductBarcodePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductBarcodes.
     * @param {ProductBarcodeDeleteManyArgs} args - Arguments to filter ProductBarcodes to delete.
     * @example
     * // Delete a few ProductBarcodes
     * const { count } = await prisma.productBarcode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductBarcodeDeleteManyArgs>(args?: SelectSubset<T, ProductBarcodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductBarcodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBarcodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductBarcodes
     * const productBarcode = await prisma.productBarcode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductBarcodeUpdateManyArgs>(args: SelectSubset<T, ProductBarcodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductBarcode.
     * @param {ProductBarcodeUpsertArgs} args - Arguments to update or create a ProductBarcode.
     * @example
     * // Update or create a ProductBarcode
     * const productBarcode = await prisma.productBarcode.upsert({
     *   create: {
     *     // ... data to create a ProductBarcode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductBarcode we want to update
     *   }
     * })
     */
    upsert<T extends ProductBarcodeUpsertArgs>(args: SelectSubset<T, ProductBarcodeUpsertArgs<ExtArgs>>): Prisma__ProductBarcodeClient<$Result.GetResult<Prisma.$ProductBarcodePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductBarcodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBarcodeCountArgs} args - Arguments to filter ProductBarcodes to count.
     * @example
     * // Count the number of ProductBarcodes
     * const count = await prisma.productBarcode.count({
     *   where: {
     *     // ... the filter for the ProductBarcodes we want to count
     *   }
     * })
    **/
    count<T extends ProductBarcodeCountArgs>(
      args?: Subset<T, ProductBarcodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductBarcodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductBarcode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBarcodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductBarcodeAggregateArgs>(args: Subset<T, ProductBarcodeAggregateArgs>): Prisma.PrismaPromise<GetProductBarcodeAggregateType<T>>

    /**
     * Group by ProductBarcode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductBarcodeGroupByArgs} args - Group by arguments.
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
      T extends ProductBarcodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductBarcodeGroupByArgs['orderBy'] }
        : { orderBy?: ProductBarcodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductBarcodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductBarcodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductBarcode model
   */
  readonly fields: ProductBarcodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductBarcode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductBarcodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ProductBarcode model
   */ 
  interface ProductBarcodeFieldRefs {
    readonly id: FieldRef<"ProductBarcode", 'String'>
    readonly barcode: FieldRef<"ProductBarcode", 'String'>
    readonly productId: FieldRef<"ProductBarcode", 'String'>
    readonly isPrimary: FieldRef<"ProductBarcode", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ProductBarcode findUnique
   */
  export type ProductBarcodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBarcode
     */
    select?: ProductBarcodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBarcodeInclude<ExtArgs> | null
    /**
     * Filter, which ProductBarcode to fetch.
     */
    where: ProductBarcodeWhereUniqueInput
  }

  /**
   * ProductBarcode findUniqueOrThrow
   */
  export type ProductBarcodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBarcode
     */
    select?: ProductBarcodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBarcodeInclude<ExtArgs> | null
    /**
     * Filter, which ProductBarcode to fetch.
     */
    where: ProductBarcodeWhereUniqueInput
  }

  /**
   * ProductBarcode findFirst
   */
  export type ProductBarcodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBarcode
     */
    select?: ProductBarcodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBarcodeInclude<ExtArgs> | null
    /**
     * Filter, which ProductBarcode to fetch.
     */
    where?: ProductBarcodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBarcodes to fetch.
     */
    orderBy?: ProductBarcodeOrderByWithRelationInput | ProductBarcodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductBarcodes.
     */
    cursor?: ProductBarcodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBarcodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBarcodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductBarcodes.
     */
    distinct?: ProductBarcodeScalarFieldEnum | ProductBarcodeScalarFieldEnum[]
  }

  /**
   * ProductBarcode findFirstOrThrow
   */
  export type ProductBarcodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBarcode
     */
    select?: ProductBarcodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBarcodeInclude<ExtArgs> | null
    /**
     * Filter, which ProductBarcode to fetch.
     */
    where?: ProductBarcodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBarcodes to fetch.
     */
    orderBy?: ProductBarcodeOrderByWithRelationInput | ProductBarcodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductBarcodes.
     */
    cursor?: ProductBarcodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBarcodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBarcodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductBarcodes.
     */
    distinct?: ProductBarcodeScalarFieldEnum | ProductBarcodeScalarFieldEnum[]
  }

  /**
   * ProductBarcode findMany
   */
  export type ProductBarcodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBarcode
     */
    select?: ProductBarcodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBarcodeInclude<ExtArgs> | null
    /**
     * Filter, which ProductBarcodes to fetch.
     */
    where?: ProductBarcodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductBarcodes to fetch.
     */
    orderBy?: ProductBarcodeOrderByWithRelationInput | ProductBarcodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductBarcodes.
     */
    cursor?: ProductBarcodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductBarcodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductBarcodes.
     */
    skip?: number
    distinct?: ProductBarcodeScalarFieldEnum | ProductBarcodeScalarFieldEnum[]
  }

  /**
   * ProductBarcode create
   */
  export type ProductBarcodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBarcode
     */
    select?: ProductBarcodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBarcodeInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductBarcode.
     */
    data: XOR<ProductBarcodeCreateInput, ProductBarcodeUncheckedCreateInput>
  }

  /**
   * ProductBarcode createMany
   */
  export type ProductBarcodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductBarcodes.
     */
    data: ProductBarcodeCreateManyInput | ProductBarcodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductBarcode createManyAndReturn
   */
  export type ProductBarcodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBarcode
     */
    select?: ProductBarcodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductBarcodes.
     */
    data: ProductBarcodeCreateManyInput | ProductBarcodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBarcodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductBarcode update
   */
  export type ProductBarcodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBarcode
     */
    select?: ProductBarcodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBarcodeInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductBarcode.
     */
    data: XOR<ProductBarcodeUpdateInput, ProductBarcodeUncheckedUpdateInput>
    /**
     * Choose, which ProductBarcode to update.
     */
    where: ProductBarcodeWhereUniqueInput
  }

  /**
   * ProductBarcode updateMany
   */
  export type ProductBarcodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductBarcodes.
     */
    data: XOR<ProductBarcodeUpdateManyMutationInput, ProductBarcodeUncheckedUpdateManyInput>
    /**
     * Filter which ProductBarcodes to update
     */
    where?: ProductBarcodeWhereInput
  }

  /**
   * ProductBarcode upsert
   */
  export type ProductBarcodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBarcode
     */
    select?: ProductBarcodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBarcodeInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductBarcode to update in case it exists.
     */
    where: ProductBarcodeWhereUniqueInput
    /**
     * In case the ProductBarcode found by the `where` argument doesn't exist, create a new ProductBarcode with this data.
     */
    create: XOR<ProductBarcodeCreateInput, ProductBarcodeUncheckedCreateInput>
    /**
     * In case the ProductBarcode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductBarcodeUpdateInput, ProductBarcodeUncheckedUpdateInput>
  }

  /**
   * ProductBarcode delete
   */
  export type ProductBarcodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBarcode
     */
    select?: ProductBarcodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBarcodeInclude<ExtArgs> | null
    /**
     * Filter which ProductBarcode to delete.
     */
    where: ProductBarcodeWhereUniqueInput
  }

  /**
   * ProductBarcode deleteMany
   */
  export type ProductBarcodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductBarcodes to delete
     */
    where?: ProductBarcodeWhereInput
  }

  /**
   * ProductBarcode without action
   */
  export type ProductBarcodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBarcode
     */
    select?: ProductBarcodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductBarcodeInclude<ExtArgs> | null
  }


  /**
   * Model StockLot
   */

  export type AggregateStockLot = {
    _count: StockLotCountAggregateOutputType | null
    _avg: StockLotAvgAggregateOutputType | null
    _sum: StockLotSumAggregateOutputType | null
    _min: StockLotMinAggregateOutputType | null
    _max: StockLotMaxAggregateOutputType | null
  }

  export type StockLotAvgAggregateOutputType = {
    quantity: number | null
  }

  export type StockLotSumAggregateOutputType = {
    quantity: number | null
  }

  export type StockLotMinAggregateOutputType = {
    id: string | null
    productId: string | null
    warehouseId: string | null
    branchId: string | null
    supplierId: string | null
    lotNumber: string | null
    expiryDate: Date | null
    quantity: number | null
    status: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StockLotMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    warehouseId: string | null
    branchId: string | null
    supplierId: string | null
    lotNumber: string | null
    expiryDate: Date | null
    quantity: number | null
    status: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StockLotCountAggregateOutputType = {
    id: number
    productId: number
    warehouseId: number
    branchId: number
    supplierId: number
    lotNumber: number
    expiryDate: number
    quantity: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StockLotAvgAggregateInputType = {
    quantity?: true
  }

  export type StockLotSumAggregateInputType = {
    quantity?: true
  }

  export type StockLotMinAggregateInputType = {
    id?: true
    productId?: true
    warehouseId?: true
    branchId?: true
    supplierId?: true
    lotNumber?: true
    expiryDate?: true
    quantity?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StockLotMaxAggregateInputType = {
    id?: true
    productId?: true
    warehouseId?: true
    branchId?: true
    supplierId?: true
    lotNumber?: true
    expiryDate?: true
    quantity?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StockLotCountAggregateInputType = {
    id?: true
    productId?: true
    warehouseId?: true
    branchId?: true
    supplierId?: true
    lotNumber?: true
    expiryDate?: true
    quantity?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StockLotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockLot to aggregate.
     */
    where?: StockLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockLots to fetch.
     */
    orderBy?: StockLotOrderByWithRelationInput | StockLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockLots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockLots
    **/
    _count?: true | StockLotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockLotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockLotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockLotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockLotMaxAggregateInputType
  }

  export type GetStockLotAggregateType<T extends StockLotAggregateArgs> = {
        [P in keyof T & keyof AggregateStockLot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockLot[P]>
      : GetScalarType<T[P], AggregateStockLot[P]>
  }




  export type StockLotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockLotWhereInput
    orderBy?: StockLotOrderByWithAggregationInput | StockLotOrderByWithAggregationInput[]
    by: StockLotScalarFieldEnum[] | StockLotScalarFieldEnum
    having?: StockLotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockLotCountAggregateInputType | true
    _avg?: StockLotAvgAggregateInputType
    _sum?: StockLotSumAggregateInputType
    _min?: StockLotMinAggregateInputType
    _max?: StockLotMaxAggregateInputType
  }

  export type StockLotGroupByOutputType = {
    id: string
    productId: string
    warehouseId: string
    branchId: string
    supplierId: string | null
    lotNumber: string | null
    expiryDate: Date | null
    quantity: number
    status: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: StockLotCountAggregateOutputType | null
    _avg: StockLotAvgAggregateOutputType | null
    _sum: StockLotSumAggregateOutputType | null
    _min: StockLotMinAggregateOutputType | null
    _max: StockLotMaxAggregateOutputType | null
  }

  type GetStockLotGroupByPayload<T extends StockLotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockLotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockLotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockLotGroupByOutputType[P]>
            : GetScalarType<T[P], StockLotGroupByOutputType[P]>
        }
      >
    >


  export type StockLotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    warehouseId?: boolean
    branchId?: boolean
    supplierId?: boolean
    lotNumber?: boolean
    expiryDate?: boolean
    quantity?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    supplier?: boolean | StockLot$supplierArgs<ExtArgs>
    movements?: boolean | StockLot$movementsArgs<ExtArgs>
    expiryAlerts?: boolean | StockLot$expiryAlertsArgs<ExtArgs>
    _count?: boolean | StockLotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockLot"]>

  export type StockLotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    warehouseId?: boolean
    branchId?: boolean
    supplierId?: boolean
    lotNumber?: boolean
    expiryDate?: boolean
    quantity?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    supplier?: boolean | StockLot$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["stockLot"]>

  export type StockLotSelectScalar = {
    id?: boolean
    productId?: boolean
    warehouseId?: boolean
    branchId?: boolean
    supplierId?: boolean
    lotNumber?: boolean
    expiryDate?: boolean
    quantity?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StockLotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    supplier?: boolean | StockLot$supplierArgs<ExtArgs>
    movements?: boolean | StockLot$movementsArgs<ExtArgs>
    expiryAlerts?: boolean | StockLot$expiryAlertsArgs<ExtArgs>
    _count?: boolean | StockLotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StockLotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    supplier?: boolean | StockLot$supplierArgs<ExtArgs>
  }

  export type $StockLotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockLot"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      warehouse: Prisma.$WarehousePayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs>
      supplier: Prisma.$SupplierPayload<ExtArgs> | null
      movements: Prisma.$StockMovementPayload<ExtArgs>[]
      expiryAlerts: Prisma.$ExpiryAlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      warehouseId: string
      branchId: string
      supplierId: string | null
      lotNumber: string | null
      expiryDate: Date | null
      quantity: number
      status: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stockLot"]>
    composites: {}
  }

  type StockLotGetPayload<S extends boolean | null | undefined | StockLotDefaultArgs> = $Result.GetResult<Prisma.$StockLotPayload, S>

  type StockLotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockLotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockLotCountAggregateInputType | true
    }

  export interface StockLotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockLot'], meta: { name: 'StockLot' } }
    /**
     * Find zero or one StockLot that matches the filter.
     * @param {StockLotFindUniqueArgs} args - Arguments to find a StockLot
     * @example
     * // Get one StockLot
     * const stockLot = await prisma.stockLot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockLotFindUniqueArgs>(args: SelectSubset<T, StockLotFindUniqueArgs<ExtArgs>>): Prisma__StockLotClient<$Result.GetResult<Prisma.$StockLotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StockLot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StockLotFindUniqueOrThrowArgs} args - Arguments to find a StockLot
     * @example
     * // Get one StockLot
     * const stockLot = await prisma.stockLot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockLotFindUniqueOrThrowArgs>(args: SelectSubset<T, StockLotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockLotClient<$Result.GetResult<Prisma.$StockLotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StockLot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLotFindFirstArgs} args - Arguments to find a StockLot
     * @example
     * // Get one StockLot
     * const stockLot = await prisma.stockLot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockLotFindFirstArgs>(args?: SelectSubset<T, StockLotFindFirstArgs<ExtArgs>>): Prisma__StockLotClient<$Result.GetResult<Prisma.$StockLotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StockLot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLotFindFirstOrThrowArgs} args - Arguments to find a StockLot
     * @example
     * // Get one StockLot
     * const stockLot = await prisma.stockLot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockLotFindFirstOrThrowArgs>(args?: SelectSubset<T, StockLotFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockLotClient<$Result.GetResult<Prisma.$StockLotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StockLots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockLots
     * const stockLots = await prisma.stockLot.findMany()
     * 
     * // Get first 10 StockLots
     * const stockLots = await prisma.stockLot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockLotWithIdOnly = await prisma.stockLot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockLotFindManyArgs>(args?: SelectSubset<T, StockLotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockLotPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StockLot.
     * @param {StockLotCreateArgs} args - Arguments to create a StockLot.
     * @example
     * // Create one StockLot
     * const StockLot = await prisma.stockLot.create({
     *   data: {
     *     // ... data to create a StockLot
     *   }
     * })
     * 
     */
    create<T extends StockLotCreateArgs>(args: SelectSubset<T, StockLotCreateArgs<ExtArgs>>): Prisma__StockLotClient<$Result.GetResult<Prisma.$StockLotPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StockLots.
     * @param {StockLotCreateManyArgs} args - Arguments to create many StockLots.
     * @example
     * // Create many StockLots
     * const stockLot = await prisma.stockLot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockLotCreateManyArgs>(args?: SelectSubset<T, StockLotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockLots and returns the data saved in the database.
     * @param {StockLotCreateManyAndReturnArgs} args - Arguments to create many StockLots.
     * @example
     * // Create many StockLots
     * const stockLot = await prisma.stockLot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockLots and only return the `id`
     * const stockLotWithIdOnly = await prisma.stockLot.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockLotCreateManyAndReturnArgs>(args?: SelectSubset<T, StockLotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockLotPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StockLot.
     * @param {StockLotDeleteArgs} args - Arguments to delete one StockLot.
     * @example
     * // Delete one StockLot
     * const StockLot = await prisma.stockLot.delete({
     *   where: {
     *     // ... filter to delete one StockLot
     *   }
     * })
     * 
     */
    delete<T extends StockLotDeleteArgs>(args: SelectSubset<T, StockLotDeleteArgs<ExtArgs>>): Prisma__StockLotClient<$Result.GetResult<Prisma.$StockLotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StockLot.
     * @param {StockLotUpdateArgs} args - Arguments to update one StockLot.
     * @example
     * // Update one StockLot
     * const stockLot = await prisma.stockLot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockLotUpdateArgs>(args: SelectSubset<T, StockLotUpdateArgs<ExtArgs>>): Prisma__StockLotClient<$Result.GetResult<Prisma.$StockLotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StockLots.
     * @param {StockLotDeleteManyArgs} args - Arguments to filter StockLots to delete.
     * @example
     * // Delete a few StockLots
     * const { count } = await prisma.stockLot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockLotDeleteManyArgs>(args?: SelectSubset<T, StockLotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockLots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockLots
     * const stockLot = await prisma.stockLot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockLotUpdateManyArgs>(args: SelectSubset<T, StockLotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockLot.
     * @param {StockLotUpsertArgs} args - Arguments to update or create a StockLot.
     * @example
     * // Update or create a StockLot
     * const stockLot = await prisma.stockLot.upsert({
     *   create: {
     *     // ... data to create a StockLot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockLot we want to update
     *   }
     * })
     */
    upsert<T extends StockLotUpsertArgs>(args: SelectSubset<T, StockLotUpsertArgs<ExtArgs>>): Prisma__StockLotClient<$Result.GetResult<Prisma.$StockLotPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StockLots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLotCountArgs} args - Arguments to filter StockLots to count.
     * @example
     * // Count the number of StockLots
     * const count = await prisma.stockLot.count({
     *   where: {
     *     // ... the filter for the StockLots we want to count
     *   }
     * })
    **/
    count<T extends StockLotCountArgs>(
      args?: Subset<T, StockLotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockLotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockLot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockLotAggregateArgs>(args: Subset<T, StockLotAggregateArgs>): Prisma.PrismaPromise<GetStockLotAggregateType<T>>

    /**
     * Group by StockLot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLotGroupByArgs} args - Group by arguments.
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
      T extends StockLotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockLotGroupByArgs['orderBy'] }
        : { orderBy?: StockLotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockLotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockLotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockLot model
   */
  readonly fields: StockLotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockLot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockLotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    warehouse<T extends WarehouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseDefaultArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    supplier<T extends StockLot$supplierArgs<ExtArgs> = {}>(args?: Subset<T, StockLot$supplierArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    movements<T extends StockLot$movementsArgs<ExtArgs> = {}>(args?: Subset<T, StockLot$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany"> | Null>
    expiryAlerts<T extends StockLot$expiryAlertsArgs<ExtArgs> = {}>(args?: Subset<T, StockLot$expiryAlertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpiryAlertPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the StockLot model
   */ 
  interface StockLotFieldRefs {
    readonly id: FieldRef<"StockLot", 'String'>
    readonly productId: FieldRef<"StockLot", 'String'>
    readonly warehouseId: FieldRef<"StockLot", 'String'>
    readonly branchId: FieldRef<"StockLot", 'String'>
    readonly supplierId: FieldRef<"StockLot", 'String'>
    readonly lotNumber: FieldRef<"StockLot", 'String'>
    readonly expiryDate: FieldRef<"StockLot", 'DateTime'>
    readonly quantity: FieldRef<"StockLot", 'Int'>
    readonly status: FieldRef<"StockLot", 'String'>
    readonly notes: FieldRef<"StockLot", 'String'>
    readonly createdAt: FieldRef<"StockLot", 'DateTime'>
    readonly updatedAt: FieldRef<"StockLot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockLot findUnique
   */
  export type StockLotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLot
     */
    select?: StockLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLotInclude<ExtArgs> | null
    /**
     * Filter, which StockLot to fetch.
     */
    where: StockLotWhereUniqueInput
  }

  /**
   * StockLot findUniqueOrThrow
   */
  export type StockLotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLot
     */
    select?: StockLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLotInclude<ExtArgs> | null
    /**
     * Filter, which StockLot to fetch.
     */
    where: StockLotWhereUniqueInput
  }

  /**
   * StockLot findFirst
   */
  export type StockLotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLot
     */
    select?: StockLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLotInclude<ExtArgs> | null
    /**
     * Filter, which StockLot to fetch.
     */
    where?: StockLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockLots to fetch.
     */
    orderBy?: StockLotOrderByWithRelationInput | StockLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockLots.
     */
    cursor?: StockLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockLots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockLots.
     */
    distinct?: StockLotScalarFieldEnum | StockLotScalarFieldEnum[]
  }

  /**
   * StockLot findFirstOrThrow
   */
  export type StockLotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLot
     */
    select?: StockLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLotInclude<ExtArgs> | null
    /**
     * Filter, which StockLot to fetch.
     */
    where?: StockLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockLots to fetch.
     */
    orderBy?: StockLotOrderByWithRelationInput | StockLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockLots.
     */
    cursor?: StockLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockLots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockLots.
     */
    distinct?: StockLotScalarFieldEnum | StockLotScalarFieldEnum[]
  }

  /**
   * StockLot findMany
   */
  export type StockLotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLot
     */
    select?: StockLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLotInclude<ExtArgs> | null
    /**
     * Filter, which StockLots to fetch.
     */
    where?: StockLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockLots to fetch.
     */
    orderBy?: StockLotOrderByWithRelationInput | StockLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockLots.
     */
    cursor?: StockLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockLots.
     */
    skip?: number
    distinct?: StockLotScalarFieldEnum | StockLotScalarFieldEnum[]
  }

  /**
   * StockLot create
   */
  export type StockLotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLot
     */
    select?: StockLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLotInclude<ExtArgs> | null
    /**
     * The data needed to create a StockLot.
     */
    data: XOR<StockLotCreateInput, StockLotUncheckedCreateInput>
  }

  /**
   * StockLot createMany
   */
  export type StockLotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockLots.
     */
    data: StockLotCreateManyInput | StockLotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockLot createManyAndReturn
   */
  export type StockLotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLot
     */
    select?: StockLotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StockLots.
     */
    data: StockLotCreateManyInput | StockLotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockLot update
   */
  export type StockLotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLot
     */
    select?: StockLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLotInclude<ExtArgs> | null
    /**
     * The data needed to update a StockLot.
     */
    data: XOR<StockLotUpdateInput, StockLotUncheckedUpdateInput>
    /**
     * Choose, which StockLot to update.
     */
    where: StockLotWhereUniqueInput
  }

  /**
   * StockLot updateMany
   */
  export type StockLotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockLots.
     */
    data: XOR<StockLotUpdateManyMutationInput, StockLotUncheckedUpdateManyInput>
    /**
     * Filter which StockLots to update
     */
    where?: StockLotWhereInput
  }

  /**
   * StockLot upsert
   */
  export type StockLotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLot
     */
    select?: StockLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLotInclude<ExtArgs> | null
    /**
     * The filter to search for the StockLot to update in case it exists.
     */
    where: StockLotWhereUniqueInput
    /**
     * In case the StockLot found by the `where` argument doesn't exist, create a new StockLot with this data.
     */
    create: XOR<StockLotCreateInput, StockLotUncheckedCreateInput>
    /**
     * In case the StockLot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockLotUpdateInput, StockLotUncheckedUpdateInput>
  }

  /**
   * StockLot delete
   */
  export type StockLotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLot
     */
    select?: StockLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLotInclude<ExtArgs> | null
    /**
     * Filter which StockLot to delete.
     */
    where: StockLotWhereUniqueInput
  }

  /**
   * StockLot deleteMany
   */
  export type StockLotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockLots to delete
     */
    where?: StockLotWhereInput
  }

  /**
   * StockLot.supplier
   */
  export type StockLot$supplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    where?: SupplierWhereInput
  }

  /**
   * StockLot.movements
   */
  export type StockLot$movementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    cursor?: StockMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockLot.expiryAlerts
   */
  export type StockLot$expiryAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiryAlert
     */
    select?: ExpiryAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpiryAlertInclude<ExtArgs> | null
    where?: ExpiryAlertWhereInput
    orderBy?: ExpiryAlertOrderByWithRelationInput | ExpiryAlertOrderByWithRelationInput[]
    cursor?: ExpiryAlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpiryAlertScalarFieldEnum | ExpiryAlertScalarFieldEnum[]
  }

  /**
   * StockLot without action
   */
  export type StockLotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLot
     */
    select?: StockLotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLotInclude<ExtArgs> | null
  }


  /**
   * Model StockMovement
   */

  export type AggregateStockMovement = {
    _count: StockMovementCountAggregateOutputType | null
    _avg: StockMovementAvgAggregateOutputType | null
    _sum: StockMovementSumAggregateOutputType | null
    _min: StockMovementMinAggregateOutputType | null
    _max: StockMovementMaxAggregateOutputType | null
  }

  export type StockMovementAvgAggregateOutputType = {
    quantity: number | null
  }

  export type StockMovementSumAggregateOutputType = {
    quantity: number | null
  }

  export type StockMovementMinAggregateOutputType = {
    id: string | null
    stockLotId: string | null
    type: string | null
    quantity: number | null
    notes: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type StockMovementMaxAggregateOutputType = {
    id: string | null
    stockLotId: string | null
    type: string | null
    quantity: number | null
    notes: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type StockMovementCountAggregateOutputType = {
    id: number
    stockLotId: number
    type: number
    quantity: number
    notes: number
    userId: number
    createdAt: number
    _all: number
  }


  export type StockMovementAvgAggregateInputType = {
    quantity?: true
  }

  export type StockMovementSumAggregateInputType = {
    quantity?: true
  }

  export type StockMovementMinAggregateInputType = {
    id?: true
    stockLotId?: true
    type?: true
    quantity?: true
    notes?: true
    userId?: true
    createdAt?: true
  }

  export type StockMovementMaxAggregateInputType = {
    id?: true
    stockLotId?: true
    type?: true
    quantity?: true
    notes?: true
    userId?: true
    createdAt?: true
  }

  export type StockMovementCountAggregateInputType = {
    id?: true
    stockLotId?: true
    type?: true
    quantity?: true
    notes?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type StockMovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMovement to aggregate.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockMovements
    **/
    _count?: true | StockMovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockMovementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockMovementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMovementMaxAggregateInputType
  }

  export type GetStockMovementAggregateType<T extends StockMovementAggregateArgs> = {
        [P in keyof T & keyof AggregateStockMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockMovement[P]>
      : GetScalarType<T[P], AggregateStockMovement[P]>
  }




  export type StockMovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithAggregationInput | StockMovementOrderByWithAggregationInput[]
    by: StockMovementScalarFieldEnum[] | StockMovementScalarFieldEnum
    having?: StockMovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockMovementCountAggregateInputType | true
    _avg?: StockMovementAvgAggregateInputType
    _sum?: StockMovementSumAggregateInputType
    _min?: StockMovementMinAggregateInputType
    _max?: StockMovementMaxAggregateInputType
  }

  export type StockMovementGroupByOutputType = {
    id: string
    stockLotId: string
    type: string
    quantity: number
    notes: string | null
    userId: string
    createdAt: Date
    _count: StockMovementCountAggregateOutputType | null
    _avg: StockMovementAvgAggregateOutputType | null
    _sum: StockMovementSumAggregateOutputType | null
    _min: StockMovementMinAggregateOutputType | null
    _max: StockMovementMaxAggregateOutputType | null
  }

  type GetStockMovementGroupByPayload<T extends StockMovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockMovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockMovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockMovementGroupByOutputType[P]>
            : GetScalarType<T[P], StockMovementGroupByOutputType[P]>
        }
      >
    >


  export type StockMovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockLotId?: boolean
    type?: boolean
    quantity?: boolean
    notes?: boolean
    userId?: boolean
    createdAt?: boolean
    stockLot?: boolean | StockLotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockLotId?: boolean
    type?: boolean
    quantity?: boolean
    notes?: boolean
    userId?: boolean
    createdAt?: boolean
    stockLot?: boolean | StockLotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectScalar = {
    id?: boolean
    stockLotId?: boolean
    type?: boolean
    quantity?: boolean
    notes?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type StockMovementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockLot?: boolean | StockLotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StockMovementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockLot?: boolean | StockLotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StockMovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockMovement"
    objects: {
      stockLot: Prisma.$StockLotPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stockLotId: string
      type: string
      quantity: number
      notes: string | null
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["stockMovement"]>
    composites: {}
  }

  type StockMovementGetPayload<S extends boolean | null | undefined | StockMovementDefaultArgs> = $Result.GetResult<Prisma.$StockMovementPayload, S>

  type StockMovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockMovementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockMovementCountAggregateInputType | true
    }

  export interface StockMovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockMovement'], meta: { name: 'StockMovement' } }
    /**
     * Find zero or one StockMovement that matches the filter.
     * @param {StockMovementFindUniqueArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockMovementFindUniqueArgs>(args: SelectSubset<T, StockMovementFindUniqueArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StockMovement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StockMovementFindUniqueOrThrowArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockMovementFindUniqueOrThrowArgs>(args: SelectSubset<T, StockMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StockMovement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindFirstArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockMovementFindFirstArgs>(args?: SelectSubset<T, StockMovementFindFirstArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StockMovement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindFirstOrThrowArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockMovementFindFirstOrThrowArgs>(args?: SelectSubset<T, StockMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StockMovements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockMovements
     * const stockMovements = await prisma.stockMovement.findMany()
     * 
     * // Get first 10 StockMovements
     * const stockMovements = await prisma.stockMovement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockMovementFindManyArgs>(args?: SelectSubset<T, StockMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StockMovement.
     * @param {StockMovementCreateArgs} args - Arguments to create a StockMovement.
     * @example
     * // Create one StockMovement
     * const StockMovement = await prisma.stockMovement.create({
     *   data: {
     *     // ... data to create a StockMovement
     *   }
     * })
     * 
     */
    create<T extends StockMovementCreateArgs>(args: SelectSubset<T, StockMovementCreateArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StockMovements.
     * @param {StockMovementCreateManyArgs} args - Arguments to create many StockMovements.
     * @example
     * // Create many StockMovements
     * const stockMovement = await prisma.stockMovement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockMovementCreateManyArgs>(args?: SelectSubset<T, StockMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockMovements and returns the data saved in the database.
     * @param {StockMovementCreateManyAndReturnArgs} args - Arguments to create many StockMovements.
     * @example
     * // Create many StockMovements
     * const stockMovement = await prisma.stockMovement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockMovements and only return the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockMovementCreateManyAndReturnArgs>(args?: SelectSubset<T, StockMovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StockMovement.
     * @param {StockMovementDeleteArgs} args - Arguments to delete one StockMovement.
     * @example
     * // Delete one StockMovement
     * const StockMovement = await prisma.stockMovement.delete({
     *   where: {
     *     // ... filter to delete one StockMovement
     *   }
     * })
     * 
     */
    delete<T extends StockMovementDeleteArgs>(args: SelectSubset<T, StockMovementDeleteArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StockMovement.
     * @param {StockMovementUpdateArgs} args - Arguments to update one StockMovement.
     * @example
     * // Update one StockMovement
     * const stockMovement = await prisma.stockMovement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockMovementUpdateArgs>(args: SelectSubset<T, StockMovementUpdateArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StockMovements.
     * @param {StockMovementDeleteManyArgs} args - Arguments to filter StockMovements to delete.
     * @example
     * // Delete a few StockMovements
     * const { count } = await prisma.stockMovement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockMovementDeleteManyArgs>(args?: SelectSubset<T, StockMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockMovements
     * const stockMovement = await prisma.stockMovement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockMovementUpdateManyArgs>(args: SelectSubset<T, StockMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockMovement.
     * @param {StockMovementUpsertArgs} args - Arguments to update or create a StockMovement.
     * @example
     * // Update or create a StockMovement
     * const stockMovement = await prisma.stockMovement.upsert({
     *   create: {
     *     // ... data to create a StockMovement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockMovement we want to update
     *   }
     * })
     */
    upsert<T extends StockMovementUpsertArgs>(args: SelectSubset<T, StockMovementUpsertArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StockMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementCountArgs} args - Arguments to filter StockMovements to count.
     * @example
     * // Count the number of StockMovements
     * const count = await prisma.stockMovement.count({
     *   where: {
     *     // ... the filter for the StockMovements we want to count
     *   }
     * })
    **/
    count<T extends StockMovementCountArgs>(
      args?: Subset<T, StockMovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockMovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockMovementAggregateArgs>(args: Subset<T, StockMovementAggregateArgs>): Prisma.PrismaPromise<GetStockMovementAggregateType<T>>

    /**
     * Group by StockMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementGroupByArgs} args - Group by arguments.
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
      T extends StockMovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockMovementGroupByArgs['orderBy'] }
        : { orderBy?: StockMovementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockMovement model
   */
  readonly fields: StockMovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockMovement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockMovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stockLot<T extends StockLotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockLotDefaultArgs<ExtArgs>>): Prisma__StockLotClient<$Result.GetResult<Prisma.$StockLotPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the StockMovement model
   */ 
  interface StockMovementFieldRefs {
    readonly id: FieldRef<"StockMovement", 'String'>
    readonly stockLotId: FieldRef<"StockMovement", 'String'>
    readonly type: FieldRef<"StockMovement", 'String'>
    readonly quantity: FieldRef<"StockMovement", 'Int'>
    readonly notes: FieldRef<"StockMovement", 'String'>
    readonly userId: FieldRef<"StockMovement", 'String'>
    readonly createdAt: FieldRef<"StockMovement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockMovement findUnique
   */
  export type StockMovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement findUniqueOrThrow
   */
  export type StockMovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement findFirst
   */
  export type StockMovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement findFirstOrThrow
   */
  export type StockMovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement findMany
   */
  export type StockMovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovements to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement create
   */
  export type StockMovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The data needed to create a StockMovement.
     */
    data: XOR<StockMovementCreateInput, StockMovementUncheckedCreateInput>
  }

  /**
   * StockMovement createMany
   */
  export type StockMovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockMovements.
     */
    data: StockMovementCreateManyInput | StockMovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockMovement createManyAndReturn
   */
  export type StockMovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StockMovements.
     */
    data: StockMovementCreateManyInput | StockMovementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockMovement update
   */
  export type StockMovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The data needed to update a StockMovement.
     */
    data: XOR<StockMovementUpdateInput, StockMovementUncheckedUpdateInput>
    /**
     * Choose, which StockMovement to update.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement updateMany
   */
  export type StockMovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockMovements.
     */
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyInput>
    /**
     * Filter which StockMovements to update
     */
    where?: StockMovementWhereInput
  }

  /**
   * StockMovement upsert
   */
  export type StockMovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The filter to search for the StockMovement to update in case it exists.
     */
    where: StockMovementWhereUniqueInput
    /**
     * In case the StockMovement found by the `where` argument doesn't exist, create a new StockMovement with this data.
     */
    create: XOR<StockMovementCreateInput, StockMovementUncheckedCreateInput>
    /**
     * In case the StockMovement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockMovementUpdateInput, StockMovementUncheckedUpdateInput>
  }

  /**
   * StockMovement delete
   */
  export type StockMovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter which StockMovement to delete.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement deleteMany
   */
  export type StockMovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMovements to delete
     */
    where?: StockMovementWhereInput
  }

  /**
   * StockMovement without action
   */
  export type StockMovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
  }


  /**
   * Model ExpiryAlert
   */

  export type AggregateExpiryAlert = {
    _count: ExpiryAlertCountAggregateOutputType | null
    _min: ExpiryAlertMinAggregateOutputType | null
    _max: ExpiryAlertMaxAggregateOutputType | null
  }

  export type ExpiryAlertMinAggregateOutputType = {
    id: string | null
    stockLotId: string | null
    alertType: string | null
    sentAt: Date | null
    isRead: boolean | null
  }

  export type ExpiryAlertMaxAggregateOutputType = {
    id: string | null
    stockLotId: string | null
    alertType: string | null
    sentAt: Date | null
    isRead: boolean | null
  }

  export type ExpiryAlertCountAggregateOutputType = {
    id: number
    stockLotId: number
    alertType: number
    sentAt: number
    isRead: number
    _all: number
  }


  export type ExpiryAlertMinAggregateInputType = {
    id?: true
    stockLotId?: true
    alertType?: true
    sentAt?: true
    isRead?: true
  }

  export type ExpiryAlertMaxAggregateInputType = {
    id?: true
    stockLotId?: true
    alertType?: true
    sentAt?: true
    isRead?: true
  }

  export type ExpiryAlertCountAggregateInputType = {
    id?: true
    stockLotId?: true
    alertType?: true
    sentAt?: true
    isRead?: true
    _all?: true
  }

  export type ExpiryAlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpiryAlert to aggregate.
     */
    where?: ExpiryAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpiryAlerts to fetch.
     */
    orderBy?: ExpiryAlertOrderByWithRelationInput | ExpiryAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpiryAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpiryAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpiryAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpiryAlerts
    **/
    _count?: true | ExpiryAlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpiryAlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpiryAlertMaxAggregateInputType
  }

  export type GetExpiryAlertAggregateType<T extends ExpiryAlertAggregateArgs> = {
        [P in keyof T & keyof AggregateExpiryAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpiryAlert[P]>
      : GetScalarType<T[P], AggregateExpiryAlert[P]>
  }




  export type ExpiryAlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpiryAlertWhereInput
    orderBy?: ExpiryAlertOrderByWithAggregationInput | ExpiryAlertOrderByWithAggregationInput[]
    by: ExpiryAlertScalarFieldEnum[] | ExpiryAlertScalarFieldEnum
    having?: ExpiryAlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpiryAlertCountAggregateInputType | true
    _min?: ExpiryAlertMinAggregateInputType
    _max?: ExpiryAlertMaxAggregateInputType
  }

  export type ExpiryAlertGroupByOutputType = {
    id: string
    stockLotId: string
    alertType: string
    sentAt: Date
    isRead: boolean
    _count: ExpiryAlertCountAggregateOutputType | null
    _min: ExpiryAlertMinAggregateOutputType | null
    _max: ExpiryAlertMaxAggregateOutputType | null
  }

  type GetExpiryAlertGroupByPayload<T extends ExpiryAlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpiryAlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpiryAlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpiryAlertGroupByOutputType[P]>
            : GetScalarType<T[P], ExpiryAlertGroupByOutputType[P]>
        }
      >
    >


  export type ExpiryAlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockLotId?: boolean
    alertType?: boolean
    sentAt?: boolean
    isRead?: boolean
    stockLot?: boolean | StockLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expiryAlert"]>

  export type ExpiryAlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockLotId?: boolean
    alertType?: boolean
    sentAt?: boolean
    isRead?: boolean
    stockLot?: boolean | StockLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expiryAlert"]>

  export type ExpiryAlertSelectScalar = {
    id?: boolean
    stockLotId?: boolean
    alertType?: boolean
    sentAt?: boolean
    isRead?: boolean
  }

  export type ExpiryAlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockLot?: boolean | StockLotDefaultArgs<ExtArgs>
  }
  export type ExpiryAlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockLot?: boolean | StockLotDefaultArgs<ExtArgs>
  }

  export type $ExpiryAlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpiryAlert"
    objects: {
      stockLot: Prisma.$StockLotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stockLotId: string
      alertType: string
      sentAt: Date
      isRead: boolean
    }, ExtArgs["result"]["expiryAlert"]>
    composites: {}
  }

  type ExpiryAlertGetPayload<S extends boolean | null | undefined | ExpiryAlertDefaultArgs> = $Result.GetResult<Prisma.$ExpiryAlertPayload, S>

  type ExpiryAlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExpiryAlertFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExpiryAlertCountAggregateInputType | true
    }

  export interface ExpiryAlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpiryAlert'], meta: { name: 'ExpiryAlert' } }
    /**
     * Find zero or one ExpiryAlert that matches the filter.
     * @param {ExpiryAlertFindUniqueArgs} args - Arguments to find a ExpiryAlert
     * @example
     * // Get one ExpiryAlert
     * const expiryAlert = await prisma.expiryAlert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpiryAlertFindUniqueArgs>(args: SelectSubset<T, ExpiryAlertFindUniqueArgs<ExtArgs>>): Prisma__ExpiryAlertClient<$Result.GetResult<Prisma.$ExpiryAlertPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ExpiryAlert that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExpiryAlertFindUniqueOrThrowArgs} args - Arguments to find a ExpiryAlert
     * @example
     * // Get one ExpiryAlert
     * const expiryAlert = await prisma.expiryAlert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpiryAlertFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpiryAlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpiryAlertClient<$Result.GetResult<Prisma.$ExpiryAlertPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ExpiryAlert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpiryAlertFindFirstArgs} args - Arguments to find a ExpiryAlert
     * @example
     * // Get one ExpiryAlert
     * const expiryAlert = await prisma.expiryAlert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpiryAlertFindFirstArgs>(args?: SelectSubset<T, ExpiryAlertFindFirstArgs<ExtArgs>>): Prisma__ExpiryAlertClient<$Result.GetResult<Prisma.$ExpiryAlertPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ExpiryAlert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpiryAlertFindFirstOrThrowArgs} args - Arguments to find a ExpiryAlert
     * @example
     * // Get one ExpiryAlert
     * const expiryAlert = await prisma.expiryAlert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpiryAlertFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpiryAlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpiryAlertClient<$Result.GetResult<Prisma.$ExpiryAlertPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ExpiryAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpiryAlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpiryAlerts
     * const expiryAlerts = await prisma.expiryAlert.findMany()
     * 
     * // Get first 10 ExpiryAlerts
     * const expiryAlerts = await prisma.expiryAlert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expiryAlertWithIdOnly = await prisma.expiryAlert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpiryAlertFindManyArgs>(args?: SelectSubset<T, ExpiryAlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpiryAlertPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ExpiryAlert.
     * @param {ExpiryAlertCreateArgs} args - Arguments to create a ExpiryAlert.
     * @example
     * // Create one ExpiryAlert
     * const ExpiryAlert = await prisma.expiryAlert.create({
     *   data: {
     *     // ... data to create a ExpiryAlert
     *   }
     * })
     * 
     */
    create<T extends ExpiryAlertCreateArgs>(args: SelectSubset<T, ExpiryAlertCreateArgs<ExtArgs>>): Prisma__ExpiryAlertClient<$Result.GetResult<Prisma.$ExpiryAlertPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ExpiryAlerts.
     * @param {ExpiryAlertCreateManyArgs} args - Arguments to create many ExpiryAlerts.
     * @example
     * // Create many ExpiryAlerts
     * const expiryAlert = await prisma.expiryAlert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpiryAlertCreateManyArgs>(args?: SelectSubset<T, ExpiryAlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpiryAlerts and returns the data saved in the database.
     * @param {ExpiryAlertCreateManyAndReturnArgs} args - Arguments to create many ExpiryAlerts.
     * @example
     * // Create many ExpiryAlerts
     * const expiryAlert = await prisma.expiryAlert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpiryAlerts and only return the `id`
     * const expiryAlertWithIdOnly = await prisma.expiryAlert.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpiryAlertCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpiryAlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpiryAlertPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ExpiryAlert.
     * @param {ExpiryAlertDeleteArgs} args - Arguments to delete one ExpiryAlert.
     * @example
     * // Delete one ExpiryAlert
     * const ExpiryAlert = await prisma.expiryAlert.delete({
     *   where: {
     *     // ... filter to delete one ExpiryAlert
     *   }
     * })
     * 
     */
    delete<T extends ExpiryAlertDeleteArgs>(args: SelectSubset<T, ExpiryAlertDeleteArgs<ExtArgs>>): Prisma__ExpiryAlertClient<$Result.GetResult<Prisma.$ExpiryAlertPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ExpiryAlert.
     * @param {ExpiryAlertUpdateArgs} args - Arguments to update one ExpiryAlert.
     * @example
     * // Update one ExpiryAlert
     * const expiryAlert = await prisma.expiryAlert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpiryAlertUpdateArgs>(args: SelectSubset<T, ExpiryAlertUpdateArgs<ExtArgs>>): Prisma__ExpiryAlertClient<$Result.GetResult<Prisma.$ExpiryAlertPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ExpiryAlerts.
     * @param {ExpiryAlertDeleteManyArgs} args - Arguments to filter ExpiryAlerts to delete.
     * @example
     * // Delete a few ExpiryAlerts
     * const { count } = await prisma.expiryAlert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpiryAlertDeleteManyArgs>(args?: SelectSubset<T, ExpiryAlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpiryAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpiryAlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpiryAlerts
     * const expiryAlert = await prisma.expiryAlert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpiryAlertUpdateManyArgs>(args: SelectSubset<T, ExpiryAlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExpiryAlert.
     * @param {ExpiryAlertUpsertArgs} args - Arguments to update or create a ExpiryAlert.
     * @example
     * // Update or create a ExpiryAlert
     * const expiryAlert = await prisma.expiryAlert.upsert({
     *   create: {
     *     // ... data to create a ExpiryAlert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpiryAlert we want to update
     *   }
     * })
     */
    upsert<T extends ExpiryAlertUpsertArgs>(args: SelectSubset<T, ExpiryAlertUpsertArgs<ExtArgs>>): Prisma__ExpiryAlertClient<$Result.GetResult<Prisma.$ExpiryAlertPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ExpiryAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpiryAlertCountArgs} args - Arguments to filter ExpiryAlerts to count.
     * @example
     * // Count the number of ExpiryAlerts
     * const count = await prisma.expiryAlert.count({
     *   where: {
     *     // ... the filter for the ExpiryAlerts we want to count
     *   }
     * })
    **/
    count<T extends ExpiryAlertCountArgs>(
      args?: Subset<T, ExpiryAlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpiryAlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpiryAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpiryAlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpiryAlertAggregateArgs>(args: Subset<T, ExpiryAlertAggregateArgs>): Prisma.PrismaPromise<GetExpiryAlertAggregateType<T>>

    /**
     * Group by ExpiryAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpiryAlertGroupByArgs} args - Group by arguments.
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
      T extends ExpiryAlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpiryAlertGroupByArgs['orderBy'] }
        : { orderBy?: ExpiryAlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpiryAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpiryAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpiryAlert model
   */
  readonly fields: ExpiryAlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpiryAlert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpiryAlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stockLot<T extends StockLotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockLotDefaultArgs<ExtArgs>>): Prisma__StockLotClient<$Result.GetResult<Prisma.$StockLotPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ExpiryAlert model
   */ 
  interface ExpiryAlertFieldRefs {
    readonly id: FieldRef<"ExpiryAlert", 'String'>
    readonly stockLotId: FieldRef<"ExpiryAlert", 'String'>
    readonly alertType: FieldRef<"ExpiryAlert", 'String'>
    readonly sentAt: FieldRef<"ExpiryAlert", 'DateTime'>
    readonly isRead: FieldRef<"ExpiryAlert", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ExpiryAlert findUnique
   */
  export type ExpiryAlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiryAlert
     */
    select?: ExpiryAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpiryAlertInclude<ExtArgs> | null
    /**
     * Filter, which ExpiryAlert to fetch.
     */
    where: ExpiryAlertWhereUniqueInput
  }

  /**
   * ExpiryAlert findUniqueOrThrow
   */
  export type ExpiryAlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiryAlert
     */
    select?: ExpiryAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpiryAlertInclude<ExtArgs> | null
    /**
     * Filter, which ExpiryAlert to fetch.
     */
    where: ExpiryAlertWhereUniqueInput
  }

  /**
   * ExpiryAlert findFirst
   */
  export type ExpiryAlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiryAlert
     */
    select?: ExpiryAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpiryAlertInclude<ExtArgs> | null
    /**
     * Filter, which ExpiryAlert to fetch.
     */
    where?: ExpiryAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpiryAlerts to fetch.
     */
    orderBy?: ExpiryAlertOrderByWithRelationInput | ExpiryAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpiryAlerts.
     */
    cursor?: ExpiryAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpiryAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpiryAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpiryAlerts.
     */
    distinct?: ExpiryAlertScalarFieldEnum | ExpiryAlertScalarFieldEnum[]
  }

  /**
   * ExpiryAlert findFirstOrThrow
   */
  export type ExpiryAlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiryAlert
     */
    select?: ExpiryAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpiryAlertInclude<ExtArgs> | null
    /**
     * Filter, which ExpiryAlert to fetch.
     */
    where?: ExpiryAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpiryAlerts to fetch.
     */
    orderBy?: ExpiryAlertOrderByWithRelationInput | ExpiryAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpiryAlerts.
     */
    cursor?: ExpiryAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpiryAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpiryAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpiryAlerts.
     */
    distinct?: ExpiryAlertScalarFieldEnum | ExpiryAlertScalarFieldEnum[]
  }

  /**
   * ExpiryAlert findMany
   */
  export type ExpiryAlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiryAlert
     */
    select?: ExpiryAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpiryAlertInclude<ExtArgs> | null
    /**
     * Filter, which ExpiryAlerts to fetch.
     */
    where?: ExpiryAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpiryAlerts to fetch.
     */
    orderBy?: ExpiryAlertOrderByWithRelationInput | ExpiryAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpiryAlerts.
     */
    cursor?: ExpiryAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpiryAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpiryAlerts.
     */
    skip?: number
    distinct?: ExpiryAlertScalarFieldEnum | ExpiryAlertScalarFieldEnum[]
  }

  /**
   * ExpiryAlert create
   */
  export type ExpiryAlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiryAlert
     */
    select?: ExpiryAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpiryAlertInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpiryAlert.
     */
    data: XOR<ExpiryAlertCreateInput, ExpiryAlertUncheckedCreateInput>
  }

  /**
   * ExpiryAlert createMany
   */
  export type ExpiryAlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpiryAlerts.
     */
    data: ExpiryAlertCreateManyInput | ExpiryAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpiryAlert createManyAndReturn
   */
  export type ExpiryAlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiryAlert
     */
    select?: ExpiryAlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ExpiryAlerts.
     */
    data: ExpiryAlertCreateManyInput | ExpiryAlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpiryAlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpiryAlert update
   */
  export type ExpiryAlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiryAlert
     */
    select?: ExpiryAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpiryAlertInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpiryAlert.
     */
    data: XOR<ExpiryAlertUpdateInput, ExpiryAlertUncheckedUpdateInput>
    /**
     * Choose, which ExpiryAlert to update.
     */
    where: ExpiryAlertWhereUniqueInput
  }

  /**
   * ExpiryAlert updateMany
   */
  export type ExpiryAlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpiryAlerts.
     */
    data: XOR<ExpiryAlertUpdateManyMutationInput, ExpiryAlertUncheckedUpdateManyInput>
    /**
     * Filter which ExpiryAlerts to update
     */
    where?: ExpiryAlertWhereInput
  }

  /**
   * ExpiryAlert upsert
   */
  export type ExpiryAlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiryAlert
     */
    select?: ExpiryAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpiryAlertInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpiryAlert to update in case it exists.
     */
    where: ExpiryAlertWhereUniqueInput
    /**
     * In case the ExpiryAlert found by the `where` argument doesn't exist, create a new ExpiryAlert with this data.
     */
    create: XOR<ExpiryAlertCreateInput, ExpiryAlertUncheckedCreateInput>
    /**
     * In case the ExpiryAlert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpiryAlertUpdateInput, ExpiryAlertUncheckedUpdateInput>
  }

  /**
   * ExpiryAlert delete
   */
  export type ExpiryAlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiryAlert
     */
    select?: ExpiryAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpiryAlertInclude<ExtArgs> | null
    /**
     * Filter which ExpiryAlert to delete.
     */
    where: ExpiryAlertWhereUniqueInput
  }

  /**
   * ExpiryAlert deleteMany
   */
  export type ExpiryAlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpiryAlerts to delete
     */
    where?: ExpiryAlertWhereInput
  }

  /**
   * ExpiryAlert without action
   */
  export type ExpiryAlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpiryAlert
     */
    select?: ExpiryAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpiryAlertInclude<ExtArgs> | null
  }


  /**
   * Model NotificationSetting
   */

  export type AggregateNotificationSetting = {
    _count: NotificationSettingCountAggregateOutputType | null
    _min: NotificationSettingMinAggregateOutputType | null
    _max: NotificationSettingMaxAggregateOutputType | null
  }

  export type NotificationSettingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    days30: boolean | null
    days15: boolean | null
    days7: boolean | null
    expired: boolean | null
    pushToken: string | null
    updatedAt: Date | null
  }

  export type NotificationSettingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    days30: boolean | null
    days15: boolean | null
    days7: boolean | null
    expired: boolean | null
    pushToken: string | null
    updatedAt: Date | null
  }

  export type NotificationSettingCountAggregateOutputType = {
    id: number
    userId: number
    days30: number
    days15: number
    days7: number
    expired: number
    pushToken: number
    updatedAt: number
    _all: number
  }


  export type NotificationSettingMinAggregateInputType = {
    id?: true
    userId?: true
    days30?: true
    days15?: true
    days7?: true
    expired?: true
    pushToken?: true
    updatedAt?: true
  }

  export type NotificationSettingMaxAggregateInputType = {
    id?: true
    userId?: true
    days30?: true
    days15?: true
    days7?: true
    expired?: true
    pushToken?: true
    updatedAt?: true
  }

  export type NotificationSettingCountAggregateInputType = {
    id?: true
    userId?: true
    days30?: true
    days15?: true
    days7?: true
    expired?: true
    pushToken?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationSetting to aggregate.
     */
    where?: NotificationSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingOrderByWithRelationInput | NotificationSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationSettings
    **/
    _count?: true | NotificationSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationSettingMaxAggregateInputType
  }

  export type GetNotificationSettingAggregateType<T extends NotificationSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationSetting[P]>
      : GetScalarType<T[P], AggregateNotificationSetting[P]>
  }




  export type NotificationSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationSettingWhereInput
    orderBy?: NotificationSettingOrderByWithAggregationInput | NotificationSettingOrderByWithAggregationInput[]
    by: NotificationSettingScalarFieldEnum[] | NotificationSettingScalarFieldEnum
    having?: NotificationSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationSettingCountAggregateInputType | true
    _min?: NotificationSettingMinAggregateInputType
    _max?: NotificationSettingMaxAggregateInputType
  }

  export type NotificationSettingGroupByOutputType = {
    id: string
    userId: string
    days30: boolean
    days15: boolean
    days7: boolean
    expired: boolean
    pushToken: string | null
    updatedAt: Date
    _count: NotificationSettingCountAggregateOutputType | null
    _min: NotificationSettingMinAggregateOutputType | null
    _max: NotificationSettingMaxAggregateOutputType | null
  }

  type GetNotificationSettingGroupByPayload<T extends NotificationSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationSettingGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationSettingGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    days30?: boolean
    days15?: boolean
    days7?: boolean
    expired?: boolean
    pushToken?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationSetting"]>

  export type NotificationSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    days30?: boolean
    days15?: boolean
    days7?: boolean
    expired?: boolean
    pushToken?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationSetting"]>

  export type NotificationSettingSelectScalar = {
    id?: boolean
    userId?: boolean
    days30?: boolean
    days15?: boolean
    days7?: boolean
    expired?: boolean
    pushToken?: boolean
    updatedAt?: boolean
  }

  export type NotificationSettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationSettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationSetting"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      days30: boolean
      days15: boolean
      days7: boolean
      expired: boolean
      pushToken: string | null
      updatedAt: Date
    }, ExtArgs["result"]["notificationSetting"]>
    composites: {}
  }

  type NotificationSettingGetPayload<S extends boolean | null | undefined | NotificationSettingDefaultArgs> = $Result.GetResult<Prisma.$NotificationSettingPayload, S>

  type NotificationSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationSettingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationSettingCountAggregateInputType | true
    }

  export interface NotificationSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationSetting'], meta: { name: 'NotificationSetting' } }
    /**
     * Find zero or one NotificationSetting that matches the filter.
     * @param {NotificationSettingFindUniqueArgs} args - Arguments to find a NotificationSetting
     * @example
     * // Get one NotificationSetting
     * const notificationSetting = await prisma.notificationSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationSettingFindUniqueArgs>(args: SelectSubset<T, NotificationSettingFindUniqueArgs<ExtArgs>>): Prisma__NotificationSettingClient<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NotificationSetting that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationSettingFindUniqueOrThrowArgs} args - Arguments to find a NotificationSetting
     * @example
     * // Get one NotificationSetting
     * const notificationSetting = await prisma.notificationSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationSettingClient<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NotificationSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingFindFirstArgs} args - Arguments to find a NotificationSetting
     * @example
     * // Get one NotificationSetting
     * const notificationSetting = await prisma.notificationSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationSettingFindFirstArgs>(args?: SelectSubset<T, NotificationSettingFindFirstArgs<ExtArgs>>): Prisma__NotificationSettingClient<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NotificationSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingFindFirstOrThrowArgs} args - Arguments to find a NotificationSetting
     * @example
     * // Get one NotificationSetting
     * const notificationSetting = await prisma.notificationSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationSettingClient<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NotificationSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationSettings
     * const notificationSettings = await prisma.notificationSetting.findMany()
     * 
     * // Get first 10 NotificationSettings
     * const notificationSettings = await prisma.notificationSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationSettingWithIdOnly = await prisma.notificationSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationSettingFindManyArgs>(args?: SelectSubset<T, NotificationSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NotificationSetting.
     * @param {NotificationSettingCreateArgs} args - Arguments to create a NotificationSetting.
     * @example
     * // Create one NotificationSetting
     * const NotificationSetting = await prisma.notificationSetting.create({
     *   data: {
     *     // ... data to create a NotificationSetting
     *   }
     * })
     * 
     */
    create<T extends NotificationSettingCreateArgs>(args: SelectSubset<T, NotificationSettingCreateArgs<ExtArgs>>): Prisma__NotificationSettingClient<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NotificationSettings.
     * @param {NotificationSettingCreateManyArgs} args - Arguments to create many NotificationSettings.
     * @example
     * // Create many NotificationSettings
     * const notificationSetting = await prisma.notificationSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationSettingCreateManyArgs>(args?: SelectSubset<T, NotificationSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationSettings and returns the data saved in the database.
     * @param {NotificationSettingCreateManyAndReturnArgs} args - Arguments to create many NotificationSettings.
     * @example
     * // Create many NotificationSettings
     * const notificationSetting = await prisma.notificationSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationSettings and only return the `id`
     * const notificationSettingWithIdOnly = await prisma.notificationSetting.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NotificationSetting.
     * @param {NotificationSettingDeleteArgs} args - Arguments to delete one NotificationSetting.
     * @example
     * // Delete one NotificationSetting
     * const NotificationSetting = await prisma.notificationSetting.delete({
     *   where: {
     *     // ... filter to delete one NotificationSetting
     *   }
     * })
     * 
     */
    delete<T extends NotificationSettingDeleteArgs>(args: SelectSubset<T, NotificationSettingDeleteArgs<ExtArgs>>): Prisma__NotificationSettingClient<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NotificationSetting.
     * @param {NotificationSettingUpdateArgs} args - Arguments to update one NotificationSetting.
     * @example
     * // Update one NotificationSetting
     * const notificationSetting = await prisma.notificationSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationSettingUpdateArgs>(args: SelectSubset<T, NotificationSettingUpdateArgs<ExtArgs>>): Prisma__NotificationSettingClient<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NotificationSettings.
     * @param {NotificationSettingDeleteManyArgs} args - Arguments to filter NotificationSettings to delete.
     * @example
     * // Delete a few NotificationSettings
     * const { count } = await prisma.notificationSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationSettingDeleteManyArgs>(args?: SelectSubset<T, NotificationSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationSettings
     * const notificationSetting = await prisma.notificationSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationSettingUpdateManyArgs>(args: SelectSubset<T, NotificationSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationSetting.
     * @param {NotificationSettingUpsertArgs} args - Arguments to update or create a NotificationSetting.
     * @example
     * // Update or create a NotificationSetting
     * const notificationSetting = await prisma.notificationSetting.upsert({
     *   create: {
     *     // ... data to create a NotificationSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationSetting we want to update
     *   }
     * })
     */
    upsert<T extends NotificationSettingUpsertArgs>(args: SelectSubset<T, NotificationSettingUpsertArgs<ExtArgs>>): Prisma__NotificationSettingClient<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NotificationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingCountArgs} args - Arguments to filter NotificationSettings to count.
     * @example
     * // Count the number of NotificationSettings
     * const count = await prisma.notificationSetting.count({
     *   where: {
     *     // ... the filter for the NotificationSettings we want to count
     *   }
     * })
    **/
    count<T extends NotificationSettingCountArgs>(
      args?: Subset<T, NotificationSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationSettingAggregateArgs>(args: Subset<T, NotificationSettingAggregateArgs>): Prisma.PrismaPromise<GetNotificationSettingAggregateType<T>>

    /**
     * Group by NotificationSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingGroupByArgs} args - Group by arguments.
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
      T extends NotificationSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationSettingGroupByArgs['orderBy'] }
        : { orderBy?: NotificationSettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationSetting model
   */
  readonly fields: NotificationSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the NotificationSetting model
   */ 
  interface NotificationSettingFieldRefs {
    readonly id: FieldRef<"NotificationSetting", 'String'>
    readonly userId: FieldRef<"NotificationSetting", 'String'>
    readonly days30: FieldRef<"NotificationSetting", 'Boolean'>
    readonly days15: FieldRef<"NotificationSetting", 'Boolean'>
    readonly days7: FieldRef<"NotificationSetting", 'Boolean'>
    readonly expired: FieldRef<"NotificationSetting", 'Boolean'>
    readonly pushToken: FieldRef<"NotificationSetting", 'String'>
    readonly updatedAt: FieldRef<"NotificationSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationSetting findUnique
   */
  export type NotificationSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSetting to fetch.
     */
    where: NotificationSettingWhereUniqueInput
  }

  /**
   * NotificationSetting findUniqueOrThrow
   */
  export type NotificationSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSetting to fetch.
     */
    where: NotificationSettingWhereUniqueInput
  }

  /**
   * NotificationSetting findFirst
   */
  export type NotificationSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSetting to fetch.
     */
    where?: NotificationSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingOrderByWithRelationInput | NotificationSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationSettings.
     */
    cursor?: NotificationSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationSettings.
     */
    distinct?: NotificationSettingScalarFieldEnum | NotificationSettingScalarFieldEnum[]
  }

  /**
   * NotificationSetting findFirstOrThrow
   */
  export type NotificationSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSetting to fetch.
     */
    where?: NotificationSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingOrderByWithRelationInput | NotificationSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationSettings.
     */
    cursor?: NotificationSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationSettings.
     */
    distinct?: NotificationSettingScalarFieldEnum | NotificationSettingScalarFieldEnum[]
  }

  /**
   * NotificationSetting findMany
   */
  export type NotificationSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSettings to fetch.
     */
    where?: NotificationSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingOrderByWithRelationInput | NotificationSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationSettings.
     */
    cursor?: NotificationSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    distinct?: NotificationSettingScalarFieldEnum | NotificationSettingScalarFieldEnum[]
  }

  /**
   * NotificationSetting create
   */
  export type NotificationSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationSetting.
     */
    data: XOR<NotificationSettingCreateInput, NotificationSettingUncheckedCreateInput>
  }

  /**
   * NotificationSetting createMany
   */
  export type NotificationSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationSettings.
     */
    data: NotificationSettingCreateManyInput | NotificationSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationSetting createManyAndReturn
   */
  export type NotificationSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NotificationSettings.
     */
    data: NotificationSettingCreateManyInput | NotificationSettingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationSetting update
   */
  export type NotificationSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationSetting.
     */
    data: XOR<NotificationSettingUpdateInput, NotificationSettingUncheckedUpdateInput>
    /**
     * Choose, which NotificationSetting to update.
     */
    where: NotificationSettingWhereUniqueInput
  }

  /**
   * NotificationSetting updateMany
   */
  export type NotificationSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationSettings.
     */
    data: XOR<NotificationSettingUpdateManyMutationInput, NotificationSettingUncheckedUpdateManyInput>
    /**
     * Filter which NotificationSettings to update
     */
    where?: NotificationSettingWhereInput
  }

  /**
   * NotificationSetting upsert
   */
  export type NotificationSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationSetting to update in case it exists.
     */
    where: NotificationSettingWhereUniqueInput
    /**
     * In case the NotificationSetting found by the `where` argument doesn't exist, create a new NotificationSetting with this data.
     */
    create: XOR<NotificationSettingCreateInput, NotificationSettingUncheckedCreateInput>
    /**
     * In case the NotificationSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationSettingUpdateInput, NotificationSettingUncheckedUpdateInput>
  }

  /**
   * NotificationSetting delete
   */
  export type NotificationSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingInclude<ExtArgs> | null
    /**
     * Filter which NotificationSetting to delete.
     */
    where: NotificationSettingWhereUniqueInput
  }

  /**
   * NotificationSetting deleteMany
   */
  export type NotificationSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationSettings to delete
     */
    where?: NotificationSettingWhereInput
  }

  /**
   * NotificationSetting without action
   */
  export type NotificationSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSettingInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    details: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    details: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    entity: number
    entityId: number
    details: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    details?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    details?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    userId: string
    action: string
    entity: string
    entityId: string
    details: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    details?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    details?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: string
      entity: string
      entityId: string
      details: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly details: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model InventoryCount
   */

  export type AggregateInventoryCount = {
    _count: InventoryCountCountAggregateOutputType | null
    _min: InventoryCountMinAggregateOutputType | null
    _max: InventoryCountMaxAggregateOutputType | null
  }

  export type InventoryCountMinAggregateOutputType = {
    id: string | null
    branchId: string | null
    period: string | null
    notes: string | null
    status: string | null
    createdBy: string | null
    confirmedBy: string | null
    confirmedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryCountMaxAggregateOutputType = {
    id: string | null
    branchId: string | null
    period: string | null
    notes: string | null
    status: string | null
    createdBy: string | null
    confirmedBy: string | null
    confirmedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryCountCountAggregateOutputType = {
    id: number
    branchId: number
    period: number
    notes: number
    status: number
    createdBy: number
    confirmedBy: number
    confirmedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InventoryCountMinAggregateInputType = {
    id?: true
    branchId?: true
    period?: true
    notes?: true
    status?: true
    createdBy?: true
    confirmedBy?: true
    confirmedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryCountMaxAggregateInputType = {
    id?: true
    branchId?: true
    period?: true
    notes?: true
    status?: true
    createdBy?: true
    confirmedBy?: true
    confirmedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryCountCountAggregateInputType = {
    id?: true
    branchId?: true
    period?: true
    notes?: true
    status?: true
    createdBy?: true
    confirmedBy?: true
    confirmedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InventoryCountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryCount to aggregate.
     */
    where?: InventoryCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryCounts to fetch.
     */
    orderBy?: InventoryCountOrderByWithRelationInput | InventoryCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryCounts
    **/
    _count?: true | InventoryCountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryCountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryCountMaxAggregateInputType
  }

  export type GetInventoryCountAggregateType<T extends InventoryCountAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryCount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryCount[P]>
      : GetScalarType<T[P], AggregateInventoryCount[P]>
  }




  export type InventoryCountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryCountWhereInput
    orderBy?: InventoryCountOrderByWithAggregationInput | InventoryCountOrderByWithAggregationInput[]
    by: InventoryCountScalarFieldEnum[] | InventoryCountScalarFieldEnum
    having?: InventoryCountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountCountAggregateInputType | true
    _min?: InventoryCountMinAggregateInputType
    _max?: InventoryCountMaxAggregateInputType
  }

  export type InventoryCountGroupByOutputType = {
    id: string
    branchId: string
    period: string
    notes: string | null
    status: string
    createdBy: string
    confirmedBy: string | null
    confirmedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: InventoryCountCountAggregateOutputType | null
    _min: InventoryCountMinAggregateOutputType | null
    _max: InventoryCountMaxAggregateOutputType | null
  }

  type GetInventoryCountGroupByPayload<T extends InventoryCountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryCountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryCountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryCountGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryCountGroupByOutputType[P]>
        }
      >
    >


  export type InventoryCountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    period?: boolean
    notes?: boolean
    status?: boolean
    createdBy?: boolean
    confirmedBy?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    confirmer?: boolean | InventoryCount$confirmerArgs<ExtArgs>
    items?: boolean | InventoryCount$itemsArgs<ExtArgs>
    _count?: boolean | InventoryCountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryCount"]>

  export type InventoryCountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    period?: boolean
    notes?: boolean
    status?: boolean
    createdBy?: boolean
    confirmedBy?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    confirmer?: boolean | InventoryCount$confirmerArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryCount"]>

  export type InventoryCountSelectScalar = {
    id?: boolean
    branchId?: boolean
    period?: boolean
    notes?: boolean
    status?: boolean
    createdBy?: boolean
    confirmedBy?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InventoryCountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    confirmer?: boolean | InventoryCount$confirmerArgs<ExtArgs>
    items?: boolean | InventoryCount$itemsArgs<ExtArgs>
    _count?: boolean | InventoryCountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InventoryCountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    confirmer?: boolean | InventoryCount$confirmerArgs<ExtArgs>
  }

  export type $InventoryCountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryCount"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      confirmer: Prisma.$UserPayload<ExtArgs> | null
      items: Prisma.$InventoryCountItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      branchId: string
      period: string
      notes: string | null
      status: string
      createdBy: string
      confirmedBy: string | null
      confirmedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inventoryCount"]>
    composites: {}
  }

  type InventoryCountGetPayload<S extends boolean | null | undefined | InventoryCountDefaultArgs> = $Result.GetResult<Prisma.$InventoryCountPayload, S>

  type InventoryCountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryCountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryCountCountAggregateInputType | true
    }

  export interface InventoryCountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryCount'], meta: { name: 'InventoryCount' } }
    /**
     * Find zero or one InventoryCount that matches the filter.
     * @param {InventoryCountFindUniqueArgs} args - Arguments to find a InventoryCount
     * @example
     * // Get one InventoryCount
     * const inventoryCount = await prisma.inventoryCount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryCountFindUniqueArgs>(args: SelectSubset<T, InventoryCountFindUniqueArgs<ExtArgs>>): Prisma__InventoryCountClient<$Result.GetResult<Prisma.$InventoryCountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryCount that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryCountFindUniqueOrThrowArgs} args - Arguments to find a InventoryCount
     * @example
     * // Get one InventoryCount
     * const inventoryCount = await prisma.inventoryCount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryCountFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryCountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryCountClient<$Result.GetResult<Prisma.$InventoryCountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryCount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountFindFirstArgs} args - Arguments to find a InventoryCount
     * @example
     * // Get one InventoryCount
     * const inventoryCount = await prisma.inventoryCount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryCountFindFirstArgs>(args?: SelectSubset<T, InventoryCountFindFirstArgs<ExtArgs>>): Prisma__InventoryCountClient<$Result.GetResult<Prisma.$InventoryCountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryCount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountFindFirstOrThrowArgs} args - Arguments to find a InventoryCount
     * @example
     * // Get one InventoryCount
     * const inventoryCount = await prisma.inventoryCount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryCountFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryCountFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryCountClient<$Result.GetResult<Prisma.$InventoryCountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryCounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryCounts
     * const inventoryCounts = await prisma.inventoryCount.findMany()
     * 
     * // Get first 10 InventoryCounts
     * const inventoryCounts = await prisma.inventoryCount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryCountWithIdOnly = await prisma.inventoryCount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryCountFindManyArgs>(args?: SelectSubset<T, InventoryCountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryCountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryCount.
     * @param {InventoryCountCreateArgs} args - Arguments to create a InventoryCount.
     * @example
     * // Create one InventoryCount
     * const InventoryCount = await prisma.inventoryCount.create({
     *   data: {
     *     // ... data to create a InventoryCount
     *   }
     * })
     * 
     */
    create<T extends InventoryCountCreateArgs>(args: SelectSubset<T, InventoryCountCreateArgs<ExtArgs>>): Prisma__InventoryCountClient<$Result.GetResult<Prisma.$InventoryCountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryCounts.
     * @param {InventoryCountCreateManyArgs} args - Arguments to create many InventoryCounts.
     * @example
     * // Create many InventoryCounts
     * const inventoryCount = await prisma.inventoryCount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCountCreateManyArgs>(args?: SelectSubset<T, InventoryCountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryCounts and returns the data saved in the database.
     * @param {InventoryCountCreateManyAndReturnArgs} args - Arguments to create many InventoryCounts.
     * @example
     * // Create many InventoryCounts
     * const inventoryCount = await prisma.inventoryCount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryCounts and only return the `id`
     * const inventoryCountWithIdOnly = await prisma.inventoryCount.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryCountCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryCountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryCountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InventoryCount.
     * @param {InventoryCountDeleteArgs} args - Arguments to delete one InventoryCount.
     * @example
     * // Delete one InventoryCount
     * const InventoryCount = await prisma.inventoryCount.delete({
     *   where: {
     *     // ... filter to delete one InventoryCount
     *   }
     * })
     * 
     */
    delete<T extends InventoryCountDeleteArgs>(args: SelectSubset<T, InventoryCountDeleteArgs<ExtArgs>>): Prisma__InventoryCountClient<$Result.GetResult<Prisma.$InventoryCountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryCount.
     * @param {InventoryCountUpdateArgs} args - Arguments to update one InventoryCount.
     * @example
     * // Update one InventoryCount
     * const inventoryCount = await prisma.inventoryCount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryCountUpdateArgs>(args: SelectSubset<T, InventoryCountUpdateArgs<ExtArgs>>): Prisma__InventoryCountClient<$Result.GetResult<Prisma.$InventoryCountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryCounts.
     * @param {InventoryCountDeleteManyArgs} args - Arguments to filter InventoryCounts to delete.
     * @example
     * // Delete a few InventoryCounts
     * const { count } = await prisma.inventoryCount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryCountDeleteManyArgs>(args?: SelectSubset<T, InventoryCountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryCounts
     * const inventoryCount = await prisma.inventoryCount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryCountUpdateManyArgs>(args: SelectSubset<T, InventoryCountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryCount.
     * @param {InventoryCountUpsertArgs} args - Arguments to update or create a InventoryCount.
     * @example
     * // Update or create a InventoryCount
     * const inventoryCount = await prisma.inventoryCount.upsert({
     *   create: {
     *     // ... data to create a InventoryCount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryCount we want to update
     *   }
     * })
     */
    upsert<T extends InventoryCountUpsertArgs>(args: SelectSubset<T, InventoryCountUpsertArgs<ExtArgs>>): Prisma__InventoryCountClient<$Result.GetResult<Prisma.$InventoryCountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InventoryCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountCountArgs} args - Arguments to filter InventoryCounts to count.
     * @example
     * // Count the number of InventoryCounts
     * const count = await prisma.inventoryCount.count({
     *   where: {
     *     // ... the filter for the InventoryCounts we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountCountArgs>(
      args?: Subset<T, InventoryCountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryCountAggregateArgs>(args: Subset<T, InventoryCountAggregateArgs>): Prisma.PrismaPromise<GetInventoryCountAggregateType<T>>

    /**
     * Group by InventoryCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountGroupByArgs} args - Group by arguments.
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
      T extends InventoryCountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryCountGroupByArgs['orderBy'] }
        : { orderBy?: InventoryCountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryCountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryCountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryCount model
   */
  readonly fields: InventoryCountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryCount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryCountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    confirmer<T extends InventoryCount$confirmerArgs<ExtArgs> = {}>(args?: Subset<T, InventoryCount$confirmerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    items<T extends InventoryCount$itemsArgs<ExtArgs> = {}>(args?: Subset<T, InventoryCount$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryCountItemPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the InventoryCount model
   */ 
  interface InventoryCountFieldRefs {
    readonly id: FieldRef<"InventoryCount", 'String'>
    readonly branchId: FieldRef<"InventoryCount", 'String'>
    readonly period: FieldRef<"InventoryCount", 'String'>
    readonly notes: FieldRef<"InventoryCount", 'String'>
    readonly status: FieldRef<"InventoryCount", 'String'>
    readonly createdBy: FieldRef<"InventoryCount", 'String'>
    readonly confirmedBy: FieldRef<"InventoryCount", 'String'>
    readonly confirmedAt: FieldRef<"InventoryCount", 'DateTime'>
    readonly createdAt: FieldRef<"InventoryCount", 'DateTime'>
    readonly updatedAt: FieldRef<"InventoryCount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryCount findUnique
   */
  export type InventoryCountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCount
     */
    select?: InventoryCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountInclude<ExtArgs> | null
    /**
     * Filter, which InventoryCount to fetch.
     */
    where: InventoryCountWhereUniqueInput
  }

  /**
   * InventoryCount findUniqueOrThrow
   */
  export type InventoryCountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCount
     */
    select?: InventoryCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountInclude<ExtArgs> | null
    /**
     * Filter, which InventoryCount to fetch.
     */
    where: InventoryCountWhereUniqueInput
  }

  /**
   * InventoryCount findFirst
   */
  export type InventoryCountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCount
     */
    select?: InventoryCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountInclude<ExtArgs> | null
    /**
     * Filter, which InventoryCount to fetch.
     */
    where?: InventoryCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryCounts to fetch.
     */
    orderBy?: InventoryCountOrderByWithRelationInput | InventoryCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryCounts.
     */
    cursor?: InventoryCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryCounts.
     */
    distinct?: InventoryCountScalarFieldEnum | InventoryCountScalarFieldEnum[]
  }

  /**
   * InventoryCount findFirstOrThrow
   */
  export type InventoryCountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCount
     */
    select?: InventoryCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountInclude<ExtArgs> | null
    /**
     * Filter, which InventoryCount to fetch.
     */
    where?: InventoryCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryCounts to fetch.
     */
    orderBy?: InventoryCountOrderByWithRelationInput | InventoryCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryCounts.
     */
    cursor?: InventoryCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryCounts.
     */
    distinct?: InventoryCountScalarFieldEnum | InventoryCountScalarFieldEnum[]
  }

  /**
   * InventoryCount findMany
   */
  export type InventoryCountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCount
     */
    select?: InventoryCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountInclude<ExtArgs> | null
    /**
     * Filter, which InventoryCounts to fetch.
     */
    where?: InventoryCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryCounts to fetch.
     */
    orderBy?: InventoryCountOrderByWithRelationInput | InventoryCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryCounts.
     */
    cursor?: InventoryCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryCounts.
     */
    skip?: number
    distinct?: InventoryCountScalarFieldEnum | InventoryCountScalarFieldEnum[]
  }

  /**
   * InventoryCount create
   */
  export type InventoryCountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCount
     */
    select?: InventoryCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryCount.
     */
    data: XOR<InventoryCountCreateInput, InventoryCountUncheckedCreateInput>
  }

  /**
   * InventoryCount createMany
   */
  export type InventoryCountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryCounts.
     */
    data: InventoryCountCreateManyInput | InventoryCountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryCount createManyAndReturn
   */
  export type InventoryCountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCount
     */
    select?: InventoryCountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InventoryCounts.
     */
    data: InventoryCountCreateManyInput | InventoryCountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryCount update
   */
  export type InventoryCountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCount
     */
    select?: InventoryCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryCount.
     */
    data: XOR<InventoryCountUpdateInput, InventoryCountUncheckedUpdateInput>
    /**
     * Choose, which InventoryCount to update.
     */
    where: InventoryCountWhereUniqueInput
  }

  /**
   * InventoryCount updateMany
   */
  export type InventoryCountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryCounts.
     */
    data: XOR<InventoryCountUpdateManyMutationInput, InventoryCountUncheckedUpdateManyInput>
    /**
     * Filter which InventoryCounts to update
     */
    where?: InventoryCountWhereInput
  }

  /**
   * InventoryCount upsert
   */
  export type InventoryCountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCount
     */
    select?: InventoryCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryCount to update in case it exists.
     */
    where: InventoryCountWhereUniqueInput
    /**
     * In case the InventoryCount found by the `where` argument doesn't exist, create a new InventoryCount with this data.
     */
    create: XOR<InventoryCountCreateInput, InventoryCountUncheckedCreateInput>
    /**
     * In case the InventoryCount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryCountUpdateInput, InventoryCountUncheckedUpdateInput>
  }

  /**
   * InventoryCount delete
   */
  export type InventoryCountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCount
     */
    select?: InventoryCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountInclude<ExtArgs> | null
    /**
     * Filter which InventoryCount to delete.
     */
    where: InventoryCountWhereUniqueInput
  }

  /**
   * InventoryCount deleteMany
   */
  export type InventoryCountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryCounts to delete
     */
    where?: InventoryCountWhereInput
  }

  /**
   * InventoryCount.confirmer
   */
  export type InventoryCount$confirmerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * InventoryCount.items
   */
  export type InventoryCount$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountItem
     */
    select?: InventoryCountItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountItemInclude<ExtArgs> | null
    where?: InventoryCountItemWhereInput
    orderBy?: InventoryCountItemOrderByWithRelationInput | InventoryCountItemOrderByWithRelationInput[]
    cursor?: InventoryCountItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryCountItemScalarFieldEnum | InventoryCountItemScalarFieldEnum[]
  }

  /**
   * InventoryCount without action
   */
  export type InventoryCountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCount
     */
    select?: InventoryCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountInclude<ExtArgs> | null
  }


  /**
   * Model InventoryCountItem
   */

  export type AggregateInventoryCountItem = {
    _count: InventoryCountItemCountAggregateOutputType | null
    _avg: InventoryCountItemAvgAggregateOutputType | null
    _sum: InventoryCountItemSumAggregateOutputType | null
    _min: InventoryCountItemMinAggregateOutputType | null
    _max: InventoryCountItemMaxAggregateOutputType | null
  }

  export type InventoryCountItemAvgAggregateOutputType = {
    systemQuantity: number | null
    countedQuantity: number | null
    difference: number | null
  }

  export type InventoryCountItemSumAggregateOutputType = {
    systemQuantity: number | null
    countedQuantity: number | null
    difference: number | null
  }

  export type InventoryCountItemMinAggregateOutputType = {
    id: string | null
    inventoryCountId: string | null
    productId: string | null
    warehouseId: string | null
    systemQuantity: number | null
    countedQuantity: number | null
    difference: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryCountItemMaxAggregateOutputType = {
    id: string | null
    inventoryCountId: string | null
    productId: string | null
    warehouseId: string | null
    systemQuantity: number | null
    countedQuantity: number | null
    difference: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryCountItemCountAggregateOutputType = {
    id: number
    inventoryCountId: number
    productId: number
    warehouseId: number
    systemQuantity: number
    countedQuantity: number
    difference: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InventoryCountItemAvgAggregateInputType = {
    systemQuantity?: true
    countedQuantity?: true
    difference?: true
  }

  export type InventoryCountItemSumAggregateInputType = {
    systemQuantity?: true
    countedQuantity?: true
    difference?: true
  }

  export type InventoryCountItemMinAggregateInputType = {
    id?: true
    inventoryCountId?: true
    productId?: true
    warehouseId?: true
    systemQuantity?: true
    countedQuantity?: true
    difference?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryCountItemMaxAggregateInputType = {
    id?: true
    inventoryCountId?: true
    productId?: true
    warehouseId?: true
    systemQuantity?: true
    countedQuantity?: true
    difference?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryCountItemCountAggregateInputType = {
    id?: true
    inventoryCountId?: true
    productId?: true
    warehouseId?: true
    systemQuantity?: true
    countedQuantity?: true
    difference?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InventoryCountItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryCountItem to aggregate.
     */
    where?: InventoryCountItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryCountItems to fetch.
     */
    orderBy?: InventoryCountItemOrderByWithRelationInput | InventoryCountItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryCountItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryCountItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryCountItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryCountItems
    **/
    _count?: true | InventoryCountItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryCountItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryCountItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryCountItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryCountItemMaxAggregateInputType
  }

  export type GetInventoryCountItemAggregateType<T extends InventoryCountItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryCountItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryCountItem[P]>
      : GetScalarType<T[P], AggregateInventoryCountItem[P]>
  }




  export type InventoryCountItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryCountItemWhereInput
    orderBy?: InventoryCountItemOrderByWithAggregationInput | InventoryCountItemOrderByWithAggregationInput[]
    by: InventoryCountItemScalarFieldEnum[] | InventoryCountItemScalarFieldEnum
    having?: InventoryCountItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountItemCountAggregateInputType | true
    _avg?: InventoryCountItemAvgAggregateInputType
    _sum?: InventoryCountItemSumAggregateInputType
    _min?: InventoryCountItemMinAggregateInputType
    _max?: InventoryCountItemMaxAggregateInputType
  }

  export type InventoryCountItemGroupByOutputType = {
    id: string
    inventoryCountId: string
    productId: string
    warehouseId: string
    systemQuantity: number
    countedQuantity: number | null
    difference: number | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: InventoryCountItemCountAggregateOutputType | null
    _avg: InventoryCountItemAvgAggregateOutputType | null
    _sum: InventoryCountItemSumAggregateOutputType | null
    _min: InventoryCountItemMinAggregateOutputType | null
    _max: InventoryCountItemMaxAggregateOutputType | null
  }

  type GetInventoryCountItemGroupByPayload<T extends InventoryCountItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryCountItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryCountItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryCountItemGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryCountItemGroupByOutputType[P]>
        }
      >
    >


  export type InventoryCountItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryCountId?: boolean
    productId?: boolean
    warehouseId?: boolean
    systemQuantity?: boolean
    countedQuantity?: boolean
    difference?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inventoryCount?: boolean | InventoryCountDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryCountItem"]>

  export type InventoryCountItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryCountId?: boolean
    productId?: boolean
    warehouseId?: boolean
    systemQuantity?: boolean
    countedQuantity?: boolean
    difference?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inventoryCount?: boolean | InventoryCountDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryCountItem"]>

  export type InventoryCountItemSelectScalar = {
    id?: boolean
    inventoryCountId?: boolean
    productId?: boolean
    warehouseId?: boolean
    systemQuantity?: boolean
    countedQuantity?: boolean
    difference?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InventoryCountItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryCount?: boolean | InventoryCountDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }
  export type InventoryCountItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryCount?: boolean | InventoryCountDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }

  export type $InventoryCountItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryCountItem"
    objects: {
      inventoryCount: Prisma.$InventoryCountPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      warehouse: Prisma.$WarehousePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inventoryCountId: string
      productId: string
      warehouseId: string
      systemQuantity: number
      countedQuantity: number | null
      difference: number | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inventoryCountItem"]>
    composites: {}
  }

  type InventoryCountItemGetPayload<S extends boolean | null | undefined | InventoryCountItemDefaultArgs> = $Result.GetResult<Prisma.$InventoryCountItemPayload, S>

  type InventoryCountItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryCountItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryCountItemCountAggregateInputType | true
    }

  export interface InventoryCountItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryCountItem'], meta: { name: 'InventoryCountItem' } }
    /**
     * Find zero or one InventoryCountItem that matches the filter.
     * @param {InventoryCountItemFindUniqueArgs} args - Arguments to find a InventoryCountItem
     * @example
     * // Get one InventoryCountItem
     * const inventoryCountItem = await prisma.inventoryCountItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryCountItemFindUniqueArgs>(args: SelectSubset<T, InventoryCountItemFindUniqueArgs<ExtArgs>>): Prisma__InventoryCountItemClient<$Result.GetResult<Prisma.$InventoryCountItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryCountItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryCountItemFindUniqueOrThrowArgs} args - Arguments to find a InventoryCountItem
     * @example
     * // Get one InventoryCountItem
     * const inventoryCountItem = await prisma.inventoryCountItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryCountItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryCountItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryCountItemClient<$Result.GetResult<Prisma.$InventoryCountItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryCountItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountItemFindFirstArgs} args - Arguments to find a InventoryCountItem
     * @example
     * // Get one InventoryCountItem
     * const inventoryCountItem = await prisma.inventoryCountItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryCountItemFindFirstArgs>(args?: SelectSubset<T, InventoryCountItemFindFirstArgs<ExtArgs>>): Prisma__InventoryCountItemClient<$Result.GetResult<Prisma.$InventoryCountItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryCountItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountItemFindFirstOrThrowArgs} args - Arguments to find a InventoryCountItem
     * @example
     * // Get one InventoryCountItem
     * const inventoryCountItem = await prisma.inventoryCountItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryCountItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryCountItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryCountItemClient<$Result.GetResult<Prisma.$InventoryCountItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryCountItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryCountItems
     * const inventoryCountItems = await prisma.inventoryCountItem.findMany()
     * 
     * // Get first 10 InventoryCountItems
     * const inventoryCountItems = await prisma.inventoryCountItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryCountItemWithIdOnly = await prisma.inventoryCountItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryCountItemFindManyArgs>(args?: SelectSubset<T, InventoryCountItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryCountItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryCountItem.
     * @param {InventoryCountItemCreateArgs} args - Arguments to create a InventoryCountItem.
     * @example
     * // Create one InventoryCountItem
     * const InventoryCountItem = await prisma.inventoryCountItem.create({
     *   data: {
     *     // ... data to create a InventoryCountItem
     *   }
     * })
     * 
     */
    create<T extends InventoryCountItemCreateArgs>(args: SelectSubset<T, InventoryCountItemCreateArgs<ExtArgs>>): Prisma__InventoryCountItemClient<$Result.GetResult<Prisma.$InventoryCountItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryCountItems.
     * @param {InventoryCountItemCreateManyArgs} args - Arguments to create many InventoryCountItems.
     * @example
     * // Create many InventoryCountItems
     * const inventoryCountItem = await prisma.inventoryCountItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCountItemCreateManyArgs>(args?: SelectSubset<T, InventoryCountItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryCountItems and returns the data saved in the database.
     * @param {InventoryCountItemCreateManyAndReturnArgs} args - Arguments to create many InventoryCountItems.
     * @example
     * // Create many InventoryCountItems
     * const inventoryCountItem = await prisma.inventoryCountItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryCountItems and only return the `id`
     * const inventoryCountItemWithIdOnly = await prisma.inventoryCountItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryCountItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryCountItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryCountItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InventoryCountItem.
     * @param {InventoryCountItemDeleteArgs} args - Arguments to delete one InventoryCountItem.
     * @example
     * // Delete one InventoryCountItem
     * const InventoryCountItem = await prisma.inventoryCountItem.delete({
     *   where: {
     *     // ... filter to delete one InventoryCountItem
     *   }
     * })
     * 
     */
    delete<T extends InventoryCountItemDeleteArgs>(args: SelectSubset<T, InventoryCountItemDeleteArgs<ExtArgs>>): Prisma__InventoryCountItemClient<$Result.GetResult<Prisma.$InventoryCountItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryCountItem.
     * @param {InventoryCountItemUpdateArgs} args - Arguments to update one InventoryCountItem.
     * @example
     * // Update one InventoryCountItem
     * const inventoryCountItem = await prisma.inventoryCountItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryCountItemUpdateArgs>(args: SelectSubset<T, InventoryCountItemUpdateArgs<ExtArgs>>): Prisma__InventoryCountItemClient<$Result.GetResult<Prisma.$InventoryCountItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryCountItems.
     * @param {InventoryCountItemDeleteManyArgs} args - Arguments to filter InventoryCountItems to delete.
     * @example
     * // Delete a few InventoryCountItems
     * const { count } = await prisma.inventoryCountItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryCountItemDeleteManyArgs>(args?: SelectSubset<T, InventoryCountItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryCountItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryCountItems
     * const inventoryCountItem = await prisma.inventoryCountItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryCountItemUpdateManyArgs>(args: SelectSubset<T, InventoryCountItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryCountItem.
     * @param {InventoryCountItemUpsertArgs} args - Arguments to update or create a InventoryCountItem.
     * @example
     * // Update or create a InventoryCountItem
     * const inventoryCountItem = await prisma.inventoryCountItem.upsert({
     *   create: {
     *     // ... data to create a InventoryCountItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryCountItem we want to update
     *   }
     * })
     */
    upsert<T extends InventoryCountItemUpsertArgs>(args: SelectSubset<T, InventoryCountItemUpsertArgs<ExtArgs>>): Prisma__InventoryCountItemClient<$Result.GetResult<Prisma.$InventoryCountItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InventoryCountItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountItemCountArgs} args - Arguments to filter InventoryCountItems to count.
     * @example
     * // Count the number of InventoryCountItems
     * const count = await prisma.inventoryCountItem.count({
     *   where: {
     *     // ... the filter for the InventoryCountItems we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountItemCountArgs>(
      args?: Subset<T, InventoryCountItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryCountItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryCountItemAggregateArgs>(args: Subset<T, InventoryCountItemAggregateArgs>): Prisma.PrismaPromise<GetInventoryCountItemAggregateType<T>>

    /**
     * Group by InventoryCountItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountItemGroupByArgs} args - Group by arguments.
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
      T extends InventoryCountItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryCountItemGroupByArgs['orderBy'] }
        : { orderBy?: InventoryCountItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryCountItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryCountItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryCountItem model
   */
  readonly fields: InventoryCountItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryCountItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryCountItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventoryCount<T extends InventoryCountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryCountDefaultArgs<ExtArgs>>): Prisma__InventoryCountClient<$Result.GetResult<Prisma.$InventoryCountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    warehouse<T extends WarehouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseDefaultArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the InventoryCountItem model
   */ 
  interface InventoryCountItemFieldRefs {
    readonly id: FieldRef<"InventoryCountItem", 'String'>
    readonly inventoryCountId: FieldRef<"InventoryCountItem", 'String'>
    readonly productId: FieldRef<"InventoryCountItem", 'String'>
    readonly warehouseId: FieldRef<"InventoryCountItem", 'String'>
    readonly systemQuantity: FieldRef<"InventoryCountItem", 'Int'>
    readonly countedQuantity: FieldRef<"InventoryCountItem", 'Int'>
    readonly difference: FieldRef<"InventoryCountItem", 'Int'>
    readonly notes: FieldRef<"InventoryCountItem", 'String'>
    readonly createdAt: FieldRef<"InventoryCountItem", 'DateTime'>
    readonly updatedAt: FieldRef<"InventoryCountItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryCountItem findUnique
   */
  export type InventoryCountItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountItem
     */
    select?: InventoryCountItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryCountItem to fetch.
     */
    where: InventoryCountItemWhereUniqueInput
  }

  /**
   * InventoryCountItem findUniqueOrThrow
   */
  export type InventoryCountItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountItem
     */
    select?: InventoryCountItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryCountItem to fetch.
     */
    where: InventoryCountItemWhereUniqueInput
  }

  /**
   * InventoryCountItem findFirst
   */
  export type InventoryCountItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountItem
     */
    select?: InventoryCountItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryCountItem to fetch.
     */
    where?: InventoryCountItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryCountItems to fetch.
     */
    orderBy?: InventoryCountItemOrderByWithRelationInput | InventoryCountItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryCountItems.
     */
    cursor?: InventoryCountItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryCountItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryCountItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryCountItems.
     */
    distinct?: InventoryCountItemScalarFieldEnum | InventoryCountItemScalarFieldEnum[]
  }

  /**
   * InventoryCountItem findFirstOrThrow
   */
  export type InventoryCountItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountItem
     */
    select?: InventoryCountItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryCountItem to fetch.
     */
    where?: InventoryCountItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryCountItems to fetch.
     */
    orderBy?: InventoryCountItemOrderByWithRelationInput | InventoryCountItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryCountItems.
     */
    cursor?: InventoryCountItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryCountItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryCountItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryCountItems.
     */
    distinct?: InventoryCountItemScalarFieldEnum | InventoryCountItemScalarFieldEnum[]
  }

  /**
   * InventoryCountItem findMany
   */
  export type InventoryCountItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountItem
     */
    select?: InventoryCountItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryCountItems to fetch.
     */
    where?: InventoryCountItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryCountItems to fetch.
     */
    orderBy?: InventoryCountItemOrderByWithRelationInput | InventoryCountItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryCountItems.
     */
    cursor?: InventoryCountItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryCountItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryCountItems.
     */
    skip?: number
    distinct?: InventoryCountItemScalarFieldEnum | InventoryCountItemScalarFieldEnum[]
  }

  /**
   * InventoryCountItem create
   */
  export type InventoryCountItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountItem
     */
    select?: InventoryCountItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryCountItem.
     */
    data: XOR<InventoryCountItemCreateInput, InventoryCountItemUncheckedCreateInput>
  }

  /**
   * InventoryCountItem createMany
   */
  export type InventoryCountItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryCountItems.
     */
    data: InventoryCountItemCreateManyInput | InventoryCountItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryCountItem createManyAndReturn
   */
  export type InventoryCountItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountItem
     */
    select?: InventoryCountItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InventoryCountItems.
     */
    data: InventoryCountItemCreateManyInput | InventoryCountItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryCountItem update
   */
  export type InventoryCountItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountItem
     */
    select?: InventoryCountItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryCountItem.
     */
    data: XOR<InventoryCountItemUpdateInput, InventoryCountItemUncheckedUpdateInput>
    /**
     * Choose, which InventoryCountItem to update.
     */
    where: InventoryCountItemWhereUniqueInput
  }

  /**
   * InventoryCountItem updateMany
   */
  export type InventoryCountItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryCountItems.
     */
    data: XOR<InventoryCountItemUpdateManyMutationInput, InventoryCountItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryCountItems to update
     */
    where?: InventoryCountItemWhereInput
  }

  /**
   * InventoryCountItem upsert
   */
  export type InventoryCountItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountItem
     */
    select?: InventoryCountItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryCountItem to update in case it exists.
     */
    where: InventoryCountItemWhereUniqueInput
    /**
     * In case the InventoryCountItem found by the `where` argument doesn't exist, create a new InventoryCountItem with this data.
     */
    create: XOR<InventoryCountItemCreateInput, InventoryCountItemUncheckedCreateInput>
    /**
     * In case the InventoryCountItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryCountItemUpdateInput, InventoryCountItemUncheckedUpdateInput>
  }

  /**
   * InventoryCountItem delete
   */
  export type InventoryCountItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountItem
     */
    select?: InventoryCountItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountItemInclude<ExtArgs> | null
    /**
     * Filter which InventoryCountItem to delete.
     */
    where: InventoryCountItemWhereUniqueInput
  }

  /**
   * InventoryCountItem deleteMany
   */
  export type InventoryCountItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryCountItems to delete
     */
    where?: InventoryCountItemWhereInput
  }

  /**
   * InventoryCountItem without action
   */
  export type InventoryCountItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountItem
     */
    select?: InventoryCountItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCountItemInclude<ExtArgs> | null
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
    name: 'name',
    role: 'role',
    branchId: 'branchId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BranchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const WarehouseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    branchId: 'branchId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WarehouseScalarFieldEnum = (typeof WarehouseScalarFieldEnum)[keyof typeof WarehouseScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    contact: 'contact',
    phone: 'phone',
    email: 'email',
    address: 'address',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    categoryId: 'categoryId',
    unit: 'unit',
    minStock: 'minStock',
    productType: 'productType',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductBarcodeScalarFieldEnum: {
    id: 'id',
    barcode: 'barcode',
    productId: 'productId',
    isPrimary: 'isPrimary'
  };

  export type ProductBarcodeScalarFieldEnum = (typeof ProductBarcodeScalarFieldEnum)[keyof typeof ProductBarcodeScalarFieldEnum]


  export const StockLotScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    warehouseId: 'warehouseId',
    branchId: 'branchId',
    supplierId: 'supplierId',
    lotNumber: 'lotNumber',
    expiryDate: 'expiryDate',
    quantity: 'quantity',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StockLotScalarFieldEnum = (typeof StockLotScalarFieldEnum)[keyof typeof StockLotScalarFieldEnum]


  export const StockMovementScalarFieldEnum: {
    id: 'id',
    stockLotId: 'stockLotId',
    type: 'type',
    quantity: 'quantity',
    notes: 'notes',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type StockMovementScalarFieldEnum = (typeof StockMovementScalarFieldEnum)[keyof typeof StockMovementScalarFieldEnum]


  export const ExpiryAlertScalarFieldEnum: {
    id: 'id',
    stockLotId: 'stockLotId',
    alertType: 'alertType',
    sentAt: 'sentAt',
    isRead: 'isRead'
  };

  export type ExpiryAlertScalarFieldEnum = (typeof ExpiryAlertScalarFieldEnum)[keyof typeof ExpiryAlertScalarFieldEnum]


  export const NotificationSettingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    days30: 'days30',
    days15: 'days15',
    days7: 'days7',
    expired: 'expired',
    pushToken: 'pushToken',
    updatedAt: 'updatedAt'
  };

  export type NotificationSettingScalarFieldEnum = (typeof NotificationSettingScalarFieldEnum)[keyof typeof NotificationSettingScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const InventoryCountScalarFieldEnum: {
    id: 'id',
    branchId: 'branchId',
    period: 'period',
    notes: 'notes',
    status: 'status',
    createdBy: 'createdBy',
    confirmedBy: 'confirmedBy',
    confirmedAt: 'confirmedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InventoryCountScalarFieldEnum = (typeof InventoryCountScalarFieldEnum)[keyof typeof InventoryCountScalarFieldEnum]


  export const InventoryCountItemScalarFieldEnum: {
    id: 'id',
    inventoryCountId: 'inventoryCountId',
    productId: 'productId',
    warehouseId: 'warehouseId',
    systemQuantity: 'systemQuantity',
    countedQuantity: 'countedQuantity',
    difference: 'difference',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InventoryCountItemScalarFieldEnum = (typeof InventoryCountItemScalarFieldEnum)[keyof typeof InventoryCountItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    branchId?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    branch?: XOR<BranchNullableRelationFilter, BranchWhereInput> | null
    stockMovements?: StockMovementListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    notificationSetting?: XOR<NotificationSettingNullableRelationFilter, NotificationSettingWhereInput> | null
    inventoryCountsCreated?: InventoryCountListRelationFilter
    inventoryCountsConfirmed?: InventoryCountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    branchId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    stockMovements?: StockMovementOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    notificationSetting?: NotificationSettingOrderByWithRelationInput
    inventoryCountsCreated?: InventoryCountOrderByRelationAggregateInput
    inventoryCountsConfirmed?: InventoryCountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    branchId?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    branch?: XOR<BranchNullableRelationFilter, BranchWhereInput> | null
    stockMovements?: StockMovementListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    notificationSetting?: XOR<NotificationSettingNullableRelationFilter, NotificationSettingWhereInput> | null
    inventoryCountsCreated?: InventoryCountListRelationFilter
    inventoryCountsConfirmed?: InventoryCountListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    branchId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    branchId?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    address?: StringNullableFilter<"Branch"> | string | null
    phone?: StringNullableFilter<"Branch"> | string | null
    isActive?: BoolFilter<"Branch"> | boolean
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    users?: UserListRelationFilter
    warehouses?: WarehouseListRelationFilter
    stockLots?: StockLotListRelationFilter
    inventoryCounts?: InventoryCountListRelationFilter
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    warehouses?: WarehouseOrderByRelationAggregateInput
    stockLots?: StockLotOrderByRelationAggregateInput
    inventoryCounts?: InventoryCountOrderByRelationAggregateInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    name?: StringFilter<"Branch"> | string
    address?: StringNullableFilter<"Branch"> | string | null
    phone?: StringNullableFilter<"Branch"> | string | null
    isActive?: BoolFilter<"Branch"> | boolean
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    users?: UserListRelationFilter
    warehouses?: WarehouseListRelationFilter
    stockLots?: StockLotListRelationFilter
    inventoryCounts?: InventoryCountListRelationFilter
  }, "id">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BranchCountOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Branch"> | string
    name?: StringWithAggregatesFilter<"Branch"> | string
    address?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    isActive?: BoolWithAggregatesFilter<"Branch"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
  }

  export type WarehouseWhereInput = {
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    id?: StringFilter<"Warehouse"> | string
    name?: StringFilter<"Warehouse"> | string
    branchId?: StringFilter<"Warehouse"> | string
    isActive?: BoolFilter<"Warehouse"> | boolean
    createdAt?: DateTimeFilter<"Warehouse"> | Date | string
    updatedAt?: DateTimeFilter<"Warehouse"> | Date | string
    branch?: XOR<BranchRelationFilter, BranchWhereInput>
    stockLots?: StockLotListRelationFilter
    inventoryItems?: InventoryCountItemListRelationFilter
  }

  export type WarehouseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    stockLots?: StockLotOrderByRelationAggregateInput
    inventoryItems?: InventoryCountItemOrderByRelationAggregateInput
  }

  export type WarehouseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    name?: StringFilter<"Warehouse"> | string
    branchId?: StringFilter<"Warehouse"> | string
    isActive?: BoolFilter<"Warehouse"> | boolean
    createdAt?: DateTimeFilter<"Warehouse"> | Date | string
    updatedAt?: DateTimeFilter<"Warehouse"> | Date | string
    branch?: XOR<BranchRelationFilter, BranchWhereInput>
    stockLots?: StockLotListRelationFilter
    inventoryItems?: InventoryCountItemListRelationFilter
  }, "id">

  export type WarehouseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WarehouseCountOrderByAggregateInput
    _max?: WarehouseMaxOrderByAggregateInput
    _min?: WarehouseMinOrderByAggregateInput
  }

  export type WarehouseScalarWhereWithAggregatesInput = {
    AND?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    OR?: WarehouseScalarWhereWithAggregatesInput[]
    NOT?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Warehouse"> | string
    name?: StringWithAggregatesFilter<"Warehouse"> | string
    branchId?: StringWithAggregatesFilter<"Warehouse"> | string
    isActive?: BoolWithAggregatesFilter<"Warehouse"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Warehouse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Warehouse"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    createdAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: StringFilter<"Supplier"> | string
    name?: StringFilter<"Supplier"> | string
    contact?: StringNullableFilter<"Supplier"> | string | null
    phone?: StringNullableFilter<"Supplier"> | string | null
    email?: StringNullableFilter<"Supplier"> | string | null
    address?: StringNullableFilter<"Supplier"> | string | null
    isActive?: BoolFilter<"Supplier"> | boolean
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    stockLots?: StockLotListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stockLots?: StockLotOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    name?: StringFilter<"Supplier"> | string
    contact?: StringNullableFilter<"Supplier"> | string | null
    phone?: StringNullableFilter<"Supplier"> | string | null
    email?: StringNullableFilter<"Supplier"> | string | null
    address?: StringNullableFilter<"Supplier"> | string | null
    isActive?: BoolFilter<"Supplier"> | boolean
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    stockLots?: StockLotListRelationFilter
  }, "id">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Supplier"> | string
    name?: StringWithAggregatesFilter<"Supplier"> | string
    contact?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    email?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    address?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    isActive?: BoolWithAggregatesFilter<"Supplier"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    categoryId?: StringNullableFilter<"Product"> | string | null
    unit?: StringFilter<"Product"> | string
    minStock?: IntFilter<"Product"> | number
    productType?: StringFilter<"Product"> | string
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    barcodes?: ProductBarcodeListRelationFilter
    stockLots?: StockLotListRelationFilter
    inventoryItems?: InventoryCountItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    unit?: SortOrder
    minStock?: SortOrder
    productType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    barcodes?: ProductBarcodeOrderByRelationAggregateInput
    stockLots?: StockLotOrderByRelationAggregateInput
    inventoryItems?: InventoryCountItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    categoryId?: StringNullableFilter<"Product"> | string | null
    unit?: StringFilter<"Product"> | string
    minStock?: IntFilter<"Product"> | number
    productType?: StringFilter<"Product"> | string
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    barcodes?: ProductBarcodeListRelationFilter
    stockLots?: StockLotListRelationFilter
    inventoryItems?: InventoryCountItemListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    unit?: SortOrder
    minStock?: SortOrder
    productType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    unit?: StringWithAggregatesFilter<"Product"> | string
    minStock?: IntWithAggregatesFilter<"Product"> | number
    productType?: StringWithAggregatesFilter<"Product"> | string
    isActive?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductBarcodeWhereInput = {
    AND?: ProductBarcodeWhereInput | ProductBarcodeWhereInput[]
    OR?: ProductBarcodeWhereInput[]
    NOT?: ProductBarcodeWhereInput | ProductBarcodeWhereInput[]
    id?: StringFilter<"ProductBarcode"> | string
    barcode?: StringFilter<"ProductBarcode"> | string
    productId?: StringFilter<"ProductBarcode"> | string
    isPrimary?: BoolFilter<"ProductBarcode"> | boolean
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ProductBarcodeOrderByWithRelationInput = {
    id?: SortOrder
    barcode?: SortOrder
    productId?: SortOrder
    isPrimary?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductBarcodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    barcode?: string
    AND?: ProductBarcodeWhereInput | ProductBarcodeWhereInput[]
    OR?: ProductBarcodeWhereInput[]
    NOT?: ProductBarcodeWhereInput | ProductBarcodeWhereInput[]
    productId?: StringFilter<"ProductBarcode"> | string
    isPrimary?: BoolFilter<"ProductBarcode"> | boolean
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id" | "barcode">

  export type ProductBarcodeOrderByWithAggregationInput = {
    id?: SortOrder
    barcode?: SortOrder
    productId?: SortOrder
    isPrimary?: SortOrder
    _count?: ProductBarcodeCountOrderByAggregateInput
    _max?: ProductBarcodeMaxOrderByAggregateInput
    _min?: ProductBarcodeMinOrderByAggregateInput
  }

  export type ProductBarcodeScalarWhereWithAggregatesInput = {
    AND?: ProductBarcodeScalarWhereWithAggregatesInput | ProductBarcodeScalarWhereWithAggregatesInput[]
    OR?: ProductBarcodeScalarWhereWithAggregatesInput[]
    NOT?: ProductBarcodeScalarWhereWithAggregatesInput | ProductBarcodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductBarcode"> | string
    barcode?: StringWithAggregatesFilter<"ProductBarcode"> | string
    productId?: StringWithAggregatesFilter<"ProductBarcode"> | string
    isPrimary?: BoolWithAggregatesFilter<"ProductBarcode"> | boolean
  }

  export type StockLotWhereInput = {
    AND?: StockLotWhereInput | StockLotWhereInput[]
    OR?: StockLotWhereInput[]
    NOT?: StockLotWhereInput | StockLotWhereInput[]
    id?: StringFilter<"StockLot"> | string
    productId?: StringFilter<"StockLot"> | string
    warehouseId?: StringFilter<"StockLot"> | string
    branchId?: StringFilter<"StockLot"> | string
    supplierId?: StringNullableFilter<"StockLot"> | string | null
    lotNumber?: StringNullableFilter<"StockLot"> | string | null
    expiryDate?: DateTimeNullableFilter<"StockLot"> | Date | string | null
    quantity?: IntFilter<"StockLot"> | number
    status?: StringNullableFilter<"StockLot"> | string | null
    notes?: StringNullableFilter<"StockLot"> | string | null
    createdAt?: DateTimeFilter<"StockLot"> | Date | string
    updatedAt?: DateTimeFilter<"StockLot"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    warehouse?: XOR<WarehouseRelationFilter, WarehouseWhereInput>
    branch?: XOR<BranchRelationFilter, BranchWhereInput>
    supplier?: XOR<SupplierNullableRelationFilter, SupplierWhereInput> | null
    movements?: StockMovementListRelationFilter
    expiryAlerts?: ExpiryAlertListRelationFilter
  }

  export type StockLotOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    branchId?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    lotNumber?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    quantity?: SortOrder
    status?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    warehouse?: WarehouseOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
    supplier?: SupplierOrderByWithRelationInput
    movements?: StockMovementOrderByRelationAggregateInput
    expiryAlerts?: ExpiryAlertOrderByRelationAggregateInput
  }

  export type StockLotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockLotWhereInput | StockLotWhereInput[]
    OR?: StockLotWhereInput[]
    NOT?: StockLotWhereInput | StockLotWhereInput[]
    productId?: StringFilter<"StockLot"> | string
    warehouseId?: StringFilter<"StockLot"> | string
    branchId?: StringFilter<"StockLot"> | string
    supplierId?: StringNullableFilter<"StockLot"> | string | null
    lotNumber?: StringNullableFilter<"StockLot"> | string | null
    expiryDate?: DateTimeNullableFilter<"StockLot"> | Date | string | null
    quantity?: IntFilter<"StockLot"> | number
    status?: StringNullableFilter<"StockLot"> | string | null
    notes?: StringNullableFilter<"StockLot"> | string | null
    createdAt?: DateTimeFilter<"StockLot"> | Date | string
    updatedAt?: DateTimeFilter<"StockLot"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    warehouse?: XOR<WarehouseRelationFilter, WarehouseWhereInput>
    branch?: XOR<BranchRelationFilter, BranchWhereInput>
    supplier?: XOR<SupplierNullableRelationFilter, SupplierWhereInput> | null
    movements?: StockMovementListRelationFilter
    expiryAlerts?: ExpiryAlertListRelationFilter
  }, "id">

  export type StockLotOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    branchId?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    lotNumber?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    quantity?: SortOrder
    status?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StockLotCountOrderByAggregateInput
    _avg?: StockLotAvgOrderByAggregateInput
    _max?: StockLotMaxOrderByAggregateInput
    _min?: StockLotMinOrderByAggregateInput
    _sum?: StockLotSumOrderByAggregateInput
  }

  export type StockLotScalarWhereWithAggregatesInput = {
    AND?: StockLotScalarWhereWithAggregatesInput | StockLotScalarWhereWithAggregatesInput[]
    OR?: StockLotScalarWhereWithAggregatesInput[]
    NOT?: StockLotScalarWhereWithAggregatesInput | StockLotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockLot"> | string
    productId?: StringWithAggregatesFilter<"StockLot"> | string
    warehouseId?: StringWithAggregatesFilter<"StockLot"> | string
    branchId?: StringWithAggregatesFilter<"StockLot"> | string
    supplierId?: StringNullableWithAggregatesFilter<"StockLot"> | string | null
    lotNumber?: StringNullableWithAggregatesFilter<"StockLot"> | string | null
    expiryDate?: DateTimeNullableWithAggregatesFilter<"StockLot"> | Date | string | null
    quantity?: IntWithAggregatesFilter<"StockLot"> | number
    status?: StringNullableWithAggregatesFilter<"StockLot"> | string | null
    notes?: StringNullableWithAggregatesFilter<"StockLot"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StockLot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StockLot"> | Date | string
  }

  export type StockMovementWhereInput = {
    AND?: StockMovementWhereInput | StockMovementWhereInput[]
    OR?: StockMovementWhereInput[]
    NOT?: StockMovementWhereInput | StockMovementWhereInput[]
    id?: StringFilter<"StockMovement"> | string
    stockLotId?: StringFilter<"StockMovement"> | string
    type?: StringFilter<"StockMovement"> | string
    quantity?: IntFilter<"StockMovement"> | number
    notes?: StringNullableFilter<"StockMovement"> | string | null
    userId?: StringFilter<"StockMovement"> | string
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    stockLot?: XOR<StockLotRelationFilter, StockLotWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type StockMovementOrderByWithRelationInput = {
    id?: SortOrder
    stockLotId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    notes?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    stockLot?: StockLotOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type StockMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockMovementWhereInput | StockMovementWhereInput[]
    OR?: StockMovementWhereInput[]
    NOT?: StockMovementWhereInput | StockMovementWhereInput[]
    stockLotId?: StringFilter<"StockMovement"> | string
    type?: StringFilter<"StockMovement"> | string
    quantity?: IntFilter<"StockMovement"> | number
    notes?: StringNullableFilter<"StockMovement"> | string | null
    userId?: StringFilter<"StockMovement"> | string
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    stockLot?: XOR<StockLotRelationFilter, StockLotWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type StockMovementOrderByWithAggregationInput = {
    id?: SortOrder
    stockLotId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    notes?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: StockMovementCountOrderByAggregateInput
    _avg?: StockMovementAvgOrderByAggregateInput
    _max?: StockMovementMaxOrderByAggregateInput
    _min?: StockMovementMinOrderByAggregateInput
    _sum?: StockMovementSumOrderByAggregateInput
  }

  export type StockMovementScalarWhereWithAggregatesInput = {
    AND?: StockMovementScalarWhereWithAggregatesInput | StockMovementScalarWhereWithAggregatesInput[]
    OR?: StockMovementScalarWhereWithAggregatesInput[]
    NOT?: StockMovementScalarWhereWithAggregatesInput | StockMovementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockMovement"> | string
    stockLotId?: StringWithAggregatesFilter<"StockMovement"> | string
    type?: StringWithAggregatesFilter<"StockMovement"> | string
    quantity?: IntWithAggregatesFilter<"StockMovement"> | number
    notes?: StringNullableWithAggregatesFilter<"StockMovement"> | string | null
    userId?: StringWithAggregatesFilter<"StockMovement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StockMovement"> | Date | string
  }

  export type ExpiryAlertWhereInput = {
    AND?: ExpiryAlertWhereInput | ExpiryAlertWhereInput[]
    OR?: ExpiryAlertWhereInput[]
    NOT?: ExpiryAlertWhereInput | ExpiryAlertWhereInput[]
    id?: StringFilter<"ExpiryAlert"> | string
    stockLotId?: StringFilter<"ExpiryAlert"> | string
    alertType?: StringFilter<"ExpiryAlert"> | string
    sentAt?: DateTimeFilter<"ExpiryAlert"> | Date | string
    isRead?: BoolFilter<"ExpiryAlert"> | boolean
    stockLot?: XOR<StockLotRelationFilter, StockLotWhereInput>
  }

  export type ExpiryAlertOrderByWithRelationInput = {
    id?: SortOrder
    stockLotId?: SortOrder
    alertType?: SortOrder
    sentAt?: SortOrder
    isRead?: SortOrder
    stockLot?: StockLotOrderByWithRelationInput
  }

  export type ExpiryAlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpiryAlertWhereInput | ExpiryAlertWhereInput[]
    OR?: ExpiryAlertWhereInput[]
    NOT?: ExpiryAlertWhereInput | ExpiryAlertWhereInput[]
    stockLotId?: StringFilter<"ExpiryAlert"> | string
    alertType?: StringFilter<"ExpiryAlert"> | string
    sentAt?: DateTimeFilter<"ExpiryAlert"> | Date | string
    isRead?: BoolFilter<"ExpiryAlert"> | boolean
    stockLot?: XOR<StockLotRelationFilter, StockLotWhereInput>
  }, "id">

  export type ExpiryAlertOrderByWithAggregationInput = {
    id?: SortOrder
    stockLotId?: SortOrder
    alertType?: SortOrder
    sentAt?: SortOrder
    isRead?: SortOrder
    _count?: ExpiryAlertCountOrderByAggregateInput
    _max?: ExpiryAlertMaxOrderByAggregateInput
    _min?: ExpiryAlertMinOrderByAggregateInput
  }

  export type ExpiryAlertScalarWhereWithAggregatesInput = {
    AND?: ExpiryAlertScalarWhereWithAggregatesInput | ExpiryAlertScalarWhereWithAggregatesInput[]
    OR?: ExpiryAlertScalarWhereWithAggregatesInput[]
    NOT?: ExpiryAlertScalarWhereWithAggregatesInput | ExpiryAlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExpiryAlert"> | string
    stockLotId?: StringWithAggregatesFilter<"ExpiryAlert"> | string
    alertType?: StringWithAggregatesFilter<"ExpiryAlert"> | string
    sentAt?: DateTimeWithAggregatesFilter<"ExpiryAlert"> | Date | string
    isRead?: BoolWithAggregatesFilter<"ExpiryAlert"> | boolean
  }

  export type NotificationSettingWhereInput = {
    AND?: NotificationSettingWhereInput | NotificationSettingWhereInput[]
    OR?: NotificationSettingWhereInput[]
    NOT?: NotificationSettingWhereInput | NotificationSettingWhereInput[]
    id?: StringFilter<"NotificationSetting"> | string
    userId?: StringFilter<"NotificationSetting"> | string
    days30?: BoolFilter<"NotificationSetting"> | boolean
    days15?: BoolFilter<"NotificationSetting"> | boolean
    days7?: BoolFilter<"NotificationSetting"> | boolean
    expired?: BoolFilter<"NotificationSetting"> | boolean
    pushToken?: StringNullableFilter<"NotificationSetting"> | string | null
    updatedAt?: DateTimeFilter<"NotificationSetting"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationSettingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    days30?: SortOrder
    days15?: SortOrder
    days7?: SortOrder
    expired?: SortOrder
    pushToken?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: NotificationSettingWhereInput | NotificationSettingWhereInput[]
    OR?: NotificationSettingWhereInput[]
    NOT?: NotificationSettingWhereInput | NotificationSettingWhereInput[]
    days30?: BoolFilter<"NotificationSetting"> | boolean
    days15?: BoolFilter<"NotificationSetting"> | boolean
    days7?: BoolFilter<"NotificationSetting"> | boolean
    expired?: BoolFilter<"NotificationSetting"> | boolean
    pushToken?: StringNullableFilter<"NotificationSetting"> | string | null
    updatedAt?: DateTimeFilter<"NotificationSetting"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type NotificationSettingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    days30?: SortOrder
    days15?: SortOrder
    days7?: SortOrder
    expired?: SortOrder
    pushToken?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: NotificationSettingCountOrderByAggregateInput
    _max?: NotificationSettingMaxOrderByAggregateInput
    _min?: NotificationSettingMinOrderByAggregateInput
  }

  export type NotificationSettingScalarWhereWithAggregatesInput = {
    AND?: NotificationSettingScalarWhereWithAggregatesInput | NotificationSettingScalarWhereWithAggregatesInput[]
    OR?: NotificationSettingScalarWhereWithAggregatesInput[]
    NOT?: NotificationSettingScalarWhereWithAggregatesInput | NotificationSettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationSetting"> | string
    userId?: StringWithAggregatesFilter<"NotificationSetting"> | string
    days30?: BoolWithAggregatesFilter<"NotificationSetting"> | boolean
    days15?: BoolWithAggregatesFilter<"NotificationSetting"> | boolean
    days7?: BoolWithAggregatesFilter<"NotificationSetting"> | boolean
    expired?: BoolWithAggregatesFilter<"NotificationSetting"> | boolean
    pushToken?: StringNullableWithAggregatesFilter<"NotificationSetting"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"NotificationSetting"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    details?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type InventoryCountWhereInput = {
    AND?: InventoryCountWhereInput | InventoryCountWhereInput[]
    OR?: InventoryCountWhereInput[]
    NOT?: InventoryCountWhereInput | InventoryCountWhereInput[]
    id?: StringFilter<"InventoryCount"> | string
    branchId?: StringFilter<"InventoryCount"> | string
    period?: StringFilter<"InventoryCount"> | string
    notes?: StringNullableFilter<"InventoryCount"> | string | null
    status?: StringFilter<"InventoryCount"> | string
    createdBy?: StringFilter<"InventoryCount"> | string
    confirmedBy?: StringNullableFilter<"InventoryCount"> | string | null
    confirmedAt?: DateTimeNullableFilter<"InventoryCount"> | Date | string | null
    createdAt?: DateTimeFilter<"InventoryCount"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryCount"> | Date | string
    branch?: XOR<BranchRelationFilter, BranchWhereInput>
    creator?: XOR<UserRelationFilter, UserWhereInput>
    confirmer?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    items?: InventoryCountItemListRelationFilter
  }

  export type InventoryCountOrderByWithRelationInput = {
    id?: SortOrder
    branchId?: SortOrder
    period?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    confirmedBy?: SortOrderInput | SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    confirmer?: UserOrderByWithRelationInput
    items?: InventoryCountItemOrderByRelationAggregateInput
  }

  export type InventoryCountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    branchId_period?: InventoryCountBranchIdPeriodCompoundUniqueInput
    AND?: InventoryCountWhereInput | InventoryCountWhereInput[]
    OR?: InventoryCountWhereInput[]
    NOT?: InventoryCountWhereInput | InventoryCountWhereInput[]
    branchId?: StringFilter<"InventoryCount"> | string
    period?: StringFilter<"InventoryCount"> | string
    notes?: StringNullableFilter<"InventoryCount"> | string | null
    status?: StringFilter<"InventoryCount"> | string
    createdBy?: StringFilter<"InventoryCount"> | string
    confirmedBy?: StringNullableFilter<"InventoryCount"> | string | null
    confirmedAt?: DateTimeNullableFilter<"InventoryCount"> | Date | string | null
    createdAt?: DateTimeFilter<"InventoryCount"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryCount"> | Date | string
    branch?: XOR<BranchRelationFilter, BranchWhereInput>
    creator?: XOR<UserRelationFilter, UserWhereInput>
    confirmer?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    items?: InventoryCountItemListRelationFilter
  }, "id" | "branchId_period">

  export type InventoryCountOrderByWithAggregationInput = {
    id?: SortOrder
    branchId?: SortOrder
    period?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    confirmedBy?: SortOrderInput | SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InventoryCountCountOrderByAggregateInput
    _max?: InventoryCountMaxOrderByAggregateInput
    _min?: InventoryCountMinOrderByAggregateInput
  }

  export type InventoryCountScalarWhereWithAggregatesInput = {
    AND?: InventoryCountScalarWhereWithAggregatesInput | InventoryCountScalarWhereWithAggregatesInput[]
    OR?: InventoryCountScalarWhereWithAggregatesInput[]
    NOT?: InventoryCountScalarWhereWithAggregatesInput | InventoryCountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryCount"> | string
    branchId?: StringWithAggregatesFilter<"InventoryCount"> | string
    period?: StringWithAggregatesFilter<"InventoryCount"> | string
    notes?: StringNullableWithAggregatesFilter<"InventoryCount"> | string | null
    status?: StringWithAggregatesFilter<"InventoryCount"> | string
    createdBy?: StringWithAggregatesFilter<"InventoryCount"> | string
    confirmedBy?: StringNullableWithAggregatesFilter<"InventoryCount"> | string | null
    confirmedAt?: DateTimeNullableWithAggregatesFilter<"InventoryCount"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InventoryCount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InventoryCount"> | Date | string
  }

  export type InventoryCountItemWhereInput = {
    AND?: InventoryCountItemWhereInput | InventoryCountItemWhereInput[]
    OR?: InventoryCountItemWhereInput[]
    NOT?: InventoryCountItemWhereInput | InventoryCountItemWhereInput[]
    id?: StringFilter<"InventoryCountItem"> | string
    inventoryCountId?: StringFilter<"InventoryCountItem"> | string
    productId?: StringFilter<"InventoryCountItem"> | string
    warehouseId?: StringFilter<"InventoryCountItem"> | string
    systemQuantity?: IntFilter<"InventoryCountItem"> | number
    countedQuantity?: IntNullableFilter<"InventoryCountItem"> | number | null
    difference?: IntNullableFilter<"InventoryCountItem"> | number | null
    notes?: StringNullableFilter<"InventoryCountItem"> | string | null
    createdAt?: DateTimeFilter<"InventoryCountItem"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryCountItem"> | Date | string
    inventoryCount?: XOR<InventoryCountRelationFilter, InventoryCountWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    warehouse?: XOR<WarehouseRelationFilter, WarehouseWhereInput>
  }

  export type InventoryCountItemOrderByWithRelationInput = {
    id?: SortOrder
    inventoryCountId?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    systemQuantity?: SortOrder
    countedQuantity?: SortOrderInput | SortOrder
    difference?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inventoryCount?: InventoryCountOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    warehouse?: WarehouseOrderByWithRelationInput
  }

  export type InventoryCountItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    inventoryCountId_productId_warehouseId?: InventoryCountItemInventoryCountIdProductIdWarehouseIdCompoundUniqueInput
    AND?: InventoryCountItemWhereInput | InventoryCountItemWhereInput[]
    OR?: InventoryCountItemWhereInput[]
    NOT?: InventoryCountItemWhereInput | InventoryCountItemWhereInput[]
    inventoryCountId?: StringFilter<"InventoryCountItem"> | string
    productId?: StringFilter<"InventoryCountItem"> | string
    warehouseId?: StringFilter<"InventoryCountItem"> | string
    systemQuantity?: IntFilter<"InventoryCountItem"> | number
    countedQuantity?: IntNullableFilter<"InventoryCountItem"> | number | null
    difference?: IntNullableFilter<"InventoryCountItem"> | number | null
    notes?: StringNullableFilter<"InventoryCountItem"> | string | null
    createdAt?: DateTimeFilter<"InventoryCountItem"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryCountItem"> | Date | string
    inventoryCount?: XOR<InventoryCountRelationFilter, InventoryCountWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    warehouse?: XOR<WarehouseRelationFilter, WarehouseWhereInput>
  }, "id" | "inventoryCountId_productId_warehouseId">

  export type InventoryCountItemOrderByWithAggregationInput = {
    id?: SortOrder
    inventoryCountId?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    systemQuantity?: SortOrder
    countedQuantity?: SortOrderInput | SortOrder
    difference?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InventoryCountItemCountOrderByAggregateInput
    _avg?: InventoryCountItemAvgOrderByAggregateInput
    _max?: InventoryCountItemMaxOrderByAggregateInput
    _min?: InventoryCountItemMinOrderByAggregateInput
    _sum?: InventoryCountItemSumOrderByAggregateInput
  }

  export type InventoryCountItemScalarWhereWithAggregatesInput = {
    AND?: InventoryCountItemScalarWhereWithAggregatesInput | InventoryCountItemScalarWhereWithAggregatesInput[]
    OR?: InventoryCountItemScalarWhereWithAggregatesInput[]
    NOT?: InventoryCountItemScalarWhereWithAggregatesInput | InventoryCountItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryCountItem"> | string
    inventoryCountId?: StringWithAggregatesFilter<"InventoryCountItem"> | string
    productId?: StringWithAggregatesFilter<"InventoryCountItem"> | string
    warehouseId?: StringWithAggregatesFilter<"InventoryCountItem"> | string
    systemQuantity?: IntWithAggregatesFilter<"InventoryCountItem"> | number
    countedQuantity?: IntNullableWithAggregatesFilter<"InventoryCountItem"> | number | null
    difference?: IntNullableWithAggregatesFilter<"InventoryCountItem"> | number | null
    notes?: StringNullableWithAggregatesFilter<"InventoryCountItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InventoryCountItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InventoryCountItem"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutUsersInput
    stockMovements?: StockMovementCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    notificationSetting?: NotificationSettingCreateNestedOneWithoutUserInput
    inventoryCountsCreated?: InventoryCountCreateNestedManyWithoutCreatorInput
    inventoryCountsConfirmed?: InventoryCountCreateNestedManyWithoutConfirmerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    branchId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    notificationSetting?: NotificationSettingUncheckedCreateNestedOneWithoutUserInput
    inventoryCountsCreated?: InventoryCountUncheckedCreateNestedManyWithoutCreatorInput
    inventoryCountsConfirmed?: InventoryCountUncheckedCreateNestedManyWithoutConfirmerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutUsersNestedInput
    stockMovements?: StockMovementUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    notificationSetting?: NotificationSettingUpdateOneWithoutUserNestedInput
    inventoryCountsCreated?: InventoryCountUpdateManyWithoutCreatorNestedInput
    inventoryCountsConfirmed?: InventoryCountUpdateManyWithoutConfirmerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    notificationSetting?: NotificationSettingUncheckedUpdateOneWithoutUserNestedInput
    inventoryCountsCreated?: InventoryCountUncheckedUpdateManyWithoutCreatorNestedInput
    inventoryCountsConfirmed?: InventoryCountUncheckedUpdateManyWithoutConfirmerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    branchId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchCreateInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutBranchInput
    warehouses?: WarehouseCreateNestedManyWithoutBranchInput
    stockLots?: StockLotCreateNestedManyWithoutBranchInput
    inventoryCounts?: InventoryCountCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    warehouses?: WarehouseUncheckedCreateNestedManyWithoutBranchInput
    stockLots?: StockLotUncheckedCreateNestedManyWithoutBranchInput
    inventoryCounts?: InventoryCountUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBranchNestedInput
    warehouses?: WarehouseUpdateManyWithoutBranchNestedInput
    stockLots?: StockLotUpdateManyWithoutBranchNestedInput
    inventoryCounts?: InventoryCountUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    warehouses?: WarehouseUncheckedUpdateManyWithoutBranchNestedInput
    stockLots?: StockLotUncheckedUpdateManyWithoutBranchNestedInput
    inventoryCounts?: InventoryCountUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateManyInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutWarehousesInput
    stockLots?: StockLotCreateNestedManyWithoutWarehouseInput
    inventoryItems?: InventoryCountItemCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateInput = {
    id?: string
    name: string
    branchId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockLots?: StockLotUncheckedCreateNestedManyWithoutWarehouseInput
    inventoryItems?: InventoryCountItemUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutWarehousesNestedInput
    stockLots?: StockLotUpdateManyWithoutWarehouseNestedInput
    inventoryItems?: InventoryCountItemUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockLots?: StockLotUncheckedUpdateManyWithoutWarehouseNestedInput
    inventoryItems?: InventoryCountItemUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseCreateManyInput = {
    id?: string
    name: string
    branchId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WarehouseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateInput = {
    id?: string
    name: string
    contact?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockLots?: StockLotCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: string
    name: string
    contact?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockLots?: StockLotUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockLots?: StockLotUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockLots?: StockLotUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: string
    name: string
    contact?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    description?: string | null
    unit?: string
    minStock?: number
    productType?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    barcodes?: ProductBarcodeCreateNestedManyWithoutProductInput
    stockLots?: StockLotCreateNestedManyWithoutProductInput
    inventoryItems?: InventoryCountItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    categoryId?: string | null
    unit?: string
    minStock?: number
    productType?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    barcodes?: ProductBarcodeUncheckedCreateNestedManyWithoutProductInput
    stockLots?: StockLotUncheckedCreateNestedManyWithoutProductInput
    inventoryItems?: InventoryCountItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    minStock?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    barcodes?: ProductBarcodeUpdateManyWithoutProductNestedInput
    stockLots?: StockLotUpdateManyWithoutProductNestedInput
    inventoryItems?: InventoryCountItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    minStock?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barcodes?: ProductBarcodeUncheckedUpdateManyWithoutProductNestedInput
    stockLots?: StockLotUncheckedUpdateManyWithoutProductNestedInput
    inventoryItems?: InventoryCountItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    categoryId?: string | null
    unit?: string
    minStock?: number
    productType?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    minStock?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    minStock?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductBarcodeCreateInput = {
    id?: string
    barcode: string
    isPrimary?: boolean
    product: ProductCreateNestedOneWithoutBarcodesInput
  }

  export type ProductBarcodeUncheckedCreateInput = {
    id?: string
    barcode: string
    productId: string
    isPrimary?: boolean
  }

  export type ProductBarcodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    product?: ProductUpdateOneRequiredWithoutBarcodesNestedInput
  }

  export type ProductBarcodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductBarcodeCreateManyInput = {
    id?: string
    barcode: string
    productId: string
    isPrimary?: boolean
  }

  export type ProductBarcodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductBarcodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StockLotCreateInput = {
    id?: string
    lotNumber?: string | null
    expiryDate?: Date | string | null
    quantity?: number
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutStockLotsInput
    warehouse: WarehouseCreateNestedOneWithoutStockLotsInput
    branch: BranchCreateNestedOneWithoutStockLotsInput
    supplier?: SupplierCreateNestedOneWithoutStockLotsInput
    movements?: StockMovementCreateNestedManyWithoutStockLotInput
    expiryAlerts?: ExpiryAlertCreateNestedManyWithoutStockLotInput
  }

  export type StockLotUncheckedCreateInput = {
    id?: string
    productId: string
    warehouseId: string
    branchId: string
    supplierId?: string | null
    lotNumber?: string | null
    expiryDate?: Date | string | null
    quantity?: number
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: StockMovementUncheckedCreateNestedManyWithoutStockLotInput
    expiryAlerts?: ExpiryAlertUncheckedCreateNestedManyWithoutStockLotInput
  }

  export type StockLotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStockLotsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutStockLotsNestedInput
    branch?: BranchUpdateOneRequiredWithoutStockLotsNestedInput
    supplier?: SupplierUpdateOneWithoutStockLotsNestedInput
    movements?: StockMovementUpdateManyWithoutStockLotNestedInput
    expiryAlerts?: ExpiryAlertUpdateManyWithoutStockLotNestedInput
  }

  export type StockLotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: StockMovementUncheckedUpdateManyWithoutStockLotNestedInput
    expiryAlerts?: ExpiryAlertUncheckedUpdateManyWithoutStockLotNestedInput
  }

  export type StockLotCreateManyInput = {
    id?: string
    productId: string
    warehouseId: string
    branchId: string
    supplierId?: string | null
    lotNumber?: string | null
    expiryDate?: Date | string | null
    quantity?: number
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockLotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockLotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateInput = {
    id?: string
    type: string
    quantity: number
    notes?: string | null
    createdAt?: Date | string
    stockLot: StockLotCreateNestedOneWithoutMovementsInput
    user: UserCreateNestedOneWithoutStockMovementsInput
  }

  export type StockMovementUncheckedCreateInput = {
    id?: string
    stockLotId: string
    type: string
    quantity: number
    notes?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type StockMovementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockLot?: StockLotUpdateOneRequiredWithoutMovementsNestedInput
    user?: UserUpdateOneRequiredWithoutStockMovementsNestedInput
  }

  export type StockMovementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockLotId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateManyInput = {
    id?: string
    stockLotId: string
    type: string
    quantity: number
    notes?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type StockMovementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockLotId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpiryAlertCreateInput = {
    id?: string
    alertType: string
    sentAt?: Date | string
    isRead?: boolean
    stockLot: StockLotCreateNestedOneWithoutExpiryAlertsInput
  }

  export type ExpiryAlertUncheckedCreateInput = {
    id?: string
    stockLotId: string
    alertType: string
    sentAt?: Date | string
    isRead?: boolean
  }

  export type ExpiryAlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    stockLot?: StockLotUpdateOneRequiredWithoutExpiryAlertsNestedInput
  }

  export type ExpiryAlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockLotId?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpiryAlertCreateManyInput = {
    id?: string
    stockLotId: string
    alertType: string
    sentAt?: Date | string
    isRead?: boolean
  }

  export type ExpiryAlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpiryAlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockLotId?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationSettingCreateInput = {
    id?: string
    days30?: boolean
    days15?: boolean
    days7?: boolean
    expired?: boolean
    pushToken?: string | null
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationSettingInput
  }

  export type NotificationSettingUncheckedCreateInput = {
    id?: string
    userId: string
    days30?: boolean
    days15?: boolean
    days7?: boolean
    expired?: boolean
    pushToken?: string | null
    updatedAt?: Date | string
  }

  export type NotificationSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    days30?: BoolFieldUpdateOperationsInput | boolean
    days15?: BoolFieldUpdateOperationsInput | boolean
    days7?: BoolFieldUpdateOperationsInput | boolean
    expired?: BoolFieldUpdateOperationsInput | boolean
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationSettingNestedInput
  }

  export type NotificationSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    days30?: BoolFieldUpdateOperationsInput | boolean
    days15?: BoolFieldUpdateOperationsInput | boolean
    days7?: BoolFieldUpdateOperationsInput | boolean
    expired?: BoolFieldUpdateOperationsInput | boolean
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSettingCreateManyInput = {
    id?: string
    userId: string
    days30?: boolean
    days15?: boolean
    days7?: boolean
    expired?: boolean
    pushToken?: string | null
    updatedAt?: Date | string
  }

  export type NotificationSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    days30?: BoolFieldUpdateOperationsInput | boolean
    days15?: BoolFieldUpdateOperationsInput | boolean
    days7?: BoolFieldUpdateOperationsInput | boolean
    expired?: BoolFieldUpdateOperationsInput | boolean
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    days30?: BoolFieldUpdateOperationsInput | boolean
    days15?: BoolFieldUpdateOperationsInput | boolean
    days7?: BoolFieldUpdateOperationsInput | boolean
    expired?: BoolFieldUpdateOperationsInput | boolean
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entity: string
    entityId: string
    details?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    userId: string
    action: string
    entity: string
    entityId: string
    details?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    userId: string
    action: string
    entity: string
    entityId: string
    details?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCountCreateInput = {
    id?: string
    period: string
    notes?: string | null
    status?: string
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutInventoryCountsInput
    creator: UserCreateNestedOneWithoutInventoryCountsCreatedInput
    confirmer?: UserCreateNestedOneWithoutInventoryCountsConfirmedInput
    items?: InventoryCountItemCreateNestedManyWithoutInventoryCountInput
  }

  export type InventoryCountUncheckedCreateInput = {
    id?: string
    branchId: string
    period: string
    notes?: string | null
    status?: string
    createdBy: string
    confirmedBy?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InventoryCountItemUncheckedCreateNestedManyWithoutInventoryCountInput
  }

  export type InventoryCountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutInventoryCountsNestedInput
    creator?: UserUpdateOneRequiredWithoutInventoryCountsCreatedNestedInput
    confirmer?: UserUpdateOneWithoutInventoryCountsConfirmedNestedInput
    items?: InventoryCountItemUpdateManyWithoutInventoryCountNestedInput
  }

  export type InventoryCountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    confirmedBy?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InventoryCountItemUncheckedUpdateManyWithoutInventoryCountNestedInput
  }

  export type InventoryCountCreateManyInput = {
    id?: string
    branchId: string
    period: string
    notes?: string | null
    status?: string
    createdBy: string
    confirmedBy?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryCountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    confirmedBy?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCountItemCreateInput = {
    id?: string
    systemQuantity: number
    countedQuantity?: number | null
    difference?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryCount: InventoryCountCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutInventoryItemsInput
    warehouse: WarehouseCreateNestedOneWithoutInventoryItemsInput
  }

  export type InventoryCountItemUncheckedCreateInput = {
    id?: string
    inventoryCountId: string
    productId: string
    warehouseId: string
    systemQuantity: number
    countedQuantity?: number | null
    difference?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryCountItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    systemQuantity?: IntFieldUpdateOperationsInput | number
    countedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryCount?: InventoryCountUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutInventoryItemsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutInventoryItemsNestedInput
  }

  export type InventoryCountItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryCountId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    systemQuantity?: IntFieldUpdateOperationsInput | number
    countedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCountItemCreateManyInput = {
    id?: string
    inventoryCountId: string
    productId: string
    warehouseId: string
    systemQuantity: number
    countedQuantity?: number | null
    difference?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryCountItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    systemQuantity?: IntFieldUpdateOperationsInput | number
    countedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCountItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryCountId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    systemQuantity?: IntFieldUpdateOperationsInput | number
    countedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type BranchNullableRelationFilter = {
    is?: BranchWhereInput | null
    isNot?: BranchWhereInput | null
  }

  export type StockMovementListRelationFilter = {
    every?: StockMovementWhereInput
    some?: StockMovementWhereInput
    none?: StockMovementWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type NotificationSettingNullableRelationFilter = {
    is?: NotificationSettingWhereInput | null
    isNot?: NotificationSettingWhereInput | null
  }

  export type InventoryCountListRelationFilter = {
    every?: InventoryCountWhereInput
    some?: InventoryCountWhereInput
    none?: InventoryCountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StockMovementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryCountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    branchId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    branchId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    branchId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type WarehouseListRelationFilter = {
    every?: WarehouseWhereInput
    some?: WarehouseWhereInput
    none?: WarehouseWhereInput
  }

  export type StockLotListRelationFilter = {
    every?: StockLotWhereInput
    some?: StockLotWhereInput
    none?: StockLotWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarehouseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockLotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchRelationFilter = {
    is?: BranchWhereInput
    isNot?: BranchWhereInput
  }

  export type InventoryCountItemListRelationFilter = {
    every?: InventoryCountItemWhereInput
    some?: InventoryCountItemWhereInput
    none?: InventoryCountItemWhereInput
  }

  export type InventoryCountItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarehouseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WarehouseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WarehouseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type CategoryNullableRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type ProductBarcodeListRelationFilter = {
    every?: ProductBarcodeWhereInput
    some?: ProductBarcodeWhereInput
    none?: ProductBarcodeWhereInput
  }

  export type ProductBarcodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    unit?: SortOrder
    minStock?: SortOrder
    productType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    minStock?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    unit?: SortOrder
    minStock?: SortOrder
    productType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    unit?: SortOrder
    minStock?: SortOrder
    productType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    minStock?: SortOrder
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

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductBarcodeCountOrderByAggregateInput = {
    id?: SortOrder
    barcode?: SortOrder
    productId?: SortOrder
    isPrimary?: SortOrder
  }

  export type ProductBarcodeMaxOrderByAggregateInput = {
    id?: SortOrder
    barcode?: SortOrder
    productId?: SortOrder
    isPrimary?: SortOrder
  }

  export type ProductBarcodeMinOrderByAggregateInput = {
    id?: SortOrder
    barcode?: SortOrder
    productId?: SortOrder
    isPrimary?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type WarehouseRelationFilter = {
    is?: WarehouseWhereInput
    isNot?: WarehouseWhereInput
  }

  export type SupplierNullableRelationFilter = {
    is?: SupplierWhereInput | null
    isNot?: SupplierWhereInput | null
  }

  export type ExpiryAlertListRelationFilter = {
    every?: ExpiryAlertWhereInput
    some?: ExpiryAlertWhereInput
    none?: ExpiryAlertWhereInput
  }

  export type ExpiryAlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockLotCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    branchId?: SortOrder
    supplierId?: SortOrder
    lotNumber?: SortOrder
    expiryDate?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockLotAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type StockLotMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    branchId?: SortOrder
    supplierId?: SortOrder
    lotNumber?: SortOrder
    expiryDate?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockLotMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    branchId?: SortOrder
    supplierId?: SortOrder
    lotNumber?: SortOrder
    expiryDate?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockLotSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StockLotRelationFilter = {
    is?: StockLotWhereInput
    isNot?: StockLotWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StockMovementCountOrderByAggregateInput = {
    id?: SortOrder
    stockLotId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type StockMovementAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type StockMovementMaxOrderByAggregateInput = {
    id?: SortOrder
    stockLotId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type StockMovementMinOrderByAggregateInput = {
    id?: SortOrder
    stockLotId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type StockMovementSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ExpiryAlertCountOrderByAggregateInput = {
    id?: SortOrder
    stockLotId?: SortOrder
    alertType?: SortOrder
    sentAt?: SortOrder
    isRead?: SortOrder
  }

  export type ExpiryAlertMaxOrderByAggregateInput = {
    id?: SortOrder
    stockLotId?: SortOrder
    alertType?: SortOrder
    sentAt?: SortOrder
    isRead?: SortOrder
  }

  export type ExpiryAlertMinOrderByAggregateInput = {
    id?: SortOrder
    stockLotId?: SortOrder
    alertType?: SortOrder
    sentAt?: SortOrder
    isRead?: SortOrder
  }

  export type NotificationSettingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    days30?: SortOrder
    days15?: SortOrder
    days7?: SortOrder
    expired?: SortOrder
    pushToken?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    days30?: SortOrder
    days15?: SortOrder
    days7?: SortOrder
    expired?: SortOrder
    pushToken?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSettingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    days30?: SortOrder
    days15?: SortOrder
    days7?: SortOrder
    expired?: SortOrder
    pushToken?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type InventoryCountBranchIdPeriodCompoundUniqueInput = {
    branchId: string
    period: string
  }

  export type InventoryCountCountOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    period?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    confirmedBy?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryCountMaxOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    period?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    confirmedBy?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryCountMinOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    period?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    confirmedBy?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type InventoryCountRelationFilter = {
    is?: InventoryCountWhereInput
    isNot?: InventoryCountWhereInput
  }

  export type InventoryCountItemInventoryCountIdProductIdWarehouseIdCompoundUniqueInput = {
    inventoryCountId: string
    productId: string
    warehouseId: string
  }

  export type InventoryCountItemCountOrderByAggregateInput = {
    id?: SortOrder
    inventoryCountId?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    systemQuantity?: SortOrder
    countedQuantity?: SortOrder
    difference?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryCountItemAvgOrderByAggregateInput = {
    systemQuantity?: SortOrder
    countedQuantity?: SortOrder
    difference?: SortOrder
  }

  export type InventoryCountItemMaxOrderByAggregateInput = {
    id?: SortOrder
    inventoryCountId?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    systemQuantity?: SortOrder
    countedQuantity?: SortOrder
    difference?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryCountItemMinOrderByAggregateInput = {
    id?: SortOrder
    inventoryCountId?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    systemQuantity?: SortOrder
    countedQuantity?: SortOrder
    difference?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryCountItemSumOrderByAggregateInput = {
    systemQuantity?: SortOrder
    countedQuantity?: SortOrder
    difference?: SortOrder
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

  export type BranchCreateNestedOneWithoutUsersInput = {
    create?: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutUsersInput
    connect?: BranchWhereUniqueInput
  }

  export type StockMovementCreateNestedManyWithoutUserInput = {
    create?: XOR<StockMovementCreateWithoutUserInput, StockMovementUncheckedCreateWithoutUserInput> | StockMovementCreateWithoutUserInput[] | StockMovementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutUserInput | StockMovementCreateOrConnectWithoutUserInput[]
    createMany?: StockMovementCreateManyUserInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type NotificationSettingCreateNestedOneWithoutUserInput = {
    create?: XOR<NotificationSettingCreateWithoutUserInput, NotificationSettingUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationSettingCreateOrConnectWithoutUserInput
    connect?: NotificationSettingWhereUniqueInput
  }

  export type InventoryCountCreateNestedManyWithoutCreatorInput = {
    create?: XOR<InventoryCountCreateWithoutCreatorInput, InventoryCountUncheckedCreateWithoutCreatorInput> | InventoryCountCreateWithoutCreatorInput[] | InventoryCountUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: InventoryCountCreateOrConnectWithoutCreatorInput | InventoryCountCreateOrConnectWithoutCreatorInput[]
    createMany?: InventoryCountCreateManyCreatorInputEnvelope
    connect?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
  }

  export type InventoryCountCreateNestedManyWithoutConfirmerInput = {
    create?: XOR<InventoryCountCreateWithoutConfirmerInput, InventoryCountUncheckedCreateWithoutConfirmerInput> | InventoryCountCreateWithoutConfirmerInput[] | InventoryCountUncheckedCreateWithoutConfirmerInput[]
    connectOrCreate?: InventoryCountCreateOrConnectWithoutConfirmerInput | InventoryCountCreateOrConnectWithoutConfirmerInput[]
    createMany?: InventoryCountCreateManyConfirmerInputEnvelope
    connect?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
  }

  export type StockMovementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StockMovementCreateWithoutUserInput, StockMovementUncheckedCreateWithoutUserInput> | StockMovementCreateWithoutUserInput[] | StockMovementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutUserInput | StockMovementCreateOrConnectWithoutUserInput[]
    createMany?: StockMovementCreateManyUserInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type NotificationSettingUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<NotificationSettingCreateWithoutUserInput, NotificationSettingUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationSettingCreateOrConnectWithoutUserInput
    connect?: NotificationSettingWhereUniqueInput
  }

  export type InventoryCountUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<InventoryCountCreateWithoutCreatorInput, InventoryCountUncheckedCreateWithoutCreatorInput> | InventoryCountCreateWithoutCreatorInput[] | InventoryCountUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: InventoryCountCreateOrConnectWithoutCreatorInput | InventoryCountCreateOrConnectWithoutCreatorInput[]
    createMany?: InventoryCountCreateManyCreatorInputEnvelope
    connect?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
  }

  export type InventoryCountUncheckedCreateNestedManyWithoutConfirmerInput = {
    create?: XOR<InventoryCountCreateWithoutConfirmerInput, InventoryCountUncheckedCreateWithoutConfirmerInput> | InventoryCountCreateWithoutConfirmerInput[] | InventoryCountUncheckedCreateWithoutConfirmerInput[]
    connectOrCreate?: InventoryCountCreateOrConnectWithoutConfirmerInput | InventoryCountCreateOrConnectWithoutConfirmerInput[]
    createMany?: InventoryCountCreateManyConfirmerInputEnvelope
    connect?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BranchUpdateOneWithoutUsersNestedInput = {
    create?: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutUsersInput
    upsert?: BranchUpsertWithoutUsersInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutUsersInput, BranchUpdateWithoutUsersInput>, BranchUncheckedUpdateWithoutUsersInput>
  }

  export type StockMovementUpdateManyWithoutUserNestedInput = {
    create?: XOR<StockMovementCreateWithoutUserInput, StockMovementUncheckedCreateWithoutUserInput> | StockMovementCreateWithoutUserInput[] | StockMovementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutUserInput | StockMovementCreateOrConnectWithoutUserInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutUserInput | StockMovementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StockMovementCreateManyUserInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutUserInput | StockMovementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutUserInput | StockMovementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type NotificationSettingUpdateOneWithoutUserNestedInput = {
    create?: XOR<NotificationSettingCreateWithoutUserInput, NotificationSettingUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationSettingCreateOrConnectWithoutUserInput
    upsert?: NotificationSettingUpsertWithoutUserInput
    disconnect?: NotificationSettingWhereInput | boolean
    delete?: NotificationSettingWhereInput | boolean
    connect?: NotificationSettingWhereUniqueInput
    update?: XOR<XOR<NotificationSettingUpdateToOneWithWhereWithoutUserInput, NotificationSettingUpdateWithoutUserInput>, NotificationSettingUncheckedUpdateWithoutUserInput>
  }

  export type InventoryCountUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<InventoryCountCreateWithoutCreatorInput, InventoryCountUncheckedCreateWithoutCreatorInput> | InventoryCountCreateWithoutCreatorInput[] | InventoryCountUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: InventoryCountCreateOrConnectWithoutCreatorInput | InventoryCountCreateOrConnectWithoutCreatorInput[]
    upsert?: InventoryCountUpsertWithWhereUniqueWithoutCreatorInput | InventoryCountUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: InventoryCountCreateManyCreatorInputEnvelope
    set?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    disconnect?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    delete?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    connect?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    update?: InventoryCountUpdateWithWhereUniqueWithoutCreatorInput | InventoryCountUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: InventoryCountUpdateManyWithWhereWithoutCreatorInput | InventoryCountUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: InventoryCountScalarWhereInput | InventoryCountScalarWhereInput[]
  }

  export type InventoryCountUpdateManyWithoutConfirmerNestedInput = {
    create?: XOR<InventoryCountCreateWithoutConfirmerInput, InventoryCountUncheckedCreateWithoutConfirmerInput> | InventoryCountCreateWithoutConfirmerInput[] | InventoryCountUncheckedCreateWithoutConfirmerInput[]
    connectOrCreate?: InventoryCountCreateOrConnectWithoutConfirmerInput | InventoryCountCreateOrConnectWithoutConfirmerInput[]
    upsert?: InventoryCountUpsertWithWhereUniqueWithoutConfirmerInput | InventoryCountUpsertWithWhereUniqueWithoutConfirmerInput[]
    createMany?: InventoryCountCreateManyConfirmerInputEnvelope
    set?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    disconnect?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    delete?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    connect?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    update?: InventoryCountUpdateWithWhereUniqueWithoutConfirmerInput | InventoryCountUpdateWithWhereUniqueWithoutConfirmerInput[]
    updateMany?: InventoryCountUpdateManyWithWhereWithoutConfirmerInput | InventoryCountUpdateManyWithWhereWithoutConfirmerInput[]
    deleteMany?: InventoryCountScalarWhereInput | InventoryCountScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StockMovementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StockMovementCreateWithoutUserInput, StockMovementUncheckedCreateWithoutUserInput> | StockMovementCreateWithoutUserInput[] | StockMovementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutUserInput | StockMovementCreateOrConnectWithoutUserInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutUserInput | StockMovementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StockMovementCreateManyUserInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutUserInput | StockMovementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutUserInput | StockMovementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type NotificationSettingUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<NotificationSettingCreateWithoutUserInput, NotificationSettingUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationSettingCreateOrConnectWithoutUserInput
    upsert?: NotificationSettingUpsertWithoutUserInput
    disconnect?: NotificationSettingWhereInput | boolean
    delete?: NotificationSettingWhereInput | boolean
    connect?: NotificationSettingWhereUniqueInput
    update?: XOR<XOR<NotificationSettingUpdateToOneWithWhereWithoutUserInput, NotificationSettingUpdateWithoutUserInput>, NotificationSettingUncheckedUpdateWithoutUserInput>
  }

  export type InventoryCountUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<InventoryCountCreateWithoutCreatorInput, InventoryCountUncheckedCreateWithoutCreatorInput> | InventoryCountCreateWithoutCreatorInput[] | InventoryCountUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: InventoryCountCreateOrConnectWithoutCreatorInput | InventoryCountCreateOrConnectWithoutCreatorInput[]
    upsert?: InventoryCountUpsertWithWhereUniqueWithoutCreatorInput | InventoryCountUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: InventoryCountCreateManyCreatorInputEnvelope
    set?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    disconnect?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    delete?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    connect?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    update?: InventoryCountUpdateWithWhereUniqueWithoutCreatorInput | InventoryCountUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: InventoryCountUpdateManyWithWhereWithoutCreatorInput | InventoryCountUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: InventoryCountScalarWhereInput | InventoryCountScalarWhereInput[]
  }

  export type InventoryCountUncheckedUpdateManyWithoutConfirmerNestedInput = {
    create?: XOR<InventoryCountCreateWithoutConfirmerInput, InventoryCountUncheckedCreateWithoutConfirmerInput> | InventoryCountCreateWithoutConfirmerInput[] | InventoryCountUncheckedCreateWithoutConfirmerInput[]
    connectOrCreate?: InventoryCountCreateOrConnectWithoutConfirmerInput | InventoryCountCreateOrConnectWithoutConfirmerInput[]
    upsert?: InventoryCountUpsertWithWhereUniqueWithoutConfirmerInput | InventoryCountUpsertWithWhereUniqueWithoutConfirmerInput[]
    createMany?: InventoryCountCreateManyConfirmerInputEnvelope
    set?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    disconnect?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    delete?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    connect?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    update?: InventoryCountUpdateWithWhereUniqueWithoutConfirmerInput | InventoryCountUpdateWithWhereUniqueWithoutConfirmerInput[]
    updateMany?: InventoryCountUpdateManyWithWhereWithoutConfirmerInput | InventoryCountUpdateManyWithWhereWithoutConfirmerInput[]
    deleteMany?: InventoryCountScalarWhereInput | InventoryCountScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutBranchInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type WarehouseCreateNestedManyWithoutBranchInput = {
    create?: XOR<WarehouseCreateWithoutBranchInput, WarehouseUncheckedCreateWithoutBranchInput> | WarehouseCreateWithoutBranchInput[] | WarehouseUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutBranchInput | WarehouseCreateOrConnectWithoutBranchInput[]
    createMany?: WarehouseCreateManyBranchInputEnvelope
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
  }

  export type StockLotCreateNestedManyWithoutBranchInput = {
    create?: XOR<StockLotCreateWithoutBranchInput, StockLotUncheckedCreateWithoutBranchInput> | StockLotCreateWithoutBranchInput[] | StockLotUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StockLotCreateOrConnectWithoutBranchInput | StockLotCreateOrConnectWithoutBranchInput[]
    createMany?: StockLotCreateManyBranchInputEnvelope
    connect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
  }

  export type InventoryCountCreateNestedManyWithoutBranchInput = {
    create?: XOR<InventoryCountCreateWithoutBranchInput, InventoryCountUncheckedCreateWithoutBranchInput> | InventoryCountCreateWithoutBranchInput[] | InventoryCountUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: InventoryCountCreateOrConnectWithoutBranchInput | InventoryCountCreateOrConnectWithoutBranchInput[]
    createMany?: InventoryCountCreateManyBranchInputEnvelope
    connect?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type WarehouseUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<WarehouseCreateWithoutBranchInput, WarehouseUncheckedCreateWithoutBranchInput> | WarehouseCreateWithoutBranchInput[] | WarehouseUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutBranchInput | WarehouseCreateOrConnectWithoutBranchInput[]
    createMany?: WarehouseCreateManyBranchInputEnvelope
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
  }

  export type StockLotUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<StockLotCreateWithoutBranchInput, StockLotUncheckedCreateWithoutBranchInput> | StockLotCreateWithoutBranchInput[] | StockLotUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StockLotCreateOrConnectWithoutBranchInput | StockLotCreateOrConnectWithoutBranchInput[]
    createMany?: StockLotCreateManyBranchInputEnvelope
    connect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
  }

  export type InventoryCountUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<InventoryCountCreateWithoutBranchInput, InventoryCountUncheckedCreateWithoutBranchInput> | InventoryCountCreateWithoutBranchInput[] | InventoryCountUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: InventoryCountCreateOrConnectWithoutBranchInput | InventoryCountCreateOrConnectWithoutBranchInput[]
    createMany?: InventoryCountCreateManyBranchInputEnvelope
    connect?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutBranchNestedInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBranchInput | UserUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBranchInput | UserUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBranchInput | UserUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type WarehouseUpdateManyWithoutBranchNestedInput = {
    create?: XOR<WarehouseCreateWithoutBranchInput, WarehouseUncheckedCreateWithoutBranchInput> | WarehouseCreateWithoutBranchInput[] | WarehouseUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutBranchInput | WarehouseCreateOrConnectWithoutBranchInput[]
    upsert?: WarehouseUpsertWithWhereUniqueWithoutBranchInput | WarehouseUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: WarehouseCreateManyBranchInputEnvelope
    set?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    disconnect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    delete?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    update?: WarehouseUpdateWithWhereUniqueWithoutBranchInput | WarehouseUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: WarehouseUpdateManyWithWhereWithoutBranchInput | WarehouseUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
  }

  export type StockLotUpdateManyWithoutBranchNestedInput = {
    create?: XOR<StockLotCreateWithoutBranchInput, StockLotUncheckedCreateWithoutBranchInput> | StockLotCreateWithoutBranchInput[] | StockLotUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StockLotCreateOrConnectWithoutBranchInput | StockLotCreateOrConnectWithoutBranchInput[]
    upsert?: StockLotUpsertWithWhereUniqueWithoutBranchInput | StockLotUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: StockLotCreateManyBranchInputEnvelope
    set?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    disconnect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    delete?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    connect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    update?: StockLotUpdateWithWhereUniqueWithoutBranchInput | StockLotUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: StockLotUpdateManyWithWhereWithoutBranchInput | StockLotUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: StockLotScalarWhereInput | StockLotScalarWhereInput[]
  }

  export type InventoryCountUpdateManyWithoutBranchNestedInput = {
    create?: XOR<InventoryCountCreateWithoutBranchInput, InventoryCountUncheckedCreateWithoutBranchInput> | InventoryCountCreateWithoutBranchInput[] | InventoryCountUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: InventoryCountCreateOrConnectWithoutBranchInput | InventoryCountCreateOrConnectWithoutBranchInput[]
    upsert?: InventoryCountUpsertWithWhereUniqueWithoutBranchInput | InventoryCountUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: InventoryCountCreateManyBranchInputEnvelope
    set?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    disconnect?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    delete?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    connect?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    update?: InventoryCountUpdateWithWhereUniqueWithoutBranchInput | InventoryCountUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: InventoryCountUpdateManyWithWhereWithoutBranchInput | InventoryCountUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: InventoryCountScalarWhereInput | InventoryCountScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBranchInput | UserUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBranchInput | UserUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBranchInput | UserUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type WarehouseUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<WarehouseCreateWithoutBranchInput, WarehouseUncheckedCreateWithoutBranchInput> | WarehouseCreateWithoutBranchInput[] | WarehouseUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutBranchInput | WarehouseCreateOrConnectWithoutBranchInput[]
    upsert?: WarehouseUpsertWithWhereUniqueWithoutBranchInput | WarehouseUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: WarehouseCreateManyBranchInputEnvelope
    set?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    disconnect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    delete?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    update?: WarehouseUpdateWithWhereUniqueWithoutBranchInput | WarehouseUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: WarehouseUpdateManyWithWhereWithoutBranchInput | WarehouseUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
  }

  export type StockLotUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<StockLotCreateWithoutBranchInput, StockLotUncheckedCreateWithoutBranchInput> | StockLotCreateWithoutBranchInput[] | StockLotUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StockLotCreateOrConnectWithoutBranchInput | StockLotCreateOrConnectWithoutBranchInput[]
    upsert?: StockLotUpsertWithWhereUniqueWithoutBranchInput | StockLotUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: StockLotCreateManyBranchInputEnvelope
    set?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    disconnect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    delete?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    connect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    update?: StockLotUpdateWithWhereUniqueWithoutBranchInput | StockLotUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: StockLotUpdateManyWithWhereWithoutBranchInput | StockLotUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: StockLotScalarWhereInput | StockLotScalarWhereInput[]
  }

  export type InventoryCountUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<InventoryCountCreateWithoutBranchInput, InventoryCountUncheckedCreateWithoutBranchInput> | InventoryCountCreateWithoutBranchInput[] | InventoryCountUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: InventoryCountCreateOrConnectWithoutBranchInput | InventoryCountCreateOrConnectWithoutBranchInput[]
    upsert?: InventoryCountUpsertWithWhereUniqueWithoutBranchInput | InventoryCountUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: InventoryCountCreateManyBranchInputEnvelope
    set?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    disconnect?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    delete?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    connect?: InventoryCountWhereUniqueInput | InventoryCountWhereUniqueInput[]
    update?: InventoryCountUpdateWithWhereUniqueWithoutBranchInput | InventoryCountUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: InventoryCountUpdateManyWithWhereWithoutBranchInput | InventoryCountUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: InventoryCountScalarWhereInput | InventoryCountScalarWhereInput[]
  }

  export type BranchCreateNestedOneWithoutWarehousesInput = {
    create?: XOR<BranchCreateWithoutWarehousesInput, BranchUncheckedCreateWithoutWarehousesInput>
    connectOrCreate?: BranchCreateOrConnectWithoutWarehousesInput
    connect?: BranchWhereUniqueInput
  }

  export type StockLotCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<StockLotCreateWithoutWarehouseInput, StockLotUncheckedCreateWithoutWarehouseInput> | StockLotCreateWithoutWarehouseInput[] | StockLotUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: StockLotCreateOrConnectWithoutWarehouseInput | StockLotCreateOrConnectWithoutWarehouseInput[]
    createMany?: StockLotCreateManyWarehouseInputEnvelope
    connect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
  }

  export type InventoryCountItemCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<InventoryCountItemCreateWithoutWarehouseInput, InventoryCountItemUncheckedCreateWithoutWarehouseInput> | InventoryCountItemCreateWithoutWarehouseInput[] | InventoryCountItemUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InventoryCountItemCreateOrConnectWithoutWarehouseInput | InventoryCountItemCreateOrConnectWithoutWarehouseInput[]
    createMany?: InventoryCountItemCreateManyWarehouseInputEnvelope
    connect?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
  }

  export type StockLotUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<StockLotCreateWithoutWarehouseInput, StockLotUncheckedCreateWithoutWarehouseInput> | StockLotCreateWithoutWarehouseInput[] | StockLotUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: StockLotCreateOrConnectWithoutWarehouseInput | StockLotCreateOrConnectWithoutWarehouseInput[]
    createMany?: StockLotCreateManyWarehouseInputEnvelope
    connect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
  }

  export type InventoryCountItemUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<InventoryCountItemCreateWithoutWarehouseInput, InventoryCountItemUncheckedCreateWithoutWarehouseInput> | InventoryCountItemCreateWithoutWarehouseInput[] | InventoryCountItemUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InventoryCountItemCreateOrConnectWithoutWarehouseInput | InventoryCountItemCreateOrConnectWithoutWarehouseInput[]
    createMany?: InventoryCountItemCreateManyWarehouseInputEnvelope
    connect?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
  }

  export type BranchUpdateOneRequiredWithoutWarehousesNestedInput = {
    create?: XOR<BranchCreateWithoutWarehousesInput, BranchUncheckedCreateWithoutWarehousesInput>
    connectOrCreate?: BranchCreateOrConnectWithoutWarehousesInput
    upsert?: BranchUpsertWithoutWarehousesInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutWarehousesInput, BranchUpdateWithoutWarehousesInput>, BranchUncheckedUpdateWithoutWarehousesInput>
  }

  export type StockLotUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<StockLotCreateWithoutWarehouseInput, StockLotUncheckedCreateWithoutWarehouseInput> | StockLotCreateWithoutWarehouseInput[] | StockLotUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: StockLotCreateOrConnectWithoutWarehouseInput | StockLotCreateOrConnectWithoutWarehouseInput[]
    upsert?: StockLotUpsertWithWhereUniqueWithoutWarehouseInput | StockLotUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: StockLotCreateManyWarehouseInputEnvelope
    set?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    disconnect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    delete?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    connect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    update?: StockLotUpdateWithWhereUniqueWithoutWarehouseInput | StockLotUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: StockLotUpdateManyWithWhereWithoutWarehouseInput | StockLotUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: StockLotScalarWhereInput | StockLotScalarWhereInput[]
  }

  export type InventoryCountItemUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<InventoryCountItemCreateWithoutWarehouseInput, InventoryCountItemUncheckedCreateWithoutWarehouseInput> | InventoryCountItemCreateWithoutWarehouseInput[] | InventoryCountItemUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InventoryCountItemCreateOrConnectWithoutWarehouseInput | InventoryCountItemCreateOrConnectWithoutWarehouseInput[]
    upsert?: InventoryCountItemUpsertWithWhereUniqueWithoutWarehouseInput | InventoryCountItemUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: InventoryCountItemCreateManyWarehouseInputEnvelope
    set?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    disconnect?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    delete?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    connect?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    update?: InventoryCountItemUpdateWithWhereUniqueWithoutWarehouseInput | InventoryCountItemUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: InventoryCountItemUpdateManyWithWhereWithoutWarehouseInput | InventoryCountItemUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: InventoryCountItemScalarWhereInput | InventoryCountItemScalarWhereInput[]
  }

  export type StockLotUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<StockLotCreateWithoutWarehouseInput, StockLotUncheckedCreateWithoutWarehouseInput> | StockLotCreateWithoutWarehouseInput[] | StockLotUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: StockLotCreateOrConnectWithoutWarehouseInput | StockLotCreateOrConnectWithoutWarehouseInput[]
    upsert?: StockLotUpsertWithWhereUniqueWithoutWarehouseInput | StockLotUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: StockLotCreateManyWarehouseInputEnvelope
    set?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    disconnect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    delete?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    connect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    update?: StockLotUpdateWithWhereUniqueWithoutWarehouseInput | StockLotUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: StockLotUpdateManyWithWhereWithoutWarehouseInput | StockLotUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: StockLotScalarWhereInput | StockLotScalarWhereInput[]
  }

  export type InventoryCountItemUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<InventoryCountItemCreateWithoutWarehouseInput, InventoryCountItemUncheckedCreateWithoutWarehouseInput> | InventoryCountItemCreateWithoutWarehouseInput[] | InventoryCountItemUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InventoryCountItemCreateOrConnectWithoutWarehouseInput | InventoryCountItemCreateOrConnectWithoutWarehouseInput[]
    upsert?: InventoryCountItemUpsertWithWhereUniqueWithoutWarehouseInput | InventoryCountItemUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: InventoryCountItemCreateManyWarehouseInputEnvelope
    set?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    disconnect?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    delete?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    connect?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    update?: InventoryCountItemUpdateWithWhereUniqueWithoutWarehouseInput | InventoryCountItemUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: InventoryCountItemUpdateManyWithWhereWithoutWarehouseInput | InventoryCountItemUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: InventoryCountItemScalarWhereInput | InventoryCountItemScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type StockLotCreateNestedManyWithoutSupplierInput = {
    create?: XOR<StockLotCreateWithoutSupplierInput, StockLotUncheckedCreateWithoutSupplierInput> | StockLotCreateWithoutSupplierInput[] | StockLotUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: StockLotCreateOrConnectWithoutSupplierInput | StockLotCreateOrConnectWithoutSupplierInput[]
    createMany?: StockLotCreateManySupplierInputEnvelope
    connect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
  }

  export type StockLotUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<StockLotCreateWithoutSupplierInput, StockLotUncheckedCreateWithoutSupplierInput> | StockLotCreateWithoutSupplierInput[] | StockLotUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: StockLotCreateOrConnectWithoutSupplierInput | StockLotCreateOrConnectWithoutSupplierInput[]
    createMany?: StockLotCreateManySupplierInputEnvelope
    connect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
  }

  export type StockLotUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<StockLotCreateWithoutSupplierInput, StockLotUncheckedCreateWithoutSupplierInput> | StockLotCreateWithoutSupplierInput[] | StockLotUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: StockLotCreateOrConnectWithoutSupplierInput | StockLotCreateOrConnectWithoutSupplierInput[]
    upsert?: StockLotUpsertWithWhereUniqueWithoutSupplierInput | StockLotUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: StockLotCreateManySupplierInputEnvelope
    set?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    disconnect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    delete?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    connect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    update?: StockLotUpdateWithWhereUniqueWithoutSupplierInput | StockLotUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: StockLotUpdateManyWithWhereWithoutSupplierInput | StockLotUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: StockLotScalarWhereInput | StockLotScalarWhereInput[]
  }

  export type StockLotUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<StockLotCreateWithoutSupplierInput, StockLotUncheckedCreateWithoutSupplierInput> | StockLotCreateWithoutSupplierInput[] | StockLotUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: StockLotCreateOrConnectWithoutSupplierInput | StockLotCreateOrConnectWithoutSupplierInput[]
    upsert?: StockLotUpsertWithWhereUniqueWithoutSupplierInput | StockLotUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: StockLotCreateManySupplierInputEnvelope
    set?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    disconnect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    delete?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    connect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    update?: StockLotUpdateWithWhereUniqueWithoutSupplierInput | StockLotUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: StockLotUpdateManyWithWhereWithoutSupplierInput | StockLotUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: StockLotScalarWhereInput | StockLotScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductBarcodeCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductBarcodeCreateWithoutProductInput, ProductBarcodeUncheckedCreateWithoutProductInput> | ProductBarcodeCreateWithoutProductInput[] | ProductBarcodeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductBarcodeCreateOrConnectWithoutProductInput | ProductBarcodeCreateOrConnectWithoutProductInput[]
    createMany?: ProductBarcodeCreateManyProductInputEnvelope
    connect?: ProductBarcodeWhereUniqueInput | ProductBarcodeWhereUniqueInput[]
  }

  export type StockLotCreateNestedManyWithoutProductInput = {
    create?: XOR<StockLotCreateWithoutProductInput, StockLotUncheckedCreateWithoutProductInput> | StockLotCreateWithoutProductInput[] | StockLotUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockLotCreateOrConnectWithoutProductInput | StockLotCreateOrConnectWithoutProductInput[]
    createMany?: StockLotCreateManyProductInputEnvelope
    connect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
  }

  export type InventoryCountItemCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryCountItemCreateWithoutProductInput, InventoryCountItemUncheckedCreateWithoutProductInput> | InventoryCountItemCreateWithoutProductInput[] | InventoryCountItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCountItemCreateOrConnectWithoutProductInput | InventoryCountItemCreateOrConnectWithoutProductInput[]
    createMany?: InventoryCountItemCreateManyProductInputEnvelope
    connect?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
  }

  export type ProductBarcodeUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductBarcodeCreateWithoutProductInput, ProductBarcodeUncheckedCreateWithoutProductInput> | ProductBarcodeCreateWithoutProductInput[] | ProductBarcodeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductBarcodeCreateOrConnectWithoutProductInput | ProductBarcodeCreateOrConnectWithoutProductInput[]
    createMany?: ProductBarcodeCreateManyProductInputEnvelope
    connect?: ProductBarcodeWhereUniqueInput | ProductBarcodeWhereUniqueInput[]
  }

  export type StockLotUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<StockLotCreateWithoutProductInput, StockLotUncheckedCreateWithoutProductInput> | StockLotCreateWithoutProductInput[] | StockLotUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockLotCreateOrConnectWithoutProductInput | StockLotCreateOrConnectWithoutProductInput[]
    createMany?: StockLotCreateManyProductInputEnvelope
    connect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
  }

  export type InventoryCountItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryCountItemCreateWithoutProductInput, InventoryCountItemUncheckedCreateWithoutProductInput> | InventoryCountItemCreateWithoutProductInput[] | InventoryCountItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCountItemCreateOrConnectWithoutProductInput | InventoryCountItemCreateOrConnectWithoutProductInput[]
    createMany?: InventoryCountItemCreateManyProductInputEnvelope
    connect?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ProductBarcodeUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductBarcodeCreateWithoutProductInput, ProductBarcodeUncheckedCreateWithoutProductInput> | ProductBarcodeCreateWithoutProductInput[] | ProductBarcodeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductBarcodeCreateOrConnectWithoutProductInput | ProductBarcodeCreateOrConnectWithoutProductInput[]
    upsert?: ProductBarcodeUpsertWithWhereUniqueWithoutProductInput | ProductBarcodeUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductBarcodeCreateManyProductInputEnvelope
    set?: ProductBarcodeWhereUniqueInput | ProductBarcodeWhereUniqueInput[]
    disconnect?: ProductBarcodeWhereUniqueInput | ProductBarcodeWhereUniqueInput[]
    delete?: ProductBarcodeWhereUniqueInput | ProductBarcodeWhereUniqueInput[]
    connect?: ProductBarcodeWhereUniqueInput | ProductBarcodeWhereUniqueInput[]
    update?: ProductBarcodeUpdateWithWhereUniqueWithoutProductInput | ProductBarcodeUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductBarcodeUpdateManyWithWhereWithoutProductInput | ProductBarcodeUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductBarcodeScalarWhereInput | ProductBarcodeScalarWhereInput[]
  }

  export type StockLotUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockLotCreateWithoutProductInput, StockLotUncheckedCreateWithoutProductInput> | StockLotCreateWithoutProductInput[] | StockLotUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockLotCreateOrConnectWithoutProductInput | StockLotCreateOrConnectWithoutProductInput[]
    upsert?: StockLotUpsertWithWhereUniqueWithoutProductInput | StockLotUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockLotCreateManyProductInputEnvelope
    set?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    disconnect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    delete?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    connect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    update?: StockLotUpdateWithWhereUniqueWithoutProductInput | StockLotUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockLotUpdateManyWithWhereWithoutProductInput | StockLotUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockLotScalarWhereInput | StockLotScalarWhereInput[]
  }

  export type InventoryCountItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryCountItemCreateWithoutProductInput, InventoryCountItemUncheckedCreateWithoutProductInput> | InventoryCountItemCreateWithoutProductInput[] | InventoryCountItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCountItemCreateOrConnectWithoutProductInput | InventoryCountItemCreateOrConnectWithoutProductInput[]
    upsert?: InventoryCountItemUpsertWithWhereUniqueWithoutProductInput | InventoryCountItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryCountItemCreateManyProductInputEnvelope
    set?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    disconnect?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    delete?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    connect?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    update?: InventoryCountItemUpdateWithWhereUniqueWithoutProductInput | InventoryCountItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryCountItemUpdateManyWithWhereWithoutProductInput | InventoryCountItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryCountItemScalarWhereInput | InventoryCountItemScalarWhereInput[]
  }

  export type ProductBarcodeUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductBarcodeCreateWithoutProductInput, ProductBarcodeUncheckedCreateWithoutProductInput> | ProductBarcodeCreateWithoutProductInput[] | ProductBarcodeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductBarcodeCreateOrConnectWithoutProductInput | ProductBarcodeCreateOrConnectWithoutProductInput[]
    upsert?: ProductBarcodeUpsertWithWhereUniqueWithoutProductInput | ProductBarcodeUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductBarcodeCreateManyProductInputEnvelope
    set?: ProductBarcodeWhereUniqueInput | ProductBarcodeWhereUniqueInput[]
    disconnect?: ProductBarcodeWhereUniqueInput | ProductBarcodeWhereUniqueInput[]
    delete?: ProductBarcodeWhereUniqueInput | ProductBarcodeWhereUniqueInput[]
    connect?: ProductBarcodeWhereUniqueInput | ProductBarcodeWhereUniqueInput[]
    update?: ProductBarcodeUpdateWithWhereUniqueWithoutProductInput | ProductBarcodeUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductBarcodeUpdateManyWithWhereWithoutProductInput | ProductBarcodeUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductBarcodeScalarWhereInput | ProductBarcodeScalarWhereInput[]
  }

  export type StockLotUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockLotCreateWithoutProductInput, StockLotUncheckedCreateWithoutProductInput> | StockLotCreateWithoutProductInput[] | StockLotUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockLotCreateOrConnectWithoutProductInput | StockLotCreateOrConnectWithoutProductInput[]
    upsert?: StockLotUpsertWithWhereUniqueWithoutProductInput | StockLotUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockLotCreateManyProductInputEnvelope
    set?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    disconnect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    delete?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    connect?: StockLotWhereUniqueInput | StockLotWhereUniqueInput[]
    update?: StockLotUpdateWithWhereUniqueWithoutProductInput | StockLotUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockLotUpdateManyWithWhereWithoutProductInput | StockLotUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockLotScalarWhereInput | StockLotScalarWhereInput[]
  }

  export type InventoryCountItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryCountItemCreateWithoutProductInput, InventoryCountItemUncheckedCreateWithoutProductInput> | InventoryCountItemCreateWithoutProductInput[] | InventoryCountItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCountItemCreateOrConnectWithoutProductInput | InventoryCountItemCreateOrConnectWithoutProductInput[]
    upsert?: InventoryCountItemUpsertWithWhereUniqueWithoutProductInput | InventoryCountItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryCountItemCreateManyProductInputEnvelope
    set?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    disconnect?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    delete?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    connect?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    update?: InventoryCountItemUpdateWithWhereUniqueWithoutProductInput | InventoryCountItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryCountItemUpdateManyWithWhereWithoutProductInput | InventoryCountItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryCountItemScalarWhereInput | InventoryCountItemScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutBarcodesInput = {
    create?: XOR<ProductCreateWithoutBarcodesInput, ProductUncheckedCreateWithoutBarcodesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBarcodesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutBarcodesNestedInput = {
    create?: XOR<ProductCreateWithoutBarcodesInput, ProductUncheckedCreateWithoutBarcodesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBarcodesInput
    upsert?: ProductUpsertWithoutBarcodesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutBarcodesInput, ProductUpdateWithoutBarcodesInput>, ProductUncheckedUpdateWithoutBarcodesInput>
  }

  export type ProductCreateNestedOneWithoutStockLotsInput = {
    create?: XOR<ProductCreateWithoutStockLotsInput, ProductUncheckedCreateWithoutStockLotsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockLotsInput
    connect?: ProductWhereUniqueInput
  }

  export type WarehouseCreateNestedOneWithoutStockLotsInput = {
    create?: XOR<WarehouseCreateWithoutStockLotsInput, WarehouseUncheckedCreateWithoutStockLotsInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutStockLotsInput
    connect?: WarehouseWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutStockLotsInput = {
    create?: XOR<BranchCreateWithoutStockLotsInput, BranchUncheckedCreateWithoutStockLotsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutStockLotsInput
    connect?: BranchWhereUniqueInput
  }

  export type SupplierCreateNestedOneWithoutStockLotsInput = {
    create?: XOR<SupplierCreateWithoutStockLotsInput, SupplierUncheckedCreateWithoutStockLotsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutStockLotsInput
    connect?: SupplierWhereUniqueInput
  }

  export type StockMovementCreateNestedManyWithoutStockLotInput = {
    create?: XOR<StockMovementCreateWithoutStockLotInput, StockMovementUncheckedCreateWithoutStockLotInput> | StockMovementCreateWithoutStockLotInput[] | StockMovementUncheckedCreateWithoutStockLotInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutStockLotInput | StockMovementCreateOrConnectWithoutStockLotInput[]
    createMany?: StockMovementCreateManyStockLotInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type ExpiryAlertCreateNestedManyWithoutStockLotInput = {
    create?: XOR<ExpiryAlertCreateWithoutStockLotInput, ExpiryAlertUncheckedCreateWithoutStockLotInput> | ExpiryAlertCreateWithoutStockLotInput[] | ExpiryAlertUncheckedCreateWithoutStockLotInput[]
    connectOrCreate?: ExpiryAlertCreateOrConnectWithoutStockLotInput | ExpiryAlertCreateOrConnectWithoutStockLotInput[]
    createMany?: ExpiryAlertCreateManyStockLotInputEnvelope
    connect?: ExpiryAlertWhereUniqueInput | ExpiryAlertWhereUniqueInput[]
  }

  export type StockMovementUncheckedCreateNestedManyWithoutStockLotInput = {
    create?: XOR<StockMovementCreateWithoutStockLotInput, StockMovementUncheckedCreateWithoutStockLotInput> | StockMovementCreateWithoutStockLotInput[] | StockMovementUncheckedCreateWithoutStockLotInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutStockLotInput | StockMovementCreateOrConnectWithoutStockLotInput[]
    createMany?: StockMovementCreateManyStockLotInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type ExpiryAlertUncheckedCreateNestedManyWithoutStockLotInput = {
    create?: XOR<ExpiryAlertCreateWithoutStockLotInput, ExpiryAlertUncheckedCreateWithoutStockLotInput> | ExpiryAlertCreateWithoutStockLotInput[] | ExpiryAlertUncheckedCreateWithoutStockLotInput[]
    connectOrCreate?: ExpiryAlertCreateOrConnectWithoutStockLotInput | ExpiryAlertCreateOrConnectWithoutStockLotInput[]
    createMany?: ExpiryAlertCreateManyStockLotInputEnvelope
    connect?: ExpiryAlertWhereUniqueInput | ExpiryAlertWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProductUpdateOneRequiredWithoutStockLotsNestedInput = {
    create?: XOR<ProductCreateWithoutStockLotsInput, ProductUncheckedCreateWithoutStockLotsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockLotsInput
    upsert?: ProductUpsertWithoutStockLotsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutStockLotsInput, ProductUpdateWithoutStockLotsInput>, ProductUncheckedUpdateWithoutStockLotsInput>
  }

  export type WarehouseUpdateOneRequiredWithoutStockLotsNestedInput = {
    create?: XOR<WarehouseCreateWithoutStockLotsInput, WarehouseUncheckedCreateWithoutStockLotsInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutStockLotsInput
    upsert?: WarehouseUpsertWithoutStockLotsInput
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutStockLotsInput, WarehouseUpdateWithoutStockLotsInput>, WarehouseUncheckedUpdateWithoutStockLotsInput>
  }

  export type BranchUpdateOneRequiredWithoutStockLotsNestedInput = {
    create?: XOR<BranchCreateWithoutStockLotsInput, BranchUncheckedCreateWithoutStockLotsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutStockLotsInput
    upsert?: BranchUpsertWithoutStockLotsInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutStockLotsInput, BranchUpdateWithoutStockLotsInput>, BranchUncheckedUpdateWithoutStockLotsInput>
  }

  export type SupplierUpdateOneWithoutStockLotsNestedInput = {
    create?: XOR<SupplierCreateWithoutStockLotsInput, SupplierUncheckedCreateWithoutStockLotsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutStockLotsInput
    upsert?: SupplierUpsertWithoutStockLotsInput
    disconnect?: SupplierWhereInput | boolean
    delete?: SupplierWhereInput | boolean
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutStockLotsInput, SupplierUpdateWithoutStockLotsInput>, SupplierUncheckedUpdateWithoutStockLotsInput>
  }

  export type StockMovementUpdateManyWithoutStockLotNestedInput = {
    create?: XOR<StockMovementCreateWithoutStockLotInput, StockMovementUncheckedCreateWithoutStockLotInput> | StockMovementCreateWithoutStockLotInput[] | StockMovementUncheckedCreateWithoutStockLotInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutStockLotInput | StockMovementCreateOrConnectWithoutStockLotInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutStockLotInput | StockMovementUpsertWithWhereUniqueWithoutStockLotInput[]
    createMany?: StockMovementCreateManyStockLotInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutStockLotInput | StockMovementUpdateWithWhereUniqueWithoutStockLotInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutStockLotInput | StockMovementUpdateManyWithWhereWithoutStockLotInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type ExpiryAlertUpdateManyWithoutStockLotNestedInput = {
    create?: XOR<ExpiryAlertCreateWithoutStockLotInput, ExpiryAlertUncheckedCreateWithoutStockLotInput> | ExpiryAlertCreateWithoutStockLotInput[] | ExpiryAlertUncheckedCreateWithoutStockLotInput[]
    connectOrCreate?: ExpiryAlertCreateOrConnectWithoutStockLotInput | ExpiryAlertCreateOrConnectWithoutStockLotInput[]
    upsert?: ExpiryAlertUpsertWithWhereUniqueWithoutStockLotInput | ExpiryAlertUpsertWithWhereUniqueWithoutStockLotInput[]
    createMany?: ExpiryAlertCreateManyStockLotInputEnvelope
    set?: ExpiryAlertWhereUniqueInput | ExpiryAlertWhereUniqueInput[]
    disconnect?: ExpiryAlertWhereUniqueInput | ExpiryAlertWhereUniqueInput[]
    delete?: ExpiryAlertWhereUniqueInput | ExpiryAlertWhereUniqueInput[]
    connect?: ExpiryAlertWhereUniqueInput | ExpiryAlertWhereUniqueInput[]
    update?: ExpiryAlertUpdateWithWhereUniqueWithoutStockLotInput | ExpiryAlertUpdateWithWhereUniqueWithoutStockLotInput[]
    updateMany?: ExpiryAlertUpdateManyWithWhereWithoutStockLotInput | ExpiryAlertUpdateManyWithWhereWithoutStockLotInput[]
    deleteMany?: ExpiryAlertScalarWhereInput | ExpiryAlertScalarWhereInput[]
  }

  export type StockMovementUncheckedUpdateManyWithoutStockLotNestedInput = {
    create?: XOR<StockMovementCreateWithoutStockLotInput, StockMovementUncheckedCreateWithoutStockLotInput> | StockMovementCreateWithoutStockLotInput[] | StockMovementUncheckedCreateWithoutStockLotInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutStockLotInput | StockMovementCreateOrConnectWithoutStockLotInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutStockLotInput | StockMovementUpsertWithWhereUniqueWithoutStockLotInput[]
    createMany?: StockMovementCreateManyStockLotInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutStockLotInput | StockMovementUpdateWithWhereUniqueWithoutStockLotInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutStockLotInput | StockMovementUpdateManyWithWhereWithoutStockLotInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type ExpiryAlertUncheckedUpdateManyWithoutStockLotNestedInput = {
    create?: XOR<ExpiryAlertCreateWithoutStockLotInput, ExpiryAlertUncheckedCreateWithoutStockLotInput> | ExpiryAlertCreateWithoutStockLotInput[] | ExpiryAlertUncheckedCreateWithoutStockLotInput[]
    connectOrCreate?: ExpiryAlertCreateOrConnectWithoutStockLotInput | ExpiryAlertCreateOrConnectWithoutStockLotInput[]
    upsert?: ExpiryAlertUpsertWithWhereUniqueWithoutStockLotInput | ExpiryAlertUpsertWithWhereUniqueWithoutStockLotInput[]
    createMany?: ExpiryAlertCreateManyStockLotInputEnvelope
    set?: ExpiryAlertWhereUniqueInput | ExpiryAlertWhereUniqueInput[]
    disconnect?: ExpiryAlertWhereUniqueInput | ExpiryAlertWhereUniqueInput[]
    delete?: ExpiryAlertWhereUniqueInput | ExpiryAlertWhereUniqueInput[]
    connect?: ExpiryAlertWhereUniqueInput | ExpiryAlertWhereUniqueInput[]
    update?: ExpiryAlertUpdateWithWhereUniqueWithoutStockLotInput | ExpiryAlertUpdateWithWhereUniqueWithoutStockLotInput[]
    updateMany?: ExpiryAlertUpdateManyWithWhereWithoutStockLotInput | ExpiryAlertUpdateManyWithWhereWithoutStockLotInput[]
    deleteMany?: ExpiryAlertScalarWhereInput | ExpiryAlertScalarWhereInput[]
  }

  export type StockLotCreateNestedOneWithoutMovementsInput = {
    create?: XOR<StockLotCreateWithoutMovementsInput, StockLotUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: StockLotCreateOrConnectWithoutMovementsInput
    connect?: StockLotWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStockMovementsInput = {
    create?: XOR<UserCreateWithoutStockMovementsInput, UserUncheckedCreateWithoutStockMovementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStockMovementsInput
    connect?: UserWhereUniqueInput
  }

  export type StockLotUpdateOneRequiredWithoutMovementsNestedInput = {
    create?: XOR<StockLotCreateWithoutMovementsInput, StockLotUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: StockLotCreateOrConnectWithoutMovementsInput
    upsert?: StockLotUpsertWithoutMovementsInput
    connect?: StockLotWhereUniqueInput
    update?: XOR<XOR<StockLotUpdateToOneWithWhereWithoutMovementsInput, StockLotUpdateWithoutMovementsInput>, StockLotUncheckedUpdateWithoutMovementsInput>
  }

  export type UserUpdateOneRequiredWithoutStockMovementsNestedInput = {
    create?: XOR<UserCreateWithoutStockMovementsInput, UserUncheckedCreateWithoutStockMovementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStockMovementsInput
    upsert?: UserUpsertWithoutStockMovementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStockMovementsInput, UserUpdateWithoutStockMovementsInput>, UserUncheckedUpdateWithoutStockMovementsInput>
  }

  export type StockLotCreateNestedOneWithoutExpiryAlertsInput = {
    create?: XOR<StockLotCreateWithoutExpiryAlertsInput, StockLotUncheckedCreateWithoutExpiryAlertsInput>
    connectOrCreate?: StockLotCreateOrConnectWithoutExpiryAlertsInput
    connect?: StockLotWhereUniqueInput
  }

  export type StockLotUpdateOneRequiredWithoutExpiryAlertsNestedInput = {
    create?: XOR<StockLotCreateWithoutExpiryAlertsInput, StockLotUncheckedCreateWithoutExpiryAlertsInput>
    connectOrCreate?: StockLotCreateOrConnectWithoutExpiryAlertsInput
    upsert?: StockLotUpsertWithoutExpiryAlertsInput
    connect?: StockLotWhereUniqueInput
    update?: XOR<XOR<StockLotUpdateToOneWithWhereWithoutExpiryAlertsInput, StockLotUpdateWithoutExpiryAlertsInput>, StockLotUncheckedUpdateWithoutExpiryAlertsInput>
  }

  export type UserCreateNestedOneWithoutNotificationSettingInput = {
    create?: XOR<UserCreateWithoutNotificationSettingInput, UserUncheckedCreateWithoutNotificationSettingInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationSettingInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationSettingNestedInput = {
    create?: XOR<UserCreateWithoutNotificationSettingInput, UserUncheckedCreateWithoutNotificationSettingInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationSettingInput
    upsert?: UserUpsertWithoutNotificationSettingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationSettingInput, UserUpdateWithoutNotificationSettingInput>, UserUncheckedUpdateWithoutNotificationSettingInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type BranchCreateNestedOneWithoutInventoryCountsInput = {
    create?: XOR<BranchCreateWithoutInventoryCountsInput, BranchUncheckedCreateWithoutInventoryCountsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutInventoryCountsInput
    connect?: BranchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInventoryCountsCreatedInput = {
    create?: XOR<UserCreateWithoutInventoryCountsCreatedInput, UserUncheckedCreateWithoutInventoryCountsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryCountsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInventoryCountsConfirmedInput = {
    create?: XOR<UserCreateWithoutInventoryCountsConfirmedInput, UserUncheckedCreateWithoutInventoryCountsConfirmedInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryCountsConfirmedInput
    connect?: UserWhereUniqueInput
  }

  export type InventoryCountItemCreateNestedManyWithoutInventoryCountInput = {
    create?: XOR<InventoryCountItemCreateWithoutInventoryCountInput, InventoryCountItemUncheckedCreateWithoutInventoryCountInput> | InventoryCountItemCreateWithoutInventoryCountInput[] | InventoryCountItemUncheckedCreateWithoutInventoryCountInput[]
    connectOrCreate?: InventoryCountItemCreateOrConnectWithoutInventoryCountInput | InventoryCountItemCreateOrConnectWithoutInventoryCountInput[]
    createMany?: InventoryCountItemCreateManyInventoryCountInputEnvelope
    connect?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
  }

  export type InventoryCountItemUncheckedCreateNestedManyWithoutInventoryCountInput = {
    create?: XOR<InventoryCountItemCreateWithoutInventoryCountInput, InventoryCountItemUncheckedCreateWithoutInventoryCountInput> | InventoryCountItemCreateWithoutInventoryCountInput[] | InventoryCountItemUncheckedCreateWithoutInventoryCountInput[]
    connectOrCreate?: InventoryCountItemCreateOrConnectWithoutInventoryCountInput | InventoryCountItemCreateOrConnectWithoutInventoryCountInput[]
    createMany?: InventoryCountItemCreateManyInventoryCountInputEnvelope
    connect?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
  }

  export type BranchUpdateOneRequiredWithoutInventoryCountsNestedInput = {
    create?: XOR<BranchCreateWithoutInventoryCountsInput, BranchUncheckedCreateWithoutInventoryCountsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutInventoryCountsInput
    upsert?: BranchUpsertWithoutInventoryCountsInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutInventoryCountsInput, BranchUpdateWithoutInventoryCountsInput>, BranchUncheckedUpdateWithoutInventoryCountsInput>
  }

  export type UserUpdateOneRequiredWithoutInventoryCountsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutInventoryCountsCreatedInput, UserUncheckedCreateWithoutInventoryCountsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryCountsCreatedInput
    upsert?: UserUpsertWithoutInventoryCountsCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInventoryCountsCreatedInput, UserUpdateWithoutInventoryCountsCreatedInput>, UserUncheckedUpdateWithoutInventoryCountsCreatedInput>
  }

  export type UserUpdateOneWithoutInventoryCountsConfirmedNestedInput = {
    create?: XOR<UserCreateWithoutInventoryCountsConfirmedInput, UserUncheckedCreateWithoutInventoryCountsConfirmedInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryCountsConfirmedInput
    upsert?: UserUpsertWithoutInventoryCountsConfirmedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInventoryCountsConfirmedInput, UserUpdateWithoutInventoryCountsConfirmedInput>, UserUncheckedUpdateWithoutInventoryCountsConfirmedInput>
  }

  export type InventoryCountItemUpdateManyWithoutInventoryCountNestedInput = {
    create?: XOR<InventoryCountItemCreateWithoutInventoryCountInput, InventoryCountItemUncheckedCreateWithoutInventoryCountInput> | InventoryCountItemCreateWithoutInventoryCountInput[] | InventoryCountItemUncheckedCreateWithoutInventoryCountInput[]
    connectOrCreate?: InventoryCountItemCreateOrConnectWithoutInventoryCountInput | InventoryCountItemCreateOrConnectWithoutInventoryCountInput[]
    upsert?: InventoryCountItemUpsertWithWhereUniqueWithoutInventoryCountInput | InventoryCountItemUpsertWithWhereUniqueWithoutInventoryCountInput[]
    createMany?: InventoryCountItemCreateManyInventoryCountInputEnvelope
    set?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    disconnect?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    delete?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    connect?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    update?: InventoryCountItemUpdateWithWhereUniqueWithoutInventoryCountInput | InventoryCountItemUpdateWithWhereUniqueWithoutInventoryCountInput[]
    updateMany?: InventoryCountItemUpdateManyWithWhereWithoutInventoryCountInput | InventoryCountItemUpdateManyWithWhereWithoutInventoryCountInput[]
    deleteMany?: InventoryCountItemScalarWhereInput | InventoryCountItemScalarWhereInput[]
  }

  export type InventoryCountItemUncheckedUpdateManyWithoutInventoryCountNestedInput = {
    create?: XOR<InventoryCountItemCreateWithoutInventoryCountInput, InventoryCountItemUncheckedCreateWithoutInventoryCountInput> | InventoryCountItemCreateWithoutInventoryCountInput[] | InventoryCountItemUncheckedCreateWithoutInventoryCountInput[]
    connectOrCreate?: InventoryCountItemCreateOrConnectWithoutInventoryCountInput | InventoryCountItemCreateOrConnectWithoutInventoryCountInput[]
    upsert?: InventoryCountItemUpsertWithWhereUniqueWithoutInventoryCountInput | InventoryCountItemUpsertWithWhereUniqueWithoutInventoryCountInput[]
    createMany?: InventoryCountItemCreateManyInventoryCountInputEnvelope
    set?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    disconnect?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    delete?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    connect?: InventoryCountItemWhereUniqueInput | InventoryCountItemWhereUniqueInput[]
    update?: InventoryCountItemUpdateWithWhereUniqueWithoutInventoryCountInput | InventoryCountItemUpdateWithWhereUniqueWithoutInventoryCountInput[]
    updateMany?: InventoryCountItemUpdateManyWithWhereWithoutInventoryCountInput | InventoryCountItemUpdateManyWithWhereWithoutInventoryCountInput[]
    deleteMany?: InventoryCountItemScalarWhereInput | InventoryCountItemScalarWhereInput[]
  }

  export type InventoryCountCreateNestedOneWithoutItemsInput = {
    create?: XOR<InventoryCountCreateWithoutItemsInput, InventoryCountUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InventoryCountCreateOrConnectWithoutItemsInput
    connect?: InventoryCountWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutInventoryItemsInput = {
    create?: XOR<ProductCreateWithoutInventoryItemsInput, ProductUncheckedCreateWithoutInventoryItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type WarehouseCreateNestedOneWithoutInventoryItemsInput = {
    create?: XOR<WarehouseCreateWithoutInventoryItemsInput, WarehouseUncheckedCreateWithoutInventoryItemsInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutInventoryItemsInput
    connect?: WarehouseWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InventoryCountUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<InventoryCountCreateWithoutItemsInput, InventoryCountUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InventoryCountCreateOrConnectWithoutItemsInput
    upsert?: InventoryCountUpsertWithoutItemsInput
    connect?: InventoryCountWhereUniqueInput
    update?: XOR<XOR<InventoryCountUpdateToOneWithWhereWithoutItemsInput, InventoryCountUpdateWithoutItemsInput>, InventoryCountUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutInventoryItemsNestedInput = {
    create?: XOR<ProductCreateWithoutInventoryItemsInput, ProductUncheckedCreateWithoutInventoryItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryItemsInput
    upsert?: ProductUpsertWithoutInventoryItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutInventoryItemsInput, ProductUpdateWithoutInventoryItemsInput>, ProductUncheckedUpdateWithoutInventoryItemsInput>
  }

  export type WarehouseUpdateOneRequiredWithoutInventoryItemsNestedInput = {
    create?: XOR<WarehouseCreateWithoutInventoryItemsInput, WarehouseUncheckedCreateWithoutInventoryItemsInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutInventoryItemsInput
    upsert?: WarehouseUpsertWithoutInventoryItemsInput
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutInventoryItemsInput, WarehouseUpdateWithoutInventoryItemsInput>, WarehouseUncheckedUpdateWithoutInventoryItemsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type BranchCreateWithoutUsersInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouses?: WarehouseCreateNestedManyWithoutBranchInput
    stockLots?: StockLotCreateNestedManyWithoutBranchInput
    inventoryCounts?: InventoryCountCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouses?: WarehouseUncheckedCreateNestedManyWithoutBranchInput
    stockLots?: StockLotUncheckedCreateNestedManyWithoutBranchInput
    inventoryCounts?: InventoryCountUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutUsersInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
  }

  export type StockMovementCreateWithoutUserInput = {
    id?: string
    type: string
    quantity: number
    notes?: string | null
    createdAt?: Date | string
    stockLot: StockLotCreateNestedOneWithoutMovementsInput
  }

  export type StockMovementUncheckedCreateWithoutUserInput = {
    id?: string
    stockLotId: string
    type: string
    quantity: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type StockMovementCreateOrConnectWithoutUserInput = {
    where: StockMovementWhereUniqueInput
    create: XOR<StockMovementCreateWithoutUserInput, StockMovementUncheckedCreateWithoutUserInput>
  }

  export type StockMovementCreateManyUserInputEnvelope = {
    data: StockMovementCreateManyUserInput | StockMovementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    action: string
    entity: string
    entityId: string
    details?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    entity: string
    entityId: string
    details?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationSettingCreateWithoutUserInput = {
    id?: string
    days30?: boolean
    days15?: boolean
    days7?: boolean
    expired?: boolean
    pushToken?: string | null
    updatedAt?: Date | string
  }

  export type NotificationSettingUncheckedCreateWithoutUserInput = {
    id?: string
    days30?: boolean
    days15?: boolean
    days7?: boolean
    expired?: boolean
    pushToken?: string | null
    updatedAt?: Date | string
  }

  export type NotificationSettingCreateOrConnectWithoutUserInput = {
    where: NotificationSettingWhereUniqueInput
    create: XOR<NotificationSettingCreateWithoutUserInput, NotificationSettingUncheckedCreateWithoutUserInput>
  }

  export type InventoryCountCreateWithoutCreatorInput = {
    id?: string
    period: string
    notes?: string | null
    status?: string
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutInventoryCountsInput
    confirmer?: UserCreateNestedOneWithoutInventoryCountsConfirmedInput
    items?: InventoryCountItemCreateNestedManyWithoutInventoryCountInput
  }

  export type InventoryCountUncheckedCreateWithoutCreatorInput = {
    id?: string
    branchId: string
    period: string
    notes?: string | null
    status?: string
    confirmedBy?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InventoryCountItemUncheckedCreateNestedManyWithoutInventoryCountInput
  }

  export type InventoryCountCreateOrConnectWithoutCreatorInput = {
    where: InventoryCountWhereUniqueInput
    create: XOR<InventoryCountCreateWithoutCreatorInput, InventoryCountUncheckedCreateWithoutCreatorInput>
  }

  export type InventoryCountCreateManyCreatorInputEnvelope = {
    data: InventoryCountCreateManyCreatorInput | InventoryCountCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type InventoryCountCreateWithoutConfirmerInput = {
    id?: string
    period: string
    notes?: string | null
    status?: string
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutInventoryCountsInput
    creator: UserCreateNestedOneWithoutInventoryCountsCreatedInput
    items?: InventoryCountItemCreateNestedManyWithoutInventoryCountInput
  }

  export type InventoryCountUncheckedCreateWithoutConfirmerInput = {
    id?: string
    branchId: string
    period: string
    notes?: string | null
    status?: string
    createdBy: string
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InventoryCountItemUncheckedCreateNestedManyWithoutInventoryCountInput
  }

  export type InventoryCountCreateOrConnectWithoutConfirmerInput = {
    where: InventoryCountWhereUniqueInput
    create: XOR<InventoryCountCreateWithoutConfirmerInput, InventoryCountUncheckedCreateWithoutConfirmerInput>
  }

  export type InventoryCountCreateManyConfirmerInputEnvelope = {
    data: InventoryCountCreateManyConfirmerInput | InventoryCountCreateManyConfirmerInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutUsersInput = {
    update: XOR<BranchUpdateWithoutUsersInput, BranchUncheckedUpdateWithoutUsersInput>
    create: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutUsersInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutUsersInput, BranchUncheckedUpdateWithoutUsersInput>
  }

  export type BranchUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouses?: WarehouseUpdateManyWithoutBranchNestedInput
    stockLots?: StockLotUpdateManyWithoutBranchNestedInput
    inventoryCounts?: InventoryCountUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouses?: WarehouseUncheckedUpdateManyWithoutBranchNestedInput
    stockLots?: StockLotUncheckedUpdateManyWithoutBranchNestedInput
    inventoryCounts?: InventoryCountUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type StockMovementUpsertWithWhereUniqueWithoutUserInput = {
    where: StockMovementWhereUniqueInput
    update: XOR<StockMovementUpdateWithoutUserInput, StockMovementUncheckedUpdateWithoutUserInput>
    create: XOR<StockMovementCreateWithoutUserInput, StockMovementUncheckedCreateWithoutUserInput>
  }

  export type StockMovementUpdateWithWhereUniqueWithoutUserInput = {
    where: StockMovementWhereUniqueInput
    data: XOR<StockMovementUpdateWithoutUserInput, StockMovementUncheckedUpdateWithoutUserInput>
  }

  export type StockMovementUpdateManyWithWhereWithoutUserInput = {
    where: StockMovementScalarWhereInput
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyWithoutUserInput>
  }

  export type StockMovementScalarWhereInput = {
    AND?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
    OR?: StockMovementScalarWhereInput[]
    NOT?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
    id?: StringFilter<"StockMovement"> | string
    stockLotId?: StringFilter<"StockMovement"> | string
    type?: StringFilter<"StockMovement"> | string
    quantity?: IntFilter<"StockMovement"> | number
    notes?: StringNullableFilter<"StockMovement"> | string | null
    userId?: StringFilter<"StockMovement"> | string
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type NotificationSettingUpsertWithoutUserInput = {
    update: XOR<NotificationSettingUpdateWithoutUserInput, NotificationSettingUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationSettingCreateWithoutUserInput, NotificationSettingUncheckedCreateWithoutUserInput>
    where?: NotificationSettingWhereInput
  }

  export type NotificationSettingUpdateToOneWithWhereWithoutUserInput = {
    where?: NotificationSettingWhereInput
    data: XOR<NotificationSettingUpdateWithoutUserInput, NotificationSettingUncheckedUpdateWithoutUserInput>
  }

  export type NotificationSettingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    days30?: BoolFieldUpdateOperationsInput | boolean
    days15?: BoolFieldUpdateOperationsInput | boolean
    days7?: BoolFieldUpdateOperationsInput | boolean
    expired?: BoolFieldUpdateOperationsInput | boolean
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSettingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    days30?: BoolFieldUpdateOperationsInput | boolean
    days15?: BoolFieldUpdateOperationsInput | boolean
    days7?: BoolFieldUpdateOperationsInput | boolean
    expired?: BoolFieldUpdateOperationsInput | boolean
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCountUpsertWithWhereUniqueWithoutCreatorInput = {
    where: InventoryCountWhereUniqueInput
    update: XOR<InventoryCountUpdateWithoutCreatorInput, InventoryCountUncheckedUpdateWithoutCreatorInput>
    create: XOR<InventoryCountCreateWithoutCreatorInput, InventoryCountUncheckedCreateWithoutCreatorInput>
  }

  export type InventoryCountUpdateWithWhereUniqueWithoutCreatorInput = {
    where: InventoryCountWhereUniqueInput
    data: XOR<InventoryCountUpdateWithoutCreatorInput, InventoryCountUncheckedUpdateWithoutCreatorInput>
  }

  export type InventoryCountUpdateManyWithWhereWithoutCreatorInput = {
    where: InventoryCountScalarWhereInput
    data: XOR<InventoryCountUpdateManyMutationInput, InventoryCountUncheckedUpdateManyWithoutCreatorInput>
  }

  export type InventoryCountScalarWhereInput = {
    AND?: InventoryCountScalarWhereInput | InventoryCountScalarWhereInput[]
    OR?: InventoryCountScalarWhereInput[]
    NOT?: InventoryCountScalarWhereInput | InventoryCountScalarWhereInput[]
    id?: StringFilter<"InventoryCount"> | string
    branchId?: StringFilter<"InventoryCount"> | string
    period?: StringFilter<"InventoryCount"> | string
    notes?: StringNullableFilter<"InventoryCount"> | string | null
    status?: StringFilter<"InventoryCount"> | string
    createdBy?: StringFilter<"InventoryCount"> | string
    confirmedBy?: StringNullableFilter<"InventoryCount"> | string | null
    confirmedAt?: DateTimeNullableFilter<"InventoryCount"> | Date | string | null
    createdAt?: DateTimeFilter<"InventoryCount"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryCount"> | Date | string
  }

  export type InventoryCountUpsertWithWhereUniqueWithoutConfirmerInput = {
    where: InventoryCountWhereUniqueInput
    update: XOR<InventoryCountUpdateWithoutConfirmerInput, InventoryCountUncheckedUpdateWithoutConfirmerInput>
    create: XOR<InventoryCountCreateWithoutConfirmerInput, InventoryCountUncheckedCreateWithoutConfirmerInput>
  }

  export type InventoryCountUpdateWithWhereUniqueWithoutConfirmerInput = {
    where: InventoryCountWhereUniqueInput
    data: XOR<InventoryCountUpdateWithoutConfirmerInput, InventoryCountUncheckedUpdateWithoutConfirmerInput>
  }

  export type InventoryCountUpdateManyWithWhereWithoutConfirmerInput = {
    where: InventoryCountScalarWhereInput
    data: XOR<InventoryCountUpdateManyMutationInput, InventoryCountUncheckedUpdateManyWithoutConfirmerInput>
  }

  export type UserCreateWithoutBranchInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockMovements?: StockMovementCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    notificationSetting?: NotificationSettingCreateNestedOneWithoutUserInput
    inventoryCountsCreated?: InventoryCountCreateNestedManyWithoutCreatorInput
    inventoryCountsConfirmed?: InventoryCountCreateNestedManyWithoutConfirmerInput
  }

  export type UserUncheckedCreateWithoutBranchInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    notificationSetting?: NotificationSettingUncheckedCreateNestedOneWithoutUserInput
    inventoryCountsCreated?: InventoryCountUncheckedCreateNestedManyWithoutCreatorInput
    inventoryCountsConfirmed?: InventoryCountUncheckedCreateNestedManyWithoutConfirmerInput
  }

  export type UserCreateOrConnectWithoutBranchInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput>
  }

  export type UserCreateManyBranchInputEnvelope = {
    data: UserCreateManyBranchInput | UserCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type WarehouseCreateWithoutBranchInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockLots?: StockLotCreateNestedManyWithoutWarehouseInput
    inventoryItems?: InventoryCountItemCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutBranchInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockLots?: StockLotUncheckedCreateNestedManyWithoutWarehouseInput
    inventoryItems?: InventoryCountItemUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutBranchInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutBranchInput, WarehouseUncheckedCreateWithoutBranchInput>
  }

  export type WarehouseCreateManyBranchInputEnvelope = {
    data: WarehouseCreateManyBranchInput | WarehouseCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type StockLotCreateWithoutBranchInput = {
    id?: string
    lotNumber?: string | null
    expiryDate?: Date | string | null
    quantity?: number
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutStockLotsInput
    warehouse: WarehouseCreateNestedOneWithoutStockLotsInput
    supplier?: SupplierCreateNestedOneWithoutStockLotsInput
    movements?: StockMovementCreateNestedManyWithoutStockLotInput
    expiryAlerts?: ExpiryAlertCreateNestedManyWithoutStockLotInput
  }

  export type StockLotUncheckedCreateWithoutBranchInput = {
    id?: string
    productId: string
    warehouseId: string
    supplierId?: string | null
    lotNumber?: string | null
    expiryDate?: Date | string | null
    quantity?: number
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: StockMovementUncheckedCreateNestedManyWithoutStockLotInput
    expiryAlerts?: ExpiryAlertUncheckedCreateNestedManyWithoutStockLotInput
  }

  export type StockLotCreateOrConnectWithoutBranchInput = {
    where: StockLotWhereUniqueInput
    create: XOR<StockLotCreateWithoutBranchInput, StockLotUncheckedCreateWithoutBranchInput>
  }

  export type StockLotCreateManyBranchInputEnvelope = {
    data: StockLotCreateManyBranchInput | StockLotCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type InventoryCountCreateWithoutBranchInput = {
    id?: string
    period: string
    notes?: string | null
    status?: string
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutInventoryCountsCreatedInput
    confirmer?: UserCreateNestedOneWithoutInventoryCountsConfirmedInput
    items?: InventoryCountItemCreateNestedManyWithoutInventoryCountInput
  }

  export type InventoryCountUncheckedCreateWithoutBranchInput = {
    id?: string
    period: string
    notes?: string | null
    status?: string
    createdBy: string
    confirmedBy?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InventoryCountItemUncheckedCreateNestedManyWithoutInventoryCountInput
  }

  export type InventoryCountCreateOrConnectWithoutBranchInput = {
    where: InventoryCountWhereUniqueInput
    create: XOR<InventoryCountCreateWithoutBranchInput, InventoryCountUncheckedCreateWithoutBranchInput>
  }

  export type InventoryCountCreateManyBranchInputEnvelope = {
    data: InventoryCountCreateManyBranchInput | InventoryCountCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutBranchInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBranchInput, UserUncheckedUpdateWithoutBranchInput>
    create: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBranchInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBranchInput, UserUncheckedUpdateWithoutBranchInput>
  }

  export type UserUpdateManyWithWhereWithoutBranchInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBranchInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    branchId?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type WarehouseUpsertWithWhereUniqueWithoutBranchInput = {
    where: WarehouseWhereUniqueInput
    update: XOR<WarehouseUpdateWithoutBranchInput, WarehouseUncheckedUpdateWithoutBranchInput>
    create: XOR<WarehouseCreateWithoutBranchInput, WarehouseUncheckedCreateWithoutBranchInput>
  }

  export type WarehouseUpdateWithWhereUniqueWithoutBranchInput = {
    where: WarehouseWhereUniqueInput
    data: XOR<WarehouseUpdateWithoutBranchInput, WarehouseUncheckedUpdateWithoutBranchInput>
  }

  export type WarehouseUpdateManyWithWhereWithoutBranchInput = {
    where: WarehouseScalarWhereInput
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyWithoutBranchInput>
  }

  export type WarehouseScalarWhereInput = {
    AND?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
    OR?: WarehouseScalarWhereInput[]
    NOT?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
    id?: StringFilter<"Warehouse"> | string
    name?: StringFilter<"Warehouse"> | string
    branchId?: StringFilter<"Warehouse"> | string
    isActive?: BoolFilter<"Warehouse"> | boolean
    createdAt?: DateTimeFilter<"Warehouse"> | Date | string
    updatedAt?: DateTimeFilter<"Warehouse"> | Date | string
  }

  export type StockLotUpsertWithWhereUniqueWithoutBranchInput = {
    where: StockLotWhereUniqueInput
    update: XOR<StockLotUpdateWithoutBranchInput, StockLotUncheckedUpdateWithoutBranchInput>
    create: XOR<StockLotCreateWithoutBranchInput, StockLotUncheckedCreateWithoutBranchInput>
  }

  export type StockLotUpdateWithWhereUniqueWithoutBranchInput = {
    where: StockLotWhereUniqueInput
    data: XOR<StockLotUpdateWithoutBranchInput, StockLotUncheckedUpdateWithoutBranchInput>
  }

  export type StockLotUpdateManyWithWhereWithoutBranchInput = {
    where: StockLotScalarWhereInput
    data: XOR<StockLotUpdateManyMutationInput, StockLotUncheckedUpdateManyWithoutBranchInput>
  }

  export type StockLotScalarWhereInput = {
    AND?: StockLotScalarWhereInput | StockLotScalarWhereInput[]
    OR?: StockLotScalarWhereInput[]
    NOT?: StockLotScalarWhereInput | StockLotScalarWhereInput[]
    id?: StringFilter<"StockLot"> | string
    productId?: StringFilter<"StockLot"> | string
    warehouseId?: StringFilter<"StockLot"> | string
    branchId?: StringFilter<"StockLot"> | string
    supplierId?: StringNullableFilter<"StockLot"> | string | null
    lotNumber?: StringNullableFilter<"StockLot"> | string | null
    expiryDate?: DateTimeNullableFilter<"StockLot"> | Date | string | null
    quantity?: IntFilter<"StockLot"> | number
    status?: StringNullableFilter<"StockLot"> | string | null
    notes?: StringNullableFilter<"StockLot"> | string | null
    createdAt?: DateTimeFilter<"StockLot"> | Date | string
    updatedAt?: DateTimeFilter<"StockLot"> | Date | string
  }

  export type InventoryCountUpsertWithWhereUniqueWithoutBranchInput = {
    where: InventoryCountWhereUniqueInput
    update: XOR<InventoryCountUpdateWithoutBranchInput, InventoryCountUncheckedUpdateWithoutBranchInput>
    create: XOR<InventoryCountCreateWithoutBranchInput, InventoryCountUncheckedCreateWithoutBranchInput>
  }

  export type InventoryCountUpdateWithWhereUniqueWithoutBranchInput = {
    where: InventoryCountWhereUniqueInput
    data: XOR<InventoryCountUpdateWithoutBranchInput, InventoryCountUncheckedUpdateWithoutBranchInput>
  }

  export type InventoryCountUpdateManyWithWhereWithoutBranchInput = {
    where: InventoryCountScalarWhereInput
    data: XOR<InventoryCountUpdateManyMutationInput, InventoryCountUncheckedUpdateManyWithoutBranchInput>
  }

  export type BranchCreateWithoutWarehousesInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutBranchInput
    stockLots?: StockLotCreateNestedManyWithoutBranchInput
    inventoryCounts?: InventoryCountCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutWarehousesInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    stockLots?: StockLotUncheckedCreateNestedManyWithoutBranchInput
    inventoryCounts?: InventoryCountUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutWarehousesInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutWarehousesInput, BranchUncheckedCreateWithoutWarehousesInput>
  }

  export type StockLotCreateWithoutWarehouseInput = {
    id?: string
    lotNumber?: string | null
    expiryDate?: Date | string | null
    quantity?: number
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutStockLotsInput
    branch: BranchCreateNestedOneWithoutStockLotsInput
    supplier?: SupplierCreateNestedOneWithoutStockLotsInput
    movements?: StockMovementCreateNestedManyWithoutStockLotInput
    expiryAlerts?: ExpiryAlertCreateNestedManyWithoutStockLotInput
  }

  export type StockLotUncheckedCreateWithoutWarehouseInput = {
    id?: string
    productId: string
    branchId: string
    supplierId?: string | null
    lotNumber?: string | null
    expiryDate?: Date | string | null
    quantity?: number
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: StockMovementUncheckedCreateNestedManyWithoutStockLotInput
    expiryAlerts?: ExpiryAlertUncheckedCreateNestedManyWithoutStockLotInput
  }

  export type StockLotCreateOrConnectWithoutWarehouseInput = {
    where: StockLotWhereUniqueInput
    create: XOR<StockLotCreateWithoutWarehouseInput, StockLotUncheckedCreateWithoutWarehouseInput>
  }

  export type StockLotCreateManyWarehouseInputEnvelope = {
    data: StockLotCreateManyWarehouseInput | StockLotCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type InventoryCountItemCreateWithoutWarehouseInput = {
    id?: string
    systemQuantity: number
    countedQuantity?: number | null
    difference?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryCount: InventoryCountCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutInventoryItemsInput
  }

  export type InventoryCountItemUncheckedCreateWithoutWarehouseInput = {
    id?: string
    inventoryCountId: string
    productId: string
    systemQuantity: number
    countedQuantity?: number | null
    difference?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryCountItemCreateOrConnectWithoutWarehouseInput = {
    where: InventoryCountItemWhereUniqueInput
    create: XOR<InventoryCountItemCreateWithoutWarehouseInput, InventoryCountItemUncheckedCreateWithoutWarehouseInput>
  }

  export type InventoryCountItemCreateManyWarehouseInputEnvelope = {
    data: InventoryCountItemCreateManyWarehouseInput | InventoryCountItemCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutWarehousesInput = {
    update: XOR<BranchUpdateWithoutWarehousesInput, BranchUncheckedUpdateWithoutWarehousesInput>
    create: XOR<BranchCreateWithoutWarehousesInput, BranchUncheckedCreateWithoutWarehousesInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutWarehousesInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutWarehousesInput, BranchUncheckedUpdateWithoutWarehousesInput>
  }

  export type BranchUpdateWithoutWarehousesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBranchNestedInput
    stockLots?: StockLotUpdateManyWithoutBranchNestedInput
    inventoryCounts?: InventoryCountUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutWarehousesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    stockLots?: StockLotUncheckedUpdateManyWithoutBranchNestedInput
    inventoryCounts?: InventoryCountUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type StockLotUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: StockLotWhereUniqueInput
    update: XOR<StockLotUpdateWithoutWarehouseInput, StockLotUncheckedUpdateWithoutWarehouseInput>
    create: XOR<StockLotCreateWithoutWarehouseInput, StockLotUncheckedCreateWithoutWarehouseInput>
  }

  export type StockLotUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: StockLotWhereUniqueInput
    data: XOR<StockLotUpdateWithoutWarehouseInput, StockLotUncheckedUpdateWithoutWarehouseInput>
  }

  export type StockLotUpdateManyWithWhereWithoutWarehouseInput = {
    where: StockLotScalarWhereInput
    data: XOR<StockLotUpdateManyMutationInput, StockLotUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type InventoryCountItemUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: InventoryCountItemWhereUniqueInput
    update: XOR<InventoryCountItemUpdateWithoutWarehouseInput, InventoryCountItemUncheckedUpdateWithoutWarehouseInput>
    create: XOR<InventoryCountItemCreateWithoutWarehouseInput, InventoryCountItemUncheckedCreateWithoutWarehouseInput>
  }

  export type InventoryCountItemUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: InventoryCountItemWhereUniqueInput
    data: XOR<InventoryCountItemUpdateWithoutWarehouseInput, InventoryCountItemUncheckedUpdateWithoutWarehouseInput>
  }

  export type InventoryCountItemUpdateManyWithWhereWithoutWarehouseInput = {
    where: InventoryCountItemScalarWhereInput
    data: XOR<InventoryCountItemUpdateManyMutationInput, InventoryCountItemUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type InventoryCountItemScalarWhereInput = {
    AND?: InventoryCountItemScalarWhereInput | InventoryCountItemScalarWhereInput[]
    OR?: InventoryCountItemScalarWhereInput[]
    NOT?: InventoryCountItemScalarWhereInput | InventoryCountItemScalarWhereInput[]
    id?: StringFilter<"InventoryCountItem"> | string
    inventoryCountId?: StringFilter<"InventoryCountItem"> | string
    productId?: StringFilter<"InventoryCountItem"> | string
    warehouseId?: StringFilter<"InventoryCountItem"> | string
    systemQuantity?: IntFilter<"InventoryCountItem"> | number
    countedQuantity?: IntNullableFilter<"InventoryCountItem"> | number | null
    difference?: IntNullableFilter<"InventoryCountItem"> | number | null
    notes?: StringNullableFilter<"InventoryCountItem"> | string | null
    createdAt?: DateTimeFilter<"InventoryCountItem"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryCountItem"> | Date | string
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    unit?: string
    minStock?: number
    productType?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    barcodes?: ProductBarcodeCreateNestedManyWithoutProductInput
    stockLots?: StockLotCreateNestedManyWithoutProductInput
    inventoryItems?: InventoryCountItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    unit?: string
    minStock?: number
    productType?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    barcodes?: ProductBarcodeUncheckedCreateNestedManyWithoutProductInput
    stockLots?: StockLotUncheckedCreateNestedManyWithoutProductInput
    inventoryItems?: InventoryCountItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    categoryId?: StringNullableFilter<"Product"> | string | null
    unit?: StringFilter<"Product"> | string
    minStock?: IntFilter<"Product"> | number
    productType?: StringFilter<"Product"> | string
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type StockLotCreateWithoutSupplierInput = {
    id?: string
    lotNumber?: string | null
    expiryDate?: Date | string | null
    quantity?: number
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutStockLotsInput
    warehouse: WarehouseCreateNestedOneWithoutStockLotsInput
    branch: BranchCreateNestedOneWithoutStockLotsInput
    movements?: StockMovementCreateNestedManyWithoutStockLotInput
    expiryAlerts?: ExpiryAlertCreateNestedManyWithoutStockLotInput
  }

  export type StockLotUncheckedCreateWithoutSupplierInput = {
    id?: string
    productId: string
    warehouseId: string
    branchId: string
    lotNumber?: string | null
    expiryDate?: Date | string | null
    quantity?: number
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: StockMovementUncheckedCreateNestedManyWithoutStockLotInput
    expiryAlerts?: ExpiryAlertUncheckedCreateNestedManyWithoutStockLotInput
  }

  export type StockLotCreateOrConnectWithoutSupplierInput = {
    where: StockLotWhereUniqueInput
    create: XOR<StockLotCreateWithoutSupplierInput, StockLotUncheckedCreateWithoutSupplierInput>
  }

  export type StockLotCreateManySupplierInputEnvelope = {
    data: StockLotCreateManySupplierInput | StockLotCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type StockLotUpsertWithWhereUniqueWithoutSupplierInput = {
    where: StockLotWhereUniqueInput
    update: XOR<StockLotUpdateWithoutSupplierInput, StockLotUncheckedUpdateWithoutSupplierInput>
    create: XOR<StockLotCreateWithoutSupplierInput, StockLotUncheckedCreateWithoutSupplierInput>
  }

  export type StockLotUpdateWithWhereUniqueWithoutSupplierInput = {
    where: StockLotWhereUniqueInput
    data: XOR<StockLotUpdateWithoutSupplierInput, StockLotUncheckedUpdateWithoutSupplierInput>
  }

  export type StockLotUpdateManyWithWhereWithoutSupplierInput = {
    where: StockLotScalarWhereInput
    data: XOR<StockLotUpdateManyMutationInput, StockLotUncheckedUpdateManyWithoutSupplierInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ProductBarcodeCreateWithoutProductInput = {
    id?: string
    barcode: string
    isPrimary?: boolean
  }

  export type ProductBarcodeUncheckedCreateWithoutProductInput = {
    id?: string
    barcode: string
    isPrimary?: boolean
  }

  export type ProductBarcodeCreateOrConnectWithoutProductInput = {
    where: ProductBarcodeWhereUniqueInput
    create: XOR<ProductBarcodeCreateWithoutProductInput, ProductBarcodeUncheckedCreateWithoutProductInput>
  }

  export type ProductBarcodeCreateManyProductInputEnvelope = {
    data: ProductBarcodeCreateManyProductInput | ProductBarcodeCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type StockLotCreateWithoutProductInput = {
    id?: string
    lotNumber?: string | null
    expiryDate?: Date | string | null
    quantity?: number
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse: WarehouseCreateNestedOneWithoutStockLotsInput
    branch: BranchCreateNestedOneWithoutStockLotsInput
    supplier?: SupplierCreateNestedOneWithoutStockLotsInput
    movements?: StockMovementCreateNestedManyWithoutStockLotInput
    expiryAlerts?: ExpiryAlertCreateNestedManyWithoutStockLotInput
  }

  export type StockLotUncheckedCreateWithoutProductInput = {
    id?: string
    warehouseId: string
    branchId: string
    supplierId?: string | null
    lotNumber?: string | null
    expiryDate?: Date | string | null
    quantity?: number
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: StockMovementUncheckedCreateNestedManyWithoutStockLotInput
    expiryAlerts?: ExpiryAlertUncheckedCreateNestedManyWithoutStockLotInput
  }

  export type StockLotCreateOrConnectWithoutProductInput = {
    where: StockLotWhereUniqueInput
    create: XOR<StockLotCreateWithoutProductInput, StockLotUncheckedCreateWithoutProductInput>
  }

  export type StockLotCreateManyProductInputEnvelope = {
    data: StockLotCreateManyProductInput | StockLotCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type InventoryCountItemCreateWithoutProductInput = {
    id?: string
    systemQuantity: number
    countedQuantity?: number | null
    difference?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryCount: InventoryCountCreateNestedOneWithoutItemsInput
    warehouse: WarehouseCreateNestedOneWithoutInventoryItemsInput
  }

  export type InventoryCountItemUncheckedCreateWithoutProductInput = {
    id?: string
    inventoryCountId: string
    warehouseId: string
    systemQuantity: number
    countedQuantity?: number | null
    difference?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryCountItemCreateOrConnectWithoutProductInput = {
    where: InventoryCountItemWhereUniqueInput
    create: XOR<InventoryCountItemCreateWithoutProductInput, InventoryCountItemUncheckedCreateWithoutProductInput>
  }

  export type InventoryCountItemCreateManyProductInputEnvelope = {
    data: InventoryCountItemCreateManyProductInput | InventoryCountItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductBarcodeUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductBarcodeWhereUniqueInput
    update: XOR<ProductBarcodeUpdateWithoutProductInput, ProductBarcodeUncheckedUpdateWithoutProductInput>
    create: XOR<ProductBarcodeCreateWithoutProductInput, ProductBarcodeUncheckedCreateWithoutProductInput>
  }

  export type ProductBarcodeUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductBarcodeWhereUniqueInput
    data: XOR<ProductBarcodeUpdateWithoutProductInput, ProductBarcodeUncheckedUpdateWithoutProductInput>
  }

  export type ProductBarcodeUpdateManyWithWhereWithoutProductInput = {
    where: ProductBarcodeScalarWhereInput
    data: XOR<ProductBarcodeUpdateManyMutationInput, ProductBarcodeUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductBarcodeScalarWhereInput = {
    AND?: ProductBarcodeScalarWhereInput | ProductBarcodeScalarWhereInput[]
    OR?: ProductBarcodeScalarWhereInput[]
    NOT?: ProductBarcodeScalarWhereInput | ProductBarcodeScalarWhereInput[]
    id?: StringFilter<"ProductBarcode"> | string
    barcode?: StringFilter<"ProductBarcode"> | string
    productId?: StringFilter<"ProductBarcode"> | string
    isPrimary?: BoolFilter<"ProductBarcode"> | boolean
  }

  export type StockLotUpsertWithWhereUniqueWithoutProductInput = {
    where: StockLotWhereUniqueInput
    update: XOR<StockLotUpdateWithoutProductInput, StockLotUncheckedUpdateWithoutProductInput>
    create: XOR<StockLotCreateWithoutProductInput, StockLotUncheckedCreateWithoutProductInput>
  }

  export type StockLotUpdateWithWhereUniqueWithoutProductInput = {
    where: StockLotWhereUniqueInput
    data: XOR<StockLotUpdateWithoutProductInput, StockLotUncheckedUpdateWithoutProductInput>
  }

  export type StockLotUpdateManyWithWhereWithoutProductInput = {
    where: StockLotScalarWhereInput
    data: XOR<StockLotUpdateManyMutationInput, StockLotUncheckedUpdateManyWithoutProductInput>
  }

  export type InventoryCountItemUpsertWithWhereUniqueWithoutProductInput = {
    where: InventoryCountItemWhereUniqueInput
    update: XOR<InventoryCountItemUpdateWithoutProductInput, InventoryCountItemUncheckedUpdateWithoutProductInput>
    create: XOR<InventoryCountItemCreateWithoutProductInput, InventoryCountItemUncheckedCreateWithoutProductInput>
  }

  export type InventoryCountItemUpdateWithWhereUniqueWithoutProductInput = {
    where: InventoryCountItemWhereUniqueInput
    data: XOR<InventoryCountItemUpdateWithoutProductInput, InventoryCountItemUncheckedUpdateWithoutProductInput>
  }

  export type InventoryCountItemUpdateManyWithWhereWithoutProductInput = {
    where: InventoryCountItemScalarWhereInput
    data: XOR<InventoryCountItemUpdateManyMutationInput, InventoryCountItemUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCreateWithoutBarcodesInput = {
    id?: string
    name: string
    description?: string | null
    unit?: string
    minStock?: number
    productType?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    stockLots?: StockLotCreateNestedManyWithoutProductInput
    inventoryItems?: InventoryCountItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBarcodesInput = {
    id?: string
    name: string
    description?: string | null
    categoryId?: string | null
    unit?: string
    minStock?: number
    productType?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockLots?: StockLotUncheckedCreateNestedManyWithoutProductInput
    inventoryItems?: InventoryCountItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBarcodesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBarcodesInput, ProductUncheckedCreateWithoutBarcodesInput>
  }

  export type ProductUpsertWithoutBarcodesInput = {
    update: XOR<ProductUpdateWithoutBarcodesInput, ProductUncheckedUpdateWithoutBarcodesInput>
    create: XOR<ProductCreateWithoutBarcodesInput, ProductUncheckedCreateWithoutBarcodesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutBarcodesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutBarcodesInput, ProductUncheckedUpdateWithoutBarcodesInput>
  }

  export type ProductUpdateWithoutBarcodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    minStock?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    stockLots?: StockLotUpdateManyWithoutProductNestedInput
    inventoryItems?: InventoryCountItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBarcodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    minStock?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockLots?: StockLotUncheckedUpdateManyWithoutProductNestedInput
    inventoryItems?: InventoryCountItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutStockLotsInput = {
    id?: string
    name: string
    description?: string | null
    unit?: string
    minStock?: number
    productType?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    barcodes?: ProductBarcodeCreateNestedManyWithoutProductInput
    inventoryItems?: InventoryCountItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStockLotsInput = {
    id?: string
    name: string
    description?: string | null
    categoryId?: string | null
    unit?: string
    minStock?: number
    productType?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    barcodes?: ProductBarcodeUncheckedCreateNestedManyWithoutProductInput
    inventoryItems?: InventoryCountItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStockLotsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStockLotsInput, ProductUncheckedCreateWithoutStockLotsInput>
  }

  export type WarehouseCreateWithoutStockLotsInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutWarehousesInput
    inventoryItems?: InventoryCountItemCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutStockLotsInput = {
    id?: string
    name: string
    branchId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryItems?: InventoryCountItemUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutStockLotsInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutStockLotsInput, WarehouseUncheckedCreateWithoutStockLotsInput>
  }

  export type BranchCreateWithoutStockLotsInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutBranchInput
    warehouses?: WarehouseCreateNestedManyWithoutBranchInput
    inventoryCounts?: InventoryCountCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutStockLotsInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    warehouses?: WarehouseUncheckedCreateNestedManyWithoutBranchInput
    inventoryCounts?: InventoryCountUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutStockLotsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutStockLotsInput, BranchUncheckedCreateWithoutStockLotsInput>
  }

  export type SupplierCreateWithoutStockLotsInput = {
    id?: string
    name: string
    contact?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUncheckedCreateWithoutStockLotsInput = {
    id?: string
    name: string
    contact?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierCreateOrConnectWithoutStockLotsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutStockLotsInput, SupplierUncheckedCreateWithoutStockLotsInput>
  }

  export type StockMovementCreateWithoutStockLotInput = {
    id?: string
    type: string
    quantity: number
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStockMovementsInput
  }

  export type StockMovementUncheckedCreateWithoutStockLotInput = {
    id?: string
    type: string
    quantity: number
    notes?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type StockMovementCreateOrConnectWithoutStockLotInput = {
    where: StockMovementWhereUniqueInput
    create: XOR<StockMovementCreateWithoutStockLotInput, StockMovementUncheckedCreateWithoutStockLotInput>
  }

  export type StockMovementCreateManyStockLotInputEnvelope = {
    data: StockMovementCreateManyStockLotInput | StockMovementCreateManyStockLotInput[]
    skipDuplicates?: boolean
  }

  export type ExpiryAlertCreateWithoutStockLotInput = {
    id?: string
    alertType: string
    sentAt?: Date | string
    isRead?: boolean
  }

  export type ExpiryAlertUncheckedCreateWithoutStockLotInput = {
    id?: string
    alertType: string
    sentAt?: Date | string
    isRead?: boolean
  }

  export type ExpiryAlertCreateOrConnectWithoutStockLotInput = {
    where: ExpiryAlertWhereUniqueInput
    create: XOR<ExpiryAlertCreateWithoutStockLotInput, ExpiryAlertUncheckedCreateWithoutStockLotInput>
  }

  export type ExpiryAlertCreateManyStockLotInputEnvelope = {
    data: ExpiryAlertCreateManyStockLotInput | ExpiryAlertCreateManyStockLotInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutStockLotsInput = {
    update: XOR<ProductUpdateWithoutStockLotsInput, ProductUncheckedUpdateWithoutStockLotsInput>
    create: XOR<ProductCreateWithoutStockLotsInput, ProductUncheckedCreateWithoutStockLotsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutStockLotsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutStockLotsInput, ProductUncheckedUpdateWithoutStockLotsInput>
  }

  export type ProductUpdateWithoutStockLotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    minStock?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    barcodes?: ProductBarcodeUpdateManyWithoutProductNestedInput
    inventoryItems?: InventoryCountItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStockLotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    minStock?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barcodes?: ProductBarcodeUncheckedUpdateManyWithoutProductNestedInput
    inventoryItems?: InventoryCountItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type WarehouseUpsertWithoutStockLotsInput = {
    update: XOR<WarehouseUpdateWithoutStockLotsInput, WarehouseUncheckedUpdateWithoutStockLotsInput>
    create: XOR<WarehouseCreateWithoutStockLotsInput, WarehouseUncheckedCreateWithoutStockLotsInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutStockLotsInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutStockLotsInput, WarehouseUncheckedUpdateWithoutStockLotsInput>
  }

  export type WarehouseUpdateWithoutStockLotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutWarehousesNestedInput
    inventoryItems?: InventoryCountItemUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutStockLotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItems?: InventoryCountItemUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type BranchUpsertWithoutStockLotsInput = {
    update: XOR<BranchUpdateWithoutStockLotsInput, BranchUncheckedUpdateWithoutStockLotsInput>
    create: XOR<BranchCreateWithoutStockLotsInput, BranchUncheckedCreateWithoutStockLotsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutStockLotsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutStockLotsInput, BranchUncheckedUpdateWithoutStockLotsInput>
  }

  export type BranchUpdateWithoutStockLotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBranchNestedInput
    warehouses?: WarehouseUpdateManyWithoutBranchNestedInput
    inventoryCounts?: InventoryCountUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutStockLotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    warehouses?: WarehouseUncheckedUpdateManyWithoutBranchNestedInput
    inventoryCounts?: InventoryCountUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type SupplierUpsertWithoutStockLotsInput = {
    update: XOR<SupplierUpdateWithoutStockLotsInput, SupplierUncheckedUpdateWithoutStockLotsInput>
    create: XOR<SupplierCreateWithoutStockLotsInput, SupplierUncheckedCreateWithoutStockLotsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutStockLotsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutStockLotsInput, SupplierUncheckedUpdateWithoutStockLotsInput>
  }

  export type SupplierUpdateWithoutStockLotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateWithoutStockLotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUpsertWithWhereUniqueWithoutStockLotInput = {
    where: StockMovementWhereUniqueInput
    update: XOR<StockMovementUpdateWithoutStockLotInput, StockMovementUncheckedUpdateWithoutStockLotInput>
    create: XOR<StockMovementCreateWithoutStockLotInput, StockMovementUncheckedCreateWithoutStockLotInput>
  }

  export type StockMovementUpdateWithWhereUniqueWithoutStockLotInput = {
    where: StockMovementWhereUniqueInput
    data: XOR<StockMovementUpdateWithoutStockLotInput, StockMovementUncheckedUpdateWithoutStockLotInput>
  }

  export type StockMovementUpdateManyWithWhereWithoutStockLotInput = {
    where: StockMovementScalarWhereInput
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyWithoutStockLotInput>
  }

  export type ExpiryAlertUpsertWithWhereUniqueWithoutStockLotInput = {
    where: ExpiryAlertWhereUniqueInput
    update: XOR<ExpiryAlertUpdateWithoutStockLotInput, ExpiryAlertUncheckedUpdateWithoutStockLotInput>
    create: XOR<ExpiryAlertCreateWithoutStockLotInput, ExpiryAlertUncheckedCreateWithoutStockLotInput>
  }

  export type ExpiryAlertUpdateWithWhereUniqueWithoutStockLotInput = {
    where: ExpiryAlertWhereUniqueInput
    data: XOR<ExpiryAlertUpdateWithoutStockLotInput, ExpiryAlertUncheckedUpdateWithoutStockLotInput>
  }

  export type ExpiryAlertUpdateManyWithWhereWithoutStockLotInput = {
    where: ExpiryAlertScalarWhereInput
    data: XOR<ExpiryAlertUpdateManyMutationInput, ExpiryAlertUncheckedUpdateManyWithoutStockLotInput>
  }

  export type ExpiryAlertScalarWhereInput = {
    AND?: ExpiryAlertScalarWhereInput | ExpiryAlertScalarWhereInput[]
    OR?: ExpiryAlertScalarWhereInput[]
    NOT?: ExpiryAlertScalarWhereInput | ExpiryAlertScalarWhereInput[]
    id?: StringFilter<"ExpiryAlert"> | string
    stockLotId?: StringFilter<"ExpiryAlert"> | string
    alertType?: StringFilter<"ExpiryAlert"> | string
    sentAt?: DateTimeFilter<"ExpiryAlert"> | Date | string
    isRead?: BoolFilter<"ExpiryAlert"> | boolean
  }

  export type StockLotCreateWithoutMovementsInput = {
    id?: string
    lotNumber?: string | null
    expiryDate?: Date | string | null
    quantity?: number
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutStockLotsInput
    warehouse: WarehouseCreateNestedOneWithoutStockLotsInput
    branch: BranchCreateNestedOneWithoutStockLotsInput
    supplier?: SupplierCreateNestedOneWithoutStockLotsInput
    expiryAlerts?: ExpiryAlertCreateNestedManyWithoutStockLotInput
  }

  export type StockLotUncheckedCreateWithoutMovementsInput = {
    id?: string
    productId: string
    warehouseId: string
    branchId: string
    supplierId?: string | null
    lotNumber?: string | null
    expiryDate?: Date | string | null
    quantity?: number
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiryAlerts?: ExpiryAlertUncheckedCreateNestedManyWithoutStockLotInput
  }

  export type StockLotCreateOrConnectWithoutMovementsInput = {
    where: StockLotWhereUniqueInput
    create: XOR<StockLotCreateWithoutMovementsInput, StockLotUncheckedCreateWithoutMovementsInput>
  }

  export type UserCreateWithoutStockMovementsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutUsersInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    notificationSetting?: NotificationSettingCreateNestedOneWithoutUserInput
    inventoryCountsCreated?: InventoryCountCreateNestedManyWithoutCreatorInput
    inventoryCountsConfirmed?: InventoryCountCreateNestedManyWithoutConfirmerInput
  }

  export type UserUncheckedCreateWithoutStockMovementsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    branchId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    notificationSetting?: NotificationSettingUncheckedCreateNestedOneWithoutUserInput
    inventoryCountsCreated?: InventoryCountUncheckedCreateNestedManyWithoutCreatorInput
    inventoryCountsConfirmed?: InventoryCountUncheckedCreateNestedManyWithoutConfirmerInput
  }

  export type UserCreateOrConnectWithoutStockMovementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStockMovementsInput, UserUncheckedCreateWithoutStockMovementsInput>
  }

  export type StockLotUpsertWithoutMovementsInput = {
    update: XOR<StockLotUpdateWithoutMovementsInput, StockLotUncheckedUpdateWithoutMovementsInput>
    create: XOR<StockLotCreateWithoutMovementsInput, StockLotUncheckedCreateWithoutMovementsInput>
    where?: StockLotWhereInput
  }

  export type StockLotUpdateToOneWithWhereWithoutMovementsInput = {
    where?: StockLotWhereInput
    data: XOR<StockLotUpdateWithoutMovementsInput, StockLotUncheckedUpdateWithoutMovementsInput>
  }

  export type StockLotUpdateWithoutMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStockLotsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutStockLotsNestedInput
    branch?: BranchUpdateOneRequiredWithoutStockLotsNestedInput
    supplier?: SupplierUpdateOneWithoutStockLotsNestedInput
    expiryAlerts?: ExpiryAlertUpdateManyWithoutStockLotNestedInput
  }

  export type StockLotUncheckedUpdateWithoutMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryAlerts?: ExpiryAlertUncheckedUpdateManyWithoutStockLotNestedInput
  }

  export type UserUpsertWithoutStockMovementsInput = {
    update: XOR<UserUpdateWithoutStockMovementsInput, UserUncheckedUpdateWithoutStockMovementsInput>
    create: XOR<UserCreateWithoutStockMovementsInput, UserUncheckedCreateWithoutStockMovementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStockMovementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStockMovementsInput, UserUncheckedUpdateWithoutStockMovementsInput>
  }

  export type UserUpdateWithoutStockMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutUsersNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    notificationSetting?: NotificationSettingUpdateOneWithoutUserNestedInput
    inventoryCountsCreated?: InventoryCountUpdateManyWithoutCreatorNestedInput
    inventoryCountsConfirmed?: InventoryCountUpdateManyWithoutConfirmerNestedInput
  }

  export type UserUncheckedUpdateWithoutStockMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    notificationSetting?: NotificationSettingUncheckedUpdateOneWithoutUserNestedInput
    inventoryCountsCreated?: InventoryCountUncheckedUpdateManyWithoutCreatorNestedInput
    inventoryCountsConfirmed?: InventoryCountUncheckedUpdateManyWithoutConfirmerNestedInput
  }

  export type StockLotCreateWithoutExpiryAlertsInput = {
    id?: string
    lotNumber?: string | null
    expiryDate?: Date | string | null
    quantity?: number
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutStockLotsInput
    warehouse: WarehouseCreateNestedOneWithoutStockLotsInput
    branch: BranchCreateNestedOneWithoutStockLotsInput
    supplier?: SupplierCreateNestedOneWithoutStockLotsInput
    movements?: StockMovementCreateNestedManyWithoutStockLotInput
  }

  export type StockLotUncheckedCreateWithoutExpiryAlertsInput = {
    id?: string
    productId: string
    warehouseId: string
    branchId: string
    supplierId?: string | null
    lotNumber?: string | null
    expiryDate?: Date | string | null
    quantity?: number
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: StockMovementUncheckedCreateNestedManyWithoutStockLotInput
  }

  export type StockLotCreateOrConnectWithoutExpiryAlertsInput = {
    where: StockLotWhereUniqueInput
    create: XOR<StockLotCreateWithoutExpiryAlertsInput, StockLotUncheckedCreateWithoutExpiryAlertsInput>
  }

  export type StockLotUpsertWithoutExpiryAlertsInput = {
    update: XOR<StockLotUpdateWithoutExpiryAlertsInput, StockLotUncheckedUpdateWithoutExpiryAlertsInput>
    create: XOR<StockLotCreateWithoutExpiryAlertsInput, StockLotUncheckedCreateWithoutExpiryAlertsInput>
    where?: StockLotWhereInput
  }

  export type StockLotUpdateToOneWithWhereWithoutExpiryAlertsInput = {
    where?: StockLotWhereInput
    data: XOR<StockLotUpdateWithoutExpiryAlertsInput, StockLotUncheckedUpdateWithoutExpiryAlertsInput>
  }

  export type StockLotUpdateWithoutExpiryAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStockLotsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutStockLotsNestedInput
    branch?: BranchUpdateOneRequiredWithoutStockLotsNestedInput
    supplier?: SupplierUpdateOneWithoutStockLotsNestedInput
    movements?: StockMovementUpdateManyWithoutStockLotNestedInput
  }

  export type StockLotUncheckedUpdateWithoutExpiryAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: StockMovementUncheckedUpdateManyWithoutStockLotNestedInput
  }

  export type UserCreateWithoutNotificationSettingInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutUsersInput
    stockMovements?: StockMovementCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    inventoryCountsCreated?: InventoryCountCreateNestedManyWithoutCreatorInput
    inventoryCountsConfirmed?: InventoryCountCreateNestedManyWithoutConfirmerInput
  }

  export type UserUncheckedCreateWithoutNotificationSettingInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    branchId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    inventoryCountsCreated?: InventoryCountUncheckedCreateNestedManyWithoutCreatorInput
    inventoryCountsConfirmed?: InventoryCountUncheckedCreateNestedManyWithoutConfirmerInput
  }

  export type UserCreateOrConnectWithoutNotificationSettingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationSettingInput, UserUncheckedCreateWithoutNotificationSettingInput>
  }

  export type UserUpsertWithoutNotificationSettingInput = {
    update: XOR<UserUpdateWithoutNotificationSettingInput, UserUncheckedUpdateWithoutNotificationSettingInput>
    create: XOR<UserCreateWithoutNotificationSettingInput, UserUncheckedCreateWithoutNotificationSettingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationSettingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationSettingInput, UserUncheckedUpdateWithoutNotificationSettingInput>
  }

  export type UserUpdateWithoutNotificationSettingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutUsersNestedInput
    stockMovements?: StockMovementUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    inventoryCountsCreated?: InventoryCountUpdateManyWithoutCreatorNestedInput
    inventoryCountsConfirmed?: InventoryCountUpdateManyWithoutConfirmerNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationSettingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    inventoryCountsCreated?: InventoryCountUncheckedUpdateManyWithoutCreatorNestedInput
    inventoryCountsConfirmed?: InventoryCountUncheckedUpdateManyWithoutConfirmerNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutUsersInput
    stockMovements?: StockMovementCreateNestedManyWithoutUserInput
    notificationSetting?: NotificationSettingCreateNestedOneWithoutUserInput
    inventoryCountsCreated?: InventoryCountCreateNestedManyWithoutCreatorInput
    inventoryCountsConfirmed?: InventoryCountCreateNestedManyWithoutConfirmerInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    branchId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutUserInput
    notificationSetting?: NotificationSettingUncheckedCreateNestedOneWithoutUserInput
    inventoryCountsCreated?: InventoryCountUncheckedCreateNestedManyWithoutCreatorInput
    inventoryCountsConfirmed?: InventoryCountUncheckedCreateNestedManyWithoutConfirmerInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutUsersNestedInput
    stockMovements?: StockMovementUpdateManyWithoutUserNestedInput
    notificationSetting?: NotificationSettingUpdateOneWithoutUserNestedInput
    inventoryCountsCreated?: InventoryCountUpdateManyWithoutCreatorNestedInput
    inventoryCountsConfirmed?: InventoryCountUpdateManyWithoutConfirmerNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUncheckedUpdateManyWithoutUserNestedInput
    notificationSetting?: NotificationSettingUncheckedUpdateOneWithoutUserNestedInput
    inventoryCountsCreated?: InventoryCountUncheckedUpdateManyWithoutCreatorNestedInput
    inventoryCountsConfirmed?: InventoryCountUncheckedUpdateManyWithoutConfirmerNestedInput
  }

  export type BranchCreateWithoutInventoryCountsInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutBranchInput
    warehouses?: WarehouseCreateNestedManyWithoutBranchInput
    stockLots?: StockLotCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutInventoryCountsInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    warehouses?: WarehouseUncheckedCreateNestedManyWithoutBranchInput
    stockLots?: StockLotUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutInventoryCountsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutInventoryCountsInput, BranchUncheckedCreateWithoutInventoryCountsInput>
  }

  export type UserCreateWithoutInventoryCountsCreatedInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutUsersInput
    stockMovements?: StockMovementCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    notificationSetting?: NotificationSettingCreateNestedOneWithoutUserInput
    inventoryCountsConfirmed?: InventoryCountCreateNestedManyWithoutConfirmerInput
  }

  export type UserUncheckedCreateWithoutInventoryCountsCreatedInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    branchId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    notificationSetting?: NotificationSettingUncheckedCreateNestedOneWithoutUserInput
    inventoryCountsConfirmed?: InventoryCountUncheckedCreateNestedManyWithoutConfirmerInput
  }

  export type UserCreateOrConnectWithoutInventoryCountsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInventoryCountsCreatedInput, UserUncheckedCreateWithoutInventoryCountsCreatedInput>
  }

  export type UserCreateWithoutInventoryCountsConfirmedInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutUsersInput
    stockMovements?: StockMovementCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    notificationSetting?: NotificationSettingCreateNestedOneWithoutUserInput
    inventoryCountsCreated?: InventoryCountCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutInventoryCountsConfirmedInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    branchId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    notificationSetting?: NotificationSettingUncheckedCreateNestedOneWithoutUserInput
    inventoryCountsCreated?: InventoryCountUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutInventoryCountsConfirmedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInventoryCountsConfirmedInput, UserUncheckedCreateWithoutInventoryCountsConfirmedInput>
  }

  export type InventoryCountItemCreateWithoutInventoryCountInput = {
    id?: string
    systemQuantity: number
    countedQuantity?: number | null
    difference?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutInventoryItemsInput
    warehouse: WarehouseCreateNestedOneWithoutInventoryItemsInput
  }

  export type InventoryCountItemUncheckedCreateWithoutInventoryCountInput = {
    id?: string
    productId: string
    warehouseId: string
    systemQuantity: number
    countedQuantity?: number | null
    difference?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryCountItemCreateOrConnectWithoutInventoryCountInput = {
    where: InventoryCountItemWhereUniqueInput
    create: XOR<InventoryCountItemCreateWithoutInventoryCountInput, InventoryCountItemUncheckedCreateWithoutInventoryCountInput>
  }

  export type InventoryCountItemCreateManyInventoryCountInputEnvelope = {
    data: InventoryCountItemCreateManyInventoryCountInput | InventoryCountItemCreateManyInventoryCountInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutInventoryCountsInput = {
    update: XOR<BranchUpdateWithoutInventoryCountsInput, BranchUncheckedUpdateWithoutInventoryCountsInput>
    create: XOR<BranchCreateWithoutInventoryCountsInput, BranchUncheckedCreateWithoutInventoryCountsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutInventoryCountsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutInventoryCountsInput, BranchUncheckedUpdateWithoutInventoryCountsInput>
  }

  export type BranchUpdateWithoutInventoryCountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBranchNestedInput
    warehouses?: WarehouseUpdateManyWithoutBranchNestedInput
    stockLots?: StockLotUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutInventoryCountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    warehouses?: WarehouseUncheckedUpdateManyWithoutBranchNestedInput
    stockLots?: StockLotUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type UserUpsertWithoutInventoryCountsCreatedInput = {
    update: XOR<UserUpdateWithoutInventoryCountsCreatedInput, UserUncheckedUpdateWithoutInventoryCountsCreatedInput>
    create: XOR<UserCreateWithoutInventoryCountsCreatedInput, UserUncheckedCreateWithoutInventoryCountsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInventoryCountsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInventoryCountsCreatedInput, UserUncheckedUpdateWithoutInventoryCountsCreatedInput>
  }

  export type UserUpdateWithoutInventoryCountsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutUsersNestedInput
    stockMovements?: StockMovementUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    notificationSetting?: NotificationSettingUpdateOneWithoutUserNestedInput
    inventoryCountsConfirmed?: InventoryCountUpdateManyWithoutConfirmerNestedInput
  }

  export type UserUncheckedUpdateWithoutInventoryCountsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    notificationSetting?: NotificationSettingUncheckedUpdateOneWithoutUserNestedInput
    inventoryCountsConfirmed?: InventoryCountUncheckedUpdateManyWithoutConfirmerNestedInput
  }

  export type UserUpsertWithoutInventoryCountsConfirmedInput = {
    update: XOR<UserUpdateWithoutInventoryCountsConfirmedInput, UserUncheckedUpdateWithoutInventoryCountsConfirmedInput>
    create: XOR<UserCreateWithoutInventoryCountsConfirmedInput, UserUncheckedCreateWithoutInventoryCountsConfirmedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInventoryCountsConfirmedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInventoryCountsConfirmedInput, UserUncheckedUpdateWithoutInventoryCountsConfirmedInput>
  }

  export type UserUpdateWithoutInventoryCountsConfirmedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutUsersNestedInput
    stockMovements?: StockMovementUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    notificationSetting?: NotificationSettingUpdateOneWithoutUserNestedInput
    inventoryCountsCreated?: InventoryCountUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutInventoryCountsConfirmedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    notificationSetting?: NotificationSettingUncheckedUpdateOneWithoutUserNestedInput
    inventoryCountsCreated?: InventoryCountUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type InventoryCountItemUpsertWithWhereUniqueWithoutInventoryCountInput = {
    where: InventoryCountItemWhereUniqueInput
    update: XOR<InventoryCountItemUpdateWithoutInventoryCountInput, InventoryCountItemUncheckedUpdateWithoutInventoryCountInput>
    create: XOR<InventoryCountItemCreateWithoutInventoryCountInput, InventoryCountItemUncheckedCreateWithoutInventoryCountInput>
  }

  export type InventoryCountItemUpdateWithWhereUniqueWithoutInventoryCountInput = {
    where: InventoryCountItemWhereUniqueInput
    data: XOR<InventoryCountItemUpdateWithoutInventoryCountInput, InventoryCountItemUncheckedUpdateWithoutInventoryCountInput>
  }

  export type InventoryCountItemUpdateManyWithWhereWithoutInventoryCountInput = {
    where: InventoryCountItemScalarWhereInput
    data: XOR<InventoryCountItemUpdateManyMutationInput, InventoryCountItemUncheckedUpdateManyWithoutInventoryCountInput>
  }

  export type InventoryCountCreateWithoutItemsInput = {
    id?: string
    period: string
    notes?: string | null
    status?: string
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutInventoryCountsInput
    creator: UserCreateNestedOneWithoutInventoryCountsCreatedInput
    confirmer?: UserCreateNestedOneWithoutInventoryCountsConfirmedInput
  }

  export type InventoryCountUncheckedCreateWithoutItemsInput = {
    id?: string
    branchId: string
    period: string
    notes?: string | null
    status?: string
    createdBy: string
    confirmedBy?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryCountCreateOrConnectWithoutItemsInput = {
    where: InventoryCountWhereUniqueInput
    create: XOR<InventoryCountCreateWithoutItemsInput, InventoryCountUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutInventoryItemsInput = {
    id?: string
    name: string
    description?: string | null
    unit?: string
    minStock?: number
    productType?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    barcodes?: ProductBarcodeCreateNestedManyWithoutProductInput
    stockLots?: StockLotCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutInventoryItemsInput = {
    id?: string
    name: string
    description?: string | null
    categoryId?: string | null
    unit?: string
    minStock?: number
    productType?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    barcodes?: ProductBarcodeUncheckedCreateNestedManyWithoutProductInput
    stockLots?: StockLotUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutInventoryItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutInventoryItemsInput, ProductUncheckedCreateWithoutInventoryItemsInput>
  }

  export type WarehouseCreateWithoutInventoryItemsInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutWarehousesInput
    stockLots?: StockLotCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutInventoryItemsInput = {
    id?: string
    name: string
    branchId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockLots?: StockLotUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutInventoryItemsInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutInventoryItemsInput, WarehouseUncheckedCreateWithoutInventoryItemsInput>
  }

  export type InventoryCountUpsertWithoutItemsInput = {
    update: XOR<InventoryCountUpdateWithoutItemsInput, InventoryCountUncheckedUpdateWithoutItemsInput>
    create: XOR<InventoryCountCreateWithoutItemsInput, InventoryCountUncheckedCreateWithoutItemsInput>
    where?: InventoryCountWhereInput
  }

  export type InventoryCountUpdateToOneWithWhereWithoutItemsInput = {
    where?: InventoryCountWhereInput
    data: XOR<InventoryCountUpdateWithoutItemsInput, InventoryCountUncheckedUpdateWithoutItemsInput>
  }

  export type InventoryCountUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutInventoryCountsNestedInput
    creator?: UserUpdateOneRequiredWithoutInventoryCountsCreatedNestedInput
    confirmer?: UserUpdateOneWithoutInventoryCountsConfirmedNestedInput
  }

  export type InventoryCountUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    confirmedBy?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutInventoryItemsInput = {
    update: XOR<ProductUpdateWithoutInventoryItemsInput, ProductUncheckedUpdateWithoutInventoryItemsInput>
    create: XOR<ProductCreateWithoutInventoryItemsInput, ProductUncheckedCreateWithoutInventoryItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutInventoryItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutInventoryItemsInput, ProductUncheckedUpdateWithoutInventoryItemsInput>
  }

  export type ProductUpdateWithoutInventoryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    minStock?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    barcodes?: ProductBarcodeUpdateManyWithoutProductNestedInput
    stockLots?: StockLotUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutInventoryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    minStock?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barcodes?: ProductBarcodeUncheckedUpdateManyWithoutProductNestedInput
    stockLots?: StockLotUncheckedUpdateManyWithoutProductNestedInput
  }

  export type WarehouseUpsertWithoutInventoryItemsInput = {
    update: XOR<WarehouseUpdateWithoutInventoryItemsInput, WarehouseUncheckedUpdateWithoutInventoryItemsInput>
    create: XOR<WarehouseCreateWithoutInventoryItemsInput, WarehouseUncheckedCreateWithoutInventoryItemsInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutInventoryItemsInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutInventoryItemsInput, WarehouseUncheckedUpdateWithoutInventoryItemsInput>
  }

  export type WarehouseUpdateWithoutInventoryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutWarehousesNestedInput
    stockLots?: StockLotUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutInventoryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockLots?: StockLotUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type StockMovementCreateManyUserInput = {
    id?: string
    stockLotId: string
    type: string
    quantity: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    action: string
    entity: string
    entityId: string
    details?: string | null
    createdAt?: Date | string
  }

  export type InventoryCountCreateManyCreatorInput = {
    id?: string
    branchId: string
    period: string
    notes?: string | null
    status?: string
    confirmedBy?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryCountCreateManyConfirmerInput = {
    id?: string
    branchId: string
    period: string
    notes?: string | null
    status?: string
    createdBy: string
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockLot?: StockLotUpdateOneRequiredWithoutMovementsNestedInput
  }

  export type StockMovementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockLotId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockLotId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCountUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutInventoryCountsNestedInput
    confirmer?: UserUpdateOneWithoutInventoryCountsConfirmedNestedInput
    items?: InventoryCountItemUpdateManyWithoutInventoryCountNestedInput
  }

  export type InventoryCountUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    confirmedBy?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InventoryCountItemUncheckedUpdateManyWithoutInventoryCountNestedInput
  }

  export type InventoryCountUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    confirmedBy?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCountUpdateWithoutConfirmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutInventoryCountsNestedInput
    creator?: UserUpdateOneRequiredWithoutInventoryCountsCreatedNestedInput
    items?: InventoryCountItemUpdateManyWithoutInventoryCountNestedInput
  }

  export type InventoryCountUncheckedUpdateWithoutConfirmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InventoryCountItemUncheckedUpdateManyWithoutInventoryCountNestedInput
  }

  export type InventoryCountUncheckedUpdateManyWithoutConfirmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyBranchInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WarehouseCreateManyBranchInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockLotCreateManyBranchInput = {
    id?: string
    productId: string
    warehouseId: string
    supplierId?: string | null
    lotNumber?: string | null
    expiryDate?: Date | string | null
    quantity?: number
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryCountCreateManyBranchInput = {
    id?: string
    period: string
    notes?: string | null
    status?: string
    createdBy: string
    confirmedBy?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    notificationSetting?: NotificationSettingUpdateOneWithoutUserNestedInput
    inventoryCountsCreated?: InventoryCountUpdateManyWithoutCreatorNestedInput
    inventoryCountsConfirmed?: InventoryCountUpdateManyWithoutConfirmerNestedInput
  }

  export type UserUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    notificationSetting?: NotificationSettingUncheckedUpdateOneWithoutUserNestedInput
    inventoryCountsCreated?: InventoryCountUncheckedUpdateManyWithoutCreatorNestedInput
    inventoryCountsConfirmed?: InventoryCountUncheckedUpdateManyWithoutConfirmerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockLots?: StockLotUpdateManyWithoutWarehouseNestedInput
    inventoryItems?: InventoryCountItemUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockLots?: StockLotUncheckedUpdateManyWithoutWarehouseNestedInput
    inventoryItems?: InventoryCountItemUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockLotUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStockLotsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutStockLotsNestedInput
    supplier?: SupplierUpdateOneWithoutStockLotsNestedInput
    movements?: StockMovementUpdateManyWithoutStockLotNestedInput
    expiryAlerts?: ExpiryAlertUpdateManyWithoutStockLotNestedInput
  }

  export type StockLotUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: StockMovementUncheckedUpdateManyWithoutStockLotNestedInput
    expiryAlerts?: ExpiryAlertUncheckedUpdateManyWithoutStockLotNestedInput
  }

  export type StockLotUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCountUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutInventoryCountsCreatedNestedInput
    confirmer?: UserUpdateOneWithoutInventoryCountsConfirmedNestedInput
    items?: InventoryCountItemUpdateManyWithoutInventoryCountNestedInput
  }

  export type InventoryCountUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    confirmedBy?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InventoryCountItemUncheckedUpdateManyWithoutInventoryCountNestedInput
  }

  export type InventoryCountUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    confirmedBy?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockLotCreateManyWarehouseInput = {
    id?: string
    productId: string
    branchId: string
    supplierId?: string | null
    lotNumber?: string | null
    expiryDate?: Date | string | null
    quantity?: number
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryCountItemCreateManyWarehouseInput = {
    id?: string
    inventoryCountId: string
    productId: string
    systemQuantity: number
    countedQuantity?: number | null
    difference?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockLotUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStockLotsNestedInput
    branch?: BranchUpdateOneRequiredWithoutStockLotsNestedInput
    supplier?: SupplierUpdateOneWithoutStockLotsNestedInput
    movements?: StockMovementUpdateManyWithoutStockLotNestedInput
    expiryAlerts?: ExpiryAlertUpdateManyWithoutStockLotNestedInput
  }

  export type StockLotUncheckedUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: StockMovementUncheckedUpdateManyWithoutStockLotNestedInput
    expiryAlerts?: ExpiryAlertUncheckedUpdateManyWithoutStockLotNestedInput
  }

  export type StockLotUncheckedUpdateManyWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCountItemUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    systemQuantity?: IntFieldUpdateOperationsInput | number
    countedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryCount?: InventoryCountUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutInventoryItemsNestedInput
  }

  export type InventoryCountItemUncheckedUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryCountId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    systemQuantity?: IntFieldUpdateOperationsInput | number
    countedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCountItemUncheckedUpdateManyWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryCountId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    systemQuantity?: IntFieldUpdateOperationsInput | number
    countedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    name: string
    description?: string | null
    unit?: string
    minStock?: number
    productType?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    minStock?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barcodes?: ProductBarcodeUpdateManyWithoutProductNestedInput
    stockLots?: StockLotUpdateManyWithoutProductNestedInput
    inventoryItems?: InventoryCountItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    minStock?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barcodes?: ProductBarcodeUncheckedUpdateManyWithoutProductNestedInput
    stockLots?: StockLotUncheckedUpdateManyWithoutProductNestedInput
    inventoryItems?: InventoryCountItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    minStock?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockLotCreateManySupplierInput = {
    id?: string
    productId: string
    warehouseId: string
    branchId: string
    lotNumber?: string | null
    expiryDate?: Date | string | null
    quantity?: number
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockLotUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStockLotsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutStockLotsNestedInput
    branch?: BranchUpdateOneRequiredWithoutStockLotsNestedInput
    movements?: StockMovementUpdateManyWithoutStockLotNestedInput
    expiryAlerts?: ExpiryAlertUpdateManyWithoutStockLotNestedInput
  }

  export type StockLotUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: StockMovementUncheckedUpdateManyWithoutStockLotNestedInput
    expiryAlerts?: ExpiryAlertUncheckedUpdateManyWithoutStockLotNestedInput
  }

  export type StockLotUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductBarcodeCreateManyProductInput = {
    id?: string
    barcode: string
    isPrimary?: boolean
  }

  export type StockLotCreateManyProductInput = {
    id?: string
    warehouseId: string
    branchId: string
    supplierId?: string | null
    lotNumber?: string | null
    expiryDate?: Date | string | null
    quantity?: number
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryCountItemCreateManyProductInput = {
    id?: string
    inventoryCountId: string
    warehouseId: string
    systemQuantity: number
    countedQuantity?: number | null
    difference?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductBarcodeUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductBarcodeUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductBarcodeUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StockLotUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneRequiredWithoutStockLotsNestedInput
    branch?: BranchUpdateOneRequiredWithoutStockLotsNestedInput
    supplier?: SupplierUpdateOneWithoutStockLotsNestedInput
    movements?: StockMovementUpdateManyWithoutStockLotNestedInput
    expiryAlerts?: ExpiryAlertUpdateManyWithoutStockLotNestedInput
  }

  export type StockLotUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: StockMovementUncheckedUpdateManyWithoutStockLotNestedInput
    expiryAlerts?: ExpiryAlertUncheckedUpdateManyWithoutStockLotNestedInput
  }

  export type StockLotUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    lotNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCountItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    systemQuantity?: IntFieldUpdateOperationsInput | number
    countedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryCount?: InventoryCountUpdateOneRequiredWithoutItemsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutInventoryItemsNestedInput
  }

  export type InventoryCountItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryCountId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    systemQuantity?: IntFieldUpdateOperationsInput | number
    countedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCountItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryCountId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    systemQuantity?: IntFieldUpdateOperationsInput | number
    countedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateManyStockLotInput = {
    id?: string
    type: string
    quantity: number
    notes?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type ExpiryAlertCreateManyStockLotInput = {
    id?: string
    alertType: string
    sentAt?: Date | string
    isRead?: boolean
  }

  export type StockMovementUpdateWithoutStockLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStockMovementsNestedInput
  }

  export type StockMovementUncheckedUpdateWithoutStockLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyWithoutStockLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpiryAlertUpdateWithoutStockLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpiryAlertUncheckedUpdateWithoutStockLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpiryAlertUncheckedUpdateManyWithoutStockLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InventoryCountItemCreateManyInventoryCountInput = {
    id?: string
    productId: string
    warehouseId: string
    systemQuantity: number
    countedQuantity?: number | null
    difference?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryCountItemUpdateWithoutInventoryCountInput = {
    id?: StringFieldUpdateOperationsInput | string
    systemQuantity?: IntFieldUpdateOperationsInput | number
    countedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutInventoryItemsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutInventoryItemsNestedInput
  }

  export type InventoryCountItemUncheckedUpdateWithoutInventoryCountInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    systemQuantity?: IntFieldUpdateOperationsInput | number
    countedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCountItemUncheckedUpdateManyWithoutInventoryCountInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    systemQuantity?: IntFieldUpdateOperationsInput | number
    countedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    difference?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BranchCountOutputTypeDefaultArgs instead
     */
    export type BranchCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BranchCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WarehouseCountOutputTypeDefaultArgs instead
     */
    export type WarehouseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WarehouseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierCountOutputTypeDefaultArgs instead
     */
    export type SupplierCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockLotCountOutputTypeDefaultArgs instead
     */
    export type StockLotCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockLotCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryCountCountOutputTypeDefaultArgs instead
     */
    export type InventoryCountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryCountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BranchDefaultArgs instead
     */
    export type BranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BranchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WarehouseDefaultArgs instead
     */
    export type WarehouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WarehouseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierDefaultArgs instead
     */
    export type SupplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductBarcodeDefaultArgs instead
     */
    export type ProductBarcodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductBarcodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockLotDefaultArgs instead
     */
    export type StockLotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockLotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockMovementDefaultArgs instead
     */
    export type StockMovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockMovementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExpiryAlertDefaultArgs instead
     */
    export type ExpiryAlertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpiryAlertDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationSettingDefaultArgs instead
     */
    export type NotificationSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationSettingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryCountDefaultArgs instead
     */
    export type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryCountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryCountItemDefaultArgs instead
     */
    export type InventoryCountItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryCountItemDefaultArgs<ExtArgs>

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