export async function getData<TData>(
  url: string,
  revalidation?: number
): Promise<TData | undefined> {
  try {
    const res = await fetch(url, { next: { revalidate: revalidation } });
    if (!res.ok) {
      throw new Error(`Error ${res.status} | ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
}


export async function getTopData<TData>(
  url: string,
  revalidation?: number
): Promise<TData | undefined> {
  try {
    const res = await fetch(url, { next: { revalidate: revalidation } });
    if (!res.ok) {
      throw new Error(`Error ${res.status} | ${res.statusText}`);
    }
    const data = await res.json();
    
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
}
