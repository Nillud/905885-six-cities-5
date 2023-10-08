export const Component = {
  RestApplication: Symbol.for('RestApplication'),
  Logger: Symbol.for('Logger'),
  Config: Symbol.for('Config'),
  DatabaseClient: Symbol.for('DatabaseClient'),
  UserService: Symbol.for('UserService'),
  UserModel: Symbol.for('UserModel'),
  UserTypeService: Symbol.for('UserTypeService'),
  UserTypeModel: Symbol.for('UserTypeModel'),
  PremiumService: Symbol.for('PremiumService'),
  PremiumModel: Symbol.for('PremiumModel'),
  ComfortService: Symbol.for('ComfortService'),
  ComfortModel: Symbol.for('ComfortModel'),
  CityService: Symbol.for('CityService'),
  CityModel: Symbol.for('CityModel'),
  ApartmentService: Symbol.for('ApartmentService'),
  ApartmentModel: Symbol.for('ApartmentModel'),
  OfferService: Symbol.for('OfferService'),
  OfferModel: Symbol.for('OfferModel'),
  CommentService: Symbol.for('CommentService'),
  CommentModel: Symbol.for('CommentModel'),
} as const;
