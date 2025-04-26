class LandingTemplates {
    static heroContent = {
        title: 'Celebrate Your Glorious Failures',
        subtitle: 'Build your worst resume ever — and be proud of it!',
        ctaText: 'Start Your Flop Resume',
        ctaLink: 'builder.html'
    };

    static generateHeroHTML() {
        return `
            <section class="space-y-12">
                <!-- Hero Section -->
                <h1 class="text-gradient text-5xl md:text-7xl font-extrabold tracking-tight leading-tight
                           opacity-0 animate-fade-in">
                    ${this.heroContent.title}
                </h1>
                
                <!-- Subline -->
                <p class="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed
                          opacity-0 animate-fade-in delay-200">
                    ${this.heroContent.subtitle}
                </p>
                
                <!-- CTA Button -->
                <div class="mt-12">
                    <a href="${this.heroContent.ctaLink}" 
                       class="cta-button inline-block px-8 py-4 text-xl font-semibold text-white 
                              bg-primary hover:bg-secondary rounded-xl shadow-lg hover-scale
                              transition-all duration-300 opacity-0 animate-fade-in delay-400">
                        ${this.heroContent.ctaText}
                    </a>
                </div>

                <!-- Fun Animation -->
                <div class="mt-16">
                    <span class="text-4xl animate-gentle-bounce inline-block opacity-0 animate-fade-in delay-500">👇</span>
                </div>
            </section>
        `;
    }

    static generateFeatureHTML() {
        const features = [
            {
                emoji: '🎲',
                title: 'Random Flop Generator',
                description: 'Let our AI generate your most impressive failures'
            },
            {
                emoji: '📝',
                title: 'Easy to Edit',
                description: 'Customize your flops with our simple editor'
            },
            {
                emoji: '📄',
                title: 'Export to PDF',
                description: 'Share your failures with the world'
            }
        ];

        return `
            <section class="mt-24 grid md:grid-cols-3 gap-8">
                ${features.map((feature, index) => `
                    <div class="p-6 bg-white rounded-xl shadow-lg hover-scale transition-all duration-300
                                opacity-0 animate-slide-in delay-${(index + 1) * 100}">
                        <div class="text-4xl mb-4">${feature.emoji}</div>
                        <h3 class="text-xl font-bold mb-2">${feature.title}</h3>
                        <p class="text-gray-600">${feature.description}</p>
                    </div>
                `).join('')}
            </section>
        `;
    }
}
