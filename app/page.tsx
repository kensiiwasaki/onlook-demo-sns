'use client';

import { useState } from 'react';

export default function Page() {
    const [activeTab, setActiveTab] = useState('explore');
    const [showUploadModal, setShowUploadModal] = useState(false);

    const DummyImages = [
        {
            id: 1,
            url: 'https://source.unsplash.com/random/400x400?nature',
            title: '森の中で',
            author: 'Emma',
        },
        {
            id: 2,
            url: 'https://source.unsplash.com/random/400x400?green',
            title: '新緑',
            author: 'Sarah',
        },
        {
            id: 3,
            url: 'https://source.unsplash.com/random/400x400?plants',
            title: '観葉植物',
            author: 'Alice',
        },
    ];

    return (
        <div className="min-h-screen bg-green-50" data-oid="oh483cv">
            {/* Navigation */}
            <nav className="bg-green-600 text-white p-4 shadow-lg" data-oid="05lfk2c">
                <div
                    className="max-w-7xl mx-auto flex justify-between items-center"
                    data-oid="ff02x3t"
                >
                    <h1 className="text-2xl font-bold tracking-wider" data-oid=".za1pac">
                        緑フォト
                    </h1>
                    <div className="flex space-x-4" data-oid="4c2:-8w">
                        <button
                            onClick={() => setActiveTab('explore')}
                            className={`px-4 py-2 rounded-full transition-all ${activeTab === 'explore' ? 'bg-green-700' : 'hover:bg-green-500'}`}
                            data-oid="dr2icvf"
                        >
                            探索
                        </button>
                        <button
                            onClick={() => setActiveTab('mypage')}
                            className={`px-4 py-2 rounded-full transition-all ${activeTab === 'mypage' ? 'bg-green-700' : 'hover:bg-green-500'}`}
                            data-oid="azzpgwe"
                        >
                            マイページ
                        </button>
                        <button
                            onClick={() => setShowUploadModal(true)}
                            className="bg-white text-green-600 px-4 py-2 rounded-full hover:bg-green-100 transition-all"
                            data-oid="e-4aqud"
                        >
                            投稿する
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto p-8" data-oid="1uob9g.">
                {activeTab === 'explore' ? (
                    <div data-oid="93e-.y2">
                        <h2 className="text-3xl font-bold text-green-800 mb-8" data-oid="03ytev-">
                            みんなの緑フォト
                        </h2>
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            data-oid="n47:gsy"
                        >
                            {DummyImages.map((image) => (
                                <div
                                    key={image.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                                    data-oid="xrsvjq_"
                                >
                                    <img
                                        src={image.url}
                                        alt={image.title}
                                        className="w-full h-64 object-cover"
                                        data-oid="lu_6mtu"
                                    />

                                    <div className="p-4" data-oid="mm21sqw">
                                        <h3
                                            className="text-xl font-semibold text-green-800"
                                            data-oid="3dxzbue"
                                        >
                                            {image.title}
                                        </h3>
                                        <p className="text-green-600" data-oid="nmp4esq">
                                            by {image.author}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div data-oid="pshcujr">
                        <h2 className="text-3xl font-bold text-green-800 mb-8" data-oid="7x7_97v">
                            マイページ
                        </h2>
                        <div className="bg-white rounded-lg p-8 shadow-lg" data-oid="vwx8o5-">
                            <div className="flex items-center space-x-4 mb-8" data-oid="2nuqy3.">
                                <div
                                    className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center"
                                    data-oid="1s-2rw3"
                                >
                                    <span className="text-2xl text-green-600" data-oid="accumol">
                                        ユ
                                    </span>
                                </div>
                                <div data-oid="35brtph">
                                    <h3
                                        className="text-xl font-bold text-green-800"
                                        data-oid="8tim2rj"
                                    >
                                        ユーザー名
                                    </h3>
                                    <p className="text-green-600" data-oid="92am0lw">
                                        投稿数: 0
                                    </p>
                                </div>
                            </div>
                            <div className="text-center text-green-600" data-oid="v36.fc.">
                                まだ投稿がありません。「投稿する」から始めましょう！
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* Upload Modal */}
            {showUploadModal && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
                    data-oid="iy::214"
                >
                    <div className="bg-white rounded-lg p-8 max-w-md w-full" data-oid="a4g3_8_">
                        <h3 className="text-2xl font-bold text-green-800 mb-4" data-oid="ltx9fs4">
                            新規投稿
                        </h3>
                        <div className="space-y-4" data-oid=":gr:.vc">
                            <div
                                className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center"
                                data-oid="64ktbpq"
                            >
                                <p className="text-green-600" data-oid="t_7jc5w">
                                    クリックまたはドラッグ＆ドロップで画像をアップロード
                                </p>
                            </div>
                            <input
                                type="text"
                                placeholder="タイトルを入力"
                                className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                data-oid="7qx-4ub"
                            />

                            <div className="flex justify-end space-x-2" data-oid="ap1_fyr">
                                <button
                                    onClick={() => setShowUploadModal(false)}
                                    className="px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg"
                                    data-oid="20j.blt"
                                >
                                    キャンセル
                                </button>
                                <button
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                                    data-oid="ns:j0vh"
                                >
                                    投稿する
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
