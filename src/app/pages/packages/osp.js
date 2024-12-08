'use client';

export default function OSPPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Online Store Package
      </h1>
      <p className="text-lg text-center mb-12">
        E-Commerce / Online Store Packages
      </p>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Features</th>
            <th className="border px-4 py-2">Silver</th>
            <th className="border px-4 py-2">Gold</th>
            <th className="border px-4 py-2">Diamond</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Price</td>
            <td className="border px-4 py-2">1,000,000Ks</td>
            <td className="border px-4 py-2">1,500,000Ks</td>
            <td className="border px-4 py-2">2,000,000Ks</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">No. of Meetings</td>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">2</td>
            <td className="border px-4 py-2">3</td>     
          </tr>
          <tr>
            <td className="border px-4 py-2">Hosting Space</td>
            <td className="border px-4 py-2">1GB</td>
            <td className="border px-4 py-2">5GB</td>
            <td className="border px-4 py-2">10GB</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Product Management</td>
            <td className="border px-4 py-2">Included</td>
            <td className="border px-4 py-2">Included</td>
            <td className="border px-4 py-2">Included</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Payment & Shipping</td>
            <td className="border px-4 py-2">Included</td>
            <td className="border px-4 py-2">Included</td>
            <td className="border px-4 py-2">Included</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
