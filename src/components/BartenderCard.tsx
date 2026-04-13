import { motion } from 'framer-motion';
import { MapPin, Star, Clock, Phone, Briefcase, MessageCircle } from 'lucide-react';
import type { Bartender } from '../types';

interface Props {
  bartender: Bartender;
  index: number;
}

export function BartenderCard({ bartender, index }: Props) {
  const whatsappNumber = bartender.contact.replace(/\D/g, '');
  const whatsappLink = `https://wa.me/55${whatsappNumber}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/30 hover:bg-white/[0.08] transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative w-full sm:w-48 h-56 sm:h-auto shrink-0 overflow-hidden">
          <img
            src={bartender.image}
            alt={bartender.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-sm font-semibold text-white">{bartender.rating}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
              {bartender.name}
            </h3>

            <div className="flex flex-wrap gap-3 text-sm text-slate-400 mb-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                {bartender.location}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5 text-amber-500" />
                {bartender.experience}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                {bartender.availability}
              </span>
            </div>

            <div className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium px-3 py-1 rounded-full mb-3">
              {bartender.specialty}
            </div>

            <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
              {bartender.description}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
            <a
              href={`tel:${bartender.contact}`}
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {bartender.contact}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-2 bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 text-sm font-medium px-4 py-2 rounded-xl hover:bg-emerald-600/30 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
