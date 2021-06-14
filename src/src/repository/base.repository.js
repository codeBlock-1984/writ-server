
class BaseRepository {
  static async get(id, model) {
    return await model.findOne({ where: { id }, raw: true, options: {} });
  }

  static async create(data, model) {
    return await model.create(data, { raw: true, options: {} });
  }

  static async iCreate(where, data, model) {
    return await model.findOrCreate({ where, defaults: { ...data }, raw: true, options: {} });
  }

  static async update(id, data, model) {
    return await model.update(data, { where: { id }, options: {} });
  }

  static paginate(result, path, page=1, limit=10) {
    page = Number(page);
    const { count, rows } = result;
    const baseUrl = `${process.env.BASE_URL}${path}?page=`;
    const lastPage = Math.ceil(count/limit);
    const next = count && page < lastPage ? `${baseUrl}${page + 1}&limit=${limit}`: null;
    const current = (count || count === 0) ? `${baseUrl}${page}&limit=${limit}` : null;
    const prev = count && page > 1 ? `${baseUrl}${page - 1}&limit=${limit}` : null;
    const records = rows;
    const totalCount = count;
    const currentCount = rows.length;

    return { records, currentCount, totalCount, next, current, prev };
  }

  static async list(model, path, page=1, limit=10, where={}, include=null, options={}) {
    const offset = ((Number(page) - 1) * limit) || 0;
    let queryParams = { where, page, limit, offset, ...options };
    if (include) queryParams = { ...queryParams, include };
    const result = await model.findAndCountAll(queryParams);
    return BaseRepository.paginate(result, path, page, limit);
  }
}

export default BaseRepository;
