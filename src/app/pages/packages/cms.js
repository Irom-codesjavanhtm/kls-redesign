'use client';

export default function CMSPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">CMS Package</h1>
      <p className="text-lg text-center mb-12">
        Content Management System Packages
      </p>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Features</th>
            <th className="border px-4 py-2">500,000Ks</th>
            <th className="border px-4 py-2">1,000,000Ks</th>
            <th className="border px-4 py-2">1,500,000Ks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">No. of Pages</td>
            <td className="border px-4 py-2">Up to 20 pages</td>
            <td className="border px-4 py-2">Up to 30 pages</td>
            <td className="border px-4 py-2">Unlimited</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Total No. of Meetings</td>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">2</td>
            <td className="border px-4 py-2">3</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Search Engine Optimization</td>
            <td className="border px-4 py-2">Included</td>
            <td className="border px-4 py-2">Included</td>
            <td className="border px-4 py-2">Included</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Hosting Space</td>
            <td className="border px-4 py-2">1GB</td>
            <td className="border px-4 py-2">1GB</td>
            <td className="border px-4 py-2">5GB</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Price</td>
            <td className="border px-4 py-2">500,000Ks</td>
            <td className="border px-4 py-2">1,000,000Ks</td>
            <td className="border px-4 py-2">1,500,000Ks</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
